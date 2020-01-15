// import { ImmobileDettaglio } from './../../../../projects/broker-lib/src/lib/models/immobili/immobileDettaglio';
import { ImmobileDettaglio, LogErroriService, StoreService, AlertService, CointestatarioDettaglio, Immobile, IconeService, MutuoDettaglio, AffittoDettaglio, TassaDettaglio, SpesaDettaglio, DatiCatastaliDettaglio } from 'broker-lib';
import { ImmobiliService, SessionService } from 'broker-lib';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/component/base.component';
import { ModalService } from 'src/app/services/modal/modal.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-client-immobile',
    templateUrl: './client-immobile.page.html',
    styleUrls: ['./client-immobile.page.scss']
})
export class ClientImmobilePage extends BaseComponent implements OnInit {

    private unsubscribe$ = new Subject<void>();

    public immobile_id: string;
    public immobile: ImmobileDettaglio;

    constructor(
        public router: Router,
        private route: ActivatedRoute,
        private immobiliService: ImmobiliService,
        public sessionService: SessionService,
        public logErroriService: LogErroriService,
        public storeService: StoreService,
        public alertService: AlertService,
        public modalService: ModalService,
        public iconeService: IconeService
    ) {
        super(sessionService, storeService, router, logErroriService, alertService, iconeService);
        this.immobile_id = '';
        this.immobile = new ImmobileDettaglio();
        this.immobile.mutuo_dettaglio = new MutuoDettaglio();
        this.immobile.affitto_dettaglio = new AffittoDettaglio();
        this.immobile.cointestatari = new Array<CointestatarioDettaglio>();
        this.immobile.tasse = new Array<TassaDettaglio>();
        this.immobile.spese = new Array<SpesaDettaglio>();
        this.immobile.dati_catastali = new DatiCatastaliDettaglio();
    }

    public goToWizard(): void {
        this.goToPage("wizard");
    }
    ngOnInit() {
        super.ngOnInit();
    }

    ionViewDidEnter() {
        this.initializeApp();
        this.sessionService.setIntestazionePagina('DETTAGLIO IMMOBILE');
    }

    private initializeApp() {
        // ottengo il token
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

                    if (this.sessionService.getImmobileDettaglio() !== null
                        && this.sessionService.getImmobileDettaglio().proprieta_id !== 0
                        && this.sessionService.getImmobileDettaglio().proprieta_id !== null
                        && this.sessionService.getImmobileDettaglio().proprieta_id !== undefined) {
                        this.immobile = this.sessionService.getImmobileDettaglio();
                        this.sessionService.setImmobileDettaglio(this.immobile);
                    } else {
                        this.route.queryParams.pipe(
                            takeUntil(this.unsubscribe$)
                        ).subscribe(params => {

                            this.immobile_id = params.immobile_id;
                            this.immobiliService.getImmobile(this.immobile_id).pipe(
                                takeUntil(this.unsubscribe$)
                            ).subscribe(s => {
                                if (s.Success) {
                                    this.immobile = s.Data;
                                    this.sessionService.setImmobileDettaglio(this.immobile);
                                }
                            });
                        });
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

    public getCointestatari(): Array<CointestatarioDettaglio> {
        if (this.immobile && this.immobile.cointestatari) {
            return this.immobile.cointestatari;
        } else {
            return new Array<CointestatarioDettaglio>();
        }
    }

    openModal(id: string) {
        this.modalService.open(id);
    }

    closeModal(id: string) {
        this.modalService.close(id);
    }



    public getTotaleTasse(immobile: ImmobileDettaglio): number {
        let tasse = 0;
        for (const tassa of immobile.tasse) {
            tasse = tasse + tassa.importo_annuale;
        }
        return tasse;
    }

    public apriPianoAmmortamento() {
        this.goToPageParams('ammortamento', {
            queryParams: {
                immobile_id: this.immobile.proprieta_id,
                immobile_indirizzo: this.immobile.indirizzo,
                immobile_civico: this.immobile.civico,
                immobile_citta: this.immobile.citta,
                immobile_data_aggiornamento: this.immobile.data_aggiornamento,
                immobile_codice_tipologia: this.immobile.codice_tipologia
            }
        });
    }

    public goToCatastali() {
        this.goToPage('catastali');
    }

    ionViewDidLeave() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
