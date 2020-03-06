/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var ConstantsService = /** @class */ (function () {
    function ConstantsService() {
        this.baseAppUrl = 'http://89.31.75.45:443/Spring-JPA-Security';
        // public readonly baseAppUrl: string = 'http://test.readvice.it:443/Spring-JPA-Security';
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
        this.getPianoAmmortamentoServiceName = 'getpiano';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9icm9rZXItbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2NvbW1vbi9jb25zdGFudHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQztJQUFBO1FBRW9CLGVBQVUsR0FBVyw0Q0FBNEMsQ0FBQzs7UUFFbEUsbUJBQWMsR0FBVyxlQUFlLENBQUM7UUFDekMsa0JBQWEsR0FBVyxHQUFHLENBQUM7UUFFNUIscUJBQWdCLEdBQVcsT0FBTyxDQUFDO1FBQ25DLDhCQUF5QixHQUFXLGFBQWEsQ0FBQzs7UUFHbEQsMkJBQXNCLEdBQVcsYUFBYSxDQUFDO1FBQy9DLDJCQUFzQixHQUFXLGFBQWEsQ0FBQztRQUMvQywyQkFBc0IsR0FBVyxhQUFhLENBQUM7UUFDL0MsMkJBQXNCLEdBQVcsYUFBYSxDQUFDO1FBQy9DLDBCQUFxQixHQUFXLFlBQVksQ0FBQztRQUM3QyxvQ0FBK0IsR0FBVyxVQUFVLENBQUM7O1FBR3JELDBCQUFxQixHQUFXLFlBQVksQ0FBQztRQUM3QywwQkFBcUIsR0FBVyxZQUFZLENBQUM7UUFDN0MsMEJBQXFCLEdBQVcsWUFBWSxDQUFDO1FBQzdDLGlDQUE0QixHQUFXLFlBQVksQ0FBQztRQUNwRCx5QkFBb0IsR0FBVyxjQUFjLENBQUM7UUFDOUMsaUNBQTRCLEdBQVcsVUFBVSxDQUFDOztRQUdsRCxrQ0FBNkIsR0FBVyxlQUFlLENBQUM7UUFDeEQsdUJBQWtCLEdBQVcsWUFBWSxDQUFDO1FBQzFDLHlCQUFvQixHQUFXLGNBQWMsQ0FBQztRQUU5QywwQkFBcUIsR0FBVyxVQUFVLENBQUM7UUFDM0MsMkJBQXNCLEdBQVcsY0FBYyxDQUFDOztRQUdoRCxnQkFBVyxHQUFXLGFBQWEsQ0FBQztRQUNwQyxpQkFBWSxHQUFXLGNBQWMsQ0FBQztRQUN0QyxnQkFBVyxHQUFXLGFBQWEsQ0FBQztRQUNwQyxpQkFBWSxHQUFXLGNBQWMsQ0FBQzs7UUFHdEMsMkJBQXNCLEdBQVcsT0FBTyxDQUFDO1FBQ3pDLDBCQUFxQixHQUFXLE1BQU0sQ0FBQztRQUN2Qyw4QkFBeUIsR0FBVyxVQUFVLENBQUM7UUFDL0MsNkJBQXdCLEdBQVcsU0FBUyxDQUFDO1FBQzdDLDZCQUF3QixHQUFXLFNBQVMsQ0FBQztRQUM3Qyw4QkFBeUIsR0FBVyxVQUFVLENBQUM7UUFDL0MsNEJBQXVCLEdBQVcsUUFBUSxDQUFDO1FBQzNDLDJCQUFzQixHQUFXLE9BQU8sQ0FBQztRQUN6Qyw0QkFBdUIsR0FBVyxRQUFRLENBQUM7UUFDM0MsK0JBQTBCLEdBQVcsV0FBVyxDQUFDO1FBQ2pELDZCQUF3QixHQUFXLFNBQVMsQ0FBQztRQUM3QywyQkFBc0IsR0FBVyxPQUFPLENBQUM7UUFDekMsNEJBQXVCLEdBQVcsUUFBUSxDQUFDO1FBQzNDLDhCQUF5QixHQUFXLFVBQVUsQ0FBQztRQUMvQyw0QkFBdUIsR0FBVyxRQUFRLENBQUM7UUFDM0MsMkJBQXNCLEdBQVcsT0FBTyxDQUFDO1FBQ3pDLDJCQUFzQixHQUFXLE9BQU8sQ0FBQztRQUN6Qyw4QkFBeUIsR0FBVyxVQUFVLENBQUM7UUFDL0MsOEJBQXlCLEdBQVcsVUFBVSxDQUFDO1FBQy9DLDZCQUF3QixHQUFXLFNBQVMsQ0FBQzs7UUFHN0Msa0JBQWEsR0FBVyxzQkFBc0IsQ0FBQztRQUMvQyxxQkFBZ0IsR0FBVyx5QkFBeUIsQ0FBQztRQUNyRCxnQkFBVyxHQUFXLGVBQWUsQ0FBQztRQUN0QyxjQUFTLEdBQVcsYUFBYSxDQUFDO1FBQ2xDLDZCQUF3QixHQUFXLDZCQUE2QixDQUFDO1FBQ2pFLGlCQUFZLEdBQVcsZ0JBQWdCLENBQUM7O1FBR3hDLGdCQUFXLEdBQVcsSUFBSSxDQUFDLENBQUMsK0VBQStFO0lBRS9ILENBQUM7O2dCQXpFQSxVQUFVOztJQXlFWCx1QkFBQztDQUFBLEFBekVELElBeUVDO1NBeEVZLGdCQUFnQjs7O0lBQ3pCLHNDQUFrRjs7SUFFbEYsMENBQXlEOztJQUN6RCx5Q0FBNEM7O0lBRTVDLDRDQUFtRDs7SUFDbkQscURBQWtFOztJQUdsRSxrREFBK0Q7O0lBQy9ELGtEQUErRDs7SUFDL0Qsa0RBQStEOztJQUMvRCxrREFBK0Q7O0lBQy9ELGlEQUE2RDs7SUFDN0QsMkRBQXFFOztJQUdyRSxpREFBNkQ7O0lBQzdELGlEQUE2RDs7SUFDN0QsaURBQTZEOztJQUM3RCx3REFBb0U7O0lBQ3BFLGdEQUE4RDs7SUFDOUQsd0RBQWtFOztJQUdsRSx5REFBd0U7O0lBQ3hFLDhDQUEwRDs7SUFDMUQsZ0RBQThEOztJQUU5RCxpREFBMkQ7O0lBQzNELGtEQUFnRTs7SUFHaEUsdUNBQW9EOztJQUNwRCx3Q0FBc0Q7O0lBQ3RELHVDQUFvRDs7SUFDcEQsd0NBQXNEOztJQUd0RCxrREFBeUQ7O0lBQ3pELGlEQUF1RDs7SUFDdkQscURBQStEOztJQUMvRCxvREFBNkQ7O0lBQzdELG9EQUE2RDs7SUFDN0QscURBQStEOztJQUMvRCxtREFBMkQ7O0lBQzNELGtEQUF5RDs7SUFDekQsbURBQTJEOztJQUMzRCxzREFBaUU7O0lBQ2pFLG9EQUE2RDs7SUFDN0Qsa0RBQXlEOztJQUN6RCxtREFBMkQ7O0lBQzNELHFEQUErRDs7SUFDL0QsbURBQTJEOztJQUMzRCxrREFBeUQ7O0lBQ3pELGtEQUF5RDs7SUFDekQscURBQStEOztJQUMvRCxxREFBK0Q7O0lBQy9ELG9EQUE2RDs7SUFHN0QseUNBQStEOztJQUMvRCw0Q0FBcUU7O0lBQ3JFLHVDQUFzRDs7SUFDdEQscUNBQWtEOztJQUNsRCxvREFBaUY7O0lBQ2pGLHdDQUF3RDs7SUFHeEQsdUNBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29uc3RhbnRzU2VydmljZSB7XG4gICAgcHVibGljIHJlYWRvbmx5IGJhc2VBcHBVcmw6IHN0cmluZyA9ICdodHRwOi8vODkuMzEuNzUuNDU6NDQzL1NwcmluZy1KUEEtU2VjdXJpdHknO1xuICAgIC8vIHB1YmxpYyByZWFkb25seSBiYXNlQXBwVXJsOiBzdHJpbmcgPSAnaHR0cDovL3Rlc3QucmVhZHZpY2UuaXQ6NDQzL1NwcmluZy1KUEEtU2VjdXJpdHknO1xuICAgIHB1YmxpYyByZWFkb25seSB0b2tlbkhlYWRlcktleTogc3RyaW5nID0gJ0F1dGhvcml6YXRpb24nO1xuICAgIHB1YmxpYyByZWFkb25seSBwYXRoU2VwYXJhdG9yOiBzdHJpbmcgPSAnLyc7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgbG9naW5TZXJ2aWNlTmFtZTogc3RyaW5nID0gJ2xvZ2luJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgY2FtYmlvUGFzc3dvcmRTZXJ2aWNlTmFtZTogc3RyaW5nID0gJ3B1dFBhc3N3b3JkJztcblxuICAgIC8vIGltbW9iaWxpXG4gICAgcHVibGljIHJlYWRvbmx5IGdldEltbW9iaWxpU2VydmljZU5hbWU6IHN0cmluZyA9ICdnZXRpbW1vYmlsaSc7XG4gICAgcHVibGljIHJlYWRvbmx5IGdldEltbW9iaWxlU2VydmljZU5hbWU6IHN0cmluZyA9ICdnZXRpbW1vYmlsZSc7XG4gICAgcHVibGljIHJlYWRvbmx5IHB1dEltbW9iaWxlU2VydmljZU5hbWU6IHN0cmluZyA9ICdwdXRpbW1vYmlsZSc7XG4gICAgcHVibGljIHJlYWRvbmx5IGRlbEltbW9iaWxlU2VydmljZU5hbWU6IHN0cmluZyA9ICdkZWxpbW1vYmlsZSc7XG4gICAgcHVibGljIHJlYWRvbmx5IGdldENhdGFzdG9TZXJ2aWNlTmFtZTogc3RyaW5nID0gJ2dldGNhdGFzdG8nO1xuICAgIHB1YmxpYyByZWFkb25seSBnZXRQaWFub0FtbW9ydGFtZW50b1NlcnZpY2VOYW1lOiBzdHJpbmcgPSAnZ2V0cGlhbm8nO1xuXG4gICAgLy8gY2xpZW50aVxuICAgIHB1YmxpYyByZWFkb25seSBnZXRDbGllbnRpU2VydmljZU5hbWU6IHN0cmluZyA9ICdnZXRjbGllbnRpJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgZ2V0Q2xpZW50ZVNlcnZpY2VOYW1lOiBzdHJpbmcgPSAnZ2V0Y2xpZW50ZSc7XG4gICAgcHVibGljIHJlYWRvbmx5IHB1dENsaWVudGlTZXJ2aWNlTmFtZTogc3RyaW5nID0gJ3B1dGNsaWVudGUnO1xuICAgIHB1YmxpYyByZWFkb25seSBhYmlsaXRhQXBwQ2xpZW50ZVNlcnZpY2VOYW1lOiBzdHJpbmcgPSAnYXBwY2xpZW50ZSc7XG4gICAgcHVibGljIHJlYWRvbmx5IGJvb2tWYWx1ZVNlcnZpY2VOYW1lOiBzdHJpbmcgPSAnZ2V0Ym9va3ZhbHVlJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgcGlhbm9BbW1vcnRhbWVudG9TZXJ2aWNlTmFtZTogc3RyaW5nID0gJ2dldHBpYW5vJztcblxuICAgIC8vIHJlcG9ydFxuICAgIHB1YmxpYyByZWFkb25seSBzaXR1YXppb25lR2VuZXJhbGVTZXJ2aWNlTmFtZTogc3RyaW5nID0gJ2dldHNpdHVhemlvbmUnO1xuICAgIHB1YmxpYyByZWFkb25seSBncmFmaWNpU2VydmljZU5hbWU6IHN0cmluZyA9ICdnZXRncmFmaWNpJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgcGRmUmVwb3J0U2VydmljZU5hbWU6IHN0cmluZyA9ICdnZXRwZGZyZXBvcnQnO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IHBvc3RFcnJvcmVTZXJ2aWNlTmFtZTogc3RyaW5nID0gJ3dyaXRlTG9nJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgZ2V0RHJvcGRvd25TZXJ2aWNlTmFtZTogc3RyaW5nID0gJ2dldF9kcm9wZG93bic7XG5cbiAgICAvLyBkb2N1bWVudGlcbiAgICBwdWJsaWMgcmVhZG9ubHkgZ2V0Q2FydGVsbGU6IHN0cmluZyA9ICdnZXRjYXJ0ZWxsZSc7XG4gICAgcHVibGljIHJlYWRvbmx5IGdldERvY3VtZW50bzogc3RyaW5nID0gJ2dldGRvY3VtZW50byc7XG4gICAgcHVibGljIHJlYWRvbmx5IHB1dENhcnRlbGxlOiBzdHJpbmcgPSAncHV0Y2FydGVsbGUnO1xuICAgIHB1YmxpYyByZWFkb25seSBwdXREb2N1bWVudG86IHN0cmluZyA9ICdwdXRkb2N1bWVudG8nO1xuXG4gICAgLy8gdGlwb2xvZ2lhIGljb25lIGltbW9iaWxpXG4gICAgcHVibGljIHJlYWRvbmx5IHRpcG9sb2dpYUltbW9iaWxlVmlsbGE6IHN0cmluZyA9ICd2aWxsYSc7XG4gICAgcHVibGljIHJlYWRvbmx5IHRpcG9sb2dpYUltbW9iaWxlQ2FzYTogc3RyaW5nID0gJ2Nhc2EnO1xuICAgIHB1YmxpYyByZWFkb25seSB0aXBvbG9naWFJbW1vYmlsZUFncmljb2xvOiBzdHJpbmcgPSAnYWdyaWNvbG8nO1xuICAgIHB1YmxpYyByZWFkb25seSB0aXBvbG9naWFJbW1vYmlsZVVmZmljaW86IHN0cmluZyA9ICd1ZmZpY2lvJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGlwb2xvZ2lhSW1tb2JpbGVBbGJlcmdvOiBzdHJpbmcgPSAnYWxiZXJnbyc7XG4gICAgcHVibGljIHJlYWRvbmx5IHRpcG9sb2dpYUltbW9iaWxlT3NwZWRhbGU6IHN0cmluZyA9ICdvc3BlZGFsZSc7XG4gICAgcHVibGljIHJlYWRvbmx5IHRpcG9sb2dpYUltbW9iaWxlU2N1b2xhOiBzdHJpbmcgPSAnc2N1b2xhJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGlwb2xvZ2lhSW1tb2JpbGVNdXNlbzogc3RyaW5nID0gJ211c2VvJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGlwb2xvZ2lhSW1tb2JpbGVDaGllc2E6IHN0cmluZyA9ICdjaGllc2EnO1xuICAgIHB1YmxpYyByZWFkb25seSB0aXBvbG9naWFJbW1vYmlsZU1hZ2F6emlubzogc3RyaW5nID0gJ21hZ2F6emlubyc7XG4gICAgcHVibGljIHJlYWRvbmx5IHRpcG9sb2dpYUltbW9iaWxlTmVnb3ppbzogc3RyaW5nID0gJ25lZ296aW8nO1xuICAgIHB1YmxpYyByZWFkb25seSB0aXBvbG9naWFJbW1vYmlsZVNwb3J0OiBzdHJpbmcgPSAnc3BvcnQnO1xuICAgIHB1YmxpYyByZWFkb25seSB0aXBvbG9naWFJbW1vYmlsZUdhcmFnZTogc3RyaW5nID0gJ2dhcmFnZSc7XG4gICAgcHVibGljIHJlYWRvbmx5IHRpcG9sb2dpYUltbW9iaWxlRmFiYnJpY2E6IHN0cmluZyA9ICdmYWJicmljYSc7XG4gICAgcHVibGljIHJlYWRvbmx5IHRpcG9sb2dpYUltbW9iaWxlVGVhdHJvOiBzdHJpbmcgPSAndGVhdHJvJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGlwb2xvZ2lhSW1tb2JpbGVCYW5jYTogc3RyaW5nID0gJ2JhbmNhJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGlwb2xvZ2lhSW1tb2JpbGVQb250ZTogc3RyaW5nID0gJ3BvbnRlJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGlwb2xvZ2lhSW1tb2JpbGVTdGF6aW9uZTogc3RyaW5nID0gJ3N0YXppb25lJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGlwb2xvZ2lhSW1tb2JpbGVDYW50aWVyZTogc3RyaW5nID0gJ2NhbnRpZXJlJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGlwb2xvZ2lhSW1tb2JpbGVUZXJyZW5vOiBzdHJpbmcgPSAndGVycmVubyc7XG5cbiAgICAvLyBkcm9wZG93blxuICAgIHB1YmxpYyByZWFkb25seSBnZXREZGxFdXJpYm9yOiBzdHJpbmcgPSAnZ2V0X2RkbF90aXBvX2V1cmlib3InO1xuICAgIHB1YmxpYyByZWFkb25seSBnZXREZGxBZmZpdHR1YXJpOiBzdHJpbmcgPSAnZ2V0X2RkbF90aXBvX2FmZml0dHVhcmknO1xuICAgIHB1YmxpYyByZWFkb25seSBnZXREZGxUYXNzZTogc3RyaW5nID0gJ2dldF9kZGxfdGFzc2UnO1xuICAgIHB1YmxpYyByZWFkb25seSBnZXREZGxPbWk6IHN0cmluZyA9ICdnZXRfZGRsX29taSc7XG4gICAgcHVibGljIHJlYWRvbmx5IGdldERkbFRpcG9sb2dpYUNhdGFzdGFsZTogc3RyaW5nID0gJ2dldF9kZGxfdGlwb2xvZ2lhX2NhdGFzdGFsZSc7XG4gICAgcHVibGljIHJlYWRvbmx5IGdldERkbENvbXVuaTogc3RyaW5nID0gJ2dldF9kZGxfY29tdW5pJztcblxuICAgIC8vIHZhcmlcbiAgICBwdWJsaWMgcmVhZG9ubHkgaHR0cFRpbWVvdXQ6IG51bWJlciA9IDUwMDA7IC8vIHBlciBpbCBtb21lbnRvIGlsIHRpbWVvdXQgw6ggaW1wb3N0YXRvIGEgNSBzZWNvbmRpIHBlciBsZSBjaGlhbWF0ZSBnZXQgZSBwb3N0XG5cbn1cbiJdfQ==