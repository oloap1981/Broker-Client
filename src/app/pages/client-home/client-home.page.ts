import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/component/base.component';
import { SessionService, StoreService, LogErroriService, AlertService, ClientiService, LoginService, IconeService, BookValue, Cliente } from 'broker-lib';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

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

  public totalePatrimoniA: number;
  public totalePatrimoniC: number;
  public totalePatrimoniT: number;

  constructor(
    public sessionService: SessionService,
    public storeService: StoreService,
    public router: Router,
    public logErroriService: LogErroriService,
    public alertService: AlertService,
    public clientiService: ClientiService,
    public loginService: LoginService,
    public iconeService: IconeService) {

    super(sessionService, storeService, router, logErroriService, alertService, iconeService);
    this.patrimoniA = new Array<BookValue>();
    this.patrimoniC = new Array<BookValue>();
    this.patrimoniT = new Array<BookValue>();
    this.totalePatrimoniA = 0;
    this.totalePatrimoniC = 0;
    this.totalePatrimoniT = 0;
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ionViewDidEnter() {
    this.initializeApp();
    this.sessionService.setIntestazionePagina('PATRIMONIO');
  }

  private initializeApp(): void {
    // ottengo il token
    this.sessionService.userDataObservable.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(present => {
      if (present) {
        this.wsToken = this.sessionService.getUserData();
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
            this.goToPage('login');
          }
        } else {
          this.goToPage('login');
        }
      } else {
        this.goToPage('login');
      }
    });
    this.sessionService.loadUserData();
  }

  public apriSchedaImmobile(immobile: number) {
    // this.router.navigate(['scheda-immobile'], { queryParams: { immobile_id: immobile } });
    this.goToPageParams('scheda-immobile', { queryParams: { immobile_id: immobile } });
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

  public getBookValueCliente(): number {
    return (this.wsToken ? this.wsToken.cliente.book_value : 0);
  }

  ionViewDidLeave() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
