import { Component, OnInit, NgZone } from '@angular/core';
import { WsToken, LogErroriService, ErrorMessage, AlertService, IconeService } from 'broker-lib';
import { StoreService, SessionService } from 'broker-lib';
import { Router } from '@angular/router';
import { Subject, TimeoutError } from 'rxjs';

@Component({
    selector: 'app-base',
    templateUrl: 'base.component.html',
    styleUrls: ['base.component.scss'],
})
export class BaseComponent implements OnInit {

    public wsToken: WsToken;

    private wsTokenSubject: Subject<boolean> = new Subject<boolean>();
    public wsTokenObservable = this.wsTokenSubject.asObservable();

    private logoutSubject: Subject<boolean> = new Subject<boolean>();
    public logoutObservable = this.logoutSubject.asObservable();

    constructor(
        public sessionService: SessionService,
        public storeService: StoreService,
        public router: Router,
        public logErroriService: LogErroriService,
        public alertService: AlertService,
        public iconeService: IconeService,
        public ngZone: NgZone) { }

    ngOnInit(): void {
    }

    public getUtenteEmail(): string {
        console.log("TOKEN: " + this.wsToken);
        if (this.wsToken !== undefined && this.wsToken !== null) {
            return this.wsToken.utente.email;
        } else {
            return 'email utente';
        }
    }

    public getToken(): string {

        if (this.wsToken !== undefined) {
            return this.wsToken.token_value;
        } else {
            this.router.navigate(['login']);
            return '';
        }
    }

    public apriSchedaImmobile(immobile: number) {
        this.sessionService.setImmobileDettaglio(null);
        this.goToPageParams('client-immobile', { queryParams: { immobile_id: immobile } });
    }

    public goToWizardNew(): void {
        this.sessionService.clearImmobileDettaglio();
        this.goToPage('client-wizard');
    }

    public goToWizardEdit(): void {
        this.goToPage('client-wizard');
    }

    public goToHome(): void {
        this.goToPage('client-home');
    }

    public goToPage(pageName: string): void {
        this.ngZone.run(() => this.router.navigate([pageName])).then();
    }

    public goToPageParams(pageName: string, params: any): void {
        this.ngZone.run(() => this.router.navigate([pageName], params)).then();
        // this.router.navigate([pageName], params);
    }

    public logError(code: number, text: string): void {
        const errorMessage = new ErrorMessage();
        errorMessage.msg_testo = text;
        errorMessage.msg_code = code;
        errorMessage.msg_method = "";
        errorMessage.msg_techdata = "";
        errorMessage.msg_tipo = "";
        const message = this.logErroriService.generateErrorMessage(errorMessage);
        this.logErroriService.postErrore(message);
    }

    public presentAlert(message: string): void {
        this.alertService.presentAlert(message);
    }

    public presentErrorAlert(message: string): void {
        this.alertService.presentErrorAlert(message);
    }

    public manageError(response) {
        const tipo = response.ErrorMessage.msg_tipo;
        const code = response.ErrorMessage.msg_code;
        const testo = response.ErrorMessage.msg_testo;
        const method = response.ErrorMessage.msg_method;
        const techdata = response.ErrorMessage.msg_techdata;

        switch (code) {
            case "005": {
                this.alertService.presentErrorAlert("Token Scaduto, necessario Login");
                this.router.navigate(['login']);
                break;
            }
        }
    }

    public getIconaClasseImmobile(tipologia: string): string {
        const icona = this.iconeService.getClasseIcona(tipologia);
        return icona;
    }

    public getIconaClasseImmobileCell(tipologia: string): string {
        return 'cell ' + this.getIconaClasseImmobile(tipologia);
    }

    public getIconaClasseImmobileItem(tipologia: string): string {
        return 'item tipologia ' + this.getIconaClasseImmobile(tipologia);
    }

    public getClasseStatoCliente(stato: string): string {
        let statusColor = 'red';
        switch (stato) {
            case 'R':
                statusColor = 'red';
                break;
            case 'P':
                statusColor = 'blue';
                break;
            case 'A':
                statusColor = 'green';
                break;
        }
        return 'status ' + statusColor;
    }

    public goToProfiloUtente(): void {
        this.goToPage('profilo-utente');
    }

    public manageHttpError(error: any) {
        console.log(error.error.ErrorMessage.msg_testo);
        if (error instanceof TimeoutError) {
            this.alertService.presentErrorAlert("Timeout scaduto");
        } else {
            console.log("Si è verificato un errore di comunicazione:");
            console.log(error);
        }
    }
}
