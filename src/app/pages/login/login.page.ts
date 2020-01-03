import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService, StoreService, SessionService, AlertService, ClientiService, Cliente } from 'broker-lib';

import { LoginRequest, WsToken } from 'broker-lib';

import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private unsubscribe$ = new Subject<void>();

  public username: string;
  public password: string;

  constructor(
    private loginService: LoginService,
    private storeService: StoreService,
    private router: Router,
    private alertService: AlertService,
    private sessionService: SessionService) { }

  ngOnInit() { }

  public submit(): void {
    const loginRequest: LoginRequest = new LoginRequest();
    loginRequest.username = this.username;
    loginRequest.password = this.password;
    loginRequest.app_chiamante = 'C';
    loginRequest.id_phone = '12345';

    this.loginService.Login(loginRequest).pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(r => {
      if (r.Success) {
        // ho avuto risposta positiva. Non è detto che sia loggato pero'
        const data: WsToken = r.Data;
        // per il momento si ipotizza che se Success=true allora ci si è loggati
        this.sessionService.setUserData(data);

        // nella app clienti vado subito a prendere i dati del cliente che si logga
        const cliente = new Cliente();
        cliente.cliente_id = data.utente.utente_id;
        cliente.codice_fiscale = data.utente.codice_fiscale;
        cliente.cognome = data.utente.cognome;
        cliente.nome = data.utente.nome;
        cliente.email = data.utente.email;
        this.sessionService.setCliente(cliente);

        this.router.navigate(['client-home']);
        // this.router.navigate(['home']);
      } else {
        this.alertService.presentErrorAlert('Problema durante il login: ' + r.ErrorMessage.msg_testo);
      }
    }, err => {
      let errMessage = err.statusText;
      if (err.status === 401) {
        errMessage = "Utente non autorizzato";
      }
      this.alertService.presentErrorAlert('Problema durante il login: ' + errMessage);
    });
  }

  ionViewDidLeave() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
