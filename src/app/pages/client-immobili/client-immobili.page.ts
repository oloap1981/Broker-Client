import { Component, OnInit, NgZone } from '@angular/core';
import { Immobile, ClientiService, SessionService, StoreService, LogErroriService, AlertService, IconeService, ImmobiliService } from 'broker-lib';
import { BaseComponent } from 'src/app/component/base.component';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { LogoutCommunicationService } from 'src/app/services/logoutCommunication/logoutcommunication.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-client-immobili',
  templateUrl: './client-immobili.page.html',
  styleUrls: ['./client-immobili.page.scss'],
})
export class ClientImmobiliPage extends BaseComponent implements OnInit {

  private unsubscribe$ = new Subject<void>();

  constructor(
    public sessionService: SessionService,
    public storeService: StoreService,
    public router: Router,
    public logErroriService: LogErroriService,
    public alertService: AlertService,
    public iconeService: IconeService,
    public immobiliService: ImmobiliService,
    public ngZone: NgZone,
    public logoutComm: LogoutCommunicationService,
    public currencyPipe: CurrencyPipe) {
    super(sessionService, storeService, router, logErroriService, alertService, iconeService, ngZone);

  }

  ngOnInit() {
    super.ngOnInit();
  }

  ionViewDidEnter() {
    this.initializeApp();
    this.sessionService.setIntestazionePagina('ELENCO IMMOBILI');
  }

  private initializeApp() {
    this.logoutComm.logoutObservable.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(r => {
      this.unsubscribe$.next();
      this.unsubscribe$.complete();
      this.ngZone.run(() => this.router.navigate(['login'])).then();
    });
    // ottengo il token
    if (this.sessionService.existsSessionData()) {
      this.wsToken = this.sessionService.getUserData();
      this.loadPageData();
    } else {
      this.sessionService.userDataObservable.pipe(
        takeUntil(this.unsubscribe$)
      ).subscribe(present => {
        if (present) {
          this.wsToken = this.sessionService.getUserData();
          this.loadPageData();
        } else {
          this.logout();
        }
      });
      this.sessionService.loadUserData();
    }
  }

  private logout(): void {
    this.sessionService.clearUserData();
    this.logoutComm.comunicateLogout();
  }

  private loadPageData() {
    if (this.wsToken !== undefined
      && this.wsToken !== null
      && this.wsToken.token_value !== ''
      && this.wsToken.utente !== undefined) {
      console.log('Utente in possesso di token');

      this.sessionService.setCliente(this.wsToken.cliente);
    } else {
      this.goToPage('login');
    }
  }

  public getCurrency(amount: number) {
    return this.currencyPipe.transform(amount, 'EUR', '', '1.2-2', 'it');
  }

  public apriSchedaImmobile(immobile: number) {
    this.goToPageParams('client-immobile', { queryParams: { immobile_id: immobile } });
  }


  public goToWizard(): void {
    this.sessionService.clearImmobileDettaglio();
    this.goToPage('client-wizard');
  }


  ionViewDidLeave() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
