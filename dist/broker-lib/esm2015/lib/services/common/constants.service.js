/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class ConstantsService {
    constructor() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9icm9rZXItbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2NvbW1vbi9jb25zdGFudHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxNQUFNLE9BQU8sZ0JBQWdCO0lBRDdCO1FBRW9CLGVBQVUsR0FBVyw0Q0FBNEMsQ0FBQztRQUNsRSxtQkFBYyxHQUFXLGVBQWUsQ0FBQztRQUN6QyxrQkFBYSxHQUFXLEdBQUcsQ0FBQztRQUU1QixxQkFBZ0IsR0FBVyxPQUFPLENBQUM7UUFDbkMsOEJBQXlCLEdBQVcsYUFBYSxDQUFDOztRQUdsRCwyQkFBc0IsR0FBVyxhQUFhLENBQUM7UUFDL0MsMkJBQXNCLEdBQVcsYUFBYSxDQUFDO1FBQy9DLDJCQUFzQixHQUFXLGFBQWEsQ0FBQztRQUMvQywyQkFBc0IsR0FBVyxhQUFhLENBQUM7UUFDL0MsMEJBQXFCLEdBQVcsWUFBWSxDQUFDO1FBQzdDLG9DQUErQixHQUFXLFVBQVUsQ0FBQzs7UUFHckQsMEJBQXFCLEdBQVcsWUFBWSxDQUFDO1FBQzdDLDBCQUFxQixHQUFXLFlBQVksQ0FBQztRQUM3QywwQkFBcUIsR0FBVyxZQUFZLENBQUM7UUFDN0MsaUNBQTRCLEdBQVcsWUFBWSxDQUFDO1FBQ3BELHlCQUFvQixHQUFXLGNBQWMsQ0FBQztRQUM5QyxpQ0FBNEIsR0FBVyxVQUFVLENBQUM7O1FBR2xELGtDQUE2QixHQUFXLGVBQWUsQ0FBQztRQUN4RCx1QkFBa0IsR0FBVyxZQUFZLENBQUM7UUFDMUMseUJBQW9CLEdBQVcsY0FBYyxDQUFDO1FBRTlDLDBCQUFxQixHQUFXLFVBQVUsQ0FBQztRQUMzQywyQkFBc0IsR0FBVyxjQUFjLENBQUM7O1FBR2hELGdCQUFXLEdBQVcsYUFBYSxDQUFDO1FBQ3BDLGlCQUFZLEdBQVcsY0FBYyxDQUFDO1FBQ3RDLGdCQUFXLEdBQVcsYUFBYSxDQUFDO1FBQ3BDLGlCQUFZLEdBQVcsY0FBYyxDQUFDOztRQUd0QywyQkFBc0IsR0FBVyxPQUFPLENBQUM7UUFDekMsMEJBQXFCLEdBQVcsTUFBTSxDQUFDO1FBQ3ZDLDhCQUF5QixHQUFXLFVBQVUsQ0FBQztRQUMvQyw2QkFBd0IsR0FBVyxTQUFTLENBQUM7UUFDN0MsNkJBQXdCLEdBQVcsU0FBUyxDQUFDO1FBQzdDLDhCQUF5QixHQUFXLFVBQVUsQ0FBQztRQUMvQyw0QkFBdUIsR0FBVyxRQUFRLENBQUM7UUFDM0MsMkJBQXNCLEdBQVcsT0FBTyxDQUFDO1FBQ3pDLDRCQUF1QixHQUFXLFFBQVEsQ0FBQztRQUMzQywrQkFBMEIsR0FBVyxXQUFXLENBQUM7UUFDakQsNkJBQXdCLEdBQVcsU0FBUyxDQUFDO1FBQzdDLDJCQUFzQixHQUFXLE9BQU8sQ0FBQztRQUN6Qyw0QkFBdUIsR0FBVyxRQUFRLENBQUM7UUFDM0MsOEJBQXlCLEdBQVcsVUFBVSxDQUFDO1FBQy9DLDRCQUF1QixHQUFXLFFBQVEsQ0FBQztRQUMzQywyQkFBc0IsR0FBVyxPQUFPLENBQUM7UUFDekMsMkJBQXNCLEdBQVcsT0FBTyxDQUFDO1FBQ3pDLDhCQUF5QixHQUFXLFVBQVUsQ0FBQztRQUMvQyw4QkFBeUIsR0FBVyxVQUFVLENBQUM7O1FBRy9DLGtCQUFhLEdBQVcsc0JBQXNCLENBQUM7UUFDL0MscUJBQWdCLEdBQVcseUJBQXlCLENBQUM7UUFDckQsZ0JBQVcsR0FBVyxlQUFlLENBQUM7UUFDdEMsY0FBUyxHQUFXLGFBQWEsQ0FBQztRQUNsQyw2QkFBd0IsR0FBVyw2QkFBNkIsQ0FBQztRQUNqRSxpQkFBWSxHQUFXLGdCQUFnQixDQUFDO0lBRTVELENBQUM7OztZQXBFQSxVQUFVOzs7O0lBRVAsc0NBQWtGOztJQUNsRiwwQ0FBeUQ7O0lBQ3pELHlDQUE0Qzs7SUFFNUMsNENBQW1EOztJQUNuRCxxREFBa0U7O0lBR2xFLGtEQUErRDs7SUFDL0Qsa0RBQStEOztJQUMvRCxrREFBK0Q7O0lBQy9ELGtEQUErRDs7SUFDL0QsaURBQTZEOztJQUM3RCwyREFBcUU7O0lBR3JFLGlEQUE2RDs7SUFDN0QsaURBQTZEOztJQUM3RCxpREFBNkQ7O0lBQzdELHdEQUFvRTs7SUFDcEUsZ0RBQThEOztJQUM5RCx3REFBa0U7O0lBR2xFLHlEQUF3RTs7SUFDeEUsOENBQTBEOztJQUMxRCxnREFBOEQ7O0lBRTlELGlEQUEyRDs7SUFDM0Qsa0RBQWdFOztJQUdoRSx1Q0FBb0Q7O0lBQ3BELHdDQUFzRDs7SUFDdEQsdUNBQW9EOztJQUNwRCx3Q0FBc0Q7O0lBR3RELGtEQUF5RDs7SUFDekQsaURBQXVEOztJQUN2RCxxREFBK0Q7O0lBQy9ELG9EQUE2RDs7SUFDN0Qsb0RBQTZEOztJQUM3RCxxREFBK0Q7O0lBQy9ELG1EQUEyRDs7SUFDM0Qsa0RBQXlEOztJQUN6RCxtREFBMkQ7O0lBQzNELHNEQUFpRTs7SUFDakUsb0RBQTZEOztJQUM3RCxrREFBeUQ7O0lBQ3pELG1EQUEyRDs7SUFDM0QscURBQStEOztJQUMvRCxtREFBMkQ7O0lBQzNELGtEQUF5RDs7SUFDekQsa0RBQXlEOztJQUN6RCxxREFBK0Q7O0lBQy9ELHFEQUErRDs7SUFHL0QseUNBQStEOztJQUMvRCw0Q0FBcUU7O0lBQ3JFLHVDQUFzRDs7SUFDdEQscUNBQWtEOztJQUNsRCxvREFBaUY7O0lBQ2pGLHdDQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbnN0YW50c1NlcnZpY2Uge1xuICAgIHB1YmxpYyByZWFkb25seSBiYXNlQXBwVXJsOiBzdHJpbmcgPSAnaHR0cDovLzg5LjMxLjc1LjQ1OjQ0My9TcHJpbmctSlBBLVNlY3VyaXR5JztcbiAgICBwdWJsaWMgcmVhZG9ubHkgdG9rZW5IZWFkZXJLZXk6IHN0cmluZyA9ICdBdXRob3JpemF0aW9uJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgcGF0aFNlcGFyYXRvcjogc3RyaW5nID0gJy8nO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGxvZ2luU2VydmljZU5hbWU6IHN0cmluZyA9ICdsb2dpbic7XG4gICAgcHVibGljIHJlYWRvbmx5IGNhbWJpb1Bhc3N3b3JkU2VydmljZU5hbWU6IHN0cmluZyA9ICdwdXRQYXNzd29yZCc7XG5cbiAgICAvLyBpbW1vYmlsaVxuICAgIHB1YmxpYyByZWFkb25seSBnZXRJbW1vYmlsaVNlcnZpY2VOYW1lOiBzdHJpbmcgPSAnZ2V0aW1tb2JpbGknO1xuICAgIHB1YmxpYyByZWFkb25seSBnZXRJbW1vYmlsZVNlcnZpY2VOYW1lOiBzdHJpbmcgPSAnZ2V0aW1tb2JpbGUnO1xuICAgIHB1YmxpYyByZWFkb25seSBwdXRJbW1vYmlsZVNlcnZpY2VOYW1lOiBzdHJpbmcgPSAncHV0aW1tb2JpbGUnO1xuICAgIHB1YmxpYyByZWFkb25seSBkZWxJbW1vYmlsZVNlcnZpY2VOYW1lOiBzdHJpbmcgPSAnZGVsaW1tb2JpbGUnO1xuICAgIHB1YmxpYyByZWFkb25seSBnZXRDYXRhc3RvU2VydmljZU5hbWU6IHN0cmluZyA9ICdnZXRjYXRhc3RvJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgZ2V0UGlhbm9BbW1vcnRhbWVudG9TZXJ2aWNlTmFtZTogc3RyaW5nID0gJ2dldFBpYW5vJztcblxuICAgIC8vIGNsaWVudGlcbiAgICBwdWJsaWMgcmVhZG9ubHkgZ2V0Q2xpZW50aVNlcnZpY2VOYW1lOiBzdHJpbmcgPSAnZ2V0Y2xpZW50aSc7XG4gICAgcHVibGljIHJlYWRvbmx5IGdldENsaWVudGVTZXJ2aWNlTmFtZTogc3RyaW5nID0gJ2dldGNsaWVudGUnO1xuICAgIHB1YmxpYyByZWFkb25seSBwdXRDbGllbnRpU2VydmljZU5hbWU6IHN0cmluZyA9ICdwdXRjbGllbnRlJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgYWJpbGl0YUFwcENsaWVudGVTZXJ2aWNlTmFtZTogc3RyaW5nID0gJ2FwcGNsaWVudGUnO1xuICAgIHB1YmxpYyByZWFkb25seSBib29rVmFsdWVTZXJ2aWNlTmFtZTogc3RyaW5nID0gJ2dldGJvb2t2YWx1ZSc7XG4gICAgcHVibGljIHJlYWRvbmx5IHBpYW5vQW1tb3J0YW1lbnRvU2VydmljZU5hbWU6IHN0cmluZyA9ICdnZXRwaWFubyc7XG5cbiAgICAvLyByZXBvcnRcbiAgICBwdWJsaWMgcmVhZG9ubHkgc2l0dWF6aW9uZUdlbmVyYWxlU2VydmljZU5hbWU6IHN0cmluZyA9ICdnZXRzaXR1YXppb25lJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgZ3JhZmljaVNlcnZpY2VOYW1lOiBzdHJpbmcgPSAnZ2V0Z3JhZmljaSc7XG4gICAgcHVibGljIHJlYWRvbmx5IHBkZlJlcG9ydFNlcnZpY2VOYW1lOiBzdHJpbmcgPSAnZ2V0cGRmcmVwb3J0JztcblxuICAgIHB1YmxpYyByZWFkb25seSBwb3N0RXJyb3JlU2VydmljZU5hbWU6IHN0cmluZyA9ICd3cml0ZUxvZyc7XG4gICAgcHVibGljIHJlYWRvbmx5IGdldERyb3Bkb3duU2VydmljZU5hbWU6IHN0cmluZyA9ICdnZXRfZHJvcGRvd24nO1xuXG4gICAgLy8gZG9jdW1lbnRpXG4gICAgcHVibGljIHJlYWRvbmx5IGdldENhcnRlbGxlOiBzdHJpbmcgPSAnZ2V0Y2FydGVsbGUnO1xuICAgIHB1YmxpYyByZWFkb25seSBnZXREb2N1bWVudG86IHN0cmluZyA9ICdnZXRkb2N1bWVudG8nO1xuICAgIHB1YmxpYyByZWFkb25seSBwdXRDYXJ0ZWxsZTogc3RyaW5nID0gJ3B1dGNhcnRlbGxlJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgcHV0RG9jdW1lbnRvOiBzdHJpbmcgPSAncHV0ZG9jdW1lbnRvJztcblxuICAgIC8vIHRpcG9sb2dpYSBpY29uZSBpbW1vYmlsaVxuICAgIHB1YmxpYyByZWFkb25seSB0aXBvbG9naWFJbW1vYmlsZVZpbGxhOiBzdHJpbmcgPSAndmlsbGEnO1xuICAgIHB1YmxpYyByZWFkb25seSB0aXBvbG9naWFJbW1vYmlsZUNhc2E6IHN0cmluZyA9ICdjYXNhJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGlwb2xvZ2lhSW1tb2JpbGVBZ3JpY29sbzogc3RyaW5nID0gJ2Fncmljb2xvJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGlwb2xvZ2lhSW1tb2JpbGVVZmZpY2lvOiBzdHJpbmcgPSAndWZmaWNpbyc7XG4gICAgcHVibGljIHJlYWRvbmx5IHRpcG9sb2dpYUltbW9iaWxlQWxiZXJnbzogc3RyaW5nID0gJ2FsYmVyZ28nO1xuICAgIHB1YmxpYyByZWFkb25seSB0aXBvbG9naWFJbW1vYmlsZU9zcGVkYWxlOiBzdHJpbmcgPSAnb3NwZWRhbGUnO1xuICAgIHB1YmxpYyByZWFkb25seSB0aXBvbG9naWFJbW1vYmlsZVNjdW9sYTogc3RyaW5nID0gJ3NjdW9sYSc7XG4gICAgcHVibGljIHJlYWRvbmx5IHRpcG9sb2dpYUltbW9iaWxlTXVzZW86IHN0cmluZyA9ICdtdXNlbyc7XG4gICAgcHVibGljIHJlYWRvbmx5IHRpcG9sb2dpYUltbW9iaWxlQ2hpZXNhOiBzdHJpbmcgPSAnY2hpZXNhJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGlwb2xvZ2lhSW1tb2JpbGVNYWdhenppbm86IHN0cmluZyA9ICdtYWdhenppbm8nO1xuICAgIHB1YmxpYyByZWFkb25seSB0aXBvbG9naWFJbW1vYmlsZU5lZ296aW86IHN0cmluZyA9ICduZWdvemlvJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGlwb2xvZ2lhSW1tb2JpbGVTcG9ydDogc3RyaW5nID0gJ3Nwb3J0JztcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGlwb2xvZ2lhSW1tb2JpbGVHYXJhZ2U6IHN0cmluZyA9ICdnYXJhZ2UnO1xuICAgIHB1YmxpYyByZWFkb25seSB0aXBvbG9naWFJbW1vYmlsZUZhYmJyaWNhOiBzdHJpbmcgPSAnZmFiYnJpY2EnO1xuICAgIHB1YmxpYyByZWFkb25seSB0aXBvbG9naWFJbW1vYmlsZVRlYXRybzogc3RyaW5nID0gJ3RlYXRybyc7XG4gICAgcHVibGljIHJlYWRvbmx5IHRpcG9sb2dpYUltbW9iaWxlQmFuY2E6IHN0cmluZyA9ICdiYW5jYSc7XG4gICAgcHVibGljIHJlYWRvbmx5IHRpcG9sb2dpYUltbW9iaWxlUG9udGU6IHN0cmluZyA9ICdwb250ZSc7XG4gICAgcHVibGljIHJlYWRvbmx5IHRpcG9sb2dpYUltbW9iaWxlU3RhemlvbmU6IHN0cmluZyA9ICdzdGF6aW9uZSc7XG4gICAgcHVibGljIHJlYWRvbmx5IHRpcG9sb2dpYUltbW9iaWxlQ2FudGllcmU6IHN0cmluZyA9ICdjYW50aWVyZSc7XG5cbiAgICAvLyBkcm9wZG93blxuICAgIHB1YmxpYyByZWFkb25seSBnZXREZGxFdXJpYm9yOiBzdHJpbmcgPSAnZ2V0X2RkbF90aXBvX2V1cmlib3InO1xuICAgIHB1YmxpYyByZWFkb25seSBnZXREZGxBZmZpdHR1YXJpOiBzdHJpbmcgPSAnZ2V0X2RkbF90aXBvX2FmZml0dHVhcmknO1xuICAgIHB1YmxpYyByZWFkb25seSBnZXREZGxUYXNzZTogc3RyaW5nID0gJ2dldF9kZGxfdGFzc2UnO1xuICAgIHB1YmxpYyByZWFkb25seSBnZXREZGxPbWk6IHN0cmluZyA9ICdnZXRfZGRsX29taSc7XG4gICAgcHVibGljIHJlYWRvbmx5IGdldERkbFRpcG9sb2dpYUNhdGFzdGFsZTogc3RyaW5nID0gJ2dldF9kZGxfdGlwb2xvZ2lhX2NhdGFzdGFsZSc7XG4gICAgcHVibGljIHJlYWRvbmx5IGdldERkbENvbXVuaTogc3RyaW5nID0gJ2dldF9kZGxfY29tdW5pJztcblxufVxuIl19