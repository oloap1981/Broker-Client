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
  public immobiliCliente: Array<Immobile>;

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
  }

  private initializeApp() {

    this.sessionService.userDataObservable.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(present => {
      if (present) {
        this.wsToken = this.sessionService.getUserData();
        this.immobiliCliente = this.sessionService.getImmobiliCliente();
      } else {
        this.alertService.presentAlert('Token assente, necessario login');
        this.goToPage('login');
      }
    });
    this.sessionService.loadUserData();

  }

  public apriSchedaImmobile(immobile: number) {
    // this.router.navigate(['scheda-immobile'], { queryParams: { immobile_id: immobile } });
    this.goToPageParams('scheda-immobile', { queryParams: { immobile_id: immobile } });
  }

  public refreshImmobiliList() {
    this.immobiliService.getImmobili(this.sessionService.getCliente().cliente_id + '').pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(r => {
      if (r.Success) {
        this.immobiliCliente = r.Data.elenco_immobili;
      } else {
        this.manageError(r);
      }
    }); // vedere il tipo
  }

  ionViewDidLeave() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
