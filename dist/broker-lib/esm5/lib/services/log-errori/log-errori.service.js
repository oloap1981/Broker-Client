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
var LogErroriService = /** @class */ (function () {
    function LogErroriService(httpService, constants) {
        this.httpService = httpService;
        this.constants = constants;
    }
    /**
     * Chiamata per il salvataggio su persistenza di errori
     *
     * @param errorData
     * @param tokenValue
     * @returns
     * LogErroriService
     */
    /**
     * Chiamata per il salvataggio su persistenza di errori
     *
     * @param {?} errorData
     * @return {?}
     * LogErroriService
     */
    LogErroriService.prototype.postErrore = /**
     * Chiamata per il salvataggio su persistenza di errori
     *
     * @param {?} errorData
     * @return {?}
     * LogErroriService
     */
    function (errorData) {
        return this.httpService.post(this.constants.postErroreServiceName, errorData);
    };
    /**
     * @param {?} errorMessage
     * @return {?}
     */
    LogErroriService.prototype.generateErrorMessage = /**
     * @param {?} errorMessage
     * @return {?}
     */
    function (errorMessage) {
        /** @type {?} */
        var logErrore = new WsLogErrore();
        logErrore.log_descrerr = errorMessage.msg_testo;
        logErrore.log_stacktrace = errorMessage.msg_techdata;
        return logErrore;
    };
    LogErroriService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LogErroriService.ctorParameters = function () { return [
        { type: BrokerHttpService },
        { type: ConstantsService }
    ]; };
    return LogErroriService;
}());
export { LogErroriService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLWVycm9yaS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYnJva2VyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9sb2ctZXJyb3JpL2xvZy1lcnJvcmkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7Ozs7QUFTOUQ7SUFHSSwwQkFDWSxXQUE4QixFQUM5QixTQUEyQjtRQUQzQixnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7UUFDOUIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFBSSxDQUFDO0lBRTVDOzs7Ozs7O09BT0c7Ozs7Ozs7O0lBQ0kscUNBQVU7Ozs7Ozs7SUFBakIsVUFBa0IsU0FBc0I7UUFDcEMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFxQixFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7Ozs7O0lBRU0sK0NBQW9COzs7O0lBQTNCLFVBQTRCLFlBQTBCOztZQUM1QyxTQUFTLEdBQWdCLElBQUksV0FBVyxFQUFFO1FBRWhELFNBQVMsQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQztRQUNoRCxTQUFTLENBQUMsY0FBYyxHQUFHLFlBQVksQ0FBQyxZQUFZLENBQUM7UUFFckQsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQzs7Z0JBMUJKLFVBQVU7Ozs7Z0JBWEYsaUJBQWlCO2dCQUNqQixnQkFBZ0I7O0lBcUN6Qix1QkFBQztDQUFBLEFBM0JELElBMkJDO1NBMUJZLGdCQUFnQjs7Ozs7O0lBR3JCLHVDQUFzQzs7Ozs7SUFDdEMscUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbW1vbi9odHRwLm5hbWVzcGFjZSc7XG5pbXBvcnQgeyBCcm9rZXJIdHRwU2VydmljZSB9IGZyb20gJy4uL2NvbW1vbi9icm9rZXJodHRwLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29uc3RhbnRzU2VydmljZSB9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMuc2VydmljZSc7XG5pbXBvcnQgeyBXc0xvZ0Vycm9yZSB9IGZyb20gJy4uLy4uL21vZGVscy9jb21tb24vd3Nsb2dlcnJvcmUnO1xuaW1wb3J0IHsgRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbW1vbi9lcnJvcm1lc3NhZ2UnO1xuXG4vKipcbiAqXG4gKlxuICogQGV4cG9ydFxuICogTG9nRXJyb3JpU2VydmljZVxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9nRXJyb3JpU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBodHRwU2VydmljZTogQnJva2VySHR0cFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgY29uc3RhbnRzOiBDb25zdGFudHNTZXJ2aWNlKSB7IH1cblxuICAgIC8qKlxuICAgICAqIENoaWFtYXRhIHBlciBpbCBzYWx2YXRhZ2dpbyBzdSBwZXJzaXN0ZW56YSBkaSBlcnJvcmlcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlcnJvckRhdGFcbiAgICAgKiBAcGFyYW0gdG9rZW5WYWx1ZVxuICAgICAqIEByZXR1cm5zXG4gICAgICogTG9nRXJyb3JpU2VydmljZVxuICAgICAqL1xuICAgIHB1YmxpYyBwb3N0RXJyb3JlKGVycm9yRGF0YTogV3NMb2dFcnJvcmUpOiBPYnNlcnZhYmxlPEh0dHAuSHR0cFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QodGhpcy5jb25zdGFudHMucG9zdEVycm9yZVNlcnZpY2VOYW1lLCBlcnJvckRhdGEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZW5lcmF0ZUVycm9yTWVzc2FnZShlcnJvck1lc3NhZ2U6IEVycm9yTWVzc2FnZSk6IFdzTG9nRXJyb3JlIHtcbiAgICAgICAgY29uc3QgbG9nRXJyb3JlOiBXc0xvZ0Vycm9yZSA9IG5ldyBXc0xvZ0Vycm9yZSgpO1xuXG4gICAgICAgIGxvZ0Vycm9yZS5sb2dfZGVzY3JlcnIgPSBlcnJvck1lc3NhZ2UubXNnX3Rlc3RvO1xuICAgICAgICBsb2dFcnJvcmUubG9nX3N0YWNrdHJhY2UgPSBlcnJvck1lc3NhZ2UubXNnX3RlY2hkYXRhO1xuXG4gICAgICAgIHJldHVybiBsb2dFcnJvcmU7XG4gICAgfVxufVxuIl19