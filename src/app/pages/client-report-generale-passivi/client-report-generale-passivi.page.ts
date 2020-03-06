import { LogErroriService, StoreService, AlertService, IconeService, ClientiService, LoginService, ReportService, ReportGeneralePassivo, ReportGenerale, } from 'broker-lib';
import { SessionService } from 'broker-lib';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import { BaseComponent } from 'src/app/component/base.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LogoutCommunicationService } from 'src/app/services/logoutCommunication/logoutcommunication.service';

@Component({
  selector: 'app-client-report-generale-passivi',
  templateUrl: './client-report-generale-passivi.page.html',
  styleUrls: ['./client-report-generale-passivi.page.scss'],
})
export class ClientReportGeneralePassiviPage extends BaseComponent implements OnInit {

  private unsubscribe$ = new Subject<void>();
  public reportGenerale: ReportGenerale;

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
    public logoutComm: LogoutCommunicationService
  ) {
    super(sessionService, storeService, router, logErroriService, alertService, iconeService, ngZone);
    this.reportGenerale = new ReportGenerale();
    this.reportGenerale.passivi = new Array<ReportGeneralePassivo>();
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.initializeApp();
    this.sessionService.setIntestazionePagina('PASSIVI');

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
        console.log(this.reportGenerale);
      });

    } else {
      this.goToPage('login');
    }
  }

  ionViewDidLeave() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
