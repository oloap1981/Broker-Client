import { Component, OnInit, NgZone } from '@angular/core';
import { BaseComponent } from 'src/app/component/base.component';
import { SessionService, StoreService, LogErroriService, AlertService, ClientiService, LoginService, IconeService, BookValue } from 'broker-lib';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { LogoutCommunicationService } from 'src/app/services/logoutCommunication/logoutcommunication.service';
import { CurrencyPipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.page.html',
  styleUrls: ['./client-home.page.scss'],
})
export class ClientHomePage extends BaseComponent implements OnInit {

  private unsubscribe$ = new Subject<void>();

  public patrimoniA: Array<BookValue>;
  public patrimoniC: Array<BookValue>;
  public patrimoniT: Array<BookValue>;
  public patrimoniX: Array<BookValue>;

  public totalePatrimoniA: number;
  public totalePatrimoniC: number;
  public totalePatrimoniT: number;
  public totalePatrimoniX: number;

  constructor(
    public sessionService: SessionService,
    public storeService: StoreService,
    public router: Router,
    public logErroriService: LogErroriService,
    public alertService: AlertService,
    public clientiService: ClientiService,
    public loginService: LoginService,
    public iconeService: IconeService,
    public ngZone: NgZone,
    public logoutComm: LogoutCommunicationService,
    public currencyPipe: CurrencyPipe) {

    super(sessionService, storeService, router, logErroriService, alertService, iconeService, ngZone);
    this.patrimoniA = new Array<BookValue>();
    this.patrimoniC = new Array<BookValue>();
    this.patrimoniT = new Array<BookValue>();
    this.patrimoniX = new Array<BookValue>();
    this.totalePatrimoniA = 0;
    this.totalePatrimoniC = 0;
    this.totalePatrimoniT = 0;
    this.totalePatrimoniX = 0;
    registerLocaleData(localeIt, 'it');
  }

  public getCurrency(amount: number) {
    return this.currencyPipe.transform(amount, 'EUR', '', '1.2-2', 'it');
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ionViewDidEnter() {
    this.sessionService.setIntestazionePagina('PATRIMONIO');
    this.initializeApp();
  }

  private initializeApp(): void {
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

  private loadPageData(): void {

    if (this.wsToken !== undefined
      && this.wsToken !== null
      && this.wsToken.token_value !== ''
      && this.wsToken.utente !== undefined) {
      const utente = this.wsToken.utente;
      if (utente.utente_id !== undefined && utente.utente_id !== 0) {

        this.clientiService.getBookValue(utente.utente_id).pipe(
          takeUntil(this.unsubscribe$)
        ).subscribe(r => {
          if (r.Success) {
            if (r.Data.elencoTipologieCatastaliA) {
              this.patrimoniA = r.Data.elencoTipologieCatastaliA;
              this.calcolaTotalePatrimoniA();
            }
            if (r.Data.elencoTipologieCatastaliC) {
              this.patrimoniA = r.Data.elencoTipologieCatastaliC;
              this.calcolaTotalePatrimoniC();
            }
            if (r.Data.elencoTipologieCatastaliT) {
              this.patrimoniA = r.Data.elencoTipologieCatastaliT;
              this.calcolaTotalePatrimoniT();
            }
          } else {
            this.manageError(r);
          }
        });
      } else {
        this.logout();
      }
    } else {
      this.logout();
    }
  }

  public apriSchedaImmobile(immobile: number) {
    this.goToPageParams('client-immobile', { queryParams: { immobile_id: immobile } });
  }

  public calcolaTotalePatrimoniA(): void {
    for (const pat of this.patrimoniA) {
      this.totalePatrimoniA += +pat.book_value;
    }
  }

  public calcolaTotalePatrimoniC(): void {
    for (const pat of this.patrimoniC) {
      this.totalePatrimoniA += +pat.book_value;
    }
  }

  public calcolaTotalePatrimoniT(): void {
    for (const pat of this.patrimoniT) {
      this.totalePatrimoniA += +pat.book_value;
    }
  }

  public calcolaTotalePatrimoniX(): void {
    for (const pat of this.patrimoniX) {
      this.totalePatrimoniX += +pat.book_value;
    }
  }

  public getBookValueCliente(): number {
    return (this.wsToken ? this.wsToken.cliente.book_value : 0);
  }

  ionViewDidLeave() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
