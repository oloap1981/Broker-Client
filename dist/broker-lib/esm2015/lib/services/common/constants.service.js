/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class ConstantsService {
    constructor() {
        // ng build broker-lib
        // public readonly baseAppUrl: string = 'https://cli.readvice.it:444/services';
        // public readonly baseAppUrl: string = 'http://89.31.75.77:443/Spring-JPA-Security';
        this.baseAppUrl = 'http://89.31.75.45:443/Spring-JPA-Security';
        // public readonly baseAppUrl: string = 'http://test.readvice.it:443/Spring-JPA-Security';
        this.tokenHeaderKey = 'Authorization';
        this.pathSeparator = '/';
        this.loginServiceName = 'login';
        this.cambioPasswordServiceName = 'putpassword';
        // immobili
        this.getImmobiliServiceName = 'getimmobili';
        this.getImmobileServiceName = 'getimmobile';
        this.putImmobileServiceName = 'putimmobile';
        this.delImmobileServiceName = 'delimmobile';
        this.getCatastoServiceName = 'getcatasto';
        this.getPianoAmmortamentoServiceName = 'getpiano';
        this.getImuServiceName = 'get_imu';
        // clienti
        this.getClientiServiceName = 'getclienti';
        this.getClienteServiceName = 'getcliente';
        this.putClientiServiceName = 'putcliente';
        this.abilitaAppClienteServiceName = 'appcliente';
        this.bookValueServiceName = 'getbookvalue';
        this.pianoAmmortamentoServiceName = 'getpiano';
        // report
        this.situazioneGeneraleServiceName = 'getsituazione';
        this.graficiServiceName = 'getgrafici';
        this.pdfReportServiceName = 'getpdfreport';
        this.postErroreServiceName = 'writeLog';
        this.getDropdownServiceName = 'get_dropdown';
        // documenti
        this.getCartelle = 'getcartelle';
        this.getDocumento = 'getdocumento';
        this.putCartelle = 'putcartelle';
        this.putDocumento = 'putdocumento';
        // tipologia icone immobili
        this.tipologiaImmobileVilla = 'villa';
        this.tipologiaImmobileCasa = 'casa';
        this.tipologiaImmobileAgricolo = 'agricolo';
        this.tipologiaImmobileUfficio = 'ufficio';
        this.tipologiaImmobileAlbergo = 'albergo';
        this.tipologiaImmobileOspedale = 'ospedale';
        this.tipologiaImmobileScuola = 'scuola';
        this.tipologiaImmobileMuseo = 'museo';
        this.tipologiaImmobileChiesa = 'chiesa';
        this.tipologiaImmobileMagazzino = 'magazzino';
        this.tipologiaImmobileNegozio = 'negozio';
        this.tipologiaImmobileSport = 'sport';
        this.tipologiaImmobileGarage = 'garage';
        this.tipologiaImmobileFabbrica = 'fabbrica';
        this.tipologiaImmobileTeatro = 'teatro';
        this.tipologiaImmobileBanca = 'banca';
        this.tipologiaImmobilePonte = 'ponte';
        this.tipologiaImmobileStazione = 'stazione';
        this.tipologiaImmobileCantiere = 'cantiere';
        this.tipologiaImmobileTerreno = 'terreno';
        // dropdown
        this.getDdlEuribor = 'get_ddl_tipo_euribor';
        this.getDdlAffittuari = 'get_ddl_tipo_affittuari';
        this.getDdlTasse = 'get_ddl_tasse';
        this.getDdlOmi = 'get_ddl_omi';
        this.getDdlTipologiaCatastale = 'get_ddl_tipologia_catastale';
        this.getDdlComuni = 'get_ddl_comuni';
        // vari
        this.httpTimeout = 5000; // per il momento il timeout è impostato a 5 secondi per le chiamate get e post
    }
}
ConstantsService.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    ConstantsService.prototype.baseAppUrl;
    /** @type {?} */
    ConstantsService.prototype.tokenHeaderKey;
    /** @type {?} */
    ConstantsService.prototype.pathSeparator;
    /** @type {?} */
    ConstantsService.prototype.loginServiceName;
    /** @type {?} */
    ConstantsService.prototype.cambioPasswordServiceName;
    /** @type {?} */
    ConstantsService.prototype.getImmobiliServiceName;
    /** @type {?} */
    ConstantsService.prototype.getImmobileServiceName;
    /** @type {?} */
    ConstantsService.prototype.putImmobileServiceName;
    /** @type {?} */
    ConstantsService.prototype.delImmobileServiceName;
    /** @type {?} */
    ConstantsService.prototype.getCatastoServiceName;
    /** @type {?} */
    ConstantsService.prototype.getPianoAmmortamentoServiceName;
    /** @type {?} */
    ConstantsService.prototype.getImuServiceName;
    /** @type {?} */
    ConstantsService.prototype.getClientiServiceName;
    /** @type {?} */
    ConstantsService.prototype.getClienteServiceName;
    /** @type {?} */
    ConstantsService.prototype.putClientiServiceName;
    /** @type {?} */
    ConstantsService.prototype.abilitaAppClienteServiceName;
    /** @type {?} */
    ConstantsService.prototype.bookValueServiceName;
    /** @type {?} */
    ConstantsService.prototype.pianoAmmortamentoServiceName;
    /** @type {?} */
    ConstantsService.prototype.situazioneGeneraleServiceName;
    /** @type {?} */
    ConstantsService.prototype.graficiServiceName;
    /** @type {?} */
    ConstantsService.prototype.pdfReportServiceName;
    /** @type {?} */
    ConstantsService.prototype.postErroreServiceName;
    /** @type {?} */
    ConstantsService.prototype.getDropdownServiceName;
    /** @type {?} */
    ConstantsService.prototype.getCartelle;
    /** @type {?} */
    ConstantsService.prototype.getDocumento;
    /** @type {?} */
    ConstantsService.prototype.putCartelle;
    /** @type {?} */
    ConstantsService.prototype.putDocumento;
    /** @type {?} */
    ConstantsService.prototype.tipologiaImmobileVilla;
    /** @type {?} */
    ConstantsService.prototype.tipologiaImmobileCasa;
    /** @type {?} */
    ConstantsService.prototype.tipologiaImmobileAgricolo;
    /** @type {?} */
    ConstantsService.prototype.tipologiaImmobileUfficio;
    /** @type {?} */
    ConstantsService.prototype.tipologiaImmobileAlbergo;
    /** @type {?} */
    ConstantsService.prototype.tipologiaImmobileOspedale;
    /** @type {?} */
    ConstantsService.prototype.tipologiaImmobileScuola;
    /** @type {?} */
    ConstantsService.prototype.tipologiaImmobileMuseo;
    /** @type {?} */
    ConstantsService.prototype.tipologiaImmobileChiesa;
    /** @type {?} */
    ConstantsService.prototype.tipologiaImmobileMagazzino;
    /** @type {?} */
    ConstantsService.prototype.tipologiaImmobileNegozio;
    /** @type {?} */
    ConstantsService.prototype.tipologiaImmobileSport;
    /** @type {?} */
    ConstantsService.prototype.tipologiaImmobileGarage;
    /** @type {?} */
    ConstantsService.prototype.tipologiaImmobileFabbrica;
    /** @type {?} */
    ConstantsService.prototype.tipologiaImmobileTeatro;
    /** @type {?} */
    ConstantsService.prototype.tipologiaImmobileBanca;
    /** @type {?} */
    ConstantsService.prototype.tipologiaImmobilePonte;
    /** @type {?} */
    ConstantsService.prototype.tipologiaImmobileStazione;
    /** @type {?} */
    ConstantsService.prototype.tipologiaImmobileCantiere;
    /** @type {?} */
    ConstantsService.prototype.tipologiaImmobileTerreno;
    /** @type {?} */
    ConstantsService.prototype.getDdlEuribor;
    /** @type {?} */
    ConstantsService.prototype.getDdlAffittuari;
    /** @type {?} */
    ConstantsService.prototype.getDdlTasse;
    /** @type {?} */
    ConstantsService.prototype.getDdlOmi;
    /** @type {?} */
    ConstantsService.prototype.getDdlTipologiaCatastale;
    /** @type {?} */
    ConstantsService.prototype.getDdlComuni;
    /** @type {?} */
    ConstantsService.prototype.httpTimeout;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9icm9rZXItbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2NvbW1vbi9jb25zdGFudHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxNQUFNLE9BQU8sZ0JBQWdCO0lBRDdCOzs7O1FBS29CLGVBQVUsR0FBVyw0Q0FBNEMsQ0FBQzs7UUFFbEUsbUJBQWMsR0FBVyxlQUFlLENBQUM7UUFDekMsa0JBQWEsR0FBVyxHQUFHLENBQUM7UUFFNUIscUJBQWdCLEdBQVcsT0FBTyxDQUFDO1FBQ25DLDhCQUF5QixHQUFXLGFBQWEsQ0FBQzs7UUFHbEQsMkJBQXNCLEdBQVcsYUFBYSxDQUFDO1FBQy9DLDJCQUFzQixHQUFXLGFBQWEsQ0FBQztRQUMvQywyQkFBc0IsR0FBVyxhQUFhLENBQUM7UUFDL0MsMkJBQXNCLEdBQVcsYUFBYSxDQUFDO1FBQy9DLDBCQUFxQixHQUFXLFlBQVksQ0FBQztRQUM3QyxvQ0FBK0IsR0FBVyxVQUFVLENBQUM7UUFDckQsc0JBQWlCLEdBQVcsU0FBUyxDQUFDOztRQUd0QywwQkFBcUIsR0FBVyxZQUFZLENBQUM7UUFDN0MsMEJBQXFCLEdBQVcsWUFBWSxDQUFDO1FBQzdDLDBCQUFxQixHQUFXLFlBQVksQ0FBQztRQUM3QyxpQ0FBNEIsR0FBVyxZQUFZLENBQUM7UUFDcEQseUJBQW9CLEdBQVcsY0FBYyxDQUFDO1FBQzlDLGlDQUE0QixHQUFXLFVBQVUsQ0FBQzs7UUFHbEQsa0NBQTZCLEdBQVcsZUFBZSxDQUFDO1FBQ3hELHVCQUFrQixHQUFXLFlBQVksQ0FBQztRQUMxQyx5QkFBb0IsR0FBVyxjQUFjLENBQUM7UUFFOUMsMEJBQXFCLEdBQVcsVUFBVSxDQUFDO1FBQzNDLDJCQUFzQixHQUFXLGNBQWMsQ0FBQzs7UUFHaEQsZ0JBQVcsR0FBVyxhQUFhLENBQUM7UUFDcEMsaUJBQVksR0FBVyxjQUFjLENBQUM7UUFDdEMsZ0JBQVcsR0FBVyxhQUFhLENBQUM7UUFDcEMsaUJBQVksR0FBVyxjQUFjLENBQUM7O1FBR3RDLDJCQUFzQixHQUFXLE9BQU8sQ0FBQztRQUN6QywwQkFBcUIsR0FBVyxNQUFNLENBQUM7UUFDdkMsOEJBQXlCLEdBQVcsVUFBVSxDQUFDO1FBQy9DLDZCQUF3QixHQUFXLFNBQVMsQ0FBQztRQUM3Qyw2QkFBd0IsR0FBVyxTQUFTLENBQUM7UUFDN0MsOEJBQXlCLEdBQVcsVUFBVSxDQUFDO1FBQy9DLDRCQUF1QixHQUFXLFFBQVEsQ0FBQztRQUMzQywyQkFBc0IsR0FBVyxPQUFPLENBQUM7UUFDekMsNEJBQXVCLEdBQVcsUUFBUSxDQUFDO1FBQzNDLCtCQUEwQixHQUFXLFdBQVcsQ0FBQztRQUNqRCw2QkFBd0IsR0FBVyxTQUFTLENBQUM7UUFDN0MsMkJBQXNCLEdBQVcsT0FBTyxDQUFDO1FBQ3pDLDRCQUF1QixHQUFXLFFBQVEsQ0FBQztRQUMzQyw4QkFBeUIsR0FBVyxVQUFVLENBQUM7UUFDL0MsNEJBQXVCLEdBQVcsUUFBUSxDQUFDO1FBQzNDLDJCQUFzQixHQUFXLE9BQU8sQ0FBQztRQUN6QywyQkFBc0IsR0FBVyxPQUFPLENBQUM7UUFDekMsOEJBQXlCLEdBQVcsVUFBVSxDQUFDO1FBQy9DLDhCQUF5QixHQUFXLFVBQVUsQ0FBQztRQUMvQyw2QkFBd0IsR0FBVyxTQUFTLENBQUM7O1FBRzdDLGtCQUFhLEdBQVcsc0JBQXNCLENBQUM7UUFDL0MscUJBQWdCLEdBQVcseUJBQXlCLENBQUM7UUFDckQsZ0JBQVcsR0FBVyxlQUFlLENBQUM7UUFDdEMsY0FBUyxHQUFXLGFBQWEsQ0FBQztRQUNsQyw2QkFBd0IsR0FBVyw2QkFBNkIsQ0FBQztRQUNqRSxpQkFBWSxHQUFXLGdCQUFnQixDQUFDOztRQUd4QyxnQkFBVyxHQUFXLElBQUksQ0FBQyxDQUFDLCtFQUErRTtJQUUvSCxDQUFDOzs7WUE3RUEsVUFBVTs7OztJQUtQLHNDQUFrRjs7SUFFbEYsMENBQXlEOztJQUN6RCx5Q0FBNEM7O0lBRTVDLDRDQUFtRDs7SUFDbkQscURBQWtFOztJQUdsRSxrREFBK0Q7O0lBQy9ELGtEQUErRDs7SUFDL0Qsa0RBQStEOztJQUMvRCxrREFBK0Q7O0lBQy9ELGlEQUE2RDs7SUFDN0QsMkRBQXFFOztJQUNyRSw2Q0FBc0Q7O0lBR3RELGlEQUE2RDs7SUFDN0QsaURBQTZEOztJQUM3RCxpREFBNkQ7O0lBQzdELHdEQUFvRTs7SUFDcEUsZ0RBQThEOztJQUM5RCx3REFBa0U7O0lBR2xFLHlEQUF3RTs7SUFDeEUsOENBQTBEOztJQUMxRCxnREFBOEQ7O0lBRTlELGlEQUEyRDs7SUFDM0Qsa0RBQWdFOztJQUdoRSx1Q0FBb0Q7O0lBQ3BELHdDQUFzRDs7SUFDdEQsdUNBQW9EOztJQUNwRCx3Q0FBc0Q7O0lBR3RELGtEQUF5RDs7SUFDekQsaURBQXVEOztJQUN2RCxxREFBK0Q7O0lBQy9ELG9EQUE2RDs7SUFDN0Qsb0RBQTZEOztJQUM3RCxxREFBK0Q7O0lBQy9ELG1EQUEyRDs7SUFDM0Qsa0RBQXlEOztJQUN6RCxtREFBMkQ7O0lBQzNELHNEQUFpRTs7SUFDakUsb0RBQTZEOztJQUM3RCxrREFBeUQ7O0lBQ3pELG1EQUEyRDs7SUFDM0QscURBQStEOztJQUMvRCxtREFBMkQ7O0lBQzNELGtEQUF5RDs7SUFDekQsa0RBQXlEOztJQUN6RCxxREFBK0Q7O0lBQy9ELHFEQUErRDs7SUFDL0Qsb0RBQTZEOztJQUc3RCx5Q0FBK0Q7O0lBQy9ELDRDQUFxRTs7SUFDckUsdUNBQXNEOztJQUN0RCxxQ0FBa0Q7O0lBQ2xELG9EQUFpRjs7SUFDakYsd0NBQXdEOztJQUd4RCx1Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb25zdGFudHNTZXJ2aWNlIHtcbiAgICAvLyBuZyBidWlsZCBicm9rZXItbGliXG4gICAgLy8gcHVibGljIHJlYWRvbmx5IGJhc2VBcHBVcmw6IHN0cmluZyA9ICdodHRwczovL2NsaS5yZWFkdmljZS5pdDo0NDQvc2VydmljZXMnO1xuICAgIC8vIHB1YmxpYyByZWFkb25seSBiYXNlQXBwVXJsOiBzdHJpbmcgPSAnaHR0cDovLzg5LjMxLjc1Ljc3OjQ0My9TcHJpbmctSlBBLVNlY3VyaXR5JztcbiAgICBwdWJsaWMgcmVhZG9ubHkgYmFzZUFwcFVybDogc3RyaW5nID0gJ2h0dHA6Ly84OS4zMS43NS40NTo0NDMvU3ByaW5nLUpQQS1TZWN1cml0eSc7XG4gICAgLy8gcHVibGljIHJlYWRvbmx5IGJhc2VBcHBVcmw6IHN0cmluZyA9ICdodHRwOi8vdGVzdC5yZWFkdmljZS5pdDo0NDMvU3ByaW5nLUpQQS1TZWN1cml0eSc7XG4gICAgcHVibGljIHJlYWRvbmx5IHRva2VuSGVhZGVyS2V5OiBzdHJpbmcgPSAnQXV0aG9yaXphdGlvbic7XG4gICAgcHVibGljIHJlYWRvbmx5IHBhdGhTZXBhcmF0b3I6IHN0cmluZyA9ICcvJztcblxuICAgIHB1YmxpYyByZWFkb25seSBsb2dpblNlcnZpY2VOYW1lOiBzdHJpbmcgPSAnbG9naW4nO1xuICAgIHB1YmxpYyByZWFkb25seSBjYW1iaW9QYXNzd29yZFNlcnZpY2VOYW1lOiBzdHJpbmcgPSAncHV0cGFzc3dvcmQnO1xuXG4gICAgLy8gaW1tb2JpbGlcbiAgICBwdWJsaWMgcmVhZG9ubHkgZ2V0SW1tb2JpbGlTZXJ2aWNlTmFtZTogc3RyaW5nID0gJ2dldGltbW9iaWxpJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgZ2V0SW1tb2JpbGVTZXJ2aWNlTmFtZTogc3RyaW5nID0gJ2dldGltbW9iaWxlJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgcHV0SW1tb2JpbGVTZXJ2aWNlTmFtZTogc3RyaW5nID0gJ3B1dGltbW9iaWxlJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgZGVsSW1tb2JpbGVTZXJ2aWNlTmFtZTogc3RyaW5nID0gJ2RlbGltbW9iaWxlJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgZ2V0Q2F0YXN0b1NlcnZpY2VOYW1lOiBzdHJpbmcgPSAnZ2V0Y2F0YXN0byc7XG4gICAgcHVibGljIHJlYWRvbmx5IGdldFBpYW5vQW1tb3J0YW1lbnRvU2VydmljZU5hbWU6IHN0cmluZyA9ICdnZXRwaWFubyc7XG4gICAgcHVibGljIHJlYWRvbmx5IGdldEltdVNlcnZpY2VOYW1lOiBzdHJpbmcgPSAnZ2V0X2ltdSc7XG5cbiAgICAvLyBjbGllbnRpXG4gICAgcHVibGljIHJlYWRvbmx5IGdldENsaWVudGlTZXJ2aWNlTmFtZTogc3RyaW5nID0gJ2dldGNsaWVudGknO1xuICAgIHB1YmxpYyByZWFkb25seSBnZXRDbGllbnRlU2VydmljZU5hbWU6IHN0cmluZyA9ICdnZXRjbGllbnRlJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgcHV0Q2xpZW50aVNlcnZpY2VOYW1lOiBzdHJpbmcgPSAncHV0Y2xpZW50ZSc7XG4gICAgcHVibGljIHJlYWRvbmx5IGFiaWxpdGFBcHBDbGllbnRlU2VydmljZU5hbWU6IHN0cmluZyA9ICdhcHBjbGllbnRlJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgYm9va1ZhbHVlU2VydmljZU5hbWU6IHN0cmluZyA9ICdnZXRib29rdmFsdWUnO1xuICAgIHB1YmxpYyByZWFkb25seSBwaWFub0FtbW9ydGFtZW50b1NlcnZpY2VOYW1lOiBzdHJpbmcgPSAnZ2V0cGlhbm8nO1xuXG4gICAgLy8gcmVwb3J0XG4gICAgcHVibGljIHJlYWRvbmx5IHNpdHVhemlvbmVHZW5lcmFsZVNlcnZpY2VOYW1lOiBzdHJpbmcgPSAnZ2V0c2l0dWF6aW9uZSc7XG4gICAgcHVibGljIHJlYWRvbmx5IGdyYWZpY2lTZXJ2aWNlTmFtZTogc3RyaW5nID0gJ2dldGdyYWZpY2knO1xuICAgIHB1YmxpYyByZWFkb25seSBwZGZSZXBvcnRTZXJ2aWNlTmFtZTogc3RyaW5nID0gJ2dldHBkZnJlcG9ydCc7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgcG9zdEVycm9yZVNlcnZpY2VOYW1lOiBzdHJpbmcgPSAnd3JpdGVMb2cnO1xuICAgIHB1YmxpYyByZWFkb25seSBnZXREcm9wZG93blNlcnZpY2VOYW1lOiBzdHJpbmcgPSAnZ2V0X2Ryb3Bkb3duJztcblxuICAgIC8vIGRvY3VtZW50aVxuICAgIHB1YmxpYyByZWFkb25seSBnZXRDYXJ0ZWxsZTogc3RyaW5nID0gJ2dldGNhcnRlbGxlJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgZ2V0RG9jdW1lbnRvOiBzdHJpbmcgPSAnZ2V0ZG9jdW1lbnRvJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgcHV0Q2FydGVsbGU6IHN0cmluZyA9ICdwdXRjYXJ0ZWxsZSc7XG4gICAgcHVibGljIHJlYWRvbmx5IHB1dERvY3VtZW50bzogc3RyaW5nID0gJ3B1dGRvY3VtZW50byc7XG5cbiAgICAvLyB0aXBvbG9naWEgaWNvbmUgaW1tb2JpbGlcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGlwb2xvZ2lhSW1tb2JpbGVWaWxsYTogc3RyaW5nID0gJ3ZpbGxhJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGlwb2xvZ2lhSW1tb2JpbGVDYXNhOiBzdHJpbmcgPSAnY2FzYSc7XG4gICAgcHVibGljIHJlYWRvbmx5IHRpcG9sb2dpYUltbW9iaWxlQWdyaWNvbG86IHN0cmluZyA9ICdhZ3JpY29sbyc7XG4gICAgcHVibGljIHJlYWRvbmx5IHRpcG9sb2dpYUltbW9iaWxlVWZmaWNpbzogc3RyaW5nID0gJ3VmZmljaW8nO1xuICAgIHB1YmxpYyByZWFkb25seSB0aXBvbG9naWFJbW1vYmlsZUFsYmVyZ286IHN0cmluZyA9ICdhbGJlcmdvJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGlwb2xvZ2lhSW1tb2JpbGVPc3BlZGFsZTogc3RyaW5nID0gJ29zcGVkYWxlJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGlwb2xvZ2lhSW1tb2JpbGVTY3VvbGE6IHN0cmluZyA9ICdzY3VvbGEnO1xuICAgIHB1YmxpYyByZWFkb25seSB0aXBvbG9naWFJbW1vYmlsZU11c2VvOiBzdHJpbmcgPSAnbXVzZW8nO1xuICAgIHB1YmxpYyByZWFkb25seSB0aXBvbG9naWFJbW1vYmlsZUNoaWVzYTogc3RyaW5nID0gJ2NoaWVzYSc7XG4gICAgcHVibGljIHJlYWRvbmx5IHRpcG9sb2dpYUltbW9iaWxlTWFnYXp6aW5vOiBzdHJpbmcgPSAnbWFnYXp6aW5vJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGlwb2xvZ2lhSW1tb2JpbGVOZWdvemlvOiBzdHJpbmcgPSAnbmVnb3ppbyc7XG4gICAgcHVibGljIHJlYWRvbmx5IHRpcG9sb2dpYUltbW9iaWxlU3BvcnQ6IHN0cmluZyA9ICdzcG9ydCc7XG4gICAgcHVibGljIHJlYWRvbmx5IHRpcG9sb2dpYUltbW9iaWxlR2FyYWdlOiBzdHJpbmcgPSAnZ2FyYWdlJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGlwb2xvZ2lhSW1tb2JpbGVGYWJicmljYTogc3RyaW5nID0gJ2ZhYmJyaWNhJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGlwb2xvZ2lhSW1tb2JpbGVUZWF0cm86IHN0cmluZyA9ICd0ZWF0cm8nO1xuICAgIHB1YmxpYyByZWFkb25seSB0aXBvbG9naWFJbW1vYmlsZUJhbmNhOiBzdHJpbmcgPSAnYmFuY2EnO1xuICAgIHB1YmxpYyByZWFkb25seSB0aXBvbG9naWFJbW1vYmlsZVBvbnRlOiBzdHJpbmcgPSAncG9udGUnO1xuICAgIHB1YmxpYyByZWFkb25seSB0aXBvbG9naWFJbW1vYmlsZVN0YXppb25lOiBzdHJpbmcgPSAnc3RhemlvbmUnO1xuICAgIHB1YmxpYyByZWFkb25seSB0aXBvbG9naWFJbW1vYmlsZUNhbnRpZXJlOiBzdHJpbmcgPSAnY2FudGllcmUnO1xuICAgIHB1YmxpYyByZWFkb25seSB0aXBvbG9naWFJbW1vYmlsZVRlcnJlbm86IHN0cmluZyA9ICd0ZXJyZW5vJztcblxuICAgIC8vIGRyb3Bkb3duXG4gICAgcHVibGljIHJlYWRvbmx5IGdldERkbEV1cmlib3I6IHN0cmluZyA9ICdnZXRfZGRsX3RpcG9fZXVyaWJvcic7XG4gICAgcHVibGljIHJlYWRvbmx5IGdldERkbEFmZml0dHVhcmk6IHN0cmluZyA9ICdnZXRfZGRsX3RpcG9fYWZmaXR0dWFyaSc7XG4gICAgcHVibGljIHJlYWRvbmx5IGdldERkbFRhc3NlOiBzdHJpbmcgPSAnZ2V0X2RkbF90YXNzZSc7XG4gICAgcHVibGljIHJlYWRvbmx5IGdldERkbE9taTogc3RyaW5nID0gJ2dldF9kZGxfb21pJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgZ2V0RGRsVGlwb2xvZ2lhQ2F0YXN0YWxlOiBzdHJpbmcgPSAnZ2V0X2RkbF90aXBvbG9naWFfY2F0YXN0YWxlJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgZ2V0RGRsQ29tdW5pOiBzdHJpbmcgPSAnZ2V0X2RkbF9jb211bmknO1xuXG4gICAgLy8gdmFyaVxuICAgIHB1YmxpYyByZWFkb25seSBodHRwVGltZW91dDogbnVtYmVyID0gNTAwMDsgLy8gcGVyIGlsIG1vbWVudG8gaWwgdGltZW91dCDDqCBpbXBvc3RhdG8gYSA1IHNlY29uZGkgcGVyIGxlIGNoaWFtYXRlIGdldCBlIHBvc3RcblxufVxuIl19