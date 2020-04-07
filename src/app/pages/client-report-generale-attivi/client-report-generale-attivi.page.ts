import { LogErroriService, StoreService, AlertService, IconeService, ClientiService, LoginService, ReportService, ReportGeneralePassivo, ReportGenerale, } from 'broker-lib';
import { SessionService } from 'broker-lib';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import { BaseComponent } from 'src/app/component/base.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LogoutCommunicationService } from 'src/app/services/logoutCommunication/logoutcommunication.service';
import { CurrencyPipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';

@Component({
  selector: 'app-client-report-generale-attivi',
  templateUrl: './client-report-generale-attivi.page.html',
  styleUrls: ['./client-report-generale-attivi.page.scss'],
})
export class ClientReportGeneraleAttiviPage extends BaseComponent implements OnInit {

  private unsubscribe$ = new Subject<void>();
  public reportGenerale: ReportGenerale;
  public totale: number;
  public netto: number;

  constructor(
    public sessionService: SessionService,
    public storeService: StoreService,
    public router: Router,
    private route: ActivatedRoute,
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
    this.reportGenerale = new ReportGenerale();
    this.reportGenerale.passivi = new Array<ReportGeneralePassivo>();
    registerLocaleData(localeIt, 'it');
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.initializeApp();
    this.sessionService.setIntestazionePagina('ATTIVI');

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

      this.route.queryParams.pipe(
        takeUntil(this.unsubscribe$)
      ).subscribe(params => {
        this.reportGenerale = JSON.parse(params.reportGenerale) as ReportGenerale;
        this.totale = this.reportGenerale.attivo.importo_mensile * 12;
        var aliquota: number = this.totale / 100 * this.reportGenerale.attivo.aliquota_cedolare;
        this.netto = this.totale - aliquota;
        //console.log(this.reportGenerale);
      });

    } else {
      this.logout();
    }
  }

  ionViewDidLeave() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public getCurrency(amount: number) {
    return this.currencyPipe.transform(amount, 'EUR', '', '1.2-2', 'it');
  }

}
