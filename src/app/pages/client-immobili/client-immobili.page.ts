import { Component, OnInit } from '@angular/core';
import { Immobile, ClientiService, SessionService, StoreService, LogErroriService, AlertService, IconeService, ImmobiliService } from 'broker-lib';
import { BaseComponent } from 'src/app/component/base.component';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

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
    public immobiliService: ImmobiliService) {
    super(sessionService, storeService, router, logErroriService, alertService, iconeService);

  }

  ngOnInit() {
    super.ngOnInit();
  }

  ionViewDidEnter() {
    this.initializeApp();
    this.sessionService.setIntestazionePagina('ELENCO IMMOBILI');
  }

  private initializeApp() {

    this.sessionService.userDataObservable.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(present => {
      if (present) {
        this.wsToken = this.sessionService.getUserData();
        this.wsToken = this.sessionService.getUserData();
        if (this.wsToken !== undefined
          && this.wsToken !== null
          && this.wsToken.token_value !== ''
          && this.wsToken.utente !== undefined) {
          console.log('Utente in possesso di token');

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
