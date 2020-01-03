/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { HttpClient, HttpBackend } from "@angular/common/http";
import { ConstantsService } from "./constants.service";
var BrokerHttpService = /** @class */ (function () {
    function BrokerHttpService(http, constants, backEnd) {
        this.http = http;
        this.constants = constants;
        this.backEnd = backEnd;
        this.httpClientLogin = new HttpClient(this.backEnd);
    }
    /**
     * @param {?} path
     * @return {?}
     */
    BrokerHttpService.prototype.get = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        return this.http.get(this.constants.baseAppUrl + "/" + path);
    };
    /**
     * @param {?} path
     * @return {?}
     */
    BrokerHttpService.prototype.getNoToken = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        console.log("HttpService get " + path);
        return this.httpClientLogin.get(this.constants.baseAppUrl + "/" + path);
    };
    /**
     * @param {?} path
     * @param {?} body
     * @return {?}
     */
    BrokerHttpService.prototype.post = /**
     * @param {?} path
     * @param {?} body
     * @return {?}
     */
    function (path, body) {
        return this.http.post(this.constants.baseAppUrl + "/" + path, body);
    };
    /**
     * @param {?} path
     * @param {?} body
     * @return {?}
     */
    BrokerHttpService.prototype.postNoToken = /**
     * @param {?} path
     * @param {?} body
     * @return {?}
     */
    function (path, body) {
        console.log("HttpService post " + path);
        return this.httpClientLogin.post(this.constants.baseAppUrl + "/" + path, body);
    };
    BrokerHttpService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    BrokerHttpService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ConstantsService },
        { type: HttpBackend }
    ]; };
    return BrokerHttpService;
}());
export { BrokerHttpService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    BrokerHttpService.prototype.httpClientLogin;
    /**
     * @type {?}
     * @private
     */
    BrokerHttpService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    BrokerHttpService.prototype.constants;
    /**
     * @type {?}
     * @private
     */
    BrokerHttpService.prototype.backEnd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJva2VyaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYnJva2VyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb21tb24vYnJva2VyaHR0cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQWUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFNNUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFJdkQ7SUFLSSwyQkFDWSxJQUFnQixFQUNoQixTQUEyQixFQUMzQixPQUFvQjtRQUZwQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFDNUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7SUFFTSwrQkFBRzs7OztJQUFWLFVBQVcsSUFBWTtRQUNuQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFvQixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDcEYsQ0FBQzs7Ozs7SUFFTSxzQ0FBVTs7OztJQUFqQixVQUFrQixJQUFZO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDdkMsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBb0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQy9GLENBQUM7Ozs7OztJQUVNLGdDQUFJOzs7OztJQUFYLFVBQVksSUFBWSxFQUFFLElBQVM7UUFDL0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBb0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsR0FBRyxHQUFHLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzRixDQUFDOzs7Ozs7SUFFTSx1Q0FBVzs7Ozs7SUFBbEIsVUFBbUIsSUFBWSxFQUFFLElBQVM7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUN4QyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFvQixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RHLENBQUM7O2dCQTVCSixVQUFVOzs7O2dCQVZGLFVBQVU7Z0JBTVYsZ0JBQWdCO2dCQU5TLFdBQVc7O0lBd0M3Qyx3QkFBQztDQUFBLEFBOUJELElBOEJDO1NBN0JZLGlCQUFpQjs7Ozs7O0lBRTFCLDRDQUFvQzs7Ozs7SUFHaEMsaUNBQXdCOzs7OztJQUN4QixzQ0FBbUM7Ozs7O0lBQ25DLG9DQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBCYWNrZW5kIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuXG5pbXBvcnQgeyBIdHRwIH0gZnJvbSBcIi4uLy4uL21vZGVscy9jb21tb24vaHR0cC5uYW1lc3BhY2VcIjtcblxuaW1wb3J0IHsgQ29uc3RhbnRzU2VydmljZSB9IGZyb20gXCIuL2NvbnN0YW50cy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gJy4vc2Vzc2lvbi5zZXJ2aWNlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnJva2VySHR0cFNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBodHRwQ2xpZW50TG9naW46IEh0dHBDbGllbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgICAgICBwcml2YXRlIGNvbnN0YW50czogQ29uc3RhbnRzU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBiYWNrRW5kOiBIdHRwQmFja2VuZCkge1xuICAgICAgICB0aGlzLmh0dHBDbGllbnRMb2dpbiA9IG5ldyBIdHRwQ2xpZW50KHRoaXMuYmFja0VuZCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldChwYXRoOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEh0dHAuSHR0cFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEh0dHAuSHR0cFJlc3BvbnNlPih0aGlzLmNvbnN0YW50cy5iYXNlQXBwVXJsICsgXCIvXCIgKyBwYXRoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Tm9Ub2tlbihwYXRoOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEh0dHAuSHR0cFJlc3BvbnNlPiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSHR0cFNlcnZpY2UgZ2V0IFwiICsgcGF0aCk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnRMb2dpbi5nZXQ8SHR0cC5IdHRwUmVzcG9uc2U+KHRoaXMuY29uc3RhbnRzLmJhc2VBcHBVcmwgKyBcIi9cIiArIHBhdGgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwb3N0KHBhdGg6IHN0cmluZywgYm9keTogYW55KTogT2JzZXJ2YWJsZTxIdHRwLkh0dHBSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8SHR0cC5IdHRwUmVzcG9uc2U+KHRoaXMuY29uc3RhbnRzLmJhc2VBcHBVcmwgKyBcIi9cIiArIHBhdGgsIGJvZHkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwb3N0Tm9Ub2tlbihwYXRoOiBzdHJpbmcsIGJvZHk6IGFueSk6IE9ic2VydmFibGU8SHR0cC5IdHRwUmVzcG9uc2U+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJIdHRwU2VydmljZSBwb3N0IFwiICsgcGF0aCk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnRMb2dpbi5wb3N0PEh0dHAuSHR0cFJlc3BvbnNlPih0aGlzLmNvbnN0YW50cy5iYXNlQXBwVXJsICsgXCIvXCIgKyBwYXRoLCBib2R5KTtcbiAgICB9XG5cbn1cbiJdfQ==