import { Component, OnInit, NgZone } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { SessionService, StoreService, LogErroriService, AlertService, ClientiService, LoginService, ReportService, Cliente, ReportGenerale, ReportGeneraleOggettoColonna, IconeService, ReportGeneralePassivo } from 'broker-lib';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/component/base.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LogoutCommunicationService } from 'src/app/services/logoutCommunication/logoutcommunication.service';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';

@Component({
  selector: 'app-report-generale',
  templateUrl: './client-report-generale.page.html',
  styleUrls: ['./client-report-generale.page.scss'],
})
export class ClientReportGeneralePage extends BaseComponent implements OnInit {

  private unsubscribe$ = new Subject<void>();

  public cliente: Cliente;
  public situazioneImmobili: Array<ReportGenerale>;

  public oggettiColonnaDestra: Array<ReportGeneraleOggettoColonna>;

  public etichettaColonna: string;

  public attiviSelezionato: boolean;

  constructor(
    public sessionService: SessionService,
    public storeService: StoreService,
    public router: Router,
    public logErroriService: LogErroriService,
    public alertService: AlertService,
    public clientiService: ClientiService,
    public loginService: LoginService,
    public reportService: ReportService,
    public iconeService: IconeService,
    public ngZone: NgZone,
    public logoutComm: LogoutCommunicationService,
    public currencyPipe: CurrencyPipe
  ) {
    super(sessionService, storeService, router, logErroriService, alertService, iconeService, ngZone);
    this.situazioneImmobili = new Array<ReportGenerale>();
    this.oggettiColonnaDestra = new Array<ReportGeneraleOggettoColonna>();
    this.etichettaColonna = '';
    this.attiviSelezionato = false;
    registerLocaleData(localeIt, 'it');
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ionViewDidEnter() {
    this.initializeApp();
    this.sessionService.setIntestazionePagina('REPORT GENERALE');
  }

  private initializeApp() {

    this.logoutComm.logoutObservable.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(r => {
      this.unsubscribe$.next();
      this.unsubscribe$.complete();
      this.ngZone.run(() => this.router.navigate(['login'])).then();
    });

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

  private loadPageData(): void {


    if (this.wsToken !== undefined
      && this.wsToken !== null
      && this.wsToken.token_value !== ''
      && this.wsToken.utente !== undefined) {
      const utente = this.wsToken.utente;
      if (utente.utente_id !== undefined && utente.utente_id !== 0) {

        this.reportService.getSituazioneGenerale(utente.utente_id).pipe(
          takeUntil(this.unsubscribe$)
        ).subscribe(r => {
          if (r.Success) {
            this.situazioneImmobili = r.Data.elenco_immobili;
          } else {
            this.manageError(r);
          }
        },
          (error) => {
            this.manageHttpError(error);
          });
      } else {
        this.logout();
      }
    } else {
      this.logout();
    }
  }

  private logout(): void {
    this.sessionService.clearUserData();
    this.logoutComm.comunicateLogout();
  }

  public goToReportAnalisi(): void {
    this.goToPage('report-analisi');
  }

  public getTotalePassiviImmobile(immobile: ReportGenerale): number {
    let toReturn = 0;

    if (immobile.passivi) {
      for (const passivo of immobile.passivi) {
        const passivostring = passivo.importo_annuale;
        switch (passivostring) {
          case "null":
            break;
          case "":
            break;
          default:
            toReturn = toReturn + (+passivostring);
        }
      }
    }

    return toReturn;
  }

  public getTotaleAttiviImmobile(immobile: ReportGenerale): number {
    let toReturn = 0;

    if (immobile.attivo) {
      const totale: number = immobile.attivo.importo_mensile * 12;
      const aliquota: number = totale / 100 * immobile.attivo.aliquota_cedolare;
      toReturn = (totale - aliquota);
    }
    if (immobile.detrazione_interessi_attivo != null) {
      toReturn += parseFloat(immobile.detrazione_interessi_attivo.importo_annuale.toFixed(2));
    }

    return toReturn;
  }

  public getTotaleImmobile(immobile: ReportGenerale): number {
    return this.getTotaleAttiviImmobile(immobile) - this.getTotalePassiviImmobile(immobile);
  }

  public caricaPassiviImmobile(immobile: ReportGenerale): void {
    this.goToPageParams('client-report-generale-passivi', { queryParams: { reportGenerale: JSON.stringify(immobile) } });
  }

  public caricaAttiviImmobile(immobile: ReportGenerale): void {
    this.goToPageParams('client-report-generale-attivi', { queryParams: { reportGenerale: JSON.stringify(immobile) } });
  }

  public getCurrency(amount: number) {
    return this.currencyPipe.transform(amount, 'EUR', '', '1.2-2', 'it');
  }

  public getTotalePassiviImmobili(): number {
    let tot = 0;

    for (const immobile of this.situazioneImmobili) {
      tot = tot + this.getTotalePassiviImmobile(immobile);
    }
    return tot;
  }

  public getTotaleAttiviImmobili(): number {
    let tot = 0;

    for (const immobile of this.situazioneImmobili) {
      tot = tot + this.getTotaleAttiviImmobile(immobile);
    }
    return tot;
  }

  public getTotaleImmobili(): number {
    return this.getTotaleAttiviImmobili() - this.getTotalePassiviImmobili();
  }

  public generatePdfReport(): void {
    this.reportService.getPdfReport(this.sessionService.getCliente().cliente_id).pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(r => {
      if (r.Success) {
        this.alertService.presentAlert('Riepilogo PDF inviato correttamente');
      } else {
        this.manageError(r);
      }
    },
      (error) => {
        this.manageHttpError(error);
      });
  }

  ionViewDidLeave() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
