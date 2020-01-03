/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LogErroriService } from '../../services/log-errori/log-errori.service';
import { Injectable, Injector, NgZone } from '@angular/core';
import { WsLogErrore } from '../../models/common/wslogerrore';
import { AlertService } from '../../services/common/alert.service';
import { SessionService } from '../../services/common/session.service';
var ErrorHandlerService = /** @class */ (function () {
    function ErrorHandlerService(injector, zone, logErroriService, alertService, sessionService) {
        this.injector = injector;
        this.zone = zone;
        this.logErroriService = logErroriService;
        this.alertService = alertService;
        this.sessionService = sessionService;
    }
    /**
     * @param {?} error
     * @return {?}
     */
    ErrorHandlerService.prototype.handleError = /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        var _this = this;
        /** @type {?} */
        var token = this.sessionService.getUserData().token_value;
        console.log('gestisco un errore');
        /** @type {?} */
        var errore = new WsLogErrore();
        errore.token = token;
        errore.log_stacktrace = JSON.stringify(error);
        errore.log_descrerr = error.message;
        errore.log_metodoerr = '';
        errore.log_link = '';
        errore.log_query = '';
        errore.username = '';
        // console.log('trasmetto l\'errore');
        this.logErroriService.postErrore(errore).subscribe((/**
         * @param {?} r
         * @return {?}
         */
        function (r) {
            console.log('errore trasmesso: ' + errore);
            _this.alertService.presentErrorAlert('Errore ' + error.message + ' trasmesso al server');
        }));
        console.log('gestione errore completata');
    };
    ErrorHandlerService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ErrorHandlerService.ctorParameters = function () { return [
        { type: Injector },
        { type: NgZone },
        { type: LogErroriService },
        { type: AlertService },
        { type: SessionService }
    ]; };
    return ErrorHandlerService;
}());
export { ErrorHandlerService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ErrorHandlerService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    ErrorHandlerService.prototype.zone;
    /**
     * @type {?}
     * @private
     */
    ErrorHandlerService.prototype.logErroriService;
    /**
     * @type {?}
     * @private
     */
    ErrorHandlerService.prototype.alertService;
    /**
     * @type {?}
     * @private
     */
    ErrorHandlerService.prototype.sessionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItaGFuZGxlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYnJva2VyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9oYW5kbGVyL2Vycm9yL2Vycm9yLWhhbmRsZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDaEYsT0FBTyxFQUFFLFVBQVUsRUFBZ0IsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUV2RTtJQUdJLDZCQUNZLFFBQWtCLEVBQ2xCLElBQVksRUFDWixnQkFBa0MsRUFDbEMsWUFBMEIsRUFDMUIsY0FBOEI7UUFKOUIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1oscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFBSSxDQUFDOzs7OztJQUUvQyx5Q0FBVzs7OztJQUFYLFVBQVksS0FBZ0M7UUFBNUMsaUJBa0JDOztZQWpCUyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxXQUFXO1FBRTNELE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQzs7WUFDNUIsTUFBTSxHQUFHLElBQUksV0FBVyxFQUFFO1FBQ2hDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QyxNQUFNLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDcEMsTUFBTSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDMUIsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDckIsTUFBTSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDdEIsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDckIsc0NBQXNDO1FBQ3RDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsQ0FBQztZQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxDQUFDO1lBQzNDLEtBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsc0JBQXNCLENBQUMsQ0FBQztRQUM1RixDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztJQUM5QyxDQUFDOztnQkE1QkosVUFBVTs7OztnQkFOd0IsUUFBUTtnQkFBRSxNQUFNO2dCQUQxQyxnQkFBZ0I7Z0JBSWhCLFlBQVk7Z0JBQ1osY0FBYzs7SUErQnZCLDBCQUFDO0NBQUEsQUE3QkQsSUE2QkM7U0E1QlksbUJBQW1COzs7Ozs7SUFHeEIsdUNBQTBCOzs7OztJQUMxQixtQ0FBb0I7Ozs7O0lBQ3BCLCtDQUEwQzs7Ozs7SUFDMUMsMkNBQWtDOzs7OztJQUNsQyw2Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2dFcnJvcmlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbG9nLWVycm9yaS9sb2ctZXJyb3JpLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXJyb3JIYW5kbGVyLCBJbmplY3RvciwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFdzTG9nRXJyb3JlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbW1vbi93c2xvZ2Vycm9yZSc7XG5pbXBvcnQgeyBBbGVydFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb21tb24vYWxlcnQuc2VydmljZSc7XG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbW1vbi9zZXNzaW9uLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRXJyb3JIYW5kbGVyU2VydmljZSBpbXBsZW1lbnRzIEVycm9ySGFuZGxlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgICAgIHByaXZhdGUgem9uZTogTmdab25lLFxuICAgICAgICBwcml2YXRlIGxvZ0Vycm9yaVNlcnZpY2U6IExvZ0Vycm9yaVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgc2Vzc2lvblNlcnZpY2U6IFNlc3Npb25TZXJ2aWNlKSB7IH1cblxuICAgIGhhbmRsZUVycm9yKGVycm9yOiBFcnJvciB8IEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5zZXNzaW9uU2VydmljZS5nZXRVc2VyRGF0YSgpLnRva2VuX3ZhbHVlO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXN0aXNjbyB1biBlcnJvcmUnKTtcbiAgICAgICAgY29uc3QgZXJyb3JlID0gbmV3IFdzTG9nRXJyb3JlKCk7XG4gICAgICAgIGVycm9yZS50b2tlbiA9IHRva2VuO1xuICAgICAgICBlcnJvcmUubG9nX3N0YWNrdHJhY2UgPSBKU09OLnN0cmluZ2lmeShlcnJvcik7XG4gICAgICAgIGVycm9yZS5sb2dfZGVzY3JlcnIgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICBlcnJvcmUubG9nX21ldG9kb2VyciA9ICcnO1xuICAgICAgICBlcnJvcmUubG9nX2xpbmsgPSAnJztcbiAgICAgICAgZXJyb3JlLmxvZ19xdWVyeSA9ICcnO1xuICAgICAgICBlcnJvcmUudXNlcm5hbWUgPSAnJztcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3RyYXNtZXR0byBsXFwnZXJyb3JlJyk7XG4gICAgICAgIHRoaXMubG9nRXJyb3JpU2VydmljZS5wb3N0RXJyb3JlKGVycm9yZSkuc3Vic2NyaWJlKHIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yZSB0cmFzbWVzc286ICcgKyBlcnJvcmUpO1xuICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2UucHJlc2VudEVycm9yQWxlcnQoJ0Vycm9yZSAnICsgZXJyb3IubWVzc2FnZSArICcgdHJhc21lc3NvIGFsIHNlcnZlcicpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coJ2dlc3Rpb25lIGVycm9yZSBjb21wbGV0YXRhJyk7XG4gICAgfVxufVxuIl19