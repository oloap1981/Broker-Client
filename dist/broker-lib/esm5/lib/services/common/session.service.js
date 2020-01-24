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
        this.elencoImmobiliSubject = new Subject();
        this.elencoImmobiliObs = this.elencoImmobiliSubject.asObservable();
        this.userDataSubject = new Subject();
        this.userDataObservable = this.userDataSubject.asObservable();
        this.userData = new WsToken();
        this.clientData = new Cliente();
        this.connection = new Connection();
        this.cliente = new Cliente();
        this.immobiliCliente = new Array();
        this.immobile = new ImmobileDettaglio();
        this.immobile.dati_catastali = new DatiCatastaliDettaglio();
        this.immobile.spese = new Array();
        this.immobile.omi = new OmiDettaglio();
        this.immobile.mutuo_dettaglio = new MutuoDettaglio();
        this.immobile.affitto_dettaglio = new AffittoDettaglio();
        this.immobile.tasse = new Array();
        this.immobile.cointestatari = new Array();
        this.intestazionePagina = 'Readvice';
        this.paginaPrecedente = 'home';
    }
    /**
     * @param {?} pagina
     * @return {?}
     */
    SessionService.prototype.setPaginaPrecedente = /**
     * @param {?} pagina
     * @return {?}
     */
    function (pagina) {
        this.paginaPrecedente = pagina;
    };
    /**
     * @return {?}
     */
    SessionService.prototype.getPaginaPrecedente = /**
     * @return {?}
     */
    function () {
        return this.paginaPrecedente;
    };
    /**
     * @param {?} intestazione
     * @return {?}
     */
    SessionService.prototype.setIntestazionePagina = /**
     * @param {?} intestazione
     * @return {?}
     */
    function (intestazione) {
        this.intestazionePagina = intestazione;
    };
    /**
     * @return {?}
     */
    SessionService.prototype.getIntestazionePagina = /**
     * @return {?}
     */
    function () {
        return this.intestazionePagina;
    };
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
                console.log('caricati gli immobili del cliente: ' + _this.immobiliCliente.length);
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
            if (userData.cliente !== undefined && userData.cliente !== null) {
                this.setCliente(userData.cliente);
            }
        }
        else {
            return -1;
        }
        return 1;
    };
    /**
     * @param {?} client
     * @return {?}
     */
    SessionService.prototype.setClientData = /**
     * @param {?} client
     * @return {?}
     */
    function (client) {
        this.clientData = client;
        if (client != null) {
            this.storeService.setClientData(client);
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
    SessionService.prototype.clearCliente = /**
     * @return {?}
     */
    function () {
        this.cliente = new Cliente();
        this.immobiliCliente = new Array();
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
    SessionService.prototype.clientData;
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
    SessionService.prototype.intestazionePagina;
    /**
     * @type {?}
     * @private
     */
    SessionService.prototype.paginaPrecedente;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYnJva2VyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb21tb24vc2Vzc2lvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRS9ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBSTFFO0lBb0JJLHdCQUNZLFlBQTBCLEVBQzFCLGVBQWdDO1FBRGhDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQWhCcEMsMEJBQXFCLEdBQXFCLElBQUksT0FBTyxFQUFXLENBQUM7UUFDbEUsc0JBQWlCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBTzdELG9CQUFlLEdBQXFCLElBQUksT0FBTyxFQUFXLENBQUM7UUFDNUQs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QUNyRSxrQ0FBMEI7Ozs7O0lBRTFCLG9DQUE0Qjs7Ozs7SUFFNUIsb0NBQStCOzs7OztJQUUvQix5Q0FBbUU7O0lBQ25FLDRDQUFnRTs7Ozs7SUFFaEUsNENBQW1DOzs7OztJQUNuQywwQ0FBaUM7Ozs7O0lBRzdCLHNDQUFrQzs7Ozs7SUFDbEMseUNBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV3NUb2tlbiB9IGZyb20gJy4vLi4vLi4vbW9kZWxzL2xvZ2luL3dzVG9rZW4nO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vc3RvcmUvc3RvcmUuc2VydmljZSc7XG5pbXBvcnQgeyBJbW1vYmlsaVNlcnZpY2UgfSBmcm9tICcuLi9pbW1vYmlsaS9pbW1vYmlsaS5zZXJ2aWNlJztcblxuaW1wb3J0IHsgQ2xpZW50ZSB9IGZyb20gJy4uLy4uL21vZGVscy9jbGllbnRpL2NsaWVudGUnO1xuaW1wb3J0IHsgSW1tb2JpbGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvaW1tb2JpbGkvaW1tb2JpbGUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW1tb2JpbGVEZXR0YWdsaW8gfSBmcm9tICcuLi8uLi9tb2RlbHMvaW1tb2JpbGkvaW1tb2JpbGVEZXR0YWdsaW8nO1xuaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy9jb21tb24vY29ubmVjdGlvbic7XG5pbXBvcnQgeyBEYXRpQ2F0YXN0YWxpRGV0dGFnbGlvIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ltbW9iaWxpL2RhdGlDYXRhc3RhbGlEZXR0YWdsaW8nO1xuaW1wb3J0IHsgT21pRGV0dGFnbGlvIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ltbW9iaWxpL29taURldHRhZ2xpbyc7XG5pbXBvcnQgeyBTcGVzYURldHRhZ2xpbyB9IGZyb20gJy4uLy4uL21vZGVscy9pbW1vYmlsaS9zcGVzYURldHRhZ2xpbyc7XG5pbXBvcnQgeyBNdXR1b0RldHRhZ2xpbyB9IGZyb20gJy4uLy4uL21vZGVscy9pbW1vYmlsaS9tdXR1b0RldHRhZ2xpbyc7XG5pbXBvcnQgeyBBZmZpdHRvRGV0dGFnbGlvIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ltbW9iaWxpL2FmZml0dG9EZXR0YWdsaW8nO1xuaW1wb3J0IHsgVGFzc2FEZXR0YWdsaW8gfSBmcm9tICcuLi8uLi9tb2RlbHMvaW1tb2JpbGkvdGFzc2FEZXR0YWdsaW8nO1xuaW1wb3J0IHsgQ29pbnRlc3RhdGFyaW9EZXR0YWdsaW8gfSBmcm9tICcuLi8uLi9tb2RlbHMvaW1tb2JpbGkvY29pbnRlc3RhdGFyaW9EZXR0YWdsaW8nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2Vzc2lvblNlcnZpY2Uge1xuXG4gICAgcHVibGljIGNsaWVudGU6IENsaWVudGU7XG4gICAgcHVibGljIGltbW9iaWxpQ2xpZW50ZTogQXJyYXk8SW1tb2JpbGU+O1xuICAgIHB1YmxpYyBpbW1vYmlsZTogSW1tb2JpbGVEZXR0YWdsaW87XG4gICAgcHJpdmF0ZSBlbGVuY29JbW1vYmlsaVN1YmplY3Q6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICAgIHB1YmxpYyBlbGVuY29JbW1vYmlsaU9icyA9IHRoaXMuZWxlbmNvSW1tb2JpbGlTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAgIHByaXZhdGUgdXNlckRhdGE6IFdzVG9rZW47XG5cbiAgICBwcml2YXRlIGNsaWVudERhdGE6IENsaWVudGU7XG5cbiAgICBwcml2YXRlIGNvbm5lY3Rpb246IENvbm5lY3Rpb247XG5cbiAgICBwcml2YXRlIHVzZXJEYXRhU3ViamVjdDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgcHVibGljIHVzZXJEYXRhT2JzZXJ2YWJsZSA9IHRoaXMudXNlckRhdGFTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgcHJpdmF0ZSBpbnRlc3RhemlvbmVQYWdpbmE6IHN0cmluZztcbiAgICBwcml2YXRlIHBhZ2luYVByZWNlZGVudGU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHN0b3JlU2VydmljZTogU3RvcmVTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGltbW9iaWxpU2VydmljZTogSW1tb2JpbGlTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMudXNlckRhdGEgPSBuZXcgV3NUb2tlbigpO1xuICAgICAgICB0aGlzLmNsaWVudERhdGEgPSBuZXcgQ2xpZW50ZSgpO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBuZXcgQ29ubmVjdGlvbigpO1xuICAgICAgICB0aGlzLmNsaWVudGUgPSBuZXcgQ2xpZW50ZSgpO1xuICAgICAgICB0aGlzLmltbW9iaWxpQ2xpZW50ZSA9IG5ldyBBcnJheTxJbW1vYmlsZT4oKTtcbiAgICAgICAgdGhpcy5pbW1vYmlsZSA9IG5ldyBJbW1vYmlsZURldHRhZ2xpbygpO1xuICAgICAgICB0aGlzLmltbW9iaWxlLmRhdGlfY2F0YXN0YWxpID0gbmV3IERhdGlDYXRhc3RhbGlEZXR0YWdsaW8oKTtcbiAgICAgICAgdGhpcy5pbW1vYmlsZS5zcGVzZSA9IG5ldyBBcnJheTxTcGVzYURldHRhZ2xpbz4oKTtcbiAgICAgICAgdGhpcy5pbW1vYmlsZS5vbWkgPSBuZXcgT21pRGV0dGFnbGlvKCk7XG4gICAgICAgIHRoaXMuaW1tb2JpbGUubXV0dW9fZGV0dGFnbGlvID0gbmV3IE11dHVvRGV0dGFnbGlvKCk7XG4gICAgICAgIHRoaXMuaW1tb2JpbGUuYWZmaXR0b19kZXR0YWdsaW8gPSBuZXcgQWZmaXR0b0RldHRhZ2xpbygpO1xuICAgICAgICB0aGlzLmltbW9iaWxlLnRhc3NlID0gbmV3IEFycmF5PFRhc3NhRGV0dGFnbGlvPigpO1xuICAgICAgICB0aGlzLmltbW9iaWxlLmNvaW50ZXN0YXRhcmkgPSBuZXcgQXJyYXk8Q29pbnRlc3RhdGFyaW9EZXR0YWdsaW8+KCk7XG4gICAgICAgIHRoaXMuaW50ZXN0YXppb25lUGFnaW5hID0gJ1JlYWR2aWNlJztcbiAgICAgICAgdGhpcy5wYWdpbmFQcmVjZWRlbnRlID0gJ2hvbWUnO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRQYWdpbmFQcmVjZWRlbnRlKHBhZ2luYTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGFnaW5hUHJlY2VkZW50ZSA9IHBhZ2luYTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UGFnaW5hUHJlY2VkZW50ZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5wYWdpbmFQcmVjZWRlbnRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRJbnRlc3RhemlvbmVQYWdpbmEoaW50ZXN0YXppb25lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbnRlc3RhemlvbmVQYWdpbmEgPSBpbnRlc3RhemlvbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEludGVzdGF6aW9uZVBhZ2luYSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlc3RhemlvbmVQYWdpbmE7XG4gICAgfVxuXG4gICAgcHVibGljIHNldENsaWVudGUoY2xpZW50ZTogQ2xpZW50ZSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNsaWVudGUgPSBjbGllbnRlO1xuICAgICAgICB0aGlzLmltbW9iaWxpU2VydmljZS5nZXRJbW1vYmlsaSh0aGlzLmNsaWVudGUuY2xpZW50ZV9pZCArICcnKS5zdWJzY3JpYmUociA9PiB7XG4gICAgICAgICAgICBpZiAoci5TdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbW1vYmlsaUNsaWVudGUgPSByLkRhdGEuZWxlbmNvX2ltbW9iaWxpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjYXJpY2F0aSBnbGkgaW1tb2JpbGkgZGVsIGNsaWVudGU6ICcgKyB0aGlzLmltbW9iaWxpQ2xpZW50ZS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIC8vIHN2ZWdsaWEgY2hpIMOoIGluIGFzY29sdG9cbiAgICAgICAgICAgICAgICB0aGlzLmVsZW5jb0ltbW9iaWxpU3ViamVjdC5uZXh0KHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXJVc2VyRGF0YSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdG9yZVNlcnZpY2UuY2xlYXJVc2VyRGF0YSgpO1xuICAgICAgICB0aGlzLnVzZXJEYXRhID0gbmV3IFdzVG9rZW4oKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0VXNlckRhdGEodXNlckRhdGE6IFdzVG9rZW4pOiBudW1iZXIge1xuICAgICAgICB0aGlzLnVzZXJEYXRhID0gdXNlckRhdGE7XG4gICAgICAgIGlmICh1c2VyRGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JlU2VydmljZS5zZXRVc2VyRGF0YSh1c2VyRGF0YSk7XG4gICAgICAgICAgICBpZiAodXNlckRhdGEuY2xpZW50ZSAhPT0gdW5kZWZpbmVkICYmIHVzZXJEYXRhLmNsaWVudGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldENsaWVudGUodXNlckRhdGEuY2xpZW50ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgcHVibGljIHNldENsaWVudERhdGEoY2xpZW50OiBDbGllbnRlKTogbnVtYmVyIHtcbiAgICAgICAgdGhpcy5jbGllbnREYXRhID0gY2xpZW50O1xuICAgICAgICBpZiAoY2xpZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmVTZXJ2aWNlLnNldENsaWVudERhdGEoY2xpZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VXNlckRhdGEoKTogV3NUb2tlbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJEYXRhO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkVXNlckRhdGEoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnVzZXJEYXRhICE9PSBudWxsICYmIHRoaXMudXNlckRhdGEgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnVzZXJEYXRhLnRva2VuX3ZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgdGhpcy51c2VyRGF0YVN1YmplY3QubmV4dCh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmVTZXJ2aWNlLmdldFVzZXJEYXRhUHJvbWlzZSgpLnRoZW4oKHZhbDogV3NUb2tlbikgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2YWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJEYXRhU3ViamVjdC5uZXh0KGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJEYXRhID0gdmFsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJEYXRhU3ViamVjdC5uZXh0KHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldENsaWVudGUoKTogQ2xpZW50ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudGU7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyQ2xpZW50ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jbGllbnRlID0gbmV3IENsaWVudGUoKTtcbiAgICAgICAgdGhpcy5pbW1vYmlsaUNsaWVudGUgPSBuZXcgQXJyYXk8SW1tb2JpbGU+KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEltbW9iaWxpQ2xpZW50ZSgpOiBBcnJheTxJbW1vYmlsZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pbW1vYmlsaUNsaWVudGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEltbW9iaWxlRGV0dGFnbGlvKGltbW9iaWxlRGV0dGFnbGlvOiBJbW1vYmlsZURldHRhZ2xpbyk6IHZvaWQge1xuICAgICAgICB0aGlzLmltbW9iaWxlID0gaW1tb2JpbGVEZXR0YWdsaW87XG4gICAgfVxuXG4gICAgcHVibGljIGdldEltbW9iaWxlRGV0dGFnbGlvKCk6IEltbW9iaWxlRGV0dGFnbGlvIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1tb2JpbGU7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFySW1tb2JpbGVEZXR0YWdsaW8oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW1tb2JpbGUgPSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRDb25uZWN0aW9uKGNvbm46IENvbm5lY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gY29ubjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q29ubmVjdGlvbigpOiBDb25uZWN0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbjtcbiAgICB9XG59XG4iXX0=