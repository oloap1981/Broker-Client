/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var ConstantsService = /** @class */ (function () {
    function ConstantsService() {
        this.baseAppUrl = 'http://89.31.75.45:443/Spring-JPA-Security';
        this.tokenHeaderKey = 'Authorization';
        this.pathSeparator = '/';
        this.loginServiceName = 'login';
        this.cambioPasswordServiceName = 'putPassword';
        // immobili
        this.getImmobiliServiceName = 'getimmobili';
        this.getImmobileServiceName = 'getimmobile';
        this.putImmobileServiceName = 'putimmobile';
        this.delImmobileServiceName = 'delimmobile';
        this.getCatastoServiceName = 'getcatasto';
        this.getPianoAmmortamentoServiceName = 'getPiano';
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
        // dropdown
        this.getDdlEuribor = 'get_ddl_tipo_euribor';
        this.getDdlAffittuari = 'get_ddl_tipo_affittuari';
        this.getDdlTasse = 'get_ddl_tasse';
        this.getDdlOmi = 'get_ddl_omi';
        this.getDdlTipologiaCatastale = 'get_ddl_tipologia_catastale';
        this.getDdlComuni = 'get_ddl_comuni';
    }
    ConstantsService.decorators = [
        { type: Injectable }
    ];
    return ConstantsService;
}());
export { ConstantsService };
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9icm9rZXItbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2NvbW1vbi9jb25zdGFudHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQztJQUFBO1FBRW9CLGVBQVUsR0FBVyw0Q0FBNEMsQ0FBQztRQUNsRSxtQkFBYyxHQUFXLGVBQWUsQ0FBQztRQUN6QyxrQkFBYSxHQUFXLEdBQUcsQ0FBQztRQUU1QixxQkFBZ0IsR0FBVyxPQUFPLENBQUM7UUFDbkMsOEJBQXlCLEdBQVcsYUFBYSxDQUFDOztRQUdsRCwyQkFBc0IsR0FBVyxhQUFhLENBQUM7UUFDL0MsMkJBQXNCLEdBQVcsYUFBYSxDQUFDO1FBQy9DLDJCQUFzQixHQUFXLGFBQWEsQ0FBQztRQUMvQywyQkFBc0IsR0FBVyxhQUFhLENBQUM7UUFDL0MsMEJBQXFCLEdBQVcsWUFBWSxDQUFDO1FBQzdDLG9DQUErQixHQUFXLFVBQVUsQ0FBQzs7UUFHckQsMEJBQXFCLEdBQVcsWUFBWSxDQUFDO1FBQzdDLDBCQUFxQixHQUFXLFlBQVksQ0FBQztRQUM3QywwQkFBcUIsR0FBVyxZQUFZLENBQUM7UUFDN0MsaUNBQTRCLEdBQVcsWUFBWSxDQUFDO1FBQ3BELHlCQUFvQixHQUFXLGNBQWMsQ0FBQztRQUM5QyxpQ0FBNEIsR0FBVyxVQUFVLENBQUM7O1FBR2xELGtDQUE2QixHQUFXLGVBQWUsQ0FBQztRQUN4RCx1QkFBa0IsR0FBVyxZQUFZLENBQUM7UUFDMUMseUJBQW9CLEdBQVcsY0FBYyxDQUFDO1FBRTlDLDBCQUFxQixHQUFXLFVBQVUsQ0FBQztRQUMzQywyQkFBc0IsR0FBVyxjQUFjLENBQUM7O1FBR2hELGdCQUFXLEdBQVcsYUFBYSxDQUFDO1FBQ3BDLGlCQUFZLEdBQVcsY0FBYyxDQUFDO1FBQ3RDLGdCQUFXLEdBQVcsYUFBYSxDQUFDO1FBQ3BDLGlCQUFZLEdBQVcsY0FBYyxDQUFDOztRQUd0QywyQkFBc0IsR0FBVyxPQUFPLENBQUM7UUFDekMsMEJBQXFCLEdBQVcsTUFBTSxDQUFDO1FBQ3ZDLDhCQUF5QixHQUFXLFVBQVUsQ0FBQztRQUMvQyw2QkFBd0IsR0FBVyxTQUFTLENBQUM7UUFDN0MsNkJBQXdCLEdBQVcsU0FBUyxDQUFDO1FBQzdDLDhCQUF5QixHQUFXLFVBQVUsQ0FBQztRQUMvQyw0QkFBdUIsR0FBVyxRQUFRLENBQUM7UUFDM0MsMkJBQXNCLEdBQVcsT0FBTyxDQUFDO1FBQ3pDLDRCQUF1QixHQUFXLFFBQVEsQ0FBQztRQUMzQywrQkFBMEIsR0FBVyxXQUFXLENBQUM7UUFDakQsNkJBQXdCLEdBQVcsU0FBUyxDQUFDO1FBQzdDLDJCQUFzQixHQUFXLE9BQU8sQ0FBQztRQUN6Qyw0QkFBdUIsR0FBVyxRQUFRLENBQUM7UUFDM0MsOEJBQXlCLEdBQVcsVUFBVSxDQUFDO1FBQy9DLDRCQUF1QixHQUFXLFFBQVEsQ0FBQztRQUMzQywyQkFBc0IsR0FBVyxPQUFPLENBQUM7UUFDekMsMkJBQXNCLEdBQVcsT0FBTyxDQUFDO1FBQ3pDLDhCQUF5QixHQUFXLFVBQVUsQ0FBQztRQUMvQyw4QkFBeUIsR0FBVyxVQUFVLENBQUM7O1FBRy9DLGtCQUFhLEdBQVcsc0JBQXNCLENBQUM7UUFDL0MscUJBQWdCLEdBQVcseUJBQXlCLENBQUM7UUFDckQsZ0JBQVcsR0FBVyxlQUFlLENBQUM7UUFDdEMsY0FBUyxHQUFXLGFBQWEsQ0FBQztRQUNsQyw2QkFBd0IsR0FBVyw2QkFBNkIsQ0FBQztRQUNqRSxpQkFBWSxHQUFXLGdCQUFnQixDQUFDO0lBRTVELENBQUM7O2dCQXBFQSxVQUFVOztJQW9FWCx1QkFBQztDQUFBLEFBcEVELElBb0VDO1NBbkVZLGdCQUFnQjs7O0lBQ3pCLHNDQUFrRjs7SUFDbEYsMENBQXlEOztJQUN6RCx5Q0FBNEM7O0lBRTVDLDRDQUFtRDs7SUFDbkQscURBQWtFOztJQUdsRSxrREFBK0Q7O0lBQy9ELGtEQUErRDs7SUFDL0Qsa0RBQStEOztJQUMvRCxrREFBK0Q7O0lBQy9ELGlEQUE2RDs7SUFDN0QsMkRBQXFFOztJQUdyRSxpREFBNkQ7O0lBQzdELGlEQUE2RDs7SUFDN0QsaURBQTZEOztJQUM3RCx3REFBb0U7O0lBQ3BFLGdEQUE4RDs7SUFDOUQsd0RBQWtFOztJQUdsRSx5REFBd0U7O0lBQ3hFLDhDQUEwRDs7SUFDMUQsZ0RBQThEOztJQUU5RCxpREFBMkQ7O0lBQzNELGtEQUFnRTs7SUFHaEUsdUNBQW9EOztJQUNwRCx3Q0FBc0Q7O0lBQ3RELHVDQUFvRDs7SUFDcEQsd0NBQXNEOztJQUd0RCxrREFBeUQ7O0lBQ3pELGlEQUF1RDs7SUFDdkQscURBQStEOztJQUMvRCxvREFBNkQ7O0lBQzdELG9EQUE2RDs7SUFDN0QscURBQStEOztJQUMvRCxtREFBMkQ7O0lBQzNELGtEQUF5RDs7SUFDekQsbURBQTJEOztJQUMzRCxzREFBaUU7O0lBQ2pFLG9EQUE2RDs7SUFDN0Qsa0RBQXlEOztJQUN6RCxtREFBMkQ7O0lBQzNELHFEQUErRDs7SUFDL0QsbURBQTJEOztJQUMzRCxrREFBeUQ7O0lBQ3pELGtEQUF5RDs7SUFDekQscURBQStEOztJQUMvRCxxREFBK0Q7O0lBRy9ELHlDQUErRDs7SUFDL0QsNENBQXFFOztJQUNyRSx1Q0FBc0Q7O0lBQ3RELHFDQUFrRDs7SUFDbEQsb0RBQWlGOztJQUNqRix3Q0FBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb25zdGFudHNTZXJ2aWNlIHtcbiAgICBwdWJsaWMgcmVhZG9ubHkgYmFzZUFwcFVybDogc3RyaW5nID0gJ2h0dHA6Ly84OS4zMS43NS40NTo0NDMvU3ByaW5nLUpQQS1TZWN1cml0eSc7XG4gICAgcHVibGljIHJlYWRvbmx5IHRva2VuSGVhZGVyS2V5OiBzdHJpbmcgPSAnQXV0aG9yaXphdGlvbic7XG4gICAgcHVibGljIHJlYWRvbmx5IHBhdGhTZXBhcmF0b3I6IHN0cmluZyA9ICcvJztcblxuICAgIHB1YmxpYyByZWFkb25seSBsb2dpblNlcnZpY2VOYW1lOiBzdHJpbmcgPSAnbG9naW4nO1xuICAgIHB1YmxpYyByZWFkb25seSBjYW1iaW9QYXNzd29yZFNlcnZpY2VOYW1lOiBzdHJpbmcgPSAncHV0UGFzc3dvcmQnO1xuXG4gICAgLy8gaW1tb2JpbGlcbiAgICBwdWJsaWMgcmVhZG9ubHkgZ2V0SW1tb2JpbGlTZXJ2aWNlTmFtZTogc3RyaW5nID0gJ2dldGltbW9iaWxpJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgZ2V0SW1tb2JpbGVTZXJ2aWNlTmFtZTogc3RyaW5nID0gJ2dldGltbW9iaWxlJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgcHV0SW1tb2JpbGVTZXJ2aWNlTmFtZTogc3RyaW5nID0gJ3B1dGltbW9iaWxlJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgZGVsSW1tb2JpbGVTZXJ2aWNlTmFtZTogc3RyaW5nID0gJ2RlbGltbW9iaWxlJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgZ2V0Q2F0YXN0b1NlcnZpY2VOYW1lOiBzdHJpbmcgPSAnZ2V0Y2F0YXN0byc7XG4gICAgcHVibGljIHJlYWRvbmx5IGdldFBpYW5vQW1tb3J0YW1lbnRvU2VydmljZU5hbWU6IHN0cmluZyA9ICdnZXRQaWFubyc7XG5cbiAgICAvLyBjbGllbnRpXG4gICAgcHVibGljIHJlYWRvbmx5IGdldENsaWVudGlTZXJ2aWNlTmFtZTogc3RyaW5nID0gJ2dldGNsaWVudGknO1xuICAgIHB1YmxpYyByZWFkb25seSBnZXRDbGllbnRlU2VydmljZU5hbWU6IHN0cmluZyA9ICdnZXRjbGllbnRlJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgcHV0Q2xpZW50aVNlcnZpY2VOYW1lOiBzdHJpbmcgPSAncHV0Y2xpZW50ZSc7XG4gICAgcHVibGljIHJlYWRvbmx5IGFiaWxpdGFBcHBDbGllbnRlU2VydmljZU5hbWU6IHN0cmluZyA9ICdhcHBjbGllbnRlJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgYm9va1ZhbHVlU2VydmljZU5hbWU6IHN0cmluZyA9ICdnZXRib29rdmFsdWUnO1xuICAgIHB1YmxpYyByZWFkb25seSBwaWFub0FtbW9ydGFtZW50b1NlcnZpY2VOYW1lOiBzdHJpbmcgPSAnZ2V0cGlhbm8nO1xuXG4gICAgLy8gcmVwb3J0XG4gICAgcHVibGljIHJlYWRvbmx5IHNpdHVhemlvbmVHZW5lcmFsZVNlcnZpY2VOYW1lOiBzdHJpbmcgPSAnZ2V0c2l0dWF6aW9uZSc7XG4gICAgcHVibGljIHJlYWRvbmx5IGdyYWZpY2lTZXJ2aWNlTmFtZTogc3RyaW5nID0gJ2dldGdyYWZpY2knO1xuICAgIHB1YmxpYyByZWFkb25seSBwZGZSZXBvcnRTZXJ2aWNlTmFtZTogc3RyaW5nID0gJ2dldHBkZnJlcG9ydCc7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgcG9zdEVycm9yZVNlcnZpY2VOYW1lOiBzdHJpbmcgPSAnd3JpdGVMb2cnO1xuICAgIHB1YmxpYyByZWFkb25seSBnZXREcm9wZG93blNlcnZpY2VOYW1lOiBzdHJpbmcgPSAnZ2V0X2Ryb3Bkb3duJztcblxuICAgIC8vIGRvY3VtZW50aVxuICAgIHB1YmxpYyByZWFkb25seSBnZXRDYXJ0ZWxsZTogc3RyaW5nID0gJ2dldGNhcnRlbGxlJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgZ2V0RG9jdW1lbnRvOiBzdHJpbmcgPSAnZ2V0ZG9jdW1lbnRvJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgcHV0Q2FydGVsbGU6IHN0cmluZyA9ICdwdXRjYXJ0ZWxsZSc7XG4gICAgcHVibGljIHJlYWRvbmx5IHB1dERvY3VtZW50bzogc3RyaW5nID0gJ3B1dGRvY3VtZW50byc7XG5cbiAgICAvLyB0aXBvbG9naWEgaWNvbmUgaW1tb2JpbGlcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGlwb2xvZ2lhSW1tb2JpbGVWaWxsYTogc3RyaW5nID0gJ3ZpbGxhJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGlwb2xvZ2lhSW1tb2JpbGVDYXNhOiBzdHJpbmcgPSAnY2FzYSc7XG4gICAgcHVibGljIHJlYWRvbmx5IHRpcG9sb2dpYUltbW9iaWxlQWdyaWNvbG86IHN0cmluZyA9ICdhZ3JpY29sbyc7XG4gICAgcHVibGljIHJlYWRvbmx5IHRpcG9sb2dpYUltbW9iaWxlVWZmaWNpbzogc3RyaW5nID0gJ3VmZmljaW8nO1xuICAgIHB1YmxpYyByZWFkb25seSB0aXBvbG9naWFJbW1vYmlsZUFsYmVyZ286IHN0cmluZyA9ICdhbGJlcmdvJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGlwb2xvZ2lhSW1tb2JpbGVPc3BlZGFsZTogc3RyaW5nID0gJ29zcGVkYWxlJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGlwb2xvZ2lhSW1tb2JpbGVTY3VvbGE6IHN0cmluZyA9ICdzY3VvbGEnO1xuICAgIHB1YmxpYyByZWFkb25seSB0aXBvbG9naWFJbW1vYmlsZU11c2VvOiBzdHJpbmcgPSAnbXVzZW8nO1xuICAgIHB1YmxpYyByZWFkb25seSB0aXBvbG9naWFJbW1vYmlsZUNoaWVzYTogc3RyaW5nID0gJ2NoaWVzYSc7XG4gICAgcHVibGljIHJlYWRvbmx5IHRpcG9sb2dpYUltbW9iaWxlTWFnYXp6aW5vOiBzdHJpbmcgPSAnbWFnYXp6aW5vJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGlwb2xvZ2lhSW1tb2JpbGVOZWdvemlvOiBzdHJpbmcgPSAnbmVnb3ppbyc7XG4gICAgcHVibGljIHJlYWRvbmx5IHRpcG9sb2dpYUltbW9iaWxlU3BvcnQ6IHN0cmluZyA9ICdzcG9ydCc7XG4gICAgcHVibGljIHJlYWRvbmx5IHRpcG9sb2dpYUltbW9iaWxlR2FyYWdlOiBzdHJpbmcgPSAnZ2FyYWdlJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGlwb2xvZ2lhSW1tb2JpbGVGYWJicmljYTogc3RyaW5nID0gJ2ZhYmJyaWNhJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGlwb2xvZ2lhSW1tb2JpbGVUZWF0cm86IHN0cmluZyA9ICd0ZWF0cm8nO1xuICAgIHB1YmxpYyByZWFkb25seSB0aXBvbG9naWFJbW1vYmlsZUJhbmNhOiBzdHJpbmcgPSAnYmFuY2EnO1xuICAgIHB1YmxpYyByZWFkb25seSB0aXBvbG9naWFJbW1vYmlsZVBvbnRlOiBzdHJpbmcgPSAncG9udGUnO1xuICAgIHB1YmxpYyByZWFkb25seSB0aXBvbG9naWFJbW1vYmlsZVN0YXppb25lOiBzdHJpbmcgPSAnc3RhemlvbmUnO1xuICAgIHB1YmxpYyByZWFkb25seSB0aXBvbG9naWFJbW1vYmlsZUNhbnRpZXJlOiBzdHJpbmcgPSAnY2FudGllcmUnO1xuXG4gICAgLy8gZHJvcGRvd25cbiAgICBwdWJsaWMgcmVhZG9ubHkgZ2V0RGRsRXVyaWJvcjogc3RyaW5nID0gJ2dldF9kZGxfdGlwb19ldXJpYm9yJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgZ2V0RGRsQWZmaXR0dWFyaTogc3RyaW5nID0gJ2dldF9kZGxfdGlwb19hZmZpdHR1YXJpJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgZ2V0RGRsVGFzc2U6IHN0cmluZyA9ICdnZXRfZGRsX3Rhc3NlJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgZ2V0RGRsT21pOiBzdHJpbmcgPSAnZ2V0X2RkbF9vbWknO1xuICAgIHB1YmxpYyByZWFkb25seSBnZXREZGxUaXBvbG9naWFDYXRhc3RhbGU6IHN0cmluZyA9ICdnZXRfZGRsX3RpcG9sb2dpYV9jYXRhc3RhbGUnO1xuICAgIHB1YmxpYyByZWFkb25seSBnZXREZGxDb211bmk6IHN0cmluZyA9ICdnZXRfZGRsX2NvbXVuaSc7XG5cbn1cbiJdfQ==