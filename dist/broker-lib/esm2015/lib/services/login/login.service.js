/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { BrokerHttpService } from "../common/brokerhttp.service";
import { StoreService } from '../store/store.service';
import { ConstantsService } from '../common/constants.service';
export class LoginService {
    /**
     * @param {?} httpService
     * @param {?} storeService
     * @param {?} constants
     */
    constructor(httpService, storeService, constants) {
        this.httpService = httpService;
        this.storeService = storeService;
        this.constants = constants;
    }
    /**
     * @param {?} bodyCambio
     * @return {?}
     */
    CambioPassword(bodyCambio) {
        return this.httpService.post(this.constants.cambioPasswordServiceName, bodyCambio);
    }
    /**
     * @param {?} body
     * @return {?}
     */
    Login(body) {
        // eseguo la post
        return this.httpService.postNoToken(this.constants.loginServiceName, body);
    }
}
LoginService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LoginService.ctorParameters = () => [
    { type: BrokerHttpService },
    { type: StoreService },
    { type: ConstantsService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jyb2tlci1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbG9naW4vbG9naW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU0zQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUVqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFHL0QsTUFBTSxPQUFPLFlBQVk7Ozs7OztJQUNyQixZQUNZLFdBQThCLEVBQzlCLFlBQTBCLEVBQzFCLFNBQTJCO1FBRjNCLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtRQUM5QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUN2QyxDQUFDOzs7OztJQUVNLGNBQWMsQ0FBQyxVQUFpQztRQUNuRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMseUJBQXlCLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDdkYsQ0FBQzs7Ozs7SUFFTSxLQUFLLENBQUMsSUFBa0I7UUFDM0IsaUJBQWlCO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvRSxDQUFDOzs7WUFmSixVQUFVOzs7O1lBTEYsaUJBQWlCO1lBRWpCLFlBQVk7WUFDWixnQkFBZ0I7Ozs7Ozs7SUFLakIsbUNBQXNDOzs7OztJQUN0QyxvQ0FBa0M7Ozs7O0lBQ2xDLGlDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSBcIi4uLy4uL21vZGVscy9jb21tb24vaHR0cC5uYW1lc3BhY2VcIjtcbmltcG9ydCB7IExvZ2luUmVxdWVzdCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvbG9naW4vbG9naW5SZXF1ZXN0XCI7XG5pbXBvcnQgeyBDYW1iaW9QYXNzd29yZFJlcXVlc3QgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2xvZ2luL2NhbWJpb1Bhc3N3b3JkUmVxdWVzdFwiO1xuXG5pbXBvcnQgeyBCcm9rZXJIdHRwU2VydmljZSB9IGZyb20gXCIuLi9jb21tb24vYnJva2VyaHR0cC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBXc1Rva2VuIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2xvZ2luL3dzVG9rZW4nO1xuaW1wb3J0IHsgU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vc3RvcmUvc3RvcmUuc2VydmljZSc7XG5pbXBvcnQgeyBDb25zdGFudHNTZXJ2aWNlIH0gZnJvbSAnLi4vY29tbW9uL2NvbnN0YW50cy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvZ2luU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgaHR0cFNlcnZpY2U6IEJyb2tlckh0dHBTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHN0b3JlU2VydmljZTogU3RvcmVTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGNvbnN0YW50czogQ29uc3RhbnRzU2VydmljZSkge1xuICAgIH1cblxuICAgIHB1YmxpYyBDYW1iaW9QYXNzd29yZChib2R5Q2FtYmlvOiBDYW1iaW9QYXNzd29yZFJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdCh0aGlzLmNvbnN0YW50cy5jYW1iaW9QYXNzd29yZFNlcnZpY2VOYW1lLCBib2R5Q2FtYmlvKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgTG9naW4oYm9keTogTG9naW5SZXF1ZXN0KTogT2JzZXJ2YWJsZTxIdHRwLkh0dHBSZXNwb25zZT4ge1xuICAgICAgICAvLyBlc2VndW8gbGEgcG9zdFxuICAgICAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wb3N0Tm9Ub2tlbih0aGlzLmNvbnN0YW50cy5sb2dpblNlcnZpY2VOYW1lLCBib2R5KTtcbiAgICB9XG5cbiAgICAvLyBwdWJsaWMgTG9naW4oYm9keTogTG9naW5SZXF1ZXN0KTogT2JzZXJ2YWJsZTxIdHRwLkh0dHBSZXNwb25zZT4geyAvLyBtb21lbnRhbmVhbWVudGUgaW4gZ2V0IHBlciB1c2FyZSBpbCBzZXJ2aXppbyBmaW50byBkaSB0ZXN0XG4gICAgLy8gICAgIC8vIGVzZWd1byBsYSBwb3N0XG4gICAgLy8gICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldE5vVG9rZW4odGhpcy5jb25zdGFudHMubG9naW5TZXJ2aWNlTmFtZSk7XG4gICAgLy8gfVxuXG4gICAgLypcbiAgICBRVUVTVEEgw6ggTEEgTE9HSUNBIERBIE1FVFRFUkUgU1VMIENISUFNQU5URSBERUxMQSBMT0dJTlxuICAgIC5zdWJzY3JpYmUociA9PiB7XG5cbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IG5ldyBXc1Rva2VuKCk7XG4gICAgICAgICAgICBpZiAoci5TdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgPSByLkRhdGE7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZVNlcnZpY2Uuc2V0VXNlckRhdGEocmVzcG9uc2UpOyAvLyBldmVudHVhbGUgY29udHJvbGxvIHN1IGVzaXRvIHNhbHZhdGFnZ2lvIGluIHNlc3Npb25lXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSByLkVycm9yTWVzc2FnZTtcblxuICAgICAgICAgICAgICAgIC8vIGludmlvIGFsIHNlcnZlciBkZWxsJ2Vycm9yZVxuXG4gICAgICAgICAgICAgICAgLy8gcG9wdXAgZXJyb3JlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfSAqL1xufVxuIl19