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
        this.getImmobiliServiceName = 'getImmobili';
        this.getImmobileServiceName = 'getImmobile';
        this.putImmobileServiceName = 'putImmobile';
        this.delImmobileServiceName = 'delimmobile';
        this.getCatastoServiceName = 'getcatasto';
        this.getPianoAmmortamentoServiceName = 'getPiano';
        // clienti
        this.getClientiServiceName = 'getClienti';
        this.putClientiServiceName = 'putCliente';
        this.abilitaAppClienteServiceName = 'appcliente';
        this.bookValueServiceName = 'getBookValue';
        this.pianoAmmortamentoServiceName = 'getpiano';
        // report
        this.situazioneGeneraleServiceName = 'getSituazione';
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
        this.getDdlEuribor = 'getDdlTipoEuribor';
        this.getDdlAffittuari = 'getDdlTipoAffittuari';
        this.getDdlTasse = 'getDdlTasse';
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9icm9rZXItbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2NvbW1vbi9jb25zdGFudHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxNQUFNLE9BQU8sZ0JBQWdCO0lBRDdCO1FBRW9CLGVBQVUsR0FBVyw0Q0FBNEMsQ0FBQztRQUNsRSxtQkFBYyxHQUFXLGVBQWUsQ0FBQztRQUN6QyxrQkFBYSxHQUFXLEdBQUcsQ0FBQztRQUU1QixxQkFBZ0IsR0FBVyxPQUFPLENBQUM7UUFDbkMsOEJBQXlCLEdBQVcsYUFBYSxDQUFDOztRQUdsRCwyQkFBc0IsR0FBVyxhQUFhLENBQUM7UUFDL0MsMkJBQXNCLEdBQVcsYUFBYSxDQUFDO1FBQy9DLDJCQUFzQixHQUFXLGFBQWEsQ0FBQztRQUMvQywyQkFBc0IsR0FBVyxhQUFhLENBQUM7UUFDL0MsMEJBQXFCLEdBQVcsWUFBWSxDQUFDO1FBQzdDLG9DQUErQixHQUFXLFVBQVUsQ0FBQzs7UUFHckQsMEJBQXFCLEdBQVcsWUFBWSxDQUFDO1FBQzdDLDBCQUFxQixHQUFXLFlBQVksQ0FBQztRQUM3QyxpQ0FBNEIsR0FBVyxZQUFZLENBQUM7UUFDcEQseUJBQW9CLEdBQVcsY0FBYyxDQUFDO1FBQzlDLGlDQUE0QixHQUFXLFVBQVUsQ0FBQzs7UUFHbEQsa0NBQTZCLEdBQVcsZUFBZSxDQUFDO1FBQ3hELHVCQUFrQixHQUFXLFlBQVksQ0FBQztRQUMxQyx5QkFBb0IsR0FBVyxjQUFjLENBQUM7UUFFOUMsMEJBQXFCLEdBQVcsVUFBVSxDQUFDO1FBQzNDLDJCQUFzQixHQUFXLGNBQWMsQ0FBQzs7UUFHaEQsMkJBQXNCLEdBQVcsT0FBTyxDQUFDO1FBQ3pDLDBCQUFxQixHQUFXLE1BQU0sQ0FBQztRQUN2Qyw4QkFBeUIsR0FBVyxVQUFVLENBQUM7UUFDL0MsNkJBQXdCLEdBQVcsU0FBUyxDQUFDO1FBQzdDLDZCQUF3QixHQUFXLFNBQVMsQ0FBQztRQUM3Qyw4QkFBeUIsR0FBVyxVQUFVLENBQUM7UUFDL0MsNEJBQXVCLEdBQVcsUUFBUSxDQUFDO1FBQzNDLDJCQUFzQixHQUFXLE9BQU8sQ0FBQztRQUN6Qyw0QkFBdUIsR0FBVyxRQUFRLENBQUM7UUFDM0MsK0JBQTBCLEdBQVcsV0FBVyxDQUFDO1FBQ2pELDZCQUF3QixHQUFXLFNBQVMsQ0FBQztRQUM3QywyQkFBc0IsR0FBVyxPQUFPLENBQUM7UUFDekMsNEJBQXVCLEdBQVcsUUFBUSxDQUFDO1FBQzNDLDhCQUF5QixHQUFXLFVBQVUsQ0FBQztRQUMvQyw0QkFBdUIsR0FBVyxRQUFRLENBQUM7UUFDM0MsMkJBQXNCLEdBQVcsT0FBTyxDQUFDO1FBQ3pDLDJCQUFzQixHQUFXLE9BQU8sQ0FBQztRQUN6Qyw4QkFBeUIsR0FBVyxVQUFVLENBQUM7UUFDL0MsOEJBQXlCLEdBQVcsVUFBVSxDQUFDOztRQUcvQyxrQkFBYSxHQUFXLG1CQUFtQixDQUFDO1FBQzVDLHFCQUFnQixHQUFXLHNCQUFzQixDQUFDO1FBQ2xELGdCQUFXLEdBQVcsYUFBYSxDQUFDO0lBQ3hELENBQUM7OztZQXpEQSxVQUFVOzs7O0lBRVAsc0NBQWtGOztJQUNsRiwwQ0FBeUQ7O0lBQ3pELHlDQUE0Qzs7SUFFNUMsNENBQW1EOztJQUNuRCxxREFBa0U7O0lBR2xFLGtEQUErRDs7SUFDL0Qsa0RBQStEOztJQUMvRCxrREFBK0Q7O0lBQy9ELGtEQUErRDs7SUFDL0QsaURBQTZEOztJQUM3RCwyREFBcUU7O0lBR3JFLGlEQUE2RDs7SUFDN0QsaURBQTZEOztJQUM3RCx3REFBb0U7O0lBQ3BFLGdEQUE4RDs7SUFDOUQsd0RBQWtFOztJQUdsRSx5REFBd0U7O0lBQ3hFLDhDQUEwRDs7SUFDMUQsZ0RBQThEOztJQUU5RCxpREFBMkQ7O0lBQzNELGtEQUFnRTs7SUFHaEUsa0RBQXlEOztJQUN6RCxpREFBdUQ7O0lBQ3ZELHFEQUErRDs7SUFDL0Qsb0RBQTZEOztJQUM3RCxvREFBNkQ7O0lBQzdELHFEQUErRDs7SUFDL0QsbURBQTJEOztJQUMzRCxrREFBeUQ7O0lBQ3pELG1EQUEyRDs7SUFDM0Qsc0RBQWlFOztJQUNqRSxvREFBNkQ7O0lBQzdELGtEQUF5RDs7SUFDekQsbURBQTJEOztJQUMzRCxxREFBK0Q7O0lBQy9ELG1EQUEyRDs7SUFDM0Qsa0RBQXlEOztJQUN6RCxrREFBeUQ7O0lBQ3pELHFEQUErRDs7SUFDL0QscURBQStEOztJQUcvRCx5Q0FBNEQ7O0lBQzVELDRDQUFrRTs7SUFDbEUsdUNBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29uc3RhbnRzU2VydmljZSB7XG4gICAgcHVibGljIHJlYWRvbmx5IGJhc2VBcHBVcmw6IHN0cmluZyA9ICdodHRwOi8vODkuMzEuNzUuNDU6NDQzL1NwcmluZy1KUEEtU2VjdXJpdHknO1xuICAgIHB1YmxpYyByZWFkb25seSB0b2tlbkhlYWRlcktleTogc3RyaW5nID0gJ0F1dGhvcml6YXRpb24nO1xuICAgIHB1YmxpYyByZWFkb25seSBwYXRoU2VwYXJhdG9yOiBzdHJpbmcgPSAnLyc7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgbG9naW5TZXJ2aWNlTmFtZTogc3RyaW5nID0gJ2xvZ2luJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgY2FtYmlvUGFzc3dvcmRTZXJ2aWNlTmFtZTogc3RyaW5nID0gJ3B1dFBhc3N3b3JkJztcblxuICAgIC8vIGltbW9iaWxpXG4gICAgcHVibGljIHJlYWRvbmx5IGdldEltbW9iaWxpU2VydmljZU5hbWU6IHN0cmluZyA9ICdnZXRJbW1vYmlsaSc7XG4gICAgcHVibGljIHJlYWRvbmx5IGdldEltbW9iaWxlU2VydmljZU5hbWU6IHN0cmluZyA9ICdnZXRJbW1vYmlsZSc7XG4gICAgcHVibGljIHJlYWRvbmx5IHB1dEltbW9iaWxlU2VydmljZU5hbWU6IHN0cmluZyA9ICdwdXRJbW1vYmlsZSc7XG4gICAgcHVibGljIHJlYWRvbmx5IGRlbEltbW9iaWxlU2VydmljZU5hbWU6IHN0cmluZyA9ICdkZWxpbW1vYmlsZSc7XG4gICAgcHVibGljIHJlYWRvbmx5IGdldENhdGFzdG9TZXJ2aWNlTmFtZTogc3RyaW5nID0gJ2dldGNhdGFzdG8nO1xuICAgIHB1YmxpYyByZWFkb25seSBnZXRQaWFub0FtbW9ydGFtZW50b1NlcnZpY2VOYW1lOiBzdHJpbmcgPSAnZ2V0UGlhbm8nO1xuXG4gICAgLy8gY2xpZW50aVxuICAgIHB1YmxpYyByZWFkb25seSBnZXRDbGllbnRpU2VydmljZU5hbWU6IHN0cmluZyA9ICdnZXRDbGllbnRpJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgcHV0Q2xpZW50aVNlcnZpY2VOYW1lOiBzdHJpbmcgPSAncHV0Q2xpZW50ZSc7XG4gICAgcHVibGljIHJlYWRvbmx5IGFiaWxpdGFBcHBDbGllbnRlU2VydmljZU5hbWU6IHN0cmluZyA9ICdhcHBjbGllbnRlJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgYm9va1ZhbHVlU2VydmljZU5hbWU6IHN0cmluZyA9ICdnZXRCb29rVmFsdWUnO1xuICAgIHB1YmxpYyByZWFkb25seSBwaWFub0FtbW9ydGFtZW50b1NlcnZpY2VOYW1lOiBzdHJpbmcgPSAnZ2V0cGlhbm8nO1xuXG4gICAgLy8gcmVwb3J0XG4gICAgcHVibGljIHJlYWRvbmx5IHNpdHVhemlvbmVHZW5lcmFsZVNlcnZpY2VOYW1lOiBzdHJpbmcgPSAnZ2V0U2l0dWF6aW9uZSc7XG4gICAgcHVibGljIHJlYWRvbmx5IGdyYWZpY2lTZXJ2aWNlTmFtZTogc3RyaW5nID0gJ2dldGdyYWZpY2knO1xuICAgIHB1YmxpYyByZWFkb25seSBwZGZSZXBvcnRTZXJ2aWNlTmFtZTogc3RyaW5nID0gJ2dldHBkZnJlcG9ydCc7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgcG9zdEVycm9yZVNlcnZpY2VOYW1lOiBzdHJpbmcgPSAnd3JpdGVMb2cnO1xuICAgIHB1YmxpYyByZWFkb25seSBnZXREcm9wZG93blNlcnZpY2VOYW1lOiBzdHJpbmcgPSAnZ2V0X2Ryb3Bkb3duJztcblxuICAgIC8vIHRpcG9sb2dpYSBpY29uZSBpbW1vYmlsaVxuICAgIHB1YmxpYyByZWFkb25seSB0aXBvbG9naWFJbW1vYmlsZVZpbGxhOiBzdHJpbmcgPSAndmlsbGEnO1xuICAgIHB1YmxpYyByZWFkb25seSB0aXBvbG9naWFJbW1vYmlsZUNhc2E6IHN0cmluZyA9ICdjYXNhJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGlwb2xvZ2lhSW1tb2JpbGVBZ3JpY29sbzogc3RyaW5nID0gJ2Fncmljb2xvJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGlwb2xvZ2lhSW1tb2JpbGVVZmZpY2lvOiBzdHJpbmcgPSAndWZmaWNpbyc7XG4gICAgcHVibGljIHJlYWRvbmx5IHRpcG9sb2dpYUltbW9iaWxlQWxiZXJnbzogc3RyaW5nID0gJ2FsYmVyZ28nO1xuICAgIHB1YmxpYyByZWFkb25seSB0aXBvbG9naWFJbW1vYmlsZU9zcGVkYWxlOiBzdHJpbmcgPSAnb3NwZWRhbGUnO1xuICAgIHB1YmxpYyByZWFkb25seSB0aXBvbG9naWFJbW1vYmlsZVNjdW9sYTogc3RyaW5nID0gJ3NjdW9sYSc7XG4gICAgcHVibGljIHJlYWRvbmx5IHRpcG9sb2dpYUltbW9iaWxlTXVzZW86IHN0cmluZyA9ICdtdXNlbyc7XG4gICAgcHVibGljIHJlYWRvbmx5IHRpcG9sb2dpYUltbW9iaWxlQ2hpZXNhOiBzdHJpbmcgPSAnY2hpZXNhJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGlwb2xvZ2lhSW1tb2JpbGVNYWdhenppbm86IHN0cmluZyA9ICdtYWdhenppbm8nO1xuICAgIHB1YmxpYyByZWFkb25seSB0aXBvbG9naWFJbW1vYmlsZU5lZ296aW86IHN0cmluZyA9ICduZWdvemlvJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGlwb2xvZ2lhSW1tb2JpbGVTcG9ydDogc3RyaW5nID0gJ3Nwb3J0JztcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGlwb2xvZ2lhSW1tb2JpbGVHYXJhZ2U6IHN0cmluZyA9ICdnYXJhZ2UnO1xuICAgIHB1YmxpYyByZWFkb25seSB0aXBvbG9naWFJbW1vYmlsZUZhYmJyaWNhOiBzdHJpbmcgPSAnZmFiYnJpY2EnO1xuICAgIHB1YmxpYyByZWFkb25seSB0aXBvbG9naWFJbW1vYmlsZVRlYXRybzogc3RyaW5nID0gJ3RlYXRybyc7XG4gICAgcHVibGljIHJlYWRvbmx5IHRpcG9sb2dpYUltbW9iaWxlQmFuY2E6IHN0cmluZyA9ICdiYW5jYSc7XG4gICAgcHVibGljIHJlYWRvbmx5IHRpcG9sb2dpYUltbW9iaWxlUG9udGU6IHN0cmluZyA9ICdwb250ZSc7XG4gICAgcHVibGljIHJlYWRvbmx5IHRpcG9sb2dpYUltbW9iaWxlU3RhemlvbmU6IHN0cmluZyA9ICdzdGF6aW9uZSc7XG4gICAgcHVibGljIHJlYWRvbmx5IHRpcG9sb2dpYUltbW9iaWxlQ2FudGllcmU6IHN0cmluZyA9ICdjYW50aWVyZSc7XG5cbiAgICAvLyBkcm9wZG93blxuICAgIHB1YmxpYyByZWFkb25seSBnZXREZGxFdXJpYm9yOiBzdHJpbmcgPSAnZ2V0RGRsVGlwb0V1cmlib3InO1xuICAgIHB1YmxpYyByZWFkb25seSBnZXREZGxBZmZpdHR1YXJpOiBzdHJpbmcgPSAnZ2V0RGRsVGlwb0FmZml0dHVhcmknO1xuICAgIHB1YmxpYyByZWFkb25seSBnZXREZGxUYXNzZTogc3RyaW5nID0gJ2dldERkbFRhc3NlJztcbn1cbiJdfQ==