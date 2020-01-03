/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { ConstantsService } from '../common/constants.service';
var IconeService = /** @class */ (function () {
    function IconeService(constants) {
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
    IconeService.prototype.getClasseIcona = /**
     * @param {?} tipologia
     * @return {?}
     */
    function (tipologia) {
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
    };
    IconeService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    IconeService.ctorParameters = function () { return [
        { type: ConstantsService }
    ]; };
    return IconeService;
}());
export { IconeService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jyb2tlci1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvaWNvbmUvaWNvbmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUUvRDtJQTRGSSxzQkFBb0IsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUF6RnZDLG1CQUFjLEdBQWtCO1lBQ3BDLEtBQUs7WUFDTCxLQUFLO1lBQ0wsS0FBSztZQUNMLEtBQUs7U0FDUixDQUFDO1FBQ00sa0JBQWEsR0FBa0I7WUFDbkMsS0FBSztZQUNMLEtBQUs7WUFDTCxLQUFLO1lBQ0wsS0FBSztZQUNMLE1BQU07U0FDVCxDQUFDO1FBQ00sc0JBQWlCLEdBQWtCO1lBQ3ZDLEtBQUs7WUFDTCxNQUFNO1NBQ1QsQ0FBQztRQUNNLHFCQUFnQixHQUFrQjtZQUN0QyxNQUFNO1lBQ04sS0FBSztZQUNMLEtBQUs7WUFDTCxLQUFLO1lBQ0wsS0FBSztZQUNMLEtBQUs7WUFDTCxLQUFLO1lBQ0wsS0FBSztZQUNMLEtBQUs7U0FDUixDQUFDO1FBQ00scUJBQWdCLEdBQWtCO1lBQ3RDLEtBQUs7WUFDTCxLQUFLO1lBQ0wsS0FBSztZQUNMLEtBQUs7U0FDUixDQUFDO1FBQ00sc0JBQWlCLEdBQWtCO1lBQ3ZDLEtBQUs7WUFDTCxLQUFLO1NBQ1IsQ0FBQztRQUNNLG9CQUFlLEdBQWtCO1lBQ3JDLEtBQUs7U0FDUixDQUFDO1FBQ00sbUJBQWMsR0FBa0I7WUFDcEMsS0FBSztTQUNSLENBQUM7UUFDTSxvQkFBZSxHQUFrQjtZQUNyQyxLQUFLO1lBQ0wsS0FBSztTQUNSLENBQUM7UUFDTSx1QkFBa0IsR0FBa0I7WUFDeEMsS0FBSztZQUNMLEtBQUs7WUFDTCxLQUFLO1lBQ0wsS0FB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RTs7Ozs7SUFDRixzQ0FFRTs7Ozs7SUFDRix1Q0FHRTs7Ozs7SUFDRiwwQ0FLRTs7Ozs7SUFDRix3Q0FHRTs7Ozs7SUFDRixzQ0FHRTs7Ozs7SUFDRix1Q0FHRTs7Ozs7SUFDRix5Q0FHRTs7Ozs7SUFDRix1Q0FFRTs7Ozs7SUFDRixzQ0FFRTs7Ozs7SUFDRixzQ0FHRTs7Ozs7SUFDRix5Q0FFRTs7Ozs7SUFDRix5Q0FJRTs7Ozs7SUFFVSxpQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbnN0YW50c1NlcnZpY2UgfSBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSWNvbmVTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgdGlwb2xvZ2lhVmlsbGE6IEFycmF5PHN0cmluZz4gPSBbXG4gICAgICAgIFwiQS8xXCIsXG4gICAgICAgIFwiQS83XCIsXG4gICAgICAgIFwiQS84XCIsXG4gICAgICAgIFwiQS85XCJcbiAgICBdO1xuICAgIHByaXZhdGUgdGlwb2xvZ2lhQ2FzYTogQXJyYXk8c3RyaW5nPiA9IFtcbiAgICAgICAgXCJBLzJcIixcbiAgICAgICAgXCJBLzNcIixcbiAgICAgICAgXCJBLzRcIixcbiAgICAgICAgXCJBLzVcIixcbiAgICAgICAgXCJBLzExXCJcbiAgICBdO1xuICAgIHByaXZhdGUgdGlwb2xvZ2lhQWdyaWNvbG86IEFycmF5PHN0cmluZz4gPSBbXG4gICAgICAgIFwiQS82XCIsXG4gICAgICAgIFwiRC8xMFwiXG4gICAgXTtcbiAgICBwcml2YXRlIHRpcG9sb2dpYVVmZmljaW86IEFycmF5PHN0cmluZz4gPSBbXG4gICAgICAgIFwiQS8xMFwiLFxuICAgICAgICBcIkMvM1wiLFxuICAgICAgICBcIkUvM1wiLFxuICAgICAgICBcIkUvNFwiLFxuICAgICAgICBcIkUvNlwiLFxuICAgICAgICBcIkUvOFwiLFxuICAgICAgICBcIkUvOVwiLFxuICAgICAgICBcIkYvMVwiLFxuICAgICAgICBcIkYvMlwiXG4gICAgXTtcbiAgICBwcml2YXRlIHRpcG9sb2dpYUFsYmVyZ286IEFycmF5PHN0cmluZz4gPSBbXG4gICAgICAgIFwiQi8xXCIsXG4gICAgICAgIFwiQi8zXCIsXG4gICAgICAgIFwiQy81XCIsXG4gICAgICAgIFwiRC8yXCJcbiAgICBdO1xuICAgIHByaXZhdGUgdGlwb2xvZ2lhT3NwZWRhbGU6IEFycmF5PHN0cmluZz4gPSBbXG4gICAgICAgIFwiQi8yXCIsXG4gICAgICAgIFwiRC80XCJcbiAgICBdO1xuICAgIHByaXZhdGUgdGlwb2xvZ2lhU2N1b2xhOiBBcnJheTxzdHJpbmc+ID0gW1xuICAgICAgICBcIkIvNVwiXG4gICAgXTtcbiAgICBwcml2YXRlIHRpcG9sb2dpYU11c2VvOiBBcnJheTxzdHJpbmc+ID0gW1xuICAgICAgICBcIkIvNlwiXG4gICAgXTtcbiAgICBwcml2YXRlIHRpcG9sb2dpYUNoaWVzYTogQXJyYXk8c3RyaW5nPiA9IFtcbiAgICAgICAgXCJCLzdcIixcbiAgICAgICAgXCJFLzdcIlxuICAgIF07XG4gICAgcHJpdmF0ZSB0aXBvbG9naWFNYWdhenppbm86IEFycmF5PHN0cmluZz4gPSBbXG4gICAgICAgIFwiQi84XCIsXG4gICAgICAgIFwiQy8yXCIsXG4gICAgICAgIFwiRS81XCIsXG4gICAgICAgIFwiRi81XCJcbiAgICBdO1xuICAgIHByaXZhdGUgdGlwb2xvZ2lhTmVnb3ppbzogQXJyYXk8c3RyaW5nPiA9IFtcbiAgICAgICAgXCJDLzFcIixcbiAgICAgICAgXCJELzhcIlxuICAgIF07XG4gICAgcHJpdmF0ZSB0aXBvbG9naWFTcG9ydDogQXJyYXk8c3RyaW5nPiA9IFtcbiAgICAgICAgXCJDLzRcIixcbiAgICAgICAgXCJELzZcIlxuICAgIF07XG4gICAgcHJpdmF0ZSB0aXBvbG9naWFHYXJhZ2U6IEFycmF5PHN0cmluZz4gPSBbXG4gICAgICAgIFwiQy82XCIsXG4gICAgICAgIFwiQy83XCJcbiAgICBdO1xuICAgIHByaXZhdGUgdGlwb2xvZ2lhRmFiYnJpY2E6IEFycmF5PHN0cmluZz4gPSBbXG4gICAgICAgIFwiRC8xXCIsXG4gICAgICAgIFwiRC83XCJcbiAgICBdO1xuICAgIHByaXZhdGUgdGlwb2xvZ2lhVGVhdHJvOiBBcnJheTxzdHJpbmc+ID0gW1xuICAgICAgICBcIkQvM1wiXG4gICAgXTtcbiAgICBwcml2YXRlIHRpcG9sb2dpYUJhbmNhOiBBcnJheTxzdHJpbmc+ID0gW1xuICAgICAgICBcIkQvNVwiXG4gICAgXTtcbiAgICBwcml2YXRlIHRpcG9sb2dpYVBvbnRlOiBBcnJheTxzdHJpbmc+ID0gW1xuICAgICAgICBcIkQvOVwiLFxuICAgICAgICBcIkUvMlwiXG4gICAgXTtcbiAgICBwcml2YXRlIHRpcG9sb2dpYVN0YXppb25lOiBBcnJheTxzdHJpbmc+ID0gW1xuICAgICAgICBcIkUvMVwiXG4gICAgXTtcbiAgICBwcml2YXRlIHRpcG9sb2dpYUNhbnRpZXJlOiBBcnJheTxzdHJpbmc+ID0gW1xuICAgICAgICBcIkYvM1wiLFxuICAgICAgICBcIkYvNFwiLFxuICAgICAgICBcIkYvNlwiXG4gICAgXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uc3RhbnRzOiBDb25zdGFudHNTZXJ2aWNlKSB7IH1cblxuICAgIHB1YmxpYyBnZXRDbGFzc2VJY29uYSh0aXBvbG9naWE6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLnRpcG9sb2dpYUFncmljb2xvLmluY2x1ZGVzKHRpcG9sb2dpYSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN0YW50cy50aXBvbG9naWFJbW1vYmlsZUFncmljb2xvO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRpcG9sb2dpYUFsYmVyZ28uaW5jbHVkZXModGlwb2xvZ2lhKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RhbnRzLnRpcG9sb2dpYUltbW9iaWxlQWxiZXJnbztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50aXBvbG9naWFCYW5jYS5pbmNsdWRlcyh0aXBvbG9naWEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdGFudHMudGlwb2xvZ2lhSW1tb2JpbGVCYW5jYTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50aXBvbG9naWFDYW50aWVyZS5pbmNsdWRlcyh0aXBvbG9naWEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdGFudHMudGlwb2xvZ2lhSW1tb2JpbGVDYW50aWVyZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50aXBvbG9naWFDYXNhLmluY2x1ZGVzKHRpcG9sb2dpYSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN0YW50cy50aXBvbG9naWFJbW1vYmlsZUNhc2E7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudGlwb2xvZ2lhQ2hpZXNhLmluY2x1ZGVzKHRpcG9sb2dpYSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN0YW50cy50aXBvbG9naWFJbW1vYmlsZUNoaWVzYTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50aXBvbG9naWFGYWJicmljYS5pbmNsdWRlcyh0aXBvbG9naWEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdGFudHMudGlwb2xvZ2lhSW1tb2JpbGVGYWJicmljYTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50aXBvbG9naWFHYXJhZ2UuaW5jbHVkZXModGlwb2xvZ2lhKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RhbnRzLnRpcG9sb2dpYUltbW9iaWxlR2FyYWdlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRpcG9sb2dpYU1hZ2F6emluby5pbmNsdWRlcyh0aXBvbG9naWEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdGFudHMudGlwb2xvZ2lhSW1tb2JpbGVNYWdhenppbm87XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudGlwb2xvZ2lhTXVzZW8uaW5jbHVkZXModGlwb2xvZ2lhKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RhbnRzLnRpcG9sb2dpYUltbW9iaWxlTXVzZW87XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudGlwb2xvZ2lhTmVnb3ppby5pbmNsdWRlcyh0aXBvbG9naWEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdGFudHMudGlwb2xvZ2lhSW1tb2JpbGVOZWdvemlvO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRpcG9sb2dpYU9zcGVkYWxlLmluY2x1ZGVzKHRpcG9sb2dpYSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN0YW50cy50aXBvbG9naWFJbW1vYmlsZU9zcGVkYWxlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRpcG9sb2dpYVBvbnRlLmluY2x1ZGVzKHRpcG9sb2dpYSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN0YW50cy50aXBvbG9naWFJbW1vYmlsZVBvbnRlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRpcG9sb2dpYVNjdW9sYS5pbmNsdWRlcyh0aXBvbG9naWEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdGFudHMudGlwb2xvZ2lhSW1tb2JpbGVTY3VvbGE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudGlwb2xvZ2lhU3BvcnQuaW5jbHVkZXModGlwb2xvZ2lhKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RhbnRzLnRpcG9sb2dpYUltbW9iaWxlU3BvcnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudGlwb2xvZ2lhU3RhemlvbmUuaW5jbHVkZXModGlwb2xvZ2lhKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RhbnRzLnRpcG9sb2dpYUltbW9iaWxlU3RhemlvbmU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudGlwb2xvZ2lhVGVhdHJvLmluY2x1ZGVzKHRpcG9sb2dpYSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN0YW50cy50aXBvbG9naWFJbW1vYmlsZVRlYXRybztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50aXBvbG9naWFVZmZpY2lvLmluY2x1ZGVzKHRpcG9sb2dpYSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN0YW50cy50aXBvbG9naWFJbW1vYmlsZVVmZmljaW87XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudGlwb2xvZ2lhVmlsbGEuaW5jbHVkZXModGlwb2xvZ2lhKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RhbnRzLnRpcG9sb2dpYUltbW9iaWxlVmlsbGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RhbnRzLnRpcG9sb2dpYUltbW9iaWxlQ2FzYTtcbiAgICB9XG59XG4iXX0=