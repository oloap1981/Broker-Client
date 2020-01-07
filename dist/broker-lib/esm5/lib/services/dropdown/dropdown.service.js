/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BrokerHttpService } from '../common/brokerhttp.service';
import { ConstantsService } from '../common/constants.service';
var DropdownService = /** @class */ (function () {
    // private tipologieTasse: Array<DdlItem> = [
    //     { codice: 0, descrizione: "" },
    //     { codice: 1, descrizione: "tasse1" },
    //     { codice: 2, descrizione: "tasse2" },
    //     { codice: 3, descrizione: "tasse3" },
    // ];
    // private tipiAffittuario: Array<DdlItem> = [
    //     { codice: 0, descrizione: "" },
    //     { codice: 1, descrizione: "tipoAffittuario1" },
    //     { codice: 2, descrizione: "tipoAffittuario2" },
    //     { codice: 3, descrizione: "tipoAffittuario3" },
    // ];
    // private euribor: Array<DdlItem> = [
    //     { codice: 0, descrizione: "" },
    //     { codice: 1, descrizione: "euribor1" },
    //     { codice: 2, descrizione: "euribor2" },
    //     { codice: 3, descrizione: "euribor3" },
    // ];
    // private tipiOmi: Array<DdlItem> = [
    //     { codice: 0, descrizione: "" },
    //     { codice: 1, descrizione: "omi1" },
    //     { codice: 2, descrizione: "omi2" },
    //     { codice: 3, descrizione: "omi3" },
    //     { codice: 4, descrizione: "omi4" },
    //     { codice: 5, descrizione: "omi5" }
    // ];
    function DropdownService(httpService, constants) {
        this.httpService = httpService;
        this.constants = constants;
    }
    /**
     * @param {?} primacasa
     * @param {?} residente
     * @param {?} affittata
     * @return {?}
     */
    DropdownService.prototype.getTipologieTasse = /**
     * @param {?} primacasa
     * @param {?} residente
     * @param {?} affittata
     * @return {?}
     */
    function (primacasa, residente, affittata) {
        return this.getDropdown(this.constants.getDdlAffittuari, this.constants.pathSeparator + this.getBooleanAsString(primacasa)
            + this.constants.pathSeparator + this.getBooleanAsString(residente)
            + this.constants.pathSeparator + this.getBooleanAsString(affittata));
    };
    /**
     * @return {?}
     */
    DropdownService.prototype.getTipiAffittuari = /**
     * @return {?}
     */
    function () {
        return this.getDropdown(this.constants.getDdlAffittuari, '');
    };
    /**
     * @return {?}
     */
    DropdownService.prototype.getEuribor = /**
     * @return {?}
     */
    function () {
        return this.getDropdown(this.constants.getDdlEuribor, '');
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
        return this.getDropdown(this.constants.getDdlOmi, this.constants.pathSeparator + idComuneIstat);
    };
    /**
     * @return {?}
     */
    DropdownService.prototype.getTipologieCatastali = /**
     * @return {?}
     */
    function () {
        return this.getDropdown(this.constants.getDdlTipologiaCatastale, '');
    };
    /**
     * @param {?} Tipoddl
     * @param {?} Filtro
     * @return {?}
     */
    DropdownService.prototype.getDropdown = /**
     * @param {?} Tipoddl
     * @param {?} Filtro
     * @return {?}
     */
    function (Tipoddl, Filtro) {
        /** @type {?} */
        var path = this.constants.pathSeparator + Tipoddl + Filtro;
        return this.httpService.get(path);
    };
    /**
     * @private
     * @param {?} input
     * @return {?}
     */
    DropdownService.prototype.getBooleanAsString = /**
     * @private
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return (input ? 'true' : 'false');
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
    DropdownService.prototype.httpService;
    /**
     * @type {?}
     * @private
     */
    DropdownService.prototype.constants;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jyb2tlci1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZHJvcGRvd24vZHJvcGRvd24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUcvRDtJQUdJLDZDQUE2QztJQUM3QyxzQ0FBc0M7SUFDdEMsNENBQTRDO0lBQzVDLDRDQUE0QztJQUM1Qyw0Q0FBNEM7SUFDNUMsS0FBSztJQUVMLDhDQUE4QztJQUM5QyxzQ0FBc0M7SUFDdEMsc0RBQXNEO0lBQ3RELHNEQUFzRDtJQUN0RCxzREFBc0Q7SUFDdEQsS0FBSztJQUVMLHNDQUFzQztJQUN0QyxzQ0FBc0M7SUFDdEMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsS0FBSztJQUVMLHNDQUFzQztJQUN0QyxzQ0FBc0M7SUFDdEMsMENBQTBDO0lBQzFDLDBDQUEwQztJQUMxQywwQ0FBMEM7SUFDMUMsMENBQTBDO0lBQzFDLHlDQUF5QztJQUN6QyxLQUFLO0lBRUwseUJBQ1ksV0FBOEIsRUFDOUIsU0FBMkI7UUFEM0IsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO1FBQzlCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQUksQ0FBQzs7Ozs7OztJQUVyQywyQ0FBaUI7Ozs7OztJQUF4QixVQUF5QixTQUFrQixFQUFFLFNBQWtCLEVBQUUsU0FBa0I7UUFDL0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQ25ELElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUM7Y0FDL0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQztjQUNqRSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDOzs7O0lBRU0sMkNBQWlCOzs7SUFBeEI7UUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7O0lBRU0sb0NBQVU7OztJQUFqQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7OztJQUVNLG9DQUFVOzs7O0lBQWpCLFVBQWtCLGFBQXFCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUMsQ0FBQztJQUNwRyxDQUFDOzs7O0lBRU0sK0NBQXFCOzs7SUFBNUI7UUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6RSxDQUFDOzs7Ozs7SUFFTSxxQ0FBVzs7Ozs7SUFBbEIsVUFBbUIsT0FBZSxFQUFFLE1BQWM7O1lBQ3hDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxPQUFPLEdBQUcsTUFBTTtRQUM1RCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7OztJQUVPLDRDQUFrQjs7Ozs7SUFBMUIsVUFBMkIsS0FBYztRQUNyQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7O2dCQW5FSixVQUFVOzs7O2dCQUpGLGlCQUFpQjtnQkFDakIsZ0JBQWdCOztJQXVFekIsc0JBQUM7Q0FBQSxBQXBFRCxJQW9FQztTQW5FWSxlQUFlOzs7Ozs7SUFpQ3BCLHNDQUFzQzs7Ozs7SUFDdEMsb0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbW1vbi9odHRwLm5hbWVzcGFjZSc7XG5pbXBvcnQgeyBCcm9rZXJIdHRwU2VydmljZSB9IGZyb20gJy4uL2NvbW1vbi9icm9rZXJodHRwLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29uc3RhbnRzU2VydmljZSB9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMuc2VydmljZSc7XG5pbXBvcnQgeyBEZGxJdGVtIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbW1vbi9kZGxpdGVtJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duU2VydmljZSB7XG5cbiAgICAvLyBwcml2YXRlIHRpcG9sb2dpZVRhc3NlOiBBcnJheTxEZGxJdGVtPiA9IFtcbiAgICAvLyAgICAgeyBjb2RpY2U6IDAsIGRlc2NyaXppb25lOiBcIlwiIH0sXG4gICAgLy8gICAgIHsgY29kaWNlOiAxLCBkZXNjcml6aW9uZTogXCJ0YXNzZTFcIiB9LFxuICAgIC8vICAgICB7IGNvZGljZTogMiwgZGVzY3JpemlvbmU6IFwidGFzc2UyXCIgfSxcbiAgICAvLyAgICAgeyBjb2RpY2U6IDMsIGRlc2NyaXppb25lOiBcInRhc3NlM1wiIH0sXG4gICAgLy8gXTtcblxuICAgIC8vIHByaXZhdGUgdGlwaUFmZml0dHVhcmlvOiBBcnJheTxEZGxJdGVtPiA9IFtcbiAgICAvLyAgICAgeyBjb2RpY2U6IDAsIGRlc2NyaXppb25lOiBcIlwiIH0sXG4gICAgLy8gICAgIHsgY29kaWNlOiAxLCBkZXNjcml6aW9uZTogXCJ0aXBvQWZmaXR0dWFyaW8xXCIgfSxcbiAgICAvLyAgICAgeyBjb2RpY2U6IDIsIGRlc2NyaXppb25lOiBcInRpcG9BZmZpdHR1YXJpbzJcIiB9LFxuICAgIC8vICAgICB7IGNvZGljZTogMywgZGVzY3JpemlvbmU6IFwidGlwb0FmZml0dHVhcmlvM1wiIH0sXG4gICAgLy8gXTtcblxuICAgIC8vIHByaXZhdGUgZXVyaWJvcjogQXJyYXk8RGRsSXRlbT4gPSBbXG4gICAgLy8gICAgIHsgY29kaWNlOiAwLCBkZXNjcml6aW9uZTogXCJcIiB9LFxuICAgIC8vICAgICB7IGNvZGljZTogMSwgZGVzY3JpemlvbmU6IFwiZXVyaWJvcjFcIiB9LFxuICAgIC8vICAgICB7IGNvZGljZTogMiwgZGVzY3JpemlvbmU6IFwiZXVyaWJvcjJcIiB9LFxuICAgIC8vICAgICB7IGNvZGljZTogMywgZGVzY3JpemlvbmU6IFwiZXVyaWJvcjNcIiB9LFxuICAgIC8vIF07XG5cbiAgICAvLyBwcml2YXRlIHRpcGlPbWk6IEFycmF5PERkbEl0ZW0+ID0gW1xuICAgIC8vICAgICB7IGNvZGljZTogMCwgZGVzY3JpemlvbmU6IFwiXCIgfSxcbiAgICAvLyAgICAgeyBjb2RpY2U6IDEsIGRlc2NyaXppb25lOiBcIm9taTFcIiB9LFxuICAgIC8vICAgICB7IGNvZGljZTogMiwgZGVzY3JpemlvbmU6IFwib21pMlwiIH0sXG4gICAgLy8gICAgIHsgY29kaWNlOiAzLCBkZXNjcml6aW9uZTogXCJvbWkzXCIgfSxcbiAgICAvLyAgICAgeyBjb2RpY2U6IDQsIGRlc2NyaXppb25lOiBcIm9taTRcIiB9LFxuICAgIC8vICAgICB7IGNvZGljZTogNSwgZGVzY3JpemlvbmU6IFwib21pNVwiIH1cbiAgICAvLyBdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgaHR0cFNlcnZpY2U6IEJyb2tlckh0dHBTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGNvbnN0YW50czogQ29uc3RhbnRzU2VydmljZSkgeyB9XG5cbiAgICBwdWJsaWMgZ2V0VGlwb2xvZ2llVGFzc2UocHJpbWFjYXNhOiBib29sZWFuLCByZXNpZGVudGU6IGJvb2xlYW4sIGFmZml0dGF0YTogYm9vbGVhbik6IE9ic2VydmFibGU8SHR0cC5IdHRwUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RHJvcGRvd24odGhpcy5jb25zdGFudHMuZ2V0RGRsQWZmaXR0dWFyaSxcbiAgICAgICAgICAgIHRoaXMuY29uc3RhbnRzLnBhdGhTZXBhcmF0b3IgKyB0aGlzLmdldEJvb2xlYW5Bc1N0cmluZyhwcmltYWNhc2EpXG4gICAgICAgICAgICArIHRoaXMuY29uc3RhbnRzLnBhdGhTZXBhcmF0b3IgKyB0aGlzLmdldEJvb2xlYW5Bc1N0cmluZyhyZXNpZGVudGUpXG4gICAgICAgICAgICArIHRoaXMuY29uc3RhbnRzLnBhdGhTZXBhcmF0b3IgKyB0aGlzLmdldEJvb2xlYW5Bc1N0cmluZyhhZmZpdHRhdGEpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VGlwaUFmZml0dHVhcmkoKTogT2JzZXJ2YWJsZTxIdHRwLkh0dHBSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXREcm9wZG93bih0aGlzLmNvbnN0YW50cy5nZXREZGxBZmZpdHR1YXJpLCAnJyk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEV1cmlib3IoKTogT2JzZXJ2YWJsZTxIdHRwLkh0dHBSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXREcm9wZG93bih0aGlzLmNvbnN0YW50cy5nZXREZGxFdXJpYm9yLCAnJyk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFRpcGlPbWkoaWRDb211bmVJc3RhdDogc3RyaW5nKTogT2JzZXJ2YWJsZTxIdHRwLkh0dHBSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXREcm9wZG93bih0aGlzLmNvbnN0YW50cy5nZXREZGxPbWksIHRoaXMuY29uc3RhbnRzLnBhdGhTZXBhcmF0b3IgKyBpZENvbXVuZUlzdGF0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VGlwb2xvZ2llQ2F0YXN0YWxpKCk6IE9ic2VydmFibGU8SHR0cC5IdHRwUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RHJvcGRvd24odGhpcy5jb25zdGFudHMuZ2V0RGRsVGlwb2xvZ2lhQ2F0YXN0YWxlLCAnJyk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldERyb3Bkb3duKFRpcG9kZGw6IHN0cmluZywgRmlsdHJvOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEh0dHAuSHR0cFJlc3BvbnNlPiB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmNvbnN0YW50cy5wYXRoU2VwYXJhdG9yICsgVGlwb2RkbCArIEZpbHRybztcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KHBhdGgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Qm9vbGVhbkFzU3RyaW5nKGlucHV0OiBib29sZWFuKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIChpbnB1dCA/ICd0cnVlJyA6ICdmYWxzZScpO1xuICAgIH1cbn1cbiJdfQ==