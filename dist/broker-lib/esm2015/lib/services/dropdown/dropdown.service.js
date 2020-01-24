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
     * @param {?} nomeComune
     * @return {?}
     */
    getComuni(nomeComune) {
        return this.getDropdown(this.constants.getDdlComuni, this.constants.pathSeparator + nomeComune);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jyb2tlci1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZHJvcGRvd24vZHJvcGRvd24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUkvRCxNQUFNLE9BQU8sZUFBZTs7Ozs7SUFFeEIsWUFDWSxXQUE4QixFQUM5QixTQUEyQjtRQUQzQixnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7UUFDOUIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFBSSxDQUFDOzs7Ozs7O0lBRXJDLGlCQUFpQixDQUFDLFNBQWtCLEVBQUUsU0FBa0IsRUFBRSxTQUFrQjtRQUMvRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQzlDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUM7Y0FDL0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQztjQUNqRSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDOzs7O0lBRU0saUJBQWlCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7SUFFTSxVQUFVO1FBQ2IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7O0lBRU0sVUFBVSxDQUFDLGFBQXFCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUMsQ0FBQztJQUNwRyxDQUFDOzs7O0lBRU0scUJBQXFCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLHdCQUF3QixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Ozs7O0lBRU0sU0FBUyxDQUFDLFVBQWtCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUMsQ0FBQztJQUNwRyxDQUFDOzs7Ozs7SUFFTSxXQUFXLENBQUMsT0FBZSxFQUFFLE1BQWM7O2NBQ3hDLElBQUksR0FBRyxPQUFPLEdBQUcsTUFBTTtRQUM3QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7OztJQUVPLGtCQUFrQixDQUFDLEtBQWM7UUFDckMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7WUF6Q0osVUFBVTs7OztZQUpGLGlCQUFpQjtZQUNqQixnQkFBZ0I7Ozs7Ozs7SUFPakIsc0NBQXNDOzs7OztJQUN0QyxvQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEh0dHAgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29tbW9uL2h0dHAubmFtZXNwYWNlJztcbmltcG9ydCB7IEJyb2tlckh0dHBTZXJ2aWNlIH0gZnJvbSAnLi4vY29tbW9uL2Jyb2tlcmh0dHAuc2VydmljZSc7XG5pbXBvcnQgeyBDb25zdGFudHNTZXJ2aWNlIH0gZnJvbSAnLi4vY29tbW9uL2NvbnN0YW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IERkbEl0ZW0gfSBmcm9tICcuLi8uLi9tb2RlbHMvY29tbW9uL2RkbGl0ZW0nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRHJvcGRvd25TZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGh0dHBTZXJ2aWNlOiBCcm9rZXJIdHRwU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBjb25zdGFudHM6IENvbnN0YW50c1NlcnZpY2UpIHsgfVxuXG4gICAgcHVibGljIGdldFRpcG9sb2dpZVRhc3NlKHByaW1hY2FzYTogYm9vbGVhbiwgcmVzaWRlbnRlOiBib29sZWFuLCBhZmZpdHRhdGE6IGJvb2xlYW4pOiBPYnNlcnZhYmxlPEh0dHAuSHR0cFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERyb3Bkb3duKHRoaXMuY29uc3RhbnRzLmdldERkbFRhc3NlLFxuICAgICAgICAgICAgdGhpcy5jb25zdGFudHMucGF0aFNlcGFyYXRvciArIHRoaXMuZ2V0Qm9vbGVhbkFzU3RyaW5nKHByaW1hY2FzYSlcbiAgICAgICAgICAgICsgdGhpcy5jb25zdGFudHMucGF0aFNlcGFyYXRvciArIHRoaXMuZ2V0Qm9vbGVhbkFzU3RyaW5nKHJlc2lkZW50ZSlcbiAgICAgICAgICAgICsgdGhpcy5jb25zdGFudHMucGF0aFNlcGFyYXRvciArIHRoaXMuZ2V0Qm9vbGVhbkFzU3RyaW5nKGFmZml0dGF0YSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRUaXBpQWZmaXR0dWFyaSgpOiBPYnNlcnZhYmxlPEh0dHAuSHR0cFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERyb3Bkb3duKHRoaXMuY29uc3RhbnRzLmdldERkbEFmZml0dHVhcmksICcnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RXVyaWJvcigpOiBPYnNlcnZhYmxlPEh0dHAuSHR0cFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERyb3Bkb3duKHRoaXMuY29uc3RhbnRzLmdldERkbEV1cmlib3IsICcnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VGlwaU9taShpZENvbXVuZUlzdGF0OiBzdHJpbmcpOiBPYnNlcnZhYmxlPEh0dHAuSHR0cFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERyb3Bkb3duKHRoaXMuY29uc3RhbnRzLmdldERkbE9taSwgdGhpcy5jb25zdGFudHMucGF0aFNlcGFyYXRvciArIGlkQ29tdW5lSXN0YXQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRUaXBvbG9naWVDYXRhc3RhbGkoKTogT2JzZXJ2YWJsZTxIdHRwLkh0dHBSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXREcm9wZG93bih0aGlzLmNvbnN0YW50cy5nZXREZGxUaXBvbG9naWFDYXRhc3RhbGUsICcnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q29tdW5pKG5vbWVDb211bmU6IHN0cmluZyk6IE9ic2VydmFibGU8SHR0cC5IdHRwUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RHJvcGRvd24odGhpcy5jb25zdGFudHMuZ2V0RGRsQ29tdW5pLCB0aGlzLmNvbnN0YW50cy5wYXRoU2VwYXJhdG9yICsgbm9tZUNvbXVuZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldERyb3Bkb3duKFRpcG9kZGw6IHN0cmluZywgRmlsdHJvOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEh0dHAuSHR0cFJlc3BvbnNlPiB7XG4gICAgICAgIGNvbnN0IHBhdGggPSBUaXBvZGRsICsgRmlsdHJvO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQocGF0aCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRCb29sZWFuQXNTdHJpbmcoaW5wdXQ6IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gKGlucHV0ID8gJ3RydWUnIDogJ2ZhbHNlJyk7XG4gICAgfVxufVxuIl19