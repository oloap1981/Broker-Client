/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { WsToken } from './../../models/login/wsToken';
import { Injectable } from '@angular/core';
import { StoreService } from '../store/store.service';
import { ImmobiliService } from '../immobili/immobili.service';
import { Cliente } from '../../models/clienti/cliente';
import { Subject } from 'rxjs';
import { Connection } from '../../models/common/connection';
var SessionService = /** @class */ (function () {
    function SessionService(storeService, immobiliService) {
        this.storeService = storeService;
        this.immobiliService = immobiliService;
        this.immobile = undefined;
        this.elencoImmobiliSubject = new Subject();
        this.elencoImmobiliObs = this.elencoImmobiliSubject.asObservable();
        this.userDataSubject = new Subject();
        this.userDataObservable = this.userDataSubject.asObservable();
        this.userData = new WsToken();
        this.connection = new Connection();
        this.cliente = new Cliente();
    }
    /**
     * @param {?} cliente
     * @return {?}
     */
    SessionService.prototype.setCliente = /**
     * @param {?} cliente
     * @return {?}
     */
    function (cliente) {
        var _this = this;
        this.cliente = cliente;
        this.immobiliService.getImmobili(this.cliente.cliente_id + '').subscribe((/**
         * @param {?} r
         * @return {?}
         */
        function (r) {
            if (r.Success) {
                _this.immobiliCliente = r.Data.elenco_immobili;
                // sveglia chi è in ascolto
                _this.elencoImmobiliSubject.next(true);
            }
        }));
    };
    /**
     * @return {?}
     */
    SessionService.prototype.clearUserData = /**
     * @return {?}
     */
    function () {
        this.storeService.clearUserData();
        this.userData = new WsToken();
    };
    /**
     * @param {?} userData
     * @return {?}
     */
    SessionService.prototype.setUserData = /**
     * @param {?} userData
     * @return {?}
     */
    function (userData) {
        this.userData = userData;
        if (userData != null) {
            this.storeService.setUserData(userData);
        }
        else {
            return -1;
        }
        return 1;
    };
    /**
     * @return {?}
     */
    SessionService.prototype.getUserData = /**
     * @return {?}
     */
    function () {
        return this.userData;
    };
    /**
     * @return {?}
     */
    SessionService.prototype.loadUserData = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.userData !== null && this.userData !== undefined && this.userData.token_value === '') {
            this.userDataSubject.next(true);
        }
        else {
            this.storeService.getUserDataPromise().then((/**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                if (val == null) {
                    _this.userDataSubject.next(false);
                }
                else {
                    _this.userData = val;
                    _this.userDataSubject.next(true);
                }
            }));
        }
    };
    /**
     * @return {?}
     */
    SessionService.prototype.getCliente = /**
     * @return {?}
     */
    function () {
        return this.cliente;
    };
    /**
     * @return {?}
     */
    SessionService.prototype.getImmobiliCliente = /**
     * @return {?}
     */
    function () {
        return this.immobiliCliente;
    };
    /**
     * @param {?} immobileDettaglio
     * @return {?}
     */
    SessionService.prototype.setImmobileDettaglio = /**
     * @param {?} immobileDettaglio
     * @return {?}
     */
    function (immobileDettaglio) {
        this.immobile = immobileDettaglio;
    };
    /**
     * @return {?}
     */
    SessionService.prototype.getImmobileDettaglio = /**
     * @return {?}
     */
    function () {
        return this.immobile;
    };
    /**
     * @return {?}
     */
    SessionService.prototype.clearImmobileDettaglio = /**
     * @return {?}
     */
    function () {
        this.immobile = null;
    };
    /**
     * @param {?} conn
     * @return {?}
     */
    SessionService.prototype.setConnection = /**
     * @param {?} conn
     * @return {?}
     */
    function (conn) {
        this.connection = conn;
    };
    /**
     * @return {?}
     */
    SessionService.prototype.getConnection = /**
     * @return {?}
     */
    function () {
        return this.connection;
    };
    SessionService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SessionService.ctorParameters = function () { return [
        { type: StoreService },
        { type: ImmobiliService }
    ]; };
    return SessionService;
}());
export { SessionService };
if (false) {
    /** @type {?} */
    SessionService.prototype.cliente;
    /** @type {?} */
    SessionService.prototype.immobiliCliente;
    /** @type {?} */
    SessionService.prototype.immobile;
    /**
     * @type {?}
     * @private
     */
    SessionService.prototype.elencoImmobiliSubject;
    /** @type {?} */
    SessionService.prototype.elencoImmobiliObs;
    /**
     * @type {?}
     * @private
     */
    SessionService.prototype.userData;
    /**
     * @type {?}
     * @private
     */
    SessionService.prototype.connection;
    /**
     * @type {?}
     * @private
     */
    SessionService.prototype.userDataSubject;
    /** @type {?} */
    SessionService.prototype.userDataObservable;
    /**
     * @type {?}
     * @private
     */
    SessionService.prototype.storeService;
    /**
     * @type {?}
     * @private
     */
    SessionService.prototype.immobiliService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYnJva2VyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb21tb24vc2Vzc2lvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRS9ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUc1RDtJQWVJLHdCQUNZLFlBQTBCLEVBQzFCLGVBQWdDO1FBRGhDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQVpyQyxhQUFRLEdBQXNCLFNBQVMsQ0FBQztRQUN2QywwQkFBcUIsR0FBcUIsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQUNsRSxzQkFBaUIsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFLN0Qsb0JBQWUsR0FBcUIsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQUM1RCx1QkFBa0IsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBTTVELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBQ2pDLENBQUM7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O2dCQUNaLGVBQWU7O0lBeUd4QixxQkFBQztDQUFBLEFBaEdELElBZ0dDO1NBL0ZZLGNBQWM7OztJQUV2QixpQ0FBd0I7O0lBQ3hCLHlDQUF3Qzs7SUFDeEMsa0NBQStDOzs7OztJQUMvQywrQ0FBeUU7O0lBQ3pFLDJDQUFxRTs7Ozs7SUFDckUsa0NBQTBCOzs7OztJQUUxQixvQ0FBK0I7Ozs7O0lBRS9CLHlDQUFtRTs7SUFDbkUsNENBQWdFOzs7OztJQUc1RCxzQ0FBa0M7Ozs7O0lBQ2xDLHlDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdzVG9rZW4gfSBmcm9tICcuLy4uLy4uL21vZGVscy9sb2dpbi93c1Rva2VuJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlU2VydmljZSB9IGZyb20gJy4uL3N0b3JlL3N0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW1tb2JpbGlTZXJ2aWNlIH0gZnJvbSAnLi4vaW1tb2JpbGkvaW1tb2JpbGkuc2VydmljZSc7XG5cbmltcG9ydCB7IENsaWVudGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvY2xpZW50aS9jbGllbnRlJztcbmltcG9ydCB7IEltbW9iaWxlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ltbW9iaWxpL2ltbW9iaWxlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEltbW9iaWxlRGV0dGFnbGlvIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ltbW9iaWxpL2ltbW9iaWxlRGV0dGFnbGlvJztcbmltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvY29tbW9uL2Nvbm5lY3Rpb24nO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3VybCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXNzaW9uU2VydmljZSB7XG5cbiAgICBwdWJsaWMgY2xpZW50ZTogQ2xpZW50ZTtcbiAgICBwdWJsaWMgaW1tb2JpbGlDbGllbnRlOiBBcnJheTxJbW1vYmlsZT47XG4gICAgcHVibGljIGltbW9iaWxlOiBJbW1vYmlsZURldHRhZ2xpbyA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIGVsZW5jb0ltbW9iaWxpU3ViamVjdDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgcHVibGljIGVsZW5jb0ltbW9iaWxpT2JzID0gdGhpcy5lbGVuY29JbW1vYmlsaVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgcHJpdmF0ZSB1c2VyRGF0YTogV3NUb2tlbjtcblxuICAgIHByaXZhdGUgY29ubmVjdGlvbjogQ29ubmVjdGlvbjtcblxuICAgIHByaXZhdGUgdXNlckRhdGFTdWJqZWN0OiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgICBwdWJsaWMgdXNlckRhdGFPYnNlcnZhYmxlID0gdGhpcy51c2VyRGF0YVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBzdG9yZVNlcnZpY2U6IFN0b3JlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBpbW1vYmlsaVNlcnZpY2U6IEltbW9iaWxpU2VydmljZVxuICAgICkge1xuICAgICAgICB0aGlzLnVzZXJEYXRhID0gbmV3IFdzVG9rZW4oKTtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gbmV3IENvbm5lY3Rpb24oKTtcbiAgICAgICAgdGhpcy5jbGllbnRlID0gbmV3IENsaWVudGUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0Q2xpZW50ZShjbGllbnRlOiBDbGllbnRlKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2xpZW50ZSA9IGNsaWVudGU7XG4gICAgICAgIHRoaXMuaW1tb2JpbGlTZXJ2aWNlLmdldEltbW9iaWxpKHRoaXMuY2xpZW50ZS5jbGllbnRlX2lkICsgJycpLnN1YnNjcmliZShyID0+IHtcbiAgICAgICAgICAgIGlmIChyLlN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmltbW9iaWxpQ2xpZW50ZSA9IHIuRGF0YS5lbGVuY29faW1tb2JpbGk7XG4gICAgICAgICAgICAgICAgLy8gc3ZlZ2xpYSBjaGkgw6ggaW4gYXNjb2x0b1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbmNvSW1tb2JpbGlTdWJqZWN0Lm5leHQodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhclVzZXJEYXRhKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0b3JlU2VydmljZS5jbGVhclVzZXJEYXRhKCk7XG4gICAgICAgIHRoaXMudXNlckRhdGEgPSBuZXcgV3NUb2tlbigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRVc2VyRGF0YSh1c2VyRGF0YTogV3NUb2tlbik6IG51bWJlciB7XG4gICAgICAgIHRoaXMudXNlckRhdGEgPSB1c2VyRGF0YTtcbiAgICAgICAgaWYgKHVzZXJEYXRhICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmVTZXJ2aWNlLnNldFVzZXJEYXRhKHVzZXJEYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VXNlckRhdGEoKTogV3NUb2tlbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJEYXRhO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkVXNlckRhdGEoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnVzZXJEYXRhICE9PSBudWxsICYmIHRoaXMudXNlckRhdGEgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnVzZXJEYXRhLnRva2VuX3ZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgdGhpcy51c2VyRGF0YVN1YmplY3QubmV4dCh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmVTZXJ2aWNlLmdldFVzZXJEYXRhUHJvbWlzZSgpLnRoZW4oKHZhbDogV3NUb2tlbikgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2YWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJEYXRhU3ViamVjdC5uZXh0KGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJEYXRhID0gdmFsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJEYXRhU3ViamVjdC5uZXh0KHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldENsaWVudGUoKTogQ2xpZW50ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudGU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEltbW9iaWxpQ2xpZW50ZSgpOiBBcnJheTxJbW1vYmlsZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pbW1vYmlsaUNsaWVudGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEltbW9iaWxlRGV0dGFnbGlvKGltbW9iaWxlRGV0dGFnbGlvOiBJbW1vYmlsZURldHRhZ2xpbyk6IHZvaWQge1xuICAgICAgICB0aGlzLmltbW9iaWxlID0gaW1tb2JpbGVEZXR0YWdsaW87XG4gICAgfVxuXG4gICAgcHVibGljIGdldEltbW9iaWxlRGV0dGFnbGlvKCk6IEltbW9iaWxlRGV0dGFnbGlvIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1tb2JpbGU7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFySW1tb2JpbGVEZXR0YWdsaW8oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW1tb2JpbGUgPSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRDb25uZWN0aW9uKGNvbm46IENvbm5lY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gY29ubjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q29ubmVjdGlvbigpOiBDb25uZWN0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbjtcbiAgICB9XG59XG4iXX0=