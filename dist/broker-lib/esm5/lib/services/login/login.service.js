/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { BrokerHttpService } from "../common/brokerhttp.service";
import { StoreService } from '../store/store.service';
import { ConstantsService } from '../common/constants.service';
var LoginService = /** @class */ (function () {
    function LoginService(httpService, storeService, constants) {
        this.httpService = httpService;
        this.storeService = storeService;
        this.constants = constants;
    }
    /**
     * @param {?} bodyCambio
     * @return {?}
     */
    LoginService.prototype.CambioPassword = /**
     * @param {?} bodyCambio
     * @return {?}
     */
    function (bodyCambio) {
        return this.httpService.post(this.constants.cambioPasswordServiceName, bodyCambio);
    };
    /**
     * @param {?} body
     * @return {?}
     */
    LoginService.prototype.Login = /**
     * @param {?} body
     * @return {?}
     */
    function (body) {
        // eseguo la post
        return this.httpService.postNoToken(this.constants.loginServiceName, body);
    };
    LoginService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LoginService.ctorParameters = function () { return [
        { type: BrokerHttpService },
        { type: StoreService },
        { type: ConstantsService }
    ]; };
    return LoginService;
}());
export { LoginService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LoginService.prototype.httpService;
    /**
     * @type {?}
     * @private
     */
    LoginService.prototype.storeService;
    /**
     * @type {?}
     * @private
     */
    LoginService.prototype.constants;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jyb2tlci1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbG9naW4vbG9naW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU0zQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUVqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFL0Q7SUFFSSxzQkFDWSxXQUE4QixFQUM5QixZQUEwQixFQUMxQixTQUEyQjtRQUYzQixnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7UUFDOUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFDdkMsQ0FBQzs7Ozs7SUFFTSxxQ0FBYzs7OztJQUFyQixVQUFzQixVQUFpQztRQUNuRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMseUJBQXlCLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDdkYsQ0FBQzs7Ozs7SUFFTSw0QkFBSzs7OztJQUFaLFVBQWEsSUFBa0I7UUFDM0IsaUJBQWlCO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvRSxDQUFDOztnQkFmSixVQUFVOzs7O2dCQUxGLGlCQUFpQjtnQkFFakIsWUFBWTtnQkFDWixnQkFBZ0I7O0lBMEN6QixtQkFBQztDQUFBLEFBeENELElBd0NDO1NBdkNZLFlBQVk7Ozs7OztJQUVqQixtQ0FBc0M7Ozs7O0lBQ3RDLG9DQUFrQzs7Ozs7SUFDbEMsaUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IEh0dHAgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvbW1vbi9odHRwLm5hbWVzcGFjZVwiO1xuaW1wb3J0IHsgTG9naW5SZXF1ZXN0IH0gZnJvbSBcIi4uLy4uL21vZGVscy9sb2dpbi9sb2dpblJlcXVlc3RcIjtcbmltcG9ydCB7IENhbWJpb1Bhc3N3b3JkUmVxdWVzdCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvbG9naW4vY2FtYmlvUGFzc3dvcmRSZXF1ZXN0XCI7XG5cbmltcG9ydCB7IEJyb2tlckh0dHBTZXJ2aWNlIH0gZnJvbSBcIi4uL2NvbW1vbi9icm9rZXJodHRwLnNlcnZpY2VcIjtcbmltcG9ydCB7IFdzVG9rZW4gfSBmcm9tICcuLi8uLi9tb2RlbHMvbG9naW4vd3NUb2tlbic7XG5pbXBvcnQgeyBTdG9yZVNlcnZpY2UgfSBmcm9tICcuLi9zdG9yZS9zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnN0YW50c1NlcnZpY2UgfSBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9naW5TZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBodHRwU2VydmljZTogQnJva2VySHR0cFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgc3RvcmVTZXJ2aWNlOiBTdG9yZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgY29uc3RhbnRzOiBDb25zdGFudHNTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgcHVibGljIENhbWJpb1Bhc3N3b3JkKGJvZHlDYW1iaW86IENhbWJpb1Bhc3N3b3JkUmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wb3N0KHRoaXMuY29uc3RhbnRzLmNhbWJpb1Bhc3N3b3JkU2VydmljZU5hbWUsIGJvZHlDYW1iaW8pO1xuICAgIH1cblxuICAgIHB1YmxpYyBMb2dpbihib2R5OiBMb2dpblJlcXVlc3QpOiBPYnNlcnZhYmxlPEh0dHAuSHR0cFJlc3BvbnNlPiB7XG4gICAgICAgIC8vIGVzZWd1byBsYSBwb3N0XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3ROb1Rva2VuKHRoaXMuY29uc3RhbnRzLmxvZ2luU2VydmljZU5hbWUsIGJvZHkpO1xuICAgIH1cblxuICAgIC8vIHB1YmxpYyBMb2dpbihib2R5OiBMb2dpblJlcXVlc3QpOiBPYnNlcnZhYmxlPEh0dHAuSHR0cFJlc3BvbnNlPiB7IC8vIG1vbWVudGFuZWFtZW50ZSBpbiBnZXQgcGVyIHVzYXJlIGlsIHNlcnZpemlvIGZpbnRvIGRpIHRlc3RcbiAgICAvLyAgICAgLy8gZXNlZ3VvIGxhIHBvc3RcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0Tm9Ub2tlbih0aGlzLmNvbnN0YW50cy5sb2dpblNlcnZpY2VOYW1lKTtcbiAgICAvLyB9XG5cbiAgICAvKlxuICAgIFFVRVNUQSDDqCBMQSBMT0dJQ0EgREEgTUVUVEVSRSBTVUwgQ0hJQU1BTlRFIERFTExBIExPR0lOXG4gICAgLnN1YnNjcmliZShyID0+IHtcblxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gbmV3IFdzVG9rZW4oKTtcbiAgICAgICAgICAgIGlmIChyLlN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICByZXNwb25zZSA9IHIuRGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlU2VydmljZS5zZXRVc2VyRGF0YShyZXNwb25zZSk7IC8vIGV2ZW50dWFsZSBjb250cm9sbG8gc3UgZXNpdG8gc2FsdmF0YWdnaW8gaW4gc2Vzc2lvbmVcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9IHIuRXJyb3JNZXNzYWdlO1xuXG4gICAgICAgICAgICAgICAgLy8gaW52aW8gYWwgc2VydmVyIGRlbGwnZXJyb3JlXG5cbiAgICAgICAgICAgICAgICAvLyBwb3B1cCBlcnJvcmVcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICB9ICovXG59XG4iXX0=