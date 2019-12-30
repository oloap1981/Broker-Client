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
export class ReportService {
    /**
     * @param {?} httpService
     * @param {?} constants
     */
    constructor(httpService, constants) {
        this.httpService = httpService;
        this.constants = constants;
    }
    /**
     * Chiamata per ottenere il report della situazione generale di un cliente
     *
     * @param {?} cliente_id
     * @return {?}
     */
    getSituazioneGenerale(cliente_id) {
        return this.httpService.get(this.constants.situazioneGeneraleServiceName + this.constants.pathSeparator + cliente_id);
    }
    /**
     * Chiamata per ottenere i dati che vanno a popolare i grafici
     *
     * @param {?} cliente_id
     * @return {?}
     */
    getGrafici(cliente_id) {
        return this.httpService.get(this.constants.graficiServiceName + this.constants.pathSeparator + cliente_id);
    }
    /**
     * Chiamata per scatenare l'invio del report generale in formato PDF al cliente passandolo in una mail
     *
     * @param {?} cliente_id
     * @return {?}
     */
    getPdfReport(cliente_id) {
        return this.httpService.get(this.constants.pdfReportServiceName + this.constants.pathSeparator + cliente_id);
    }
}
ReportService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ReportService.ctorParameters = () => [
    { type: BrokerHttpService },
    { type: ConstantsService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9icm9rZXItbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3JlcG9ydC9yZXBvcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7OztBQVMvRCxNQUFNLE9BQU8sYUFBYTs7Ozs7SUFFdEIsWUFDWSxXQUE4QixFQUM5QixTQUEyQjtRQUQzQixnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7UUFDOUIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFBSSxDQUFDOzs7Ozs7O0lBU3JDLHFCQUFxQixDQUFDLFVBQWtCO1FBQzNDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyw2QkFBNkIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUMsQ0FBQztJQUMxSCxDQUFDOzs7Ozs7O0lBU00sVUFBVSxDQUFDLFVBQWtCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUMsQ0FBQztJQUMvRyxDQUFDOzs7Ozs7O0lBU00sWUFBWSxDQUFDLFVBQWtCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUMsQ0FBQztJQUNqSCxDQUFDOzs7WUF0Q0osVUFBVTs7OztZQVRGLGlCQUFpQjtZQUNqQixnQkFBZ0I7Ozs7Ozs7SUFZakIsb0NBQXNDOzs7OztJQUN0QyxrQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEh0dHAgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29tbW9uL2h0dHAubmFtZXNwYWNlJztcbmltcG9ydCB7IEJyb2tlckh0dHBTZXJ2aWNlIH0gZnJvbSAnLi4vY29tbW9uL2Jyb2tlcmh0dHAuc2VydmljZSc7XG5pbXBvcnQgeyBDb25zdGFudHNTZXJ2aWNlIH0gZnJvbSAnLi4vY29tbW9uL2NvbnN0YW50cy5zZXJ2aWNlJztcblxuLyoqXG4gKiBDbGFzc2UgY2hlIHJhZ2dydXBwYSBpIHNlcnZpemkgcmVsYXRpdmkgYWkgUmVwb3J0XG4gKlxuICogQGV4cG9ydFxuICogUmVwb3J0U2VydmljZVxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVwb3J0U2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBodHRwU2VydmljZTogQnJva2VySHR0cFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgY29uc3RhbnRzOiBDb25zdGFudHNTZXJ2aWNlKSB7IH1cblxuICAgIC8qKlxuICAgICAqIENoaWFtYXRhIHBlciBvdHRlbmVyZSBpbCByZXBvcnQgZGVsbGEgc2l0dWF6aW9uZSBnZW5lcmFsZSBkaSB1biBjbGllbnRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2xpZW50ZV9pZFxuICAgICAqIEBwYXJhbSB0b2tlblZhbHVlIFRva2VuIGRpIGF1dGVudGljYXppb25lIG90dGVudXRvIGRhbGxhIGxvZ2luXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0U2l0dWF6aW9uZUdlbmVyYWxlKGNsaWVudGVfaWQ6IG51bWJlcik6IE9ic2VydmFibGU8SHR0cC5IdHRwUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KHRoaXMuY29uc3RhbnRzLnNpdHVhemlvbmVHZW5lcmFsZVNlcnZpY2VOYW1lICsgdGhpcy5jb25zdGFudHMucGF0aFNlcGFyYXRvciArIGNsaWVudGVfaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoaWFtYXRhIHBlciBvdHRlbmVyZSBpIGRhdGkgY2hlIHZhbm5vIGEgcG9wb2xhcmUgaSBncmFmaWNpXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIGNsaWVudGVfaWRcbiAgICAgKiBAcGFyYW0gIHRva2VuVmFsdWUgVG9rZW4gZGkgYXV0ZW50aWNhemlvbmUgb3R0ZW51dG8gZGFsbGEgbG9naW5cbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRHcmFmaWNpKGNsaWVudGVfaWQ6IG51bWJlcik6IE9ic2VydmFibGU8SHR0cC5IdHRwUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KHRoaXMuY29uc3RhbnRzLmdyYWZpY2lTZXJ2aWNlTmFtZSArIHRoaXMuY29uc3RhbnRzLnBhdGhTZXBhcmF0b3IgKyBjbGllbnRlX2lkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGlhbWF0YSBwZXIgc2NhdGVuYXJlIGwnaW52aW8gZGVsIHJlcG9ydCBnZW5lcmFsZSBpbiBmb3JtYXRvIFBERiBhbCBjbGllbnRlIHBhc3NhbmRvbG8gaW4gdW5hIG1haWxcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgY2xpZW50ZV9pZFxuICAgICAqIEBwYXJhbSAgdG9rZW5WYWx1ZSBUb2tlbiBkaSBhdXRlbnRpY2F6aW9uZSBvdHRlbnV0byBkYWxsYSBsb2dpblxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgcHVibGljIGdldFBkZlJlcG9ydChjbGllbnRlX2lkOiBudW1iZXIpOiBPYnNlcnZhYmxlPEh0dHAuSHR0cFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldCh0aGlzLmNvbnN0YW50cy5wZGZSZXBvcnRTZXJ2aWNlTmFtZSArIHRoaXMuY29uc3RhbnRzLnBhdGhTZXBhcmF0b3IgKyBjbGllbnRlX2lkKTtcbiAgICB9XG59XG4iXX0=