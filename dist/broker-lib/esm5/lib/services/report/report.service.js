/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BrokerHttpService } from '../common/brokerhttp.service';
import { ConstantsService } from '../common/constants.service';
/**
 * Classe che raggruppa i servizi relativi ai Report
 *
 * @export
 * ReportService
 */
var ReportService = /** @class */ (function () {
    function ReportService(httpService, constants) {
        this.httpService = httpService;
        this.constants = constants;
    }
    /**
     * Chiamata per ottenere il report della situazione generale di un cliente
     *
     * @param cliente_id
     * @param tokenValue Token di autenticazione ottenuto dalla login
     * @returns
     */
    /**
     * Chiamata per ottenere il report della situazione generale di un cliente
     *
     * @param {?} cliente_id
     * @return {?}
     */
    ReportService.prototype.getSituazioneGenerale = /**
     * Chiamata per ottenere il report della situazione generale di un cliente
     *
     * @param {?} cliente_id
     * @return {?}
     */
    function (cliente_id) {
        return this.httpService.get(this.constants.situazioneGeneraleServiceName + this.constants.pathSeparator + cliente_id);
    };
    /**
     * Chiamata per ottenere i dati che vanno a popolare i grafici
     *
     * @param  cliente_id
     * @param  tokenValue Token di autenticazione ottenuto dalla login
     * @returns
     */
    /**
     * Chiamata per ottenere i dati che vanno a popolare i grafici
     *
     * @param {?} cliente_id
     * @return {?}
     */
    ReportService.prototype.getGrafici = /**
     * Chiamata per ottenere i dati che vanno a popolare i grafici
     *
     * @param {?} cliente_id
     * @return {?}
     */
    function (cliente_id) {
        return this.httpService.get(this.constants.graficiServiceName + this.constants.pathSeparator + cliente_id);
    };
    /**
     * Chiamata per scatenare l'invio del report generale in formato PDF al cliente passandolo in una mail
     *
     * @param  cliente_id
     * @param  tokenValue Token di autenticazione ottenuto dalla login
     * @returns
     */
    /**
     * Chiamata per scatenare l'invio del report generale in formato PDF al cliente passandolo in una mail
     *
     * @param {?} cliente_id
     * @return {?}
     */
    ReportService.prototype.getPdfReport = /**
     * Chiamata per scatenare l'invio del report generale in formato PDF al cliente passandolo in una mail
     *
     * @param {?} cliente_id
     * @return {?}
     */
    function (cliente_id) {
        return this.httpService.get(this.constants.pdfReportServiceName + this.constants.pathSeparator + cliente_id);
    };
    ReportService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ReportService.ctorParameters = function () { return [
        { type: BrokerHttpService },
        { type: ConstantsService }
    ]; };
    return ReportService;
}());
export { ReportService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ReportService.prototype.httpService;
    /**
     * @type {?}
     * @private
     */
    ReportService.prototype.constants;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9icm9rZXItbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3JlcG9ydC9yZXBvcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7OztBQVEvRDtJQUdJLHVCQUNZLFdBQThCLEVBQzlCLFNBQTJCO1FBRDNCLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtRQUM5QixjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUFJLENBQUM7SUFFNUM7Ozs7OztPQU1HOzs7Ozs7O0lBQ0ksNkNBQXFCOzs7Ozs7SUFBNUIsVUFBNkIsVUFBa0I7UUFDM0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLDZCQUE2QixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxDQUFDO0lBQzFILENBQUM7SUFFRDs7Ozs7O09BTUc7Ozs7Ozs7SUFDSSxrQ0FBVTs7Ozs7O0lBQWpCLFVBQWtCLFVBQWtCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUMsQ0FBQztJQUMvRyxDQUFDO0lBRUQ7Ozs7OztPQU1HOzs7Ozs7O0lBQ0ksb0NBQVk7Ozs7OztJQUFuQixVQUFvQixVQUFrQjtRQUNsQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDLENBQUM7SUFDakgsQ0FBQzs7Z0JBdENKLFVBQVU7Ozs7Z0JBVEYsaUJBQWlCO2dCQUNqQixnQkFBZ0I7O0lBK0N6QixvQkFBQztDQUFBLEFBdkNELElBdUNDO1NBdENZLGFBQWE7Ozs7OztJQUdsQixvQ0FBc0M7Ozs7O0lBQ3RDLGtDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgSHR0cCB9IGZyb20gJy4uLy4uL21vZGVscy9jb21tb24vaHR0cC5uYW1lc3BhY2UnO1xuaW1wb3J0IHsgQnJva2VySHR0cFNlcnZpY2UgfSBmcm9tICcuLi9jb21tb24vYnJva2VyaHR0cC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnN0YW50c1NlcnZpY2UgfSBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzLnNlcnZpY2UnO1xuXG4vKipcbiAqIENsYXNzZSBjaGUgcmFnZ3J1cHBhIGkgc2Vydml6aSByZWxhdGl2aSBhaSBSZXBvcnRcbiAqXG4gKiBAZXhwb3J0XG4gKiBSZXBvcnRTZXJ2aWNlXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZXBvcnRTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGh0dHBTZXJ2aWNlOiBCcm9rZXJIdHRwU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBjb25zdGFudHM6IENvbnN0YW50c1NlcnZpY2UpIHsgfVxuXG4gICAgLyoqXG4gICAgICogQ2hpYW1hdGEgcGVyIG90dGVuZXJlIGlsIHJlcG9ydCBkZWxsYSBzaXR1YXppb25lIGdlbmVyYWxlIGRpIHVuIGNsaWVudGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjbGllbnRlX2lkXG4gICAgICogQHBhcmFtIHRva2VuVmFsdWUgVG9rZW4gZGkgYXV0ZW50aWNhemlvbmUgb3R0ZW51dG8gZGFsbGEgbG9naW5cbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRTaXR1YXppb25lR2VuZXJhbGUoY2xpZW50ZV9pZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxIdHRwLkh0dHBSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQodGhpcy5jb25zdGFudHMuc2l0dWF6aW9uZUdlbmVyYWxlU2VydmljZU5hbWUgKyB0aGlzLmNvbnN0YW50cy5wYXRoU2VwYXJhdG9yICsgY2xpZW50ZV9pZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hpYW1hdGEgcGVyIG90dGVuZXJlIGkgZGF0aSBjaGUgdmFubm8gYSBwb3BvbGFyZSBpIGdyYWZpY2lcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgY2xpZW50ZV9pZFxuICAgICAqIEBwYXJhbSAgdG9rZW5WYWx1ZSBUb2tlbiBkaSBhdXRlbnRpY2F6aW9uZSBvdHRlbnV0byBkYWxsYSBsb2dpblxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgcHVibGljIGdldEdyYWZpY2koY2xpZW50ZV9pZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxIdHRwLkh0dHBSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQodGhpcy5jb25zdGFudHMuZ3JhZmljaVNlcnZpY2VOYW1lICsgdGhpcy5jb25zdGFudHMucGF0aFNlcGFyYXRvciArIGNsaWVudGVfaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoaWFtYXRhIHBlciBzY2F0ZW5hcmUgbCdpbnZpbyBkZWwgcmVwb3J0IGdlbmVyYWxlIGluIGZvcm1hdG8gUERGIGFsIGNsaWVudGUgcGFzc2FuZG9sbyBpbiB1bmEgbWFpbFxuICAgICAqXG4gICAgICogQHBhcmFtICBjbGllbnRlX2lkXG4gICAgICogQHBhcmFtICB0b2tlblZhbHVlIFRva2VuIGRpIGF1dGVudGljYXppb25lIG90dGVudXRvIGRhbGxhIGxvZ2luXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0UGRmUmVwb3J0KGNsaWVudGVfaWQ6IG51bWJlcik6IE9ic2VydmFibGU8SHR0cC5IdHRwUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KHRoaXMuY29uc3RhbnRzLnBkZlJlcG9ydFNlcnZpY2VOYW1lICsgdGhpcy5jb25zdGFudHMucGF0aFNlcGFyYXRvciArIGNsaWVudGVfaWQpO1xuICAgIH1cbn1cbiJdfQ==