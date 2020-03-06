/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { ConstantsService } from '../common/constants.service';
export class IconeService {
    /**
     * @param {?} constants
     */
    constructor(constants) {
        this.constants = constants;
        this.tipologiaVilla = [
            "A/1",
            "A/7",
            "A/8",
            "A/9"
        ];
        this.tipologiaCasa = [
            "A/2",
            "A/3",
            "A/4",
            "A/5",
            "A/11"
        ];
        this.tipologiaAgricolo = [
            "A/6",
            "D/10"
        ];
        this.tipologiaTerreno = [
            "T/1"
        ];
        this.tipologiaUfficio = [
            "A/10",
            "C/3",
            "E/3",
            "E/4",
            "E/6",
            "E/8",
            "E/9",
            "F/1",
            "F/2"
        ];
        this.tipologiaAlbergo = [
            "B/1",
            "B/3",
            "C/5",
            "D/2"
        ];
        this.tipologiaOspedale = [
            "B/2",
            "D/4"
        ];
        this.tipologiaScuola = [
            "B/5"
        ];
        this.tipologiaMuseo = [
            "B/6"
        ];
        this.tipologiaChiesa = [
            "B/7",
            "E/7"
        ];
        this.tipologiaMagazzino = [
            "B/8",
            "C/2",
            "E/5",
            "F/5"
        ];
        this.tipologiaNegozio = [
            "C/1",
            "D/8"
        ];
        this.tipologiaSport = [
            "C/4",
            "D/6"
        ];
        this.tipologiaGarage = [
            "C/6",
            "C/7"
        ];
        this.tipologiaFabbrica = [
            "D/1",
            "D/7"
        ];
        this.tipologiaTeatro = [
            "D/3"
        ];
        this.tipologiaBanca = [
            "D/5"
        ];
        this.tipologiaPonte = [
            "D/9",
            "E/2"
        ];
        this.tipologiaStazione = [
            "E/1"
        ];
        this.tipologiaCantiere = [
            "F/3",
            "F/4",
            "F/6"
        ];
    }
    /**
     * @param {?} tipologia
     * @return {?}
     */
    getClasseIcona(tipologia) {
        if (this.tipologiaTerreno.includes(tipologia)) {
            return this.constants.tipologiaImmobileTerreno;
        }
        if (this.tipologiaAgricolo.includes(tipologia)) {
            return this.constants.tipologiaImmobileAgricolo;
        }
        if (this.tipologiaAlbergo.includes(tipologia)) {
            return this.constants.tipologiaImmobileAlbergo;
        }
        if (this.tipologiaBanca.includes(tipologia)) {
            return this.constants.tipologiaImmobileBanca;
        }
        if (this.tipologiaCantiere.includes(tipologia)) {
            return this.constants.tipologiaImmobileCantiere;
        }
        if (this.tipologiaCasa.includes(tipologia)) {
            return this.constants.tipologiaImmobileCasa;
        }
        if (this.tipologiaChiesa.includes(tipologia)) {
            return this.constants.tipologiaImmobileChiesa;
        }
        if (this.tipologiaFabbrica.includes(tipologia)) {
            return this.constants.tipologiaImmobileFabbrica;
        }
        if (this.tipologiaGarage.includes(tipologia)) {
            return this.constants.tipologiaImmobileGarage;
        }
        if (this.tipologiaMagazzino.includes(tipologia)) {
            return this.constants.tipologiaImmobileMagazzino;
        }
        if (this.tipologiaMuseo.includes(tipologia)) {
            return this.constants.tipologiaImmobileMuseo;
        }
        if (this.tipologiaNegozio.includes(tipologia)) {
            return this.constants.tipologiaImmobileNegozio;
        }
        if (this.tipologiaOspedale.includes(tipologia)) {
            return this.constants.tipologiaImmobileOspedale;
        }
        if (this.tipologiaPonte.includes(tipologia)) {
            return this.constants.tipologiaImmobilePonte;
        }
        if (this.tipologiaScuola.includes(tipologia)) {
            return this.constants.tipologiaImmobileScuola;
        }
        if (this.tipologiaSport.includes(tipologia)) {
            return this.constants.tipologiaImmobileSport;
        }
        if (this.tipologiaStazione.includes(tipologia)) {
            return this.constants.tipologiaImmobileStazione;
        }
        if (this.tipologiaTeatro.includes(tipologia)) {
            return this.constants.tipologiaImmobileTeatro;
        }
        if (this.tipologiaUfficio.includes(tipologia)) {
            return this.constants.tipologiaImmobileUfficio;
        }
        if (this.tipologiaVilla.includes(tipologia)) {
            return this.constants.tipologiaImmobileVilla;
        }
        return this.constants.tipologiaImmobileCasa;
    }
}
IconeService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
IconeService.ctorParameters = () => [
    { type: ConstantsService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    IconeService.prototype.tipologiaVilla;
    /**
     * @type {?}
     * @private
     */
    IconeService.prototype.tipologiaCasa;
    /**
     * @type {?}
     * @private
     */
    IconeService.prototype.tipologiaAgricolo;
    /**
     * @type {?}
     * @private
     */
    IconeService.prototype.tipologiaTerreno;
    /**
     * @type {?}
     * @private
     */
    IconeService.prototype.tipologiaUfficio;
    /**
     * @type {?}
     * @private
     */
    IconeService.prototype.tipologiaAlbergo;
    /**
     * @type {?}
     * @private
     */
    IconeService.prototype.tipologiaOspedale;
    /**
     * @type {?}
     * @private
     */
    IconeService.prototype.tipologiaScuola;
    /**
     * @type {?}
     * @private
     */
    IconeService.prototype.tipologiaMuseo;
    /**
     * @type {?}
     * @private
     */
    IconeService.prototype.tipologiaChiesa;
    /**
     * @type {?}
     * @private
     */
    IconeService.prototype.tipologiaMagazzino;
    /**
     * @type {?}
     * @private
     */
    IconeService.prototype.tipologiaNegozio;
    /**
     * @type {?}
     * @private
     */
    IconeService.prototype.tipologiaSport;
    /**
     * @type {?}
     * @private
     */
    IconeService.prototype.tipologiaGarage;
    /**
     * @type {?}
     * @private
     */
    IconeService.prototype.tipologiaFabbrica;
    /**
     * @type {?}
     * @private
     */
    IconeService.prototype.tipologiaTeatro;
    /**
     * @type {?}
     * @private
     */
    IconeService.prototype.tipologiaBanca;
    /**
     * @type {?}
     * @private
     */
    IconeService.prototype.tipologiaPonte;
    /**
     * @type {?}
     * @private
     */
    IconeService.prototype.tipologiaStazione;
    /**
     * @type {?}
     * @private
     */
    IconeService.prototype.tipologiaCantiere;
    /**
     * @type {?}
     * @private
     */
    IconeService.prototype.constants;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jyb2tlci1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvaWNvbmUvaWNvbmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUcvRCxNQUFNLE9BQU8sWUFBWTs7OztJQThGckIsWUFBb0IsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUE1RnZDLG1CQUFjLEdBQWtCO1lBQ3BDLEtBQUs7WUFDTCxLQUFLO1lBQ0wsS0FBSztZQUNMLEtBQUs7U0FDUixDQUFDO1FBQ00sa0JBQWEsR0FBa0I7WUFDbkMsS0FBSztZQUNMLEtBQUs7WUFDTCxLQUFLO1lBQ0wsS0FBSztZQUNMLE1BQU07U0FDVCxDQUFDO1FBQ00sc0JBQWlCLEdBQWtCO1lBQ3ZDLEtBQUs7WUFDTCxNQUFNO1NBQ1QsQ0FBQztRQUNNLHFCQUFnQixHQUFrQjtZQUN0QyxLQUFLO1NBQ1IsQ0FBQztRQUNNLHFCQUFnQixHQUFrQjtZQUN0QyxNQUFNO1lBQ04sS0FBSztZQUNMLEtBQUs7WUFDTCxLQUFLO1lBQ0wsS0FBSztZQUNMLEtBQUs7WUFDTCxLQUFLO1lBQ0wsS0FBSztZQUNMLEtBQUs7U0FDUixDQUFDO1FBQ00scUJBQWdCLEdBQWtCO1lBQ3RDLEtBQUs7WUFDTCxLQUFLO1lBQ0wsS0FBSztZQUNMLEtBQUs7U0FDUixDQUFDO1FBQ00sc0JBQWlCLEdBQWtCO1lBQ3ZDLEtBQUs7WUFDTCxLQUFLO1NBQ1IsQ0FBQztRQUNNLG9CQUFlLEdBQWtCO1lBQ3JDLEtBQUs7U0FDUixDQUFDO1FBQ00sbUJBQWMsR0FBa0I7WUFDcEMsS0FBSztTQUNSLENBQUM7UUFDTSxvQkFBZSxHQUFrQjtZQUNyQyxLQUFLO1lBQ0wsS0FBSztTQUNSLENBQUM7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QWdCOzs7Ozs7O0lBS3JCLHNDQUtFOzs7OztJQUNGLHFDQU1FOzs7OztJQUNGLHlDQUdFOzs7OztJQUNGLHdDQUVFOzs7OztJQUNGLHdDQVVFOzs7OztJQUNGLHdDQUtFOzs7OztJQUNGLHlDQUdFOzs7OztJQUNGLHVDQUVFOzs7OztJQUNGLHNDQUVFOzs7OztJQUNGLHVDQUdFOzs7OztJQUNGLDBDQUtFOzs7OztJQUNGLHdDQUdFOzs7OztJQUNGLHNDQUdFOzs7OztJQUNGLHVDQUdFOzs7OztJQUNGLHlDQUdFOzs7OztJQUNGLHVDQUVFOzs7OztJQUNGLHNDQUVFOzs7OztJQUNGLHNDQUdFOzs7OztJQUNGLHlDQUVFOzs7OztJQUNGLHlDQUlFOzs7OztJQUVVLGlDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29uc3RhbnRzU2VydmljZSB9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJY29uZVNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSB0aXBvbG9naWFWaWxsYTogQXJyYXk8c3RyaW5nPiA9IFtcbiAgICAgICAgXCJBLzFcIixcbiAgICAgICAgXCJBLzdcIixcbiAgICAgICAgXCJBLzhcIixcbiAgICAgICAgXCJBLzlcIlxuICAgIF07XG4gICAgcHJpdmF0ZSB0aXBvbG9naWFDYXNhOiBBcnJheTxzdHJpbmc+ID0gW1xuICAgICAgICBcIkEvMlwiLFxuICAgICAgICBcIkEvM1wiLFxuICAgICAgICBcIkEvNFwiLFxuICAgICAgICBcIkEvNVwiLFxuICAgICAgICBcIkEvMTFcIlxuICAgIF07XG4gICAgcHJpdmF0ZSB0aXBvbG9naWFBZ3JpY29sbzogQXJyYXk8c3RyaW5nPiA9IFtcbiAgICAgICAgXCJBLzZcIixcbiAgICAgICAgXCJELzEwXCJcbiAgICBdO1xuICAgIHByaXZhdGUgdGlwb2xvZ2lhVGVycmVubzogQXJyYXk8c3RyaW5nPiA9IFtcbiAgICAgICAgXCJULzFcIlxuICAgIF07XG4gICAgcHJpdmF0ZSB0aXBvbG9naWFVZmZpY2lvOiBBcnJheTxzdHJpbmc+ID0gW1xuICAgICAgICBcIkEvMTBcIixcbiAgICAgICAgXCJDLzNcIixcbiAgICAgICAgXCJFLzNcIixcbiAgICAgICAgXCJFLzRcIixcbiAgICAgICAgXCJFLzZcIixcbiAgICAgICAgXCJFLzhcIixcbiAgICAgICAgXCJFLzlcIixcbiAgICAgICAgXCJGLzFcIixcbiAgICAgICAgXCJGLzJcIlxuICAgIF07XG4gICAgcHJpdmF0ZSB0aXBvbG9naWFBbGJlcmdvOiBBcnJheTxzdHJpbmc+ID0gW1xuICAgICAgICBcIkIvMVwiLFxuICAgICAgICBcIkIvM1wiLFxuICAgICAgICBcIkMvNVwiLFxuICAgICAgICBcIkQvMlwiXG4gICAgXTtcbiAgICBwcml2YXRlIHRpcG9sb2dpYU9zcGVkYWxlOiBBcnJheTxzdHJpbmc+ID0gW1xuICAgICAgICBcIkIvMlwiLFxuICAgICAgICBcIkQvNFwiXG4gICAgXTtcbiAgICBwcml2YXRlIHRpcG9sb2dpYVNjdW9sYTogQXJyYXk8c3RyaW5nPiA9IFtcbiAgICAgICAgXCJCLzVcIlxuICAgIF07XG4gICAgcHJpdmF0ZSB0aXBvbG9naWFNdXNlbzogQXJyYXk8c3RyaW5nPiA9IFtcbiAgICAgICAgXCJCLzZcIlxuICAgIF07XG4gICAgcHJpdmF0ZSB0aXBvbG9naWFDaGllc2E6IEFycmF5PHN0cmluZz4gPSBbXG4gICAgICAgIFwiQi83XCIsXG4gICAgICAgIFwiRS83XCJcbiAgICBdO1xuICAgIHByaXZhdGUgdGlwb2xvZ2lhTWFnYXp6aW5vOiBBcnJheTxzdHJpbmc+ID0gW1xuICAgICAgICBcIkIvOFwiLFxuICAgICAgICBcIkMvMlwiLFxuICAgICAgICBcIkUvNVwiLFxuICAgICAgICBcIkYvNVwiXG4gICAgXTtcbiAgICBwcml2YXRlIHRpcG9sb2dpYU5lZ296aW86IEFycmF5PHN0cmluZz4gPSBbXG4gICAgICAgIFwiQy8xXCIsXG4gICAgICAgIFwiRC84XCJcbiAgICBdO1xuICAgIHByaXZhdGUgdGlwb2xvZ2lhU3BvcnQ6IEFycmF5PHN0cmluZz4gPSBbXG4gICAgICAgIFwiQy80XCIsXG4gICAgICAgIFwiRC82XCJcbiAgICBdO1xuICAgIHByaXZhdGUgdGlwb2xvZ2lhR2FyYWdlOiBBcnJheTxzdHJpbmc+ID0gW1xuICAgICAgICBcIkMvNlwiLFxuICAgICAgICBcIkMvN1wiXG4gICAgXTtcbiAgICBwcml2YXRlIHRpcG9sb2dpYUZhYmJyaWNhOiBBcnJheTxzdHJpbmc+ID0gW1xuICAgICAgICBcIkQvMVwiLFxuICAgICAgICBcIkQvN1wiXG4gICAgXTtcbiAgICBwcml2YXRlIHRpcG9sb2dpYVRlYXRybzogQXJyYXk8c3RyaW5nPiA9IFtcbiAgICAgICAgXCJELzNcIlxuICAgIF07XG4gICAgcHJpdmF0ZSB0aXBvbG9naWFCYW5jYTogQXJyYXk8c3RyaW5nPiA9IFtcbiAgICAgICAgXCJELzVcIlxuICAgIF07XG4gICAgcHJpdmF0ZSB0aXBvbG9naWFQb250ZTogQXJyYXk8c3RyaW5nPiA9IFtcbiAgICAgICAgXCJELzlcIixcbiAgICAgICAgXCJFLzJcIlxuICAgIF07XG4gICAgcHJpdmF0ZSB0aXBvbG9naWFTdGF6aW9uZTogQXJyYXk8c3RyaW5nPiA9IFtcbiAgICAgICAgXCJFLzFcIlxuICAgIF07XG4gICAgcHJpdmF0ZSB0aXBvbG9naWFDYW50aWVyZTogQXJyYXk8c3RyaW5nPiA9IFtcbiAgICAgICAgXCJGLzNcIixcbiAgICAgICAgXCJGLzRcIixcbiAgICAgICAgXCJGLzZcIlxuICAgIF07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnN0YW50czogQ29uc3RhbnRzU2VydmljZSkgeyB9XG5cbiAgICBwdWJsaWMgZ2V0Q2xhc3NlSWNvbmEodGlwb2xvZ2lhOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy50aXBvbG9naWFUZXJyZW5vLmluY2x1ZGVzKHRpcG9sb2dpYSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN0YW50cy50aXBvbG9naWFJbW1vYmlsZVRlcnJlbm87XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudGlwb2xvZ2lhQWdyaWNvbG8uaW5jbHVkZXModGlwb2xvZ2lhKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RhbnRzLnRpcG9sb2dpYUltbW9iaWxlQWdyaWNvbG87XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudGlwb2xvZ2lhQWxiZXJnby5pbmNsdWRlcyh0aXBvbG9naWEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdGFudHMudGlwb2xvZ2lhSW1tb2JpbGVBbGJlcmdvO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRpcG9sb2dpYUJhbmNhLmluY2x1ZGVzKHRpcG9sb2dpYSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN0YW50cy50aXBvbG9naWFJbW1vYmlsZUJhbmNhO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRpcG9sb2dpYUNhbnRpZXJlLmluY2x1ZGVzKHRpcG9sb2dpYSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN0YW50cy50aXBvbG9naWFJbW1vYmlsZUNhbnRpZXJlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRpcG9sb2dpYUNhc2EuaW5jbHVkZXModGlwb2xvZ2lhKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RhbnRzLnRpcG9sb2dpYUltbW9iaWxlQ2FzYTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50aXBvbG9naWFDaGllc2EuaW5jbHVkZXModGlwb2xvZ2lhKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RhbnRzLnRpcG9sb2dpYUltbW9iaWxlQ2hpZXNhO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRpcG9sb2dpYUZhYmJyaWNhLmluY2x1ZGVzKHRpcG9sb2dpYSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN0YW50cy50aXBvbG9naWFJbW1vYmlsZUZhYmJyaWNhO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRpcG9sb2dpYUdhcmFnZS5pbmNsdWRlcyh0aXBvbG9naWEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdGFudHMudGlwb2xvZ2lhSW1tb2JpbGVHYXJhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudGlwb2xvZ2lhTWFnYXp6aW5vLmluY2x1ZGVzKHRpcG9sb2dpYSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN0YW50cy50aXBvbG9naWFJbW1vYmlsZU1hZ2F6emlubztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50aXBvbG9naWFNdXNlby5pbmNsdWRlcyh0aXBvbG9naWEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdGFudHMudGlwb2xvZ2lhSW1tb2JpbGVNdXNlbztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50aXBvbG9naWFOZWdvemlvLmluY2x1ZGVzKHRpcG9sb2dpYSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN0YW50cy50aXBvbG9naWFJbW1vYmlsZU5lZ296aW87XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudGlwb2xvZ2lhT3NwZWRhbGUuaW5jbHVkZXModGlwb2xvZ2lhKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RhbnRzLnRpcG9sb2dpYUltbW9iaWxlT3NwZWRhbGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudGlwb2xvZ2lhUG9udGUuaW5jbHVkZXModGlwb2xvZ2lhKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RhbnRzLnRpcG9sb2dpYUltbW9iaWxlUG9udGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudGlwb2xvZ2lhU2N1b2xhLmluY2x1ZGVzKHRpcG9sb2dpYSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN0YW50cy50aXBvbG9naWFJbW1vYmlsZVNjdW9sYTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50aXBvbG9naWFTcG9ydC5pbmNsdWRlcyh0aXBvbG9naWEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdGFudHMudGlwb2xvZ2lhSW1tb2JpbGVTcG9ydDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50aXBvbG9naWFTdGF6aW9uZS5pbmNsdWRlcyh0aXBvbG9naWEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdGFudHMudGlwb2xvZ2lhSW1tb2JpbGVTdGF6aW9uZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50aXBvbG9naWFUZWF0cm8uaW5jbHVkZXModGlwb2xvZ2lhKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RhbnRzLnRpcG9sb2dpYUltbW9iaWxlVGVhdHJvO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRpcG9sb2dpYVVmZmljaW8uaW5jbHVkZXModGlwb2xvZ2lhKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RhbnRzLnRpcG9sb2dpYUltbW9iaWxlVWZmaWNpbztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50aXBvbG9naWFWaWxsYS5pbmNsdWRlcyh0aXBvbG9naWEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdGFudHMudGlwb2xvZ2lhSW1tb2JpbGVWaWxsYTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jb25zdGFudHMudGlwb2xvZ2lhSW1tb2JpbGVDYXNhO1xuICAgIH1cbn1cbiJdfQ==