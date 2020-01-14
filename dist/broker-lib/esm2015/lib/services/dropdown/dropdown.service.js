/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BrokerHttpService } from '../common/brokerhttp.service';
import { ConstantsService } from '../common/constants.service';
export class DropdownService {
    /**
     * @param {?} httpService
     * @param {?} constants
     */
    constructor(httpService, constants) {
        this.httpService = httpService;
        this.constants = constants;
    }
    /**
     * @param {?} primacasa
     * @param {?} residente
     * @param {?} affittata
     * @return {?}
     */
    getTipologieTasse(primacasa, residente, affittata) {
        return this.getDropdown(this.constants.getDdlTasse, this.constants.pathSeparator + this.getBooleanAsString(primacasa)
            + this.constants.pathSeparator + this.getBooleanAsString(residente)
            + this.constants.pathSeparator + this.getBooleanAsString(affittata));
    }
    /**
     * @return {?}
     */
    getTipiAffittuari() {
        return this.getDropdown(this.constants.getDdlAffittuari, '');
    }
    /**
     * @return {?}
     */
    getEuribor() {
        return this.getDropdown(this.constants.getDdlEuribor, '');
    }
    /**
     * @param {?} idComuneIstat
     * @return {?}
     */
    getTipiOmi(idComuneIstat) {
        return this.getDropdown(this.constants.getDdlOmi, this.constants.pathSeparator + idComuneIstat);
    }
    /**
     * @return {?}
     */
    getTipologieCatastali() {
        return this.getDropdown(this.constants.getDdlTipologiaCatastale, '');
    }
    /**
     * @param {?} Tipoddl
     * @param {?} Filtro
     * @return {?}
     */
    getDropdown(Tipoddl, Filtro) {
        /** @type {?} */
        const path = Tipoddl + Filtro;
        return this.httpService.get(path);
    }
    /**
     * @private
     * @param {?} input
     * @return {?}
     */
    getBooleanAsString(input) {
        return (input ? 'true' : 'false');
    }
}
DropdownService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DropdownService.ctorParameters = () => [
    { type: BrokerHttpService },
    { type: ConstantsService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jyb2tlci1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZHJvcGRvd24vZHJvcGRvd24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUkvRCxNQUFNLE9BQU8sZUFBZTs7Ozs7SUFFeEIsWUFDWSxXQUE4QixFQUM5QixTQUEyQjtRQUQzQixnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7UUFDOUIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFBSSxDQUFDOzs7Ozs7O0lBRXJDLGlCQUFpQixDQUFDLFNBQWtCLEVBQUUsU0FBa0IsRUFBRSxTQUFrQjtRQUMvRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQzlDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUM7Y0FDL0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQztjQUNqRSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDOzs7O0lBRU0saUJBQWlCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7SUFFTSxVQUFVO1FBQ2IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7O0lBRU0sVUFBVSxDQUFDLGFBQXFCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUMsQ0FBQztJQUNwRyxDQUFDOzs7O0lBRU0scUJBQXFCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLHdCQUF3QixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Ozs7OztJQUVNLFdBQVcsQ0FBQyxPQUFlLEVBQUUsTUFBYzs7Y0FDeEMsSUFBSSxHQUFHLE9BQU8sR0FBRyxNQUFNO1FBQzdCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7O0lBRU8sa0JBQWtCLENBQUMsS0FBYztRQUNyQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7OztZQXJDSixVQUFVOzs7O1lBSkYsaUJBQWlCO1lBQ2pCLGdCQUFnQjs7Ozs7OztJQU9qQixzQ0FBc0M7Ozs7O0lBQ3RDLG9DQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgSHR0cCB9IGZyb20gJy4uLy4uL21vZGVscy9jb21tb24vaHR0cC5uYW1lc3BhY2UnO1xuaW1wb3J0IHsgQnJva2VySHR0cFNlcnZpY2UgfSBmcm9tICcuLi9jb21tb24vYnJva2VyaHR0cC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnN0YW50c1NlcnZpY2UgfSBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGRsSXRlbSB9IGZyb20gJy4uLy4uL21vZGVscy9jb21tb24vZGRsaXRlbSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEcm9wZG93blNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgaHR0cFNlcnZpY2U6IEJyb2tlckh0dHBTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGNvbnN0YW50czogQ29uc3RhbnRzU2VydmljZSkgeyB9XG5cbiAgICBwdWJsaWMgZ2V0VGlwb2xvZ2llVGFzc2UocHJpbWFjYXNhOiBib29sZWFuLCByZXNpZGVudGU6IGJvb2xlYW4sIGFmZml0dGF0YTogYm9vbGVhbik6IE9ic2VydmFibGU8SHR0cC5IdHRwUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RHJvcGRvd24odGhpcy5jb25zdGFudHMuZ2V0RGRsVGFzc2UsXG4gICAgICAgICAgICB0aGlzLmNvbnN0YW50cy5wYXRoU2VwYXJhdG9yICsgdGhpcy5nZXRCb29sZWFuQXNTdHJpbmcocHJpbWFjYXNhKVxuICAgICAgICAgICAgKyB0aGlzLmNvbnN0YW50cy5wYXRoU2VwYXJhdG9yICsgdGhpcy5nZXRCb29sZWFuQXNTdHJpbmcocmVzaWRlbnRlKVxuICAgICAgICAgICAgKyB0aGlzLmNvbnN0YW50cy5wYXRoU2VwYXJhdG9yICsgdGhpcy5nZXRCb29sZWFuQXNTdHJpbmcoYWZmaXR0YXRhKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFRpcGlBZmZpdHR1YXJpKCk6IE9ic2VydmFibGU8SHR0cC5IdHRwUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RHJvcGRvd24odGhpcy5jb25zdGFudHMuZ2V0RGRsQWZmaXR0dWFyaSwgJycpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRFdXJpYm9yKCk6IE9ic2VydmFibGU8SHR0cC5IdHRwUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RHJvcGRvd24odGhpcy5jb25zdGFudHMuZ2V0RGRsRXVyaWJvciwgJycpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRUaXBpT21pKGlkQ29tdW5lSXN0YXQ6IHN0cmluZyk6IE9ic2VydmFibGU8SHR0cC5IdHRwUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RHJvcGRvd24odGhpcy5jb25zdGFudHMuZ2V0RGRsT21pLCB0aGlzLmNvbnN0YW50cy5wYXRoU2VwYXJhdG9yICsgaWRDb211bmVJc3RhdCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFRpcG9sb2dpZUNhdGFzdGFsaSgpOiBPYnNlcnZhYmxlPEh0dHAuSHR0cFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERyb3Bkb3duKHRoaXMuY29uc3RhbnRzLmdldERkbFRpcG9sb2dpYUNhdGFzdGFsZSwgJycpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXREcm9wZG93bihUaXBvZGRsOiBzdHJpbmcsIEZpbHRybzogc3RyaW5nKTogT2JzZXJ2YWJsZTxIdHRwLkh0dHBSZXNwb25zZT4ge1xuICAgICAgICBjb25zdCBwYXRoID0gVGlwb2RkbCArIEZpbHRybztcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KHBhdGgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Qm9vbGVhbkFzU3RyaW5nKGlucHV0OiBib29sZWFuKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIChpbnB1dCA/ICd0cnVlJyA6ICdmYWxzZScpO1xuICAgIH1cbn1cbiJdfQ==