/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { HttpClient, HttpBackend } from "@angular/common/http";
import { ConstantsService } from "./constants.service";
import { timeout } from "rxjs/operators";
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
        return this.http.get(this.constants.baseAppUrl + "/" + path).pipe(timeout(this.constants.httpTimeout));
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
        return this.httpClientLogin.get(this.constants.baseAppUrl + "/" + path).pipe(timeout(this.constants.httpTimeout));
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
        return this.http.post(this.constants.baseAppUrl + "/" + path, body).pipe(timeout(this.constants.httpTimeout));
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
        return this.httpClientLogin.post(this.constants.baseAppUrl + "/" + path, body).pipe(timeout(this.constants.httpTimeout));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJva2VyaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYnJva2VyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb21tb24vYnJva2VyaHR0cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQWUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFNNUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3pDO0lBS0ksMkJBQ1ksSUFBZ0IsRUFDaEIsU0FBMkIsRUFDM0IsT0FBb0I7UUFGcEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixZQUFPLEdBQVAsT0FBTyxDQUFhO1FBQzVCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7O0lBRU0sK0JBQUc7Ozs7SUFBVixVQUFXLElBQVk7UUFDbkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBb0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDaEYsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQ3RDLENBQUM7SUFDTixDQUFDOzs7OztJQUVNLHNDQUFVOzs7O0lBQWpCLFVBQWtCLElBQVk7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUN2QyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFvQixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUMzRixPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FDdEMsQ0FBQztJQUNOLENBQUM7Ozs7OztJQUVNLGdDQUFJOzs7OztJQUFYLFVBQVksSUFBWSxFQUFFLElBQVM7UUFDL0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBb0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsR0FBRyxHQUFHLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQ3ZGLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUN0QyxDQUFDO0lBQ04sQ0FBQzs7Ozs7O0lBRU0sdUNBQVc7Ozs7O0lBQWxCLFVBQW1CLElBQVksRUFBRSxJQUFTO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDeEMsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBb0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsR0FBRyxHQUFHLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQ2xHLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUN0QyxDQUFDO0lBQ04sQ0FBQzs7Z0JBcENKLFVBQVU7Ozs7Z0JBWEYsVUFBVTtnQkFNVixnQkFBZ0I7Z0JBTlMsV0FBVzs7SUFpRDdDLHdCQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7U0FyQ1ksaUJBQWlCOzs7Ozs7SUFFMUIsNENBQW9DOzs7OztJQUdoQyxpQ0FBd0I7Ozs7O0lBQ3hCLHNDQUFtQzs7Ozs7SUFDbkMsb0NBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cEJhY2tlbmQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5cbmltcG9ydCB7IEh0dHAgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvbW1vbi9odHRwLm5hbWVzcGFjZVwiO1xuXG5pbXBvcnQgeyBDb25zdGFudHNTZXJ2aWNlIH0gZnJvbSBcIi4vY29uc3RhbnRzLnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgdGltZW91dCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCcm9rZXJIdHRwU2VydmljZSB7XG5cbiAgICBwcml2YXRlIGh0dHBDbGllbnRMb2dpbjogSHR0cENsaWVudDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgIHByaXZhdGUgY29uc3RhbnRzOiBDb25zdGFudHNTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGJhY2tFbmQ6IEh0dHBCYWNrZW5kKSB7XG4gICAgICAgIHRoaXMuaHR0cENsaWVudExvZ2luID0gbmV3IEh0dHBDbGllbnQodGhpcy5iYWNrRW5kKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0KHBhdGg6IHN0cmluZyk6IE9ic2VydmFibGU8SHR0cC5IdHRwUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8SHR0cC5IdHRwUmVzcG9uc2U+KHRoaXMuY29uc3RhbnRzLmJhc2VBcHBVcmwgKyBcIi9cIiArIHBhdGgpLnBpcGUoXG4gICAgICAgICAgICB0aW1lb3V0KHRoaXMuY29uc3RhbnRzLmh0dHBUaW1lb3V0KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXROb1Rva2VuKHBhdGg6IHN0cmluZyk6IE9ic2VydmFibGU8SHR0cC5IdHRwUmVzcG9uc2U+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJIdHRwU2VydmljZSBnZXQgXCIgKyBwYXRoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudExvZ2luLmdldDxIdHRwLkh0dHBSZXNwb25zZT4odGhpcy5jb25zdGFudHMuYmFzZUFwcFVybCArIFwiL1wiICsgcGF0aCkucGlwZShcbiAgICAgICAgICAgIHRpbWVvdXQodGhpcy5jb25zdGFudHMuaHR0cFRpbWVvdXQpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIHBvc3QocGF0aDogc3RyaW5nLCBib2R5OiBhbnkpOiBPYnNlcnZhYmxlPEh0dHAuSHR0cFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxIdHRwLkh0dHBSZXNwb25zZT4odGhpcy5jb25zdGFudHMuYmFzZUFwcFVybCArIFwiL1wiICsgcGF0aCwgYm9keSkucGlwZShcbiAgICAgICAgICAgIHRpbWVvdXQodGhpcy5jb25zdGFudHMuaHR0cFRpbWVvdXQpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIHBvc3ROb1Rva2VuKHBhdGg6IHN0cmluZywgYm9keTogYW55KTogT2JzZXJ2YWJsZTxIdHRwLkh0dHBSZXNwb25zZT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkh0dHBTZXJ2aWNlIHBvc3QgXCIgKyBwYXRoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudExvZ2luLnBvc3Q8SHR0cC5IdHRwUmVzcG9uc2U+KHRoaXMuY29uc3RhbnRzLmJhc2VBcHBVcmwgKyBcIi9cIiArIHBhdGgsIGJvZHkpLnBpcGUoXG4gICAgICAgICAgICB0aW1lb3V0KHRoaXMuY29uc3RhbnRzLmh0dHBUaW1lb3V0KVxuICAgICAgICApO1xuICAgIH1cblxufVxuIl19