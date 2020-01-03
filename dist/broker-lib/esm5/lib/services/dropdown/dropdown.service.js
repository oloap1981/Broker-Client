/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BrokerHttpService } from '../common/brokerhttp.service';
import { ConstantsService } from '../common/constants.service';
var DropdownService = /** @class */ (function () {
    function DropdownService(httpService, constants) {
        this.httpService = httpService;
        this.constants = constants;
        this.tipologieTasse = [
            { codice: 0, descrizione: "" },
            { codice: 1, descrizione: "tasse1" },
            { codice: 2, descrizione: "tasse2" },
            { codice: 3, descrizione: "tasse3" },
        ];
        this.tipiAffittuario = [
            { codice: 0, descrizione: "" },
            { codice: 1, descrizione: "tipoAffittuario1" },
            { codice: 2, descrizione: "tipoAffittuario2" },
            { codice: 3, descrizione: "tipoAffittuario3" },
        ];
        this.euribor = [
            { codice: 0, descrizione: "" },
            { codice: 1, descrizione: "euribor1" },
            { codice: 2, descrizione: "euribor2" },
            { codice: 3, descrizione: "euribor3" },
        ];
        this.tipiOmi = [
            { codice: 0, descrizione: "" },
            { codice: 1, descrizione: "omi1" },
            { codice: 2, descrizione: "omi2" },
            { codice: 3, descrizione: "omi3" },
            { codice: 4, descrizione: "omi4" },
            { codice: 5, descrizione: "omi5" }
        ];
    }
    /**
     * @return {?}
     */
    DropdownService.prototype.getTipologieTasse = /**
     * @return {?}
     */
    function () {
        return this.tipologieTasse;
    };
    /**
     * @return {?}
     */
    DropdownService.prototype.getTipiAffittuari = /**
     * @return {?}
     */
    function () {
        return this.tipiAffittuario;
    };
    /**
     * @return {?}
     */
    DropdownService.prototype.getEuribor = /**
     * @return {?}
     */
    function () {
        return this.euribor;
    };
    /**
     * @param {?} idComuneIstat
     * @return {?}
     */
    DropdownService.prototype.getTipiOmi = /**
     * @param {?} idComuneIstat
     * @return {?}
     */
    function (idComuneIstat) {
        return this.tipiOmi;
    };
    /**
     * @param {?} Tipoddl
     * @param {?} Filtro
     * @param {?} Ordina
     * @param {?} Componi
     * @param {?} PrimoVuoto
     * @param {?} PrimoTutti
     * @return {?}
     */
    DropdownService.prototype.getDropdown = /**
     * @param {?} Tipoddl
     * @param {?} Filtro
     * @param {?} Ordina
     * @param {?} Componi
     * @param {?} PrimoVuoto
     * @param {?} PrimoTutti
     * @return {?}
     */
    function (Tipoddl, Filtro, Ordina, Componi, PrimoVuoto, PrimoTutti) {
        /** @type {?} */
        var path = '/' + Tipoddl + '/' + Filtro + '/' + Ordina + '/' + Componi + '/' + PrimoVuoto + '/' + PrimoTutti;
        return this.httpService.get(this.constants.getDropdownServiceName + path);
    };
    DropdownService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DropdownService.ctorParameters = function () { return [
        { type: BrokerHttpService },
        { type: ConstantsService }
    ]; };
    return DropdownService;
}());
export { DropdownService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DropdownService.prototype.tipologieTasse;
    /**
     * @type {?}
     * @private
     */
    DropdownService.prototype.tipiAffittuario;
    /**
     * @type {?}
     * @private
     */
    DropdownService.prototype.euribor;
    /**
     * @type {?}
     * @private
     */
    DropdownService.prototype.tipiOmi;
    /**
     * @type {?}
     * @private
     */
    DropdownService.prototype.httpService;
    /**
     * @type {?}
     * @private
     */
    DropdownService.prototype.constants;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jyb2tlci1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZHJvcGRvd24vZHJvcGRvd24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUcvRDtJQWlDSSx5QkFDWSxXQUE4QixFQUM5QixTQUEyQjtRQUQzQixnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7UUFDOUIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFoQy9CLG1CQUFjLEdBQW1CO1lBQ3JDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFO1lBQzlCLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFO1lBQ3BDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFO1lBQ3BDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFO1NBQ3ZDLENBQUM7UUFFTSxvQkFBZSxHQUFtQjtZQUN0QyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRTtZQUM5QixFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLGtCQUFrQixFQUFFO1lBQzlDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUU7WUFDOUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxrQkFBa0IsRUFBRTtTQUNqRCxDQUFDO1FBRU0sWUFBTyxHQUFtQjtZQUM5QixFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRTtZQUM5QixFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRTtZQUN0QyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRTtZQUN0QyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRTtTQUN6QyxDQUFDO1FBRU0sWUFBTyxHQUFtQjtZQUM5QixFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRTtZQUM5QixFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtZQUNsQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtZQUNsQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtZQUNsQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtZQUNsQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtTQUNyQyxDQUFDO0lBSXlDLENBQUM7Ozs7SUFFckMsMkNBQWlCOzs7SUFBeEI7UUFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVNLDJDQUFpQjs7O0lBQXhCO1FBQ0ksT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFTSxvQ0FBVTs7O0lBQWpCO1FBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRU0sb0NBQVU7Ozs7SUFBakIsVUFBa0IsYUFBcUI7UUFDbkMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Ozs7Ozs7Ozs7SUFFTSxxQ0FBVzs7Ozs7Ozs7O0lBQWxCLFVBQW1CLE9BQWUsRUFBRSxNQUFjLEVBQUUsTUFBYyxFQUFFLE9BQWUsRUFBRSxVQUFrQixFQUFFLFVBQWtCOztZQUNqSCxJQUFJLEdBQUcsR0FBRyxHQUFHLE9BQU8sR0FBRyxHQUFHLEdBQUcsTUFBTSxHQUFHLEdBQUcsR0FBRyxNQUFNLEdBQUcsR0FBRyxHQUFHLE9BQU8sR0FBRyxHQUFHLEdBQUcsVUFBVSxHQUFHLEdBQUcsR0FBRyxVQUFVO1FBQzlHLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUM5RSxDQUFDOztnQkF4REosVUFBVTs7OztnQkFKRixpQkFBaUI7Z0JBQ2pCLGdCQUFnQjs7SUE0RHpCLHNCQUFDO0NBQUEsQUF6REQsSUF5REM7U0F4RFksZUFBZTs7Ozs7O0lBRXhCLHlDQUtFOzs7OztJQUVGLDBDQUtFOzs7OztJQUVGLGtDQUtFOzs7OztJQUVGLGtDQU9FOzs7OztJQUdFLHNDQUFzQzs7Ozs7SUFDdEMsb0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbW1vbi9odHRwLm5hbWVzcGFjZSc7XG5pbXBvcnQgeyBCcm9rZXJIdHRwU2VydmljZSB9IGZyb20gJy4uL2NvbW1vbi9icm9rZXJodHRwLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29uc3RhbnRzU2VydmljZSB9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMuc2VydmljZSc7XG5pbXBvcnQgeyBEZGxJdGVtIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbW1vbi9kZGxpdGVtJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duU2VydmljZSB7XG5cbiAgICBwcml2YXRlIHRpcG9sb2dpZVRhc3NlOiBBcnJheTxEZGxJdGVtPiA9IFtcbiAgICAgICAgeyBjb2RpY2U6IDAsIGRlc2NyaXppb25lOiBcIlwiIH0sXG4gICAgICAgIHsgY29kaWNlOiAxLCBkZXNjcml6aW9uZTogXCJ0YXNzZTFcIiB9LFxuICAgICAgICB7IGNvZGljZTogMiwgZGVzY3JpemlvbmU6IFwidGFzc2UyXCIgfSxcbiAgICAgICAgeyBjb2RpY2U6IDMsIGRlc2NyaXppb25lOiBcInRhc3NlM1wiIH0sXG4gICAgXTtcblxuICAgIHByaXZhdGUgdGlwaUFmZml0dHVhcmlvOiBBcnJheTxEZGxJdGVtPiA9IFtcbiAgICAgICAgeyBjb2RpY2U6IDAsIGRlc2NyaXppb25lOiBcIlwiIH0sXG4gICAgICAgIHsgY29kaWNlOiAxLCBkZXNjcml6aW9uZTogXCJ0aXBvQWZmaXR0dWFyaW8xXCIgfSxcbiAgICAgICAgeyBjb2RpY2U6IDIsIGRlc2NyaXppb25lOiBcInRpcG9BZmZpdHR1YXJpbzJcIiB9LFxuICAgICAgICB7IGNvZGljZTogMywgZGVzY3JpemlvbmU6IFwidGlwb0FmZml0dHVhcmlvM1wiIH0sXG4gICAgXTtcblxuICAgIHByaXZhdGUgZXVyaWJvcjogQXJyYXk8RGRsSXRlbT4gPSBbXG4gICAgICAgIHsgY29kaWNlOiAwLCBkZXNjcml6aW9uZTogXCJcIiB9LFxuICAgICAgICB7IGNvZGljZTogMSwgZGVzY3JpemlvbmU6IFwiZXVyaWJvcjFcIiB9LFxuICAgICAgICB7IGNvZGljZTogMiwgZGVzY3JpemlvbmU6IFwiZXVyaWJvcjJcIiB9LFxuICAgICAgICB7IGNvZGljZTogMywgZGVzY3JpemlvbmU6IFwiZXVyaWJvcjNcIiB9LFxuICAgIF07XG5cbiAgICBwcml2YXRlIHRpcGlPbWk6IEFycmF5PERkbEl0ZW0+ID0gW1xuICAgICAgICB7IGNvZGljZTogMCwgZGVzY3JpemlvbmU6IFwiXCIgfSxcbiAgICAgICAgeyBjb2RpY2U6IDEsIGRlc2NyaXppb25lOiBcIm9taTFcIiB9LFxuICAgICAgICB7IGNvZGljZTogMiwgZGVzY3JpemlvbmU6IFwib21pMlwiIH0sXG4gICAgICAgIHsgY29kaWNlOiAzLCBkZXNjcml6aW9uZTogXCJvbWkzXCIgfSxcbiAgICAgICAgeyBjb2RpY2U6IDQsIGRlc2NyaXppb25lOiBcIm9taTRcIiB9LFxuICAgICAgICB7IGNvZGljZTogNSwgZGVzY3JpemlvbmU6IFwib21pNVwiIH1cbiAgICBdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgaHR0cFNlcnZpY2U6IEJyb2tlckh0dHBTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGNvbnN0YW50czogQ29uc3RhbnRzU2VydmljZSkgeyB9XG5cbiAgICBwdWJsaWMgZ2V0VGlwb2xvZ2llVGFzc2UoKTogQXJyYXk8RGRsSXRlbT4ge1xuICAgICAgICByZXR1cm4gdGhpcy50aXBvbG9naWVUYXNzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VGlwaUFmZml0dHVhcmkoKTogQXJyYXk8RGRsSXRlbT4ge1xuICAgICAgICByZXR1cm4gdGhpcy50aXBpQWZmaXR0dWFyaW87XG4gICAgfVxuXG4gICAgcHVibGljIGdldEV1cmlib3IoKTogQXJyYXk8RGRsSXRlbT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5ldXJpYm9yO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRUaXBpT21pKGlkQ29tdW5lSXN0YXQ6IHN0cmluZyk6IEFycmF5PERkbEl0ZW0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGlwaU9taTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RHJvcGRvd24oVGlwb2RkbDogbnVtYmVyLCBGaWx0cm86IHN0cmluZywgT3JkaW5hOiBzdHJpbmcsIENvbXBvbmk6IHN0cmluZywgUHJpbW9WdW90bzogc3RyaW5nLCBQcmltb1R1dHRpOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEh0dHAuSHR0cFJlc3BvbnNlPiB7XG4gICAgICAgIGNvbnN0IHBhdGggPSAnLycgKyBUaXBvZGRsICsgJy8nICsgRmlsdHJvICsgJy8nICsgT3JkaW5hICsgJy8nICsgQ29tcG9uaSArICcvJyArIFByaW1vVnVvdG8gKyAnLycgKyBQcmltb1R1dHRpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQodGhpcy5jb25zdGFudHMuZ2V0RHJvcGRvd25TZXJ2aWNlTmFtZSArIHBhdGgpO1xuICAgIH1cbn1cbiJdfQ==