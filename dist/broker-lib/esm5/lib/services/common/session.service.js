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
import { ImmobileDettaglio } from '../../models/immobili/immobileDettaglio';
import { Connection } from '../../models/common/connection';
import { DatiCatastaliDettaglio } from '../../models/immobili/datiCatastaliDettaglio';
import { OmiDettaglio } from '../../models/immobili/omiDettaglio';
import { MutuoDettaglio } from '../../models/immobili/mutuoDettaglio';
import { AffittoDettaglio } from '../../models/immobili/affittoDettaglio';
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
        this.immobile = new ImmobileDettaglio();
        this.immobile.dati_catastali = new DatiCatastaliDettaglio();
        this.immobile.spese = new Array();
        this.immobile.omi = new OmiDettaglio();
        this.immobile.mutuo_dettaglio = new MutuoDettaglio();
        this.immobile.affitto_dettaglio = new AffittoDettaglio();
        this.immobile.tasse = new Array();
        this.immobile.cointestatari = new Array();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYnJva2VyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb21tb24vc2Vzc2lvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRS9ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBSTFFO0lBZUksd0JBQ1ksWUFBMEIsRUFDMUIsZUFBZ0M7UUFEaEMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBWnJDLGFBQVEsR0FBc0IsU0FBUyxDQUFDO1FBQ3ZDLDBCQUFxQixHQUFxQixJQUFJLE9BQU8sRUFBVyxDQUFDO1FBQ2xFLHNCQUFpQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUs3RCxvQkFBZSxHQUFxQixJ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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV3NUb2tlbiB9IGZyb20gJy4vLi4vLi4vbW9kZWxzL2xvZ2luL3dzVG9rZW4nO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vc3RvcmUvc3RvcmUuc2VydmljZSc7XG5pbXBvcnQgeyBJbW1vYmlsaVNlcnZpY2UgfSBmcm9tICcuLi9pbW1vYmlsaS9pbW1vYmlsaS5zZXJ2aWNlJztcblxuaW1wb3J0IHsgQ2xpZW50ZSB9IGZyb20gJy4uLy4uL21vZGVscy9jbGllbnRpL2NsaWVudGUnO1xuaW1wb3J0IHsgSW1tb2JpbGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvaW1tb2JpbGkvaW1tb2JpbGUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW1tb2JpbGVEZXR0YWdsaW8gfSBmcm9tICcuLi8uLi9tb2RlbHMvaW1tb2JpbGkvaW1tb2JpbGVEZXR0YWdsaW8nO1xuaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy9jb21tb24vY29ubmVjdGlvbic7XG5pbXBvcnQgeyBEYXRpQ2F0YXN0YWxpRGV0dGFnbGlvIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ltbW9iaWxpL2RhdGlDYXRhc3RhbGlEZXR0YWdsaW8nO1xuaW1wb3J0IHsgT21pRGV0dGFnbGlvIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ltbW9iaWxpL29taURldHRhZ2xpbyc7XG5pbXBvcnQgeyBTcGVzYURldHRhZ2xpbyB9IGZyb20gJy4uLy4uL21vZGVscy9pbW1vYmlsaS9zcGVzYURldHRhZ2xpbyc7XG5pbXBvcnQgeyBNdXR1b0RldHRhZ2xpbyB9IGZyb20gJy4uLy4uL21vZGVscy9pbW1vYmlsaS9tdXR1b0RldHRhZ2xpbyc7XG5pbXBvcnQgeyBBZmZpdHRvRGV0dGFnbGlvIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ltbW9iaWxpL2FmZml0dG9EZXR0YWdsaW8nO1xuaW1wb3J0IHsgVGFzc2FEZXR0YWdsaW8gfSBmcm9tICcuLi8uLi9tb2RlbHMvaW1tb2JpbGkvdGFzc2FEZXR0YWdsaW8nO1xuaW1wb3J0IHsgQ29pbnRlc3RhdGFyaW9EZXR0YWdsaW8gfSBmcm9tICcuLi8uLi9tb2RlbHMvaW1tb2JpbGkvY29pbnRlc3RhdGFyaW9EZXR0YWdsaW8nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2Vzc2lvblNlcnZpY2Uge1xuXG4gICAgcHVibGljIGNsaWVudGU6IENsaWVudGU7XG4gICAgcHVibGljIGltbW9iaWxpQ2xpZW50ZTogQXJyYXk8SW1tb2JpbGU+O1xuICAgIHB1YmxpYyBpbW1vYmlsZTogSW1tb2JpbGVEZXR0YWdsaW8gPSB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBlbGVuY29JbW1vYmlsaVN1YmplY3Q6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICAgIHB1YmxpYyBlbGVuY29JbW1vYmlsaU9icyA9IHRoaXMuZWxlbmNvSW1tb2JpbGlTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAgIHByaXZhdGUgdXNlckRhdGE6IFdzVG9rZW47XG5cbiAgICBwcml2YXRlIGNvbm5lY3Rpb246IENvbm5lY3Rpb247XG5cbiAgICBwcml2YXRlIHVzZXJEYXRhU3ViamVjdDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgcHVibGljIHVzZXJEYXRhT2JzZXJ2YWJsZSA9IHRoaXMudXNlckRhdGFTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgc3RvcmVTZXJ2aWNlOiBTdG9yZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgaW1tb2JpbGlTZXJ2aWNlOiBJbW1vYmlsaVNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgdGhpcy51c2VyRGF0YSA9IG5ldyBXc1Rva2VuKCk7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IG5ldyBDb25uZWN0aW9uKCk7XG4gICAgICAgIHRoaXMuY2xpZW50ZSA9IG5ldyBDbGllbnRlKCk7XG4gICAgICAgIHRoaXMuaW1tb2JpbGUgPSBuZXcgSW1tb2JpbGVEZXR0YWdsaW8oKTtcbiAgICAgICAgdGhpcy5pbW1vYmlsZS5kYXRpX2NhdGFzdGFsaSA9IG5ldyBEYXRpQ2F0YXN0YWxpRGV0dGFnbGlvKCk7XG4gICAgICAgIHRoaXMuaW1tb2JpbGUuc3Blc2UgPSBuZXcgQXJyYXk8U3Blc2FEZXR0YWdsaW8+KCk7XG4gICAgICAgIHRoaXMuaW1tb2JpbGUub21pID0gbmV3IE9taURldHRhZ2xpbygpO1xuICAgICAgICB0aGlzLmltbW9iaWxlLm11dHVvX2RldHRhZ2xpbyA9IG5ldyBNdXR1b0RldHRhZ2xpbygpO1xuICAgICAgICB0aGlzLmltbW9iaWxlLmFmZml0dG9fZGV0dGFnbGlvID0gbmV3IEFmZml0dG9EZXR0YWdsaW8oKTtcbiAgICAgICAgdGhpcy5pbW1vYmlsZS50YXNzZSA9IG5ldyBBcnJheTxUYXNzYURldHRhZ2xpbz4oKTtcbiAgICAgICAgdGhpcy5pbW1vYmlsZS5jb2ludGVzdGF0YXJpID0gbmV3IEFycmF5PENvaW50ZXN0YXRhcmlvRGV0dGFnbGlvPigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRDbGllbnRlKGNsaWVudGU6IENsaWVudGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jbGllbnRlID0gY2xpZW50ZTtcbiAgICAgICAgdGhpcy5pbW1vYmlsaVNlcnZpY2UuZ2V0SW1tb2JpbGkodGhpcy5jbGllbnRlLmNsaWVudGVfaWQgKyAnJykuc3Vic2NyaWJlKHIgPT4ge1xuICAgICAgICAgICAgaWYgKHIuU3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRoaXMuaW1tb2JpbGlDbGllbnRlID0gci5EYXRhLmVsZW5jb19pbW1vYmlsaTtcbiAgICAgICAgICAgICAgICAvLyBzdmVnbGlhIGNoaSDDqCBpbiBhc2NvbHRvXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVuY29JbW1vYmlsaVN1YmplY3QubmV4dCh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyVXNlckRhdGEoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RvcmVTZXJ2aWNlLmNsZWFyVXNlckRhdGEoKTtcbiAgICAgICAgdGhpcy51c2VyRGF0YSA9IG5ldyBXc1Rva2VuKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFVzZXJEYXRhKHVzZXJEYXRhOiBXc1Rva2VuKTogbnVtYmVyIHtcbiAgICAgICAgdGhpcy51c2VyRGF0YSA9IHVzZXJEYXRhO1xuICAgICAgICBpZiAodXNlckRhdGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zdG9yZVNlcnZpY2Uuc2V0VXNlckRhdGEodXNlckRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRVc2VyRGF0YSgpOiBXc1Rva2VuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlckRhdGE7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRVc2VyRGF0YSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMudXNlckRhdGEgIT09IG51bGwgJiYgdGhpcy51c2VyRGF0YSAhPT0gdW5kZWZpbmVkICYmIHRoaXMudXNlckRhdGEudG9rZW5fdmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJEYXRhU3ViamVjdC5uZXh0KHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdG9yZVNlcnZpY2UuZ2V0VXNlckRhdGFQcm9taXNlKCkudGhlbigodmFsOiBXc1Rva2VuKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlckRhdGFTdWJqZWN0Lm5leHQoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlckRhdGEgPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlckRhdGFTdWJqZWN0Lm5leHQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q2xpZW50ZSgpOiBDbGllbnRlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SW1tb2JpbGlDbGllbnRlKCk6IEFycmF5PEltbW9iaWxlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmltbW9iaWxpQ2xpZW50ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0SW1tb2JpbGVEZXR0YWdsaW8oaW1tb2JpbGVEZXR0YWdsaW86IEltbW9iaWxlRGV0dGFnbGlvKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW1tb2JpbGUgPSBpbW1vYmlsZURldHRhZ2xpbztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SW1tb2JpbGVEZXR0YWdsaW8oKTogSW1tb2JpbGVEZXR0YWdsaW8ge1xuICAgICAgICByZXR1cm4gdGhpcy5pbW1vYmlsZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXJJbW1vYmlsZURldHRhZ2xpbygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbW1vYmlsZSA9IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIHNldENvbm5lY3Rpb24oY29ubjogQ29ubmVjdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBjb25uO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDb25uZWN0aW9uKCk6IENvbm5lY3Rpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0aW9uO1xuICAgIH1cbn1cbiJdfQ==