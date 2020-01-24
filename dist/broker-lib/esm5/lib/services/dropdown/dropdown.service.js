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
        return this.getDropdown(this.constants.getDdlTasse, this.constants.pathSeparator + this.getBooleanAsString(primacasa)
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
     * @param {?} nomeComune
     * @return {?}
     */
    DropdownService.prototype.getComuni = /**
     * @param {?} nomeComune
     * @return {?}
     */
    function (nomeComune) {
        return this.getDropdown(this.constants.getDdlComuni, this.constants.pathSeparator + nomeComune);
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
        var path = Tipoddl + Filtro;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jyb2tlci1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZHJvcGRvd24vZHJvcGRvd24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUcvRDtJQUdJLHlCQUNZLFdBQThCLEVBQzlCLFNBQTJCO1FBRDNCLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtRQUM5QixjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUFJLENBQUM7Ozs7Ozs7SUFFckMsMkNBQWlCOzs7Ozs7SUFBeEIsVUFBeUIsU0FBa0IsRUFBRSxTQUFrQixFQUFFLFNBQWtCO1FBQy9FLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFDOUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQztjQUMvRCxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDO2NBQ2pFLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7Ozs7SUFFTSwyQ0FBaUI7OztJQUF4QjtRQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7SUFFTSxvQ0FBVTs7O0lBQWpCO1FBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7O0lBRU0sb0NBQVU7Ozs7SUFBakIsVUFBa0IsYUFBcUI7UUFDbkMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQyxDQUFDO0lBQ3BHLENBQUM7Ozs7SUFFTSwrQ0FBcUI7OztJQUE1QjtRQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLHdCQUF3QixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Ozs7O0lBRU0sbUNBQVM7Ozs7SUFBaEIsVUFBaUIsVUFBa0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxDQUFDO0lBQ3BHLENBQUM7Ozs7OztJQUVNLHFDQUFXOzs7OztJQUFsQixVQUFtQixPQUFlLEVBQUUsTUFBYzs7WUFDeEMsSUFBSSxHQUFHLE9BQU8sR0FBRyxNQUFNO1FBQzdCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7O0lBRU8sNENBQWtCOzs7OztJQUExQixVQUEyQixLQUFjO1FBQ3JDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Z0JBekNKLFVBQVU7Ozs7Z0JBSkYsaUJBQWlCO2dCQUNqQixnQkFBZ0I7O0lBNkN6QixzQkFBQztDQUFBLEFBMUNELElBMENDO1NBekNZLGVBQWU7Ozs7OztJQUdwQixzQ0FBc0M7Ozs7O0lBQ3RDLG9DQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgSHR0cCB9IGZyb20gJy4uLy4uL21vZGVscy9jb21tb24vaHR0cC5uYW1lc3BhY2UnO1xuaW1wb3J0IHsgQnJva2VySHR0cFNlcnZpY2UgfSBmcm9tICcuLi9jb21tb24vYnJva2VyaHR0cC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnN0YW50c1NlcnZpY2UgfSBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGRsSXRlbSB9IGZyb20gJy4uLy4uL21vZGVscy9jb21tb24vZGRsaXRlbSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEcm9wZG93blNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgaHR0cFNlcnZpY2U6IEJyb2tlckh0dHBTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGNvbnN0YW50czogQ29uc3RhbnRzU2VydmljZSkgeyB9XG5cbiAgICBwdWJsaWMgZ2V0VGlwb2xvZ2llVGFzc2UocHJpbWFjYXNhOiBib29sZWFuLCByZXNpZGVudGU6IGJvb2xlYW4sIGFmZml0dGF0YTogYm9vbGVhbik6IE9ic2VydmFibGU8SHR0cC5IdHRwUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RHJvcGRvd24odGhpcy5jb25zdGFudHMuZ2V0RGRsVGFzc2UsXG4gICAgICAgICAgICB0aGlzLmNvbnN0YW50cy5wYXRoU2VwYXJhdG9yICsgdGhpcy5nZXRCb29sZWFuQXNTdHJpbmcocHJpbWFjYXNhKVxuICAgICAgICAgICAgKyB0aGlzLmNvbnN0YW50cy5wYXRoU2VwYXJhdG9yICsgdGhpcy5nZXRCb29sZWFuQXNTdHJpbmcocmVzaWRlbnRlKVxuICAgICAgICAgICAgKyB0aGlzLmNvbnN0YW50cy5wYXRoU2VwYXJhdG9yICsgdGhpcy5nZXRCb29sZWFuQXNTdHJpbmcoYWZmaXR0YXRhKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFRpcGlBZmZpdHR1YXJpKCk6IE9ic2VydmFibGU8SHR0cC5IdHRwUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RHJvcGRvd24odGhpcy5jb25zdGFudHMuZ2V0RGRsQWZmaXR0dWFyaSwgJycpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRFdXJpYm9yKCk6IE9ic2VydmFibGU8SHR0cC5IdHRwUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RHJvcGRvd24odGhpcy5jb25zdGFudHMuZ2V0RGRsRXVyaWJvciwgJycpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRUaXBpT21pKGlkQ29tdW5lSXN0YXQ6IHN0cmluZyk6IE9ic2VydmFibGU8SHR0cC5IdHRwUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RHJvcGRvd24odGhpcy5jb25zdGFudHMuZ2V0RGRsT21pLCB0aGlzLmNvbnN0YW50cy5wYXRoU2VwYXJhdG9yICsgaWRDb211bmVJc3RhdCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFRpcG9sb2dpZUNhdGFzdGFsaSgpOiBPYnNlcnZhYmxlPEh0dHAuSHR0cFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERyb3Bkb3duKHRoaXMuY29uc3RhbnRzLmdldERkbFRpcG9sb2dpYUNhdGFzdGFsZSwgJycpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDb211bmkobm9tZUNvbXVuZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxIdHRwLkh0dHBSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXREcm9wZG93bih0aGlzLmNvbnN0YW50cy5nZXREZGxDb211bmksIHRoaXMuY29uc3RhbnRzLnBhdGhTZXBhcmF0b3IgKyBub21lQ29tdW5lKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RHJvcGRvd24oVGlwb2RkbDogc3RyaW5nLCBGaWx0cm86IHN0cmluZyk6IE9ic2VydmFibGU8SHR0cC5IdHRwUmVzcG9uc2U+IHtcbiAgICAgICAgY29uc3QgcGF0aCA9IFRpcG9kZGwgKyBGaWx0cm87XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChwYXRoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEJvb2xlYW5Bc1N0cmluZyhpbnB1dDogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAoaW5wdXQgPyAndHJ1ZScgOiAnZmFsc2UnKTtcbiAgICB9XG59XG4iXX0=