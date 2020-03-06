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
    IconeService.prototype.getClasseIcona = /**
     * @param {?} tipologia
     * @return {?}
     */
    function (tipologia) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jyb2tlci1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvaWNvbmUvaWNvbmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUUvRDtJQStGSSxzQkFBb0IsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUE1RnZDLG1CQUFjLEdBQWtCO1lBQ3BDLEtBQUs7WUFDTCxLQUFLO1lBQ0wsS0FBSztZQUNMLEtBQUs7U0FDUixDQUFDO1FBQ00sa0JBQWEsR0FBa0I7WUFDbkMsS0FBSztZQUNMLEtBQUs7WUFDTCxLQUFLO1lBQ0wsS0FBSztZQUNMLE1BQU07U0FDVCxDQUFDO1FBQ00sc0JBQWlCLEdBQWtCO1lBQ3ZDLEtBQUs7WUFDTCxNQUFNO1NBQ1QsQ0FBQztRQUNNLHFCQUFnQixHQUFrQjtZQUN0QyxLQUFLO1NBQ1IsQ0FBQztRQUNNLHFCQUFnQixHQUFrQjtZQUN0QyxNQUFNO1lBQ04sS0FBSztZQUNMLEtBQUs7WUFDTCxLQUFLO1lBQ0wsS0FBSztZQUNMLEtBQUs7WUFDTCxLQUFLO1lBQ0wsS0FBSztZQUNMLEtBQUs7U0FDUixDQUFDO1FBQ00scUJBQWdCLEdBQWtCO1lBQ3RDLEtBQUs7WUFDTCxLQUFLO1lBQ0wsS0FBSztZQUNMLEtBQUs7U0FDUixDQUFDO1FBQ00sc0JBQWlCLEdBQWtCO1lBQ3ZDLEtBQUs7WUFDTCxLQUFLO1NBQ1IsQ0FBQztRQUNNLG9CQUFlLEdBQWtCO1lBQ3JDLEtBQUs7U0FDUixDQUFDO1FBQ00sbUJBQWMsR0FBa0I7WUFDcEMsS0FBSztTQUNSLENBQUM7UUFDTSxvQkFBZSxHQUFrQjtZQUNyQyxLQUFLO1lBQ0wsS0FBSztTQUNSLENBQUM7UUFDTSx1QkFBa0IsR0FBa0I7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QWtLekIsbUJBQUM7Q0FBQSxBQWhLRCxJQWdLQztTQS9KWSxZQUFZOzs7Ozs7SUFFckIsc0NBS0U7Ozs7O0lBQ0YscUNBTUU7Ozs7O0lBQ0YseUNBR0U7Ozs7O0lBQ0Ysd0NBRUU7Ozs7O0lBQ0Ysd0NBVUU7Ozs7O0lBQ0Ysd0NBS0U7Ozs7O0lBQ0YseUNBR0U7Ozs7O0lBQ0YsdUNBRUU7Ozs7O0lBQ0Ysc0NBRUU7Ozs7O0lBQ0YsdUNBR0U7Ozs7O0lBQ0YsMENBS0U7Ozs7O0lBQ0Ysd0NBR0U7Ozs7O0lBQ0Ysc0NBR0U7Ozs7O0lBQ0YsdUNBR0U7Ozs7O0lBQ0YseUNBR0U7Ozs7O0lBQ0YsdUNBRUU7Ozs7O0lBQ0Ysc0NBRUU7Ozs7O0lBQ0Ysc0NBR0U7Ozs7O0lBQ0YseUNBRUU7Ozs7O0lBQ0YseUNBSUU7Ozs7O0lBRVUsaUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb25zdGFudHNTZXJ2aWNlIH0gZnJvbSAnLi4vY29tbW9uL2NvbnN0YW50cy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEljb25lU2VydmljZSB7XG5cbiAgICBwcml2YXRlIHRpcG9sb2dpYVZpbGxhOiBBcnJheTxzdHJpbmc+ID0gW1xuICAgICAgICBcIkEvMVwiLFxuICAgICAgICBcIkEvN1wiLFxuICAgICAgICBcIkEvOFwiLFxuICAgICAgICBcIkEvOVwiXG4gICAgXTtcbiAgICBwcml2YXRlIHRpcG9sb2dpYUNhc2E6IEFycmF5PHN0cmluZz4gPSBbXG4gICAgICAgIFwiQS8yXCIsXG4gICAgICAgIFwiQS8zXCIsXG4gICAgICAgIFwiQS80XCIsXG4gICAgICAgIFwiQS81XCIsXG4gICAgICAgIFwiQS8xMVwiXG4gICAgXTtcbiAgICBwcml2YXRlIHRpcG9sb2dpYUFncmljb2xvOiBBcnJheTxzdHJpbmc+ID0gW1xuICAgICAgICBcIkEvNlwiLFxuICAgICAgICBcIkQvMTBcIlxuICAgIF07XG4gICAgcHJpdmF0ZSB0aXBvbG9naWFUZXJyZW5vOiBBcnJheTxzdHJpbmc+ID0gW1xuICAgICAgICBcIlQvMVwiXG4gICAgXTtcbiAgICBwcml2YXRlIHRpcG9sb2dpYVVmZmljaW86IEFycmF5PHN0cmluZz4gPSBbXG4gICAgICAgIFwiQS8xMFwiLFxuICAgICAgICBcIkMvM1wiLFxuICAgICAgICBcIkUvM1wiLFxuICAgICAgICBcIkUvNFwiLFxuICAgICAgICBcIkUvNlwiLFxuICAgICAgICBcIkUvOFwiLFxuICAgICAgICBcIkUvOVwiLFxuICAgICAgICBcIkYvMVwiLFxuICAgICAgICBcIkYvMlwiXG4gICAgXTtcbiAgICBwcml2YXRlIHRpcG9sb2dpYUFsYmVyZ286IEFycmF5PHN0cmluZz4gPSBbXG4gICAgICAgIFwiQi8xXCIsXG4gICAgICAgIFwiQi8zXCIsXG4gICAgICAgIFwiQy81XCIsXG4gICAgICAgIFwiRC8yXCJcbiAgICBdO1xuICAgIHByaXZhdGUgdGlwb2xvZ2lhT3NwZWRhbGU6IEFycmF5PHN0cmluZz4gPSBbXG4gICAgICAgIFwiQi8yXCIsXG4gICAgICAgIFwiRC80XCJcbiAgICBdO1xuICAgIHByaXZhdGUgdGlwb2xvZ2lhU2N1b2xhOiBBcnJheTxzdHJpbmc+ID0gW1xuICAgICAgICBcIkIvNVwiXG4gICAgXTtcbiAgICBwcml2YXRlIHRpcG9sb2dpYU11c2VvOiBBcnJheTxzdHJpbmc+ID0gW1xuICAgICAgICBcIkIvNlwiXG4gICAgXTtcbiAgICBwcml2YXRlIHRpcG9sb2dpYUNoaWVzYTogQXJyYXk8c3RyaW5nPiA9IFtcbiAgICAgICAgXCJCLzdcIixcbiAgICAgICAgXCJFLzdcIlxuICAgIF07XG4gICAgcHJpdmF0ZSB0aXBvbG9naWFNYWdhenppbm86IEFycmF5PHN0cmluZz4gPSBbXG4gICAgICAgIFwiQi84XCIsXG4gICAgICAgIFwiQy8yXCIsXG4gICAgICAgIFwiRS81XCIsXG4gICAgICAgIFwiRi81XCJcbiAgICBdO1xuICAgIHByaXZhdGUgdGlwb2xvZ2lhTmVnb3ppbzogQXJyYXk8c3RyaW5nPiA9IFtcbiAgICAgICAgXCJDLzFcIixcbiAgICAgICAgXCJELzhcIlxuICAgIF07XG4gICAgcHJpdmF0ZSB0aXBvbG9naWFTcG9ydDogQXJyYXk8c3RyaW5nPiA9IFtcbiAgICAgICAgXCJDLzRcIixcbiAgICAgICAgXCJELzZcIlxuICAgIF07XG4gICAgcHJpdmF0ZSB0aXBvbG9naWFHYXJhZ2U6IEFycmF5PHN0cmluZz4gPSBbXG4gICAgICAgIFwiQy82XCIsXG4gICAgICAgIFwiQy83XCJcbiAgICBdO1xuICAgIHByaXZhdGUgdGlwb2xvZ2lhRmFiYnJpY2E6IEFycmF5PHN0cmluZz4gPSBbXG4gICAgICAgIFwiRC8xXCIsXG4gICAgICAgIFwiRC83XCJcbiAgICBdO1xuICAgIHByaXZhdGUgdGlwb2xvZ2lhVGVhdHJvOiBBcnJheTxzdHJpbmc+ID0gW1xuICAgICAgICBcIkQvM1wiXG4gICAgXTtcbiAgICBwcml2YXRlIHRpcG9sb2dpYUJhbmNhOiBBcnJheTxzdHJpbmc+ID0gW1xuICAgICAgICBcIkQvNVwiXG4gICAgXTtcbiAgICBwcml2YXRlIHRpcG9sb2dpYVBvbnRlOiBBcnJheTxzdHJpbmc+ID0gW1xuICAgICAgICBcIkQvOVwiLFxuICAgICAgICBcIkUvMlwiXG4gICAgXTtcbiAgICBwcml2YXRlIHRpcG9sb2dpYVN0YXppb25lOiBBcnJheTxzdHJpbmc+ID0gW1xuICAgICAgICBcIkUvMVwiXG4gICAgXTtcbiAgICBwcml2YXRlIHRpcG9sb2dpYUNhbnRpZXJlOiBBcnJheTxzdHJpbmc+ID0gW1xuICAgICAgICBcIkYvM1wiLFxuICAgICAgICBcIkYvNFwiLFxuICAgICAgICBcIkYvNlwiXG4gICAgXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uc3RhbnRzOiBDb25zdGFudHNTZXJ2aWNlKSB7IH1cblxuICAgIHB1YmxpYyBnZXRDbGFzc2VJY29uYSh0aXBvbG9naWE6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLnRpcG9sb2dpYVRlcnJlbm8uaW5jbHVkZXModGlwb2xvZ2lhKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RhbnRzLnRpcG9sb2dpYUltbW9iaWxlVGVycmVubztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50aXBvbG9naWFBZ3JpY29sby5pbmNsdWRlcyh0aXBvbG9naWEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdGFudHMudGlwb2xvZ2lhSW1tb2JpbGVBZ3JpY29sbztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50aXBvbG9naWFBbGJlcmdvLmluY2x1ZGVzKHRpcG9sb2dpYSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN0YW50cy50aXBvbG9naWFJbW1vYmlsZUFsYmVyZ287XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudGlwb2xvZ2lhQmFuY2EuaW5jbHVkZXModGlwb2xvZ2lhKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RhbnRzLnRpcG9sb2dpYUltbW9iaWxlQmFuY2E7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudGlwb2xvZ2lhQ2FudGllcmUuaW5jbHVkZXModGlwb2xvZ2lhKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RhbnRzLnRpcG9sb2dpYUltbW9iaWxlQ2FudGllcmU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudGlwb2xvZ2lhQ2FzYS5pbmNsdWRlcyh0aXBvbG9naWEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdGFudHMudGlwb2xvZ2lhSW1tb2JpbGVDYXNhO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRpcG9sb2dpYUNoaWVzYS5pbmNsdWRlcyh0aXBvbG9naWEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdGFudHMudGlwb2xvZ2lhSW1tb2JpbGVDaGllc2E7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudGlwb2xvZ2lhRmFiYnJpY2EuaW5jbHVkZXModGlwb2xvZ2lhKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RhbnRzLnRpcG9sb2dpYUltbW9iaWxlRmFiYnJpY2E7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudGlwb2xvZ2lhR2FyYWdlLmluY2x1ZGVzKHRpcG9sb2dpYSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN0YW50cy50aXBvbG9naWFJbW1vYmlsZUdhcmFnZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50aXBvbG9naWFNYWdhenppbm8uaW5jbHVkZXModGlwb2xvZ2lhKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RhbnRzLnRpcG9sb2dpYUltbW9iaWxlTWFnYXp6aW5vO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRpcG9sb2dpYU11c2VvLmluY2x1ZGVzKHRpcG9sb2dpYSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN0YW50cy50aXBvbG9naWFJbW1vYmlsZU11c2VvO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRpcG9sb2dpYU5lZ296aW8uaW5jbHVkZXModGlwb2xvZ2lhKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RhbnRzLnRpcG9sb2dpYUltbW9iaWxlTmVnb3ppbztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50aXBvbG9naWFPc3BlZGFsZS5pbmNsdWRlcyh0aXBvbG9naWEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdGFudHMudGlwb2xvZ2lhSW1tb2JpbGVPc3BlZGFsZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50aXBvbG9naWFQb250ZS5pbmNsdWRlcyh0aXBvbG9naWEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdGFudHMudGlwb2xvZ2lhSW1tb2JpbGVQb250ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50aXBvbG9naWFTY3VvbGEuaW5jbHVkZXModGlwb2xvZ2lhKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RhbnRzLnRpcG9sb2dpYUltbW9iaWxlU2N1b2xhO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRpcG9sb2dpYVNwb3J0LmluY2x1ZGVzKHRpcG9sb2dpYSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN0YW50cy50aXBvbG9naWFJbW1vYmlsZVNwb3J0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRpcG9sb2dpYVN0YXppb25lLmluY2x1ZGVzKHRpcG9sb2dpYSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN0YW50cy50aXBvbG9naWFJbW1vYmlsZVN0YXppb25lO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRpcG9sb2dpYVRlYXRyby5pbmNsdWRlcyh0aXBvbG9naWEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdGFudHMudGlwb2xvZ2lhSW1tb2JpbGVUZWF0cm87XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudGlwb2xvZ2lhVWZmaWNpby5pbmNsdWRlcyh0aXBvbG9naWEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdGFudHMudGlwb2xvZ2lhSW1tb2JpbGVVZmZpY2lvO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRpcG9sb2dpYVZpbGxhLmluY2x1ZGVzKHRpcG9sb2dpYSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN0YW50cy50aXBvbG9naWFJbW1vYmlsZVZpbGxhO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnN0YW50cy50aXBvbG9naWFJbW1vYmlsZUNhc2E7XG4gICAgfVxufVxuIl19