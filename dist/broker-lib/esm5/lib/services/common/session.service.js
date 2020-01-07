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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYnJva2VyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb21tb24vc2Vzc2lvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRS9ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBSTFFO0lBa0JJLHdCQUNZLFlBQTBCLEVBQzFCLGVBQWdDO1FBRGhDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQWRwQywwQkFBcUIsR0FBcUIsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQUNsRSxzQkFBaUIsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFLN0Qsb0JBQWUsR0FBcUIsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQUM1RCx1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Qzs7OztJQUVNLCtDQUFzQjs7O0lBQTdCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFTSxzQ0FBYTs7OztJQUFwQixVQUFxQixJQUFnQjtRQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDOzs7O0lBRU0sc0NBQWE7OztJQUFwQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDOztnQkE5SEosVUFBVTs7OztnQkFoQkYsWUFBWTtnQkFDWixlQUFlOztJQThJeEIscUJBQUM7Q0FBQSxBQS9IRCxJQStIQztTQTlIWSxjQUFjOzs7SUFFdkIsaUNBQXdCOztJQUN4Qix5Q0FBd0M7O0lBQ3hDLGtDQUFtQzs7Ozs7SUFDbkMsK0NBQXlFOztJQUN6RSwyQ0FBcUU7Ozs7O0lBQ3JFLGtDQUEwQjs7Ozs7SUFFMUIsb0NBQStCOzs7OztJQUUvQix5Q0FBbUU7O0lBQ25FLDRDQUFnRTs7Ozs7SUFFaEUsNENBQW1DOzs7OztJQUNuQywwQ0FBaUM7Ozs7O0lBRzdCLHNDQUFrQzs7Ozs7SUFDbEMseUNBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV3NUb2tlbiB9IGZyb20gJy4vLi4vLi4vbW9kZWxzL2xvZ2luL3dzVG9rZW4nO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vc3RvcmUvc3RvcmUuc2VydmljZSc7XG5pbXBvcnQgeyBJbW1vYmlsaVNlcnZpY2UgfSBmcm9tICcuLi9pbW1vYmlsaS9pbW1vYmlsaS5zZXJ2aWNlJztcblxuaW1wb3J0IHsgQ2xpZW50ZSB9IGZyb20gJy4uLy4uL21vZGVscy9jbGllbnRpL2NsaWVudGUnO1xuaW1wb3J0IHsgSW1tb2JpbGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvaW1tb2JpbGkvaW1tb2JpbGUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW1tb2JpbGVEZXR0YWdsaW8gfSBmcm9tICcuLi8uLi9tb2RlbHMvaW1tb2JpbGkvaW1tb2JpbGVEZXR0YWdsaW8nO1xuaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy9jb21tb24vY29ubmVjdGlvbic7XG5pbXBvcnQgeyBEYXRpQ2F0YXN0YWxpRGV0dGFnbGlvIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ltbW9iaWxpL2RhdGlDYXRhc3RhbGlEZXR0YWdsaW8nO1xuaW1wb3J0IHsgT21pRGV0dGFnbGlvIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ltbW9iaWxpL29taURldHRhZ2xpbyc7XG5pbXBvcnQgeyBTcGVzYURldHRhZ2xpbyB9IGZyb20gJy4uLy4uL21vZGVscy9pbW1vYmlsaS9zcGVzYURldHRhZ2xpbyc7XG5pbXBvcnQgeyBNdXR1b0RldHRhZ2xpbyB9IGZyb20gJy4uLy4uL21vZGVscy9pbW1vYmlsaS9tdXR1b0RldHRhZ2xpbyc7XG5pbXBvcnQgeyBBZmZpdHRvRGV0dGFnbGlvIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ltbW9iaWxpL2FmZml0dG9EZXR0YWdsaW8nO1xuaW1wb3J0IHsgVGFzc2FEZXR0YWdsaW8gfSBmcm9tICcuLi8uLi9tb2RlbHMvaW1tb2JpbGkvdGFzc2FEZXR0YWdsaW8nO1xuaW1wb3J0IHsgQ29pbnRlc3RhdGFyaW9EZXR0YWdsaW8gfSBmcm9tICcuLi8uLi9tb2RlbHMvaW1tb2JpbGkvY29pbnRlc3RhdGFyaW9EZXR0YWdsaW8nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2Vzc2lvblNlcnZpY2Uge1xuXG4gICAgcHVibGljIGNsaWVudGU6IENsaWVudGU7XG4gICAgcHVibGljIGltbW9iaWxpQ2xpZW50ZTogQXJyYXk8SW1tb2JpbGU+O1xuICAgIHB1YmxpYyBpbW1vYmlsZTogSW1tb2JpbGVEZXR0YWdsaW87XG4gICAgcHJpdmF0ZSBlbGVuY29JbW1vYmlsaVN1YmplY3Q6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICAgIHB1YmxpYyBlbGVuY29JbW1vYmlsaU9icyA9IHRoaXMuZWxlbmNvSW1tb2JpbGlTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAgIHByaXZhdGUgdXNlckRhdGE6IFdzVG9rZW47XG5cbiAgICBwcml2YXRlIGNvbm5lY3Rpb246IENvbm5lY3Rpb247XG5cbiAgICBwcml2YXRlIHVzZXJEYXRhU3ViamVjdDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgcHVibGljIHVzZXJEYXRhT2JzZXJ2YWJsZSA9IHRoaXMudXNlckRhdGFTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgcHJpdmF0ZSBpbnRlc3RhemlvbmVQYWdpbmE6IHN0cmluZztcbiAgICBwcml2YXRlIHBhZ2luYVByZWNlZGVudGU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHN0b3JlU2VydmljZTogU3RvcmVTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGltbW9iaWxpU2VydmljZTogSW1tb2JpbGlTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMudXNlckRhdGEgPSBuZXcgV3NUb2tlbigpO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBuZXcgQ29ubmVjdGlvbigpO1xuICAgICAgICB0aGlzLmNsaWVudGUgPSBuZXcgQ2xpZW50ZSgpO1xuICAgICAgICB0aGlzLmltbW9iaWxpQ2xpZW50ZSA9IG5ldyBBcnJheTxJbW1vYmlsZT4oKTtcbiAgICAgICAgdGhpcy5pbW1vYmlsZSA9IG5ldyBJbW1vYmlsZURldHRhZ2xpbygpO1xuICAgICAgICB0aGlzLmltbW9iaWxlLmRhdGlfY2F0YXN0YWxpID0gbmV3IERhdGlDYXRhc3RhbGlEZXR0YWdsaW8oKTtcbiAgICAgICAgdGhpcy5pbW1vYmlsZS5zcGVzZSA9IG5ldyBBcnJheTxTcGVzYURldHRhZ2xpbz4oKTtcbiAgICAgICAgdGhpcy5pbW1vYmlsZS5vbWkgPSBuZXcgT21pRGV0dGFnbGlvKCk7XG4gICAgICAgIHRoaXMuaW1tb2JpbGUubXV0dW9fZGV0dGFnbGlvID0gbmV3IE11dHVvRGV0dGFnbGlvKCk7XG4gICAgICAgIHRoaXMuaW1tb2JpbGUuYWZmaXR0b19kZXR0YWdsaW8gPSBuZXcgQWZmaXR0b0RldHRhZ2xpbygpO1xuICAgICAgICB0aGlzLmltbW9iaWxlLnRhc3NlID0gbmV3IEFycmF5PFRhc3NhRGV0dGFnbGlvPigpO1xuICAgICAgICB0aGlzLmltbW9iaWxlLmNvaW50ZXN0YXRhcmkgPSBuZXcgQXJyYXk8Q29pbnRlc3RhdGFyaW9EZXR0YWdsaW8+KCk7XG4gICAgICAgIHRoaXMuaW50ZXN0YXppb25lUGFnaW5hID0gJ1JlYWR2aWNlJztcbiAgICAgICAgdGhpcy5wYWdpbmFQcmVjZWRlbnRlID0gJ2hvbWUnO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRQYWdpbmFQcmVjZWRlbnRlKHBhZ2luYTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGFnaW5hUHJlY2VkZW50ZSA9IHBhZ2luYTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UGFnaW5hUHJlY2VkZW50ZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5wYWdpbmFQcmVjZWRlbnRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRJbnRlc3RhemlvbmVQYWdpbmEoaW50ZXN0YXppb25lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbnRlc3RhemlvbmVQYWdpbmEgPSBpbnRlc3RhemlvbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEludGVzdGF6aW9uZVBhZ2luYSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlc3RhemlvbmVQYWdpbmE7XG4gICAgfVxuXG4gICAgcHVibGljIHNldENsaWVudGUoY2xpZW50ZTogQ2xpZW50ZSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNsaWVudGUgPSBjbGllbnRlO1xuICAgICAgICB0aGlzLmltbW9iaWxpU2VydmljZS5nZXRJbW1vYmlsaSh0aGlzLmNsaWVudGUuY2xpZW50ZV9pZCArICcnKS5zdWJzY3JpYmUociA9PiB7XG4gICAgICAgICAgICBpZiAoci5TdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbW1vYmlsaUNsaWVudGUgPSByLkRhdGEuZWxlbmNvX2ltbW9iaWxpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjYXJpY2F0aSBnbGkgaW1tb2JpbGkgZGVsIGNsaWVudGU6ICcgKyB0aGlzLmltbW9iaWxpQ2xpZW50ZS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIC8vIHN2ZWdsaWEgY2hpIMOoIGluIGFzY29sdG9cbiAgICAgICAgICAgICAgICB0aGlzLmVsZW5jb0ltbW9iaWxpU3ViamVjdC5uZXh0KHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXJVc2VyRGF0YSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdG9yZVNlcnZpY2UuY2xlYXJVc2VyRGF0YSgpO1xuICAgICAgICB0aGlzLnVzZXJEYXRhID0gbmV3IFdzVG9rZW4oKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0VXNlckRhdGEodXNlckRhdGE6IFdzVG9rZW4pOiBudW1iZXIge1xuICAgICAgICB0aGlzLnVzZXJEYXRhID0gdXNlckRhdGE7XG4gICAgICAgIGlmICh1c2VyRGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JlU2VydmljZS5zZXRVc2VyRGF0YSh1c2VyRGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFVzZXJEYXRhKCk6IFdzVG9rZW4ge1xuICAgICAgICByZXR1cm4gdGhpcy51c2VyRGF0YTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZFVzZXJEYXRhKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy51c2VyRGF0YSAhPT0gbnVsbCAmJiB0aGlzLnVzZXJEYXRhICE9PSB1bmRlZmluZWQgJiYgdGhpcy51c2VyRGF0YS50b2tlbl92YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMudXNlckRhdGFTdWJqZWN0Lm5leHQodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JlU2VydmljZS5nZXRVc2VyRGF0YVByb21pc2UoKS50aGVuKCh2YWw6IFdzVG9rZW4pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyRGF0YVN1YmplY3QubmV4dChmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyRGF0YSA9IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyRGF0YVN1YmplY3QubmV4dCh0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDbGllbnRlKCk6IENsaWVudGUge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGllbnRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJbW1vYmlsaUNsaWVudGUoKTogQXJyYXk8SW1tb2JpbGU+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1tb2JpbGlDbGllbnRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRJbW1vYmlsZURldHRhZ2xpbyhpbW1vYmlsZURldHRhZ2xpbzogSW1tb2JpbGVEZXR0YWdsaW8pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbW1vYmlsZSA9IGltbW9iaWxlRGV0dGFnbGlvO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJbW1vYmlsZURldHRhZ2xpbygpOiBJbW1vYmlsZURldHRhZ2xpbyB7XG4gICAgICAgIHJldHVybiB0aGlzLmltbW9iaWxlO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhckltbW9iaWxlRGV0dGFnbGlvKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmltbW9iaWxlID0gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0Q29ubmVjdGlvbihjb25uOiBDb25uZWN0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IGNvbm47XG4gICAgfVxuXG4gICAgcHVibGljIGdldENvbm5lY3Rpb24oKTogQ29ubmVjdGlvbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb247XG4gICAgfVxufVxuIl19