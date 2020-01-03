/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BrokerHttpService } from '../common/brokerhttp.service';
import { ConstantsService } from '../common/constants.service';
import { WsLogErrore } from '../../models/common/wslogerrore';
/**
 *
 *
 * @export
 * LogErroriService
 */
export class LogErroriService {
    /**
     * @param {?} httpService
     * @param {?} constants
     */
    constructor(httpService, constants) {
        this.httpService = httpService;
        this.constants = constants;
    }
    /**
     * Chiamata per il salvataggio su persistenza di errori
     *
     * @param {?} errorData
     * @return {?}
     * LogErroriService
     */
    postErrore(errorData) {
        return this.httpService.post(this.constants.postErroreServiceName, errorData);
    }
    /**
     * @param {?} errorMessage
     * @return {?}
     */
    generateErrorMessage(errorMessage) {
        /** @type {?} */
        const logErrore = new WsLogErrore();
        logErrore.log_descrerr = errorMessage.msg_testo;
        logErrore.log_stacktrace = errorMessage.msg_techdata;
        return logErrore;
    }
}
LogErroriService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LogErroriService.ctorParameters = () => [
    { type: BrokerHttpService },
    { type: ConstantsService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    LogErroriService.prototype.httpService;
    /**
     * @type {?}
     * @private
     */
    LogErroriService.prototype.constants;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLWVycm9yaS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYnJva2VyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9sb2ctZXJyb3JpL2xvZy1lcnJvcmkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7Ozs7QUFVOUQsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFFekIsWUFDWSxXQUE4QixFQUM5QixTQUEyQjtRQUQzQixnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7UUFDOUIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFBSSxDQUFDOzs7Ozs7OztJQVVyQyxVQUFVLENBQUMsU0FBc0I7UUFDcEMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFxQixFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7Ozs7O0lBRU0sb0JBQW9CLENBQUMsWUFBMEI7O2NBQzVDLFNBQVMsR0FBZ0IsSUFBSSxXQUFXLEVBQUU7UUFFaEQsU0FBUyxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUMsU0FBUyxDQUFDO1FBQ2hELFNBQVMsQ0FBQyxjQUFjLEdBQUcsWUFBWSxDQUFDLFlBQVksQ0FBQztRQUVyRCxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDOzs7WUExQkosVUFBVTs7OztZQVhGLGlCQUFpQjtZQUNqQixnQkFBZ0I7Ozs7Ozs7SUFjakIsdUNBQXNDOzs7OztJQUN0QyxxQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEh0dHAgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29tbW9uL2h0dHAubmFtZXNwYWNlJztcbmltcG9ydCB7IEJyb2tlckh0dHBTZXJ2aWNlIH0gZnJvbSAnLi4vY29tbW9uL2Jyb2tlcmh0dHAuc2VydmljZSc7XG5pbXBvcnQgeyBDb25zdGFudHNTZXJ2aWNlIH0gZnJvbSAnLi4vY29tbW9uL2NvbnN0YW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IFdzTG9nRXJyb3JlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbW1vbi93c2xvZ2Vycm9yZSc7XG5pbXBvcnQgeyBFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29tbW9uL2Vycm9ybWVzc2FnZSc7XG5cbi8qKlxuICpcbiAqXG4gKiBAZXhwb3J0XG4gKiBMb2dFcnJvcmlTZXJ2aWNlXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2dFcnJvcmlTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGh0dHBTZXJ2aWNlOiBCcm9rZXJIdHRwU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBjb25zdGFudHM6IENvbnN0YW50c1NlcnZpY2UpIHsgfVxuXG4gICAgLyoqXG4gICAgICogQ2hpYW1hdGEgcGVyIGlsIHNhbHZhdGFnZ2lvIHN1IHBlcnNpc3RlbnphIGRpIGVycm9yaVxuICAgICAqXG4gICAgICogQHBhcmFtIGVycm9yRGF0YVxuICAgICAqIEBwYXJhbSB0b2tlblZhbHVlXG4gICAgICogQHJldHVybnNcbiAgICAgKiBMb2dFcnJvcmlTZXJ2aWNlXG4gICAgICovXG4gICAgcHVibGljIHBvc3RFcnJvcmUoZXJyb3JEYXRhOiBXc0xvZ0Vycm9yZSk6IE9ic2VydmFibGU8SHR0cC5IdHRwUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdCh0aGlzLmNvbnN0YW50cy5wb3N0RXJyb3JlU2VydmljZU5hbWUsIGVycm9yRGF0YSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdlbmVyYXRlRXJyb3JNZXNzYWdlKGVycm9yTWVzc2FnZTogRXJyb3JNZXNzYWdlKTogV3NMb2dFcnJvcmUge1xuICAgICAgICBjb25zdCBsb2dFcnJvcmU6IFdzTG9nRXJyb3JlID0gbmV3IFdzTG9nRXJyb3JlKCk7XG5cbiAgICAgICAgbG9nRXJyb3JlLmxvZ19kZXNjcmVyciA9IGVycm9yTWVzc2FnZS5tc2dfdGVzdG87XG4gICAgICAgIGxvZ0Vycm9yZS5sb2dfc3RhY2t0cmFjZSA9IGVycm9yTWVzc2FnZS5tc2dfdGVjaGRhdGE7XG5cbiAgICAgICAgcmV0dXJuIGxvZ0Vycm9yZTtcbiAgICB9XG59XG4iXX0=