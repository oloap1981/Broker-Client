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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9icm9rZXItbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2NvbW1vbi9jb25zdGFudHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQztJQUFBO1FBRW9CLGVBQVUsR0FBVyw0Q0FBNEMsQ0FBQztRQUNsRSxtQkFBYyxHQUFXLGVBQWUsQ0FBQztRQUN6QyxrQkFBYSxHQUFXLEdBQUcsQ0FBQztRQUU1QixxQkFBZ0IsR0FBVyxPQUFPLENBQUM7UUFDbkMsOEJBQXlCLEdBQVcsYUFBYSxDQUFDOztRQUdsRCwyQkFBc0IsR0FBVyxhQUFhLENBQUM7UUFDL0MsMkJBQXNCLEdBQVcsYUFBYSxDQUFDO1FBQy9DLDJCQUFzQixHQUFXLGFBQWEsQ0FBQztRQUMvQywyQkFBc0IsR0FBVyxhQUFhLENBQUM7UUFDL0MsMEJBQXFCLEdBQVcsWUFBWSxDQUFDO1FBQzdDLG9DQUErQixHQUFXLFVBQVUsQ0FBQzs7UUFHckQsMEJBQXFCLEdBQVcsWUFBWSxDQUFDO1FBQzdDLDBCQUFxQixHQUFXLFlBQVksQ0FBQztRQUM3QyxpQ0FBNEIsR0FBVyxZQUFZLENBQUM7UUFDcEQseUJBQW9CLEdBQVcsY0FBYyxDQUFDO1FBQzlDLGlDQUE0QixHQUFXLFVBQVUsQ0FBQzs7UUFHbEQsa0NBQTZCLEdBQVcsZUFBZSxDQUFDO1FBQ3hELHVCQUFrQixHQUFXLFlBQVksQ0FBQztRQUMxQyx5QkFBb0IsR0FBVyxjQUFjLENBQUM7UUFFOUMsMEJBQXFCLEdBQVcsVUFBVSxDQUFDO1FBQzNDLDJCQUFzQixHQUFXLGNBQWMsQ0FBQzs7UUFHaEQsMkJBQXNCLEdBQVcsT0FBTyxDQUFDO1FBQ3pDLDBCQUFxQixHQUFXLE1BQU0sQ0FBQztRQUN2Qyw4QkFBeUIsR0FBVyxVQUFVLENBQUM7UUFDL0MsNkJBQXdCLEdBQVcsU0FBUyxDQUFDO1FBQzdDLDZCQUF3QixHQUFXLFNBQVMsQ0FBQztRQUM3Qyw4QkFBeUIsR0FBVyxVQUFVLENBQUM7UUFDL0MsNEJBQXVCLEdBQVcsUUFBUSxDQUFDO1FBQzNDLDJCQUFzQixHQUFXLE9BQU8sQ0FBQztRQUN6Qyw0QkFBdUIsR0FBVyxRQUFRLENBQUM7UUFDM0MsK0JBQTBCLEdBQVcsV0FBVyxDQUFDO1FBQ2pELDZCQUF3QixHQUFXLFNBQVMsQ0FBQztRQUM3QywyQkFBc0IsR0FBVyxPQUFPLENBQUM7UUFDekMsNEJBQXVCLEdBQVcsUUFBUSxDQUFDO1FBQzNDLDhCQUF5QixHQUFXLFVBQVUsQ0FBQztRQUMvQyw0QkFBdUIsR0FBVyxRQUFRLENBQUM7UUFDM0MsMkJBQXNCLEdBQVcsT0FBTyxDQUFDO1FBQ3pDLDJCQUFzQixHQUFXLE9BQU8sQ0FBQztRQUN6Qyw4QkFBeUIsR0FBVyxVQUFVLENBQUM7UUFDL0MsOEJBQXlCLEdBQVcsVUFBVSxDQUFDOztRQUcvQyxrQkFBYSxHQUFXLHNCQUFzQixDQUFDO1FBQy9DLHFCQUFnQixHQUFXLHlCQUF5QixDQUFDO1FBQ3JELGdCQUFXLEdBQVcsZUFBZSxDQUFDO1FBQ3RDLGNBQVMsR0FBVyxhQUFhLENBQUM7UUFDbEMsNkJBQXdCLEdBQVcsNkJBQTZCLENBQUM7SUFDckYsQ0FBQzs7Z0JBM0RBLFVBQVU7O0lBMkRYLHVCQUFDO0NBQUEsQUEzREQsSUEyREM7U0ExRFksZ0JBQWdCOzs7SUFDekIsc0NBQWtGOztJQUNsRiwwQ0FBeUQ7O0lBQ3pELHlDQUE0Qzs7SUFFNUMsNENBQW1EOztJQUNuRCxxREFBa0U7O0lBR2xFLGtEQUErRDs7SUFDL0Qsa0RBQStEOztJQUMvRCxrREFBK0Q7O0lBQy9ELGtEQUErRDs7SUFDL0QsaURBQTZEOztJQUM3RCwyREFBcUU7O0lBR3JFLGlEQUE2RDs7SUFDN0QsaURBQTZEOztJQUM3RCx3REFBb0U7O0lBQ3BFLGdEQUE4RDs7SUFDOUQsd0RBQWtFOztJQUdsRSx5REFBd0U7O0lBQ3hFLDhDQUEwRDs7SUFDMUQsZ0RBQThEOztJQUU5RCxpREFBMkQ7O0lBQzNELGtEQUFnRTs7SUFHaEUsa0RBQXlEOztJQUN6RCxpREFBdUQ7O0lBQ3ZELHFEQUErRDs7SUFDL0Qsb0RBQTZEOztJQUM3RCxvREFBNkQ7O0lBQzdELHFEQUErRDs7SUFDL0QsbURBQTJEOztJQUMzRCxrREFBeUQ7O0lBQ3pELG1EQUEyRDs7SUFDM0Qsc0RBQWlFOztJQUNqRSxvREFBNkQ7O0lBQzdELGtEQUF5RDs7SUFDekQsbURBQTJEOztJQUMzRCxxREFBK0Q7O0lBQy9ELG1EQUEyRDs7SUFDM0Qsa0RBQXlEOztJQUN6RCxrREFBeUQ7O0lBQ3pELHFEQUErRDs7SUFDL0QscURBQStEOztJQUcvRCx5Q0FBK0Q7O0lBQy9ELDRDQUFxRTs7SUFDckUsdUNBQXNEOztJQUN0RCxxQ0FBa0Q7O0lBQ2xELG9EQUFpRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbnN0YW50c1NlcnZpY2Uge1xuICAgIHB1YmxpYyByZWFkb25seSBiYXNlQXBwVXJsOiBzdHJpbmcgPSAnaHR0cDovLzg5LjMxLjc1LjQ1OjQ0My9TcHJpbmctSlBBLVNlY3VyaXR5JztcbiAgICBwdWJsaWMgcmVhZG9ubHkgdG9rZW5IZWFkZXJLZXk6IHN0cmluZyA9ICdBdXRob3JpemF0aW9uJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgcGF0aFNlcGFyYXRvcjogc3RyaW5nID0gJy8nO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGxvZ2luU2VydmljZU5hbWU6IHN0cmluZyA9ICdsb2dpbic7XG4gICAgcHVibGljIHJlYWRvbmx5IGNhbWJpb1Bhc3N3b3JkU2VydmljZU5hbWU6IHN0cmluZyA9ICdwdXRQYXNzd29yZCc7XG5cbiAgICAvLyBpbW1vYmlsaVxuICAgIHB1YmxpYyByZWFkb25seSBnZXRJbW1vYmlsaVNlcnZpY2VOYW1lOiBzdHJpbmcgPSAnZ2V0aW1tb2JpbGknO1xuICAgIHB1YmxpYyByZWFkb25seSBnZXRJbW1vYmlsZVNlcnZpY2VOYW1lOiBzdHJpbmcgPSAnZ2V0aW1tb2JpbGUnO1xuICAgIHB1YmxpYyByZWFkb25seSBwdXRJbW1vYmlsZVNlcnZpY2VOYW1lOiBzdHJpbmcgPSAncHV0aW1tb2JpbGUnO1xuICAgIHB1YmxpYyByZWFkb25seSBkZWxJbW1vYmlsZVNlcnZpY2VOYW1lOiBzdHJpbmcgPSAnZGVsaW1tb2JpbGUnO1xuICAgIHB1YmxpYyByZWFkb25seSBnZXRDYXRhc3RvU2VydmljZU5hbWU6IHN0cmluZyA9ICdnZXRjYXRhc3RvJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgZ2V0UGlhbm9BbW1vcnRhbWVudG9TZXJ2aWNlTmFtZTogc3RyaW5nID0gJ2dldFBpYW5vJztcblxuICAgIC8vIGNsaWVudGlcbiAgICBwdWJsaWMgcmVhZG9ubHkgZ2V0Q2xpZW50aVNlcnZpY2VOYW1lOiBzdHJpbmcgPSAnZ2V0Y2xpZW50aSc7XG4gICAgcHVibGljIHJlYWRvbmx5IHB1dENsaWVudGlTZXJ2aWNlTmFtZTogc3RyaW5nID0gJ3B1dGNsaWVudGUnO1xuICAgIHB1YmxpYyByZWFkb25seSBhYmlsaXRhQXBwQ2xpZW50ZVNlcnZpY2VOYW1lOiBzdHJpbmcgPSAnYXBwY2xpZW50ZSc7XG4gICAgcHVibGljIHJlYWRvbmx5IGJvb2tWYWx1ZVNlcnZpY2VOYW1lOiBzdHJpbmcgPSAnZ2V0Ym9va3ZhbHVlJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgcGlhbm9BbW1vcnRhbWVudG9TZXJ2aWNlTmFtZTogc3RyaW5nID0gJ2dldHBpYW5vJztcblxuICAgIC8vIHJlcG9ydFxuICAgIHB1YmxpYyByZWFkb25seSBzaXR1YXppb25lR2VuZXJhbGVTZXJ2aWNlTmFtZTogc3RyaW5nID0gJ2dldHNpdHVhemlvbmUnO1xuICAgIHB1YmxpYyByZWFkb25seSBncmFmaWNpU2VydmljZU5hbWU6IHN0cmluZyA9ICdnZXRncmFmaWNpJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgcGRmUmVwb3J0U2VydmljZU5hbWU6IHN0cmluZyA9ICdnZXRwZGZyZXBvcnQnO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IHBvc3RFcnJvcmVTZXJ2aWNlTmFtZTogc3RyaW5nID0gJ3dyaXRlTG9nJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgZ2V0RHJvcGRvd25TZXJ2aWNlTmFtZTogc3RyaW5nID0gJ2dldF9kcm9wZG93bic7XG5cbiAgICAvLyB0aXBvbG9naWEgaWNvbmUgaW1tb2JpbGlcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGlwb2xvZ2lhSW1tb2JpbGVWaWxsYTogc3RyaW5nID0gJ3ZpbGxhJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGlwb2xvZ2lhSW1tb2JpbGVDYXNhOiBzdHJpbmcgPSAnY2FzYSc7XG4gICAgcHVibGljIHJlYWRvbmx5IHRpcG9sb2dpYUltbW9iaWxlQWdyaWNvbG86IHN0cmluZyA9ICdhZ3JpY29sbyc7XG4gICAgcHVibGljIHJlYWRvbmx5IHRpcG9sb2dpYUltbW9iaWxlVWZmaWNpbzogc3RyaW5nID0gJ3VmZmljaW8nO1xuICAgIHB1YmxpYyByZWFkb25seSB0aXBvbG9naWFJbW1vYmlsZUFsYmVyZ286IHN0cmluZyA9ICdhbGJlcmdvJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGlwb2xvZ2lhSW1tb2JpbGVPc3BlZGFsZTogc3RyaW5nID0gJ29zcGVkYWxlJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGlwb2xvZ2lhSW1tb2JpbGVTY3VvbGE6IHN0cmluZyA9ICdzY3VvbGEnO1xuICAgIHB1YmxpYyByZWFkb25seSB0aXBvbG9naWFJbW1vYmlsZU11c2VvOiBzdHJpbmcgPSAnbXVzZW8nO1xuICAgIHB1YmxpYyByZWFkb25seSB0aXBvbG9naWFJbW1vYmlsZUNoaWVzYTogc3RyaW5nID0gJ2NoaWVzYSc7XG4gICAgcHVibGljIHJlYWRvbmx5IHRpcG9sb2dpYUltbW9iaWxlTWFnYXp6aW5vOiBzdHJpbmcgPSAnbWFnYXp6aW5vJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGlwb2xvZ2lhSW1tb2JpbGVOZWdvemlvOiBzdHJpbmcgPSAnbmVnb3ppbyc7XG4gICAgcHVibGljIHJlYWRvbmx5IHRpcG9sb2dpYUltbW9iaWxlU3BvcnQ6IHN0cmluZyA9ICdzcG9ydCc7XG4gICAgcHVibGljIHJlYWRvbmx5IHRpcG9sb2dpYUltbW9iaWxlR2FyYWdlOiBzdHJpbmcgPSAnZ2FyYWdlJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGlwb2xvZ2lhSW1tb2JpbGVGYWJicmljYTogc3RyaW5nID0gJ2ZhYmJyaWNhJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGlwb2xvZ2lhSW1tb2JpbGVUZWF0cm86IHN0cmluZyA9ICd0ZWF0cm8nO1xuICAgIHB1YmxpYyByZWFkb25seSB0aXBvbG9naWFJbW1vYmlsZUJhbmNhOiBzdHJpbmcgPSAnYmFuY2EnO1xuICAgIHB1YmxpYyByZWFkb25seSB0aXBvbG9naWFJbW1vYmlsZVBvbnRlOiBzdHJpbmcgPSAncG9udGUnO1xuICAgIHB1YmxpYyByZWFkb25seSB0aXBvbG9naWFJbW1vYmlsZVN0YXppb25lOiBzdHJpbmcgPSAnc3RhemlvbmUnO1xuICAgIHB1YmxpYyByZWFkb25seSB0aXBvbG9naWFJbW1vYmlsZUNhbnRpZXJlOiBzdHJpbmcgPSAnY2FudGllcmUnO1xuXG4gICAgLy8gZHJvcGRvd25cbiAgICBwdWJsaWMgcmVhZG9ubHkgZ2V0RGRsRXVyaWJvcjogc3RyaW5nID0gJ2dldF9kZGxfdGlwb19ldXJpYm9yJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgZ2V0RGRsQWZmaXR0dWFyaTogc3RyaW5nID0gJ2dldF9kZGxfdGlwb19hZmZpdHR1YXJpJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgZ2V0RGRsVGFzc2U6IHN0cmluZyA9ICdnZXRfZGRsX3Rhc3NlJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgZ2V0RGRsT21pOiBzdHJpbmcgPSAnZ2V0X2RkbF9vbWknO1xuICAgIHB1YmxpYyByZWFkb25seSBnZXREZGxUaXBvbG9naWFDYXRhc3RhbGU6IHN0cmluZyA9ICdnZXRfZGRsX3RpcG9sb2dpYV9jYXRhc3RhbGUnO1xufVxuIl19