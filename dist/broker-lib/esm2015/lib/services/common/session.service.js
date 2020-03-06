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
export class SessionService {
    /**
     * @param {?} storeService
     * @param {?} immobiliService
     */
    constructor(storeService, immobiliService) {
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
    setPaginaPrecedente(pagina) {
        this.paginaPrecedente = pagina;
    }
    /**
     * @return {?}
     */
    getPaginaPrecedente() {
        return this.paginaPrecedente;
    }
    /**
     * @param {?} intestazione
     * @return {?}
     */
    setIntestazionePagina(intestazione) {
        this.intestazionePagina = intestazione;
    }
    /**
     * @return {?}
     */
    getIntestazionePagina() {
        return this.intestazionePagina;
    }
    /**
     * @param {?} cliente
     * @return {?}
     */
    setCliente(cliente) {
        this.cliente = cliente;
        this.caricaImmobili(this.cliente.cliente_id + '');
    }
    /**
     * @param {?} idCliente
     * @return {?}
     */
    caricaImmobili(idCliente) {
        this.immobiliService.getImmobili(idCliente).subscribe((/**
         * @param {?} r
         * @return {?}
         */
        r => {
            if (r.Success) {
                this.immobiliCliente = r.Data.elenco_immobili;
                console.log('caricati gli immobili del cliente: ' + this.immobiliCliente.length);
                // sveglia chi è in ascolto
                this.elencoImmobiliSubject.next(true);
            }
        }));
    }
    /**
     * @return {?}
     */
    clearUserData() {
        this.storeService.clearUserData();
        this.cliente = new Cliente();
        this.userData = new WsToken();
    }
    /**
     * @param {?} userData
     * @return {?}
     */
    setUserData(userData) {
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
    }
    /**
     * @param {?} client
     * @return {?}
     */
    setClientData(client) {
        this.clientData = client;
        if (client != null) {
            this.storeService.setClientData(client);
        }
        else {
            return -1;
        }
        return 1;
    }
    /**
     * @return {?}
     */
    getUserData() {
        return this.userData;
    }
    /**
     * @return {?}
     */
    existsSessionData() {
        return (this.userData !== null && this.userData !== undefined && JSON.stringify(this.userData) !== '{}' && this.userData.token_value !== '');
    }
    /**
     * @return {?}
     */
    loadUserData() {
        if (this.userData !== null && this.userData !== undefined && JSON.stringify(this.userData) !== '{}' && this.userData.token_value !== '') {
            this.userDataSubject.next(true);
        }
        else {
            this.storeService.getUserDataPromise().then((/**
             * @param {?} val
             * @return {?}
             */
            (val) => {
                if (val == null) {
                    this.userDataSubject.next(false);
                }
                else {
                    this.userData = val;
                    this.userDataSubject.next(true);
                }
            }));
        }
    }
    /**
     * @return {?}
     */
    getCliente() {
        return this.cliente;
    }
    /**
     * @return {?}
     */
    clearCliente() {
        this.cliente = new Cliente();
        this.immobiliCliente = new Array();
    }
    /**
     * @return {?}
     */
    getImmobiliCliente() {
        return this.immobiliCliente;
    }
    /**
     * @param {?} immobileDettaglio
     * @return {?}
     */
    setImmobileDettaglio(immobileDettaglio) {
        this.immobile = immobileDettaglio;
    }
    /**
     * @return {?}
     */
    getImmobileDettaglio() {
        return this.immobile;
    }
    /**
     * @return {?}
     */
    clearImmobileDettaglio() {
        this.immobile = null;
    }
    /**
     * @param {?} conn
     * @return {?}
     */
    setConnection(conn) {
        this.connection = conn;
    }
    /**
     * @return {?}
     */
    getConnection() {
        return this.connection;
    }
}
SessionService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SessionService.ctorParameters = () => [
    { type: StoreService },
    { type: ImmobiliService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYnJva2VyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb21tb24vc2Vzc2lvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRS9ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBSzFFLE1BQU0sT0FBTyxjQUFjOzs7OztJQW1CdkIsWUFDWSxZQUEwQixFQUMxQixlQUFnQztRQURoQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFoQnBDLDBCQUFxQixHQUFxQixJQUFJLE9BQU8sRUFBVyxDQUFDO1FBQ2xFLHNCQUFpQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQU83RCxvQkFBZSxHQUFxQixJQUFJLE9B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Q0FBQztJQUMzQixDQUFDOzs7O0lBRU0sYUFBYTtRQUNoQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQzs7O1lBNUpKLFVBQVU7Ozs7WUFoQkYsWUFBWTtZQUNaLGVBQWU7Ozs7SUFrQnBCLGlDQUF3Qjs7SUFDeEIseUNBQXdDOztJQUN4QyxrQ0FBbUM7Ozs7O0lBQ25DLCtDQUF5RTs7SUFDekUsMkNBQXFFOzs7OztJQUNyRSxrQ0FBMEI7Ozs7O0lBRTFCLG9DQUE0Qjs7Ozs7SUFFNUIsb0NBQStCOzs7OztJQUUvQix5Q0FBbUU7O0lBQ25FLDRDQUFnRTs7Ozs7SUFFaEUsNENBQW1DOzs7OztJQUNuQywwQ0FBaUM7Ozs7O0lBRzdCLHNDQUFrQzs7Ozs7SUFDbEMseUNBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV3NUb2tlbiB9IGZyb20gJy4vLi4vLi4vbW9kZWxzL2xvZ2luL3dzVG9rZW4nO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vc3RvcmUvc3RvcmUuc2VydmljZSc7XG5pbXBvcnQgeyBJbW1vYmlsaVNlcnZpY2UgfSBmcm9tICcuLi9pbW1vYmlsaS9pbW1vYmlsaS5zZXJ2aWNlJztcblxuaW1wb3J0IHsgQ2xpZW50ZSB9IGZyb20gJy4uLy4uL21vZGVscy9jbGllbnRpL2NsaWVudGUnO1xuaW1wb3J0IHsgSW1tb2JpbGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvaW1tb2JpbGkvaW1tb2JpbGUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW1tb2JpbGVEZXR0YWdsaW8gfSBmcm9tICcuLi8uLi9tb2RlbHMvaW1tb2JpbGkvaW1tb2JpbGVEZXR0YWdsaW8nO1xuaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy9jb21tb24vY29ubmVjdGlvbic7XG5pbXBvcnQgeyBEYXRpQ2F0YXN0YWxpRGV0dGFnbGlvIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ltbW9iaWxpL2RhdGlDYXRhc3RhbGlEZXR0YWdsaW8nO1xuaW1wb3J0IHsgT21pRGV0dGFnbGlvIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ltbW9iaWxpL29taURldHRhZ2xpbyc7XG5pbXBvcnQgeyBTcGVzYURldHRhZ2xpbyB9IGZyb20gJy4uLy4uL21vZGVscy9pbW1vYmlsaS9zcGVzYURldHRhZ2xpbyc7XG5pbXBvcnQgeyBNdXR1b0RldHRhZ2xpbyB9IGZyb20gJy4uLy4uL21vZGVscy9pbW1vYmlsaS9tdXR1b0RldHRhZ2xpbyc7XG5pbXBvcnQgeyBBZmZpdHRvRGV0dGFnbGlvIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ltbW9iaWxpL2FmZml0dG9EZXR0YWdsaW8nO1xuaW1wb3J0IHsgVGFzc2FEZXR0YWdsaW8gfSBmcm9tICcuLi8uLi9tb2RlbHMvaW1tb2JpbGkvdGFzc2FEZXR0YWdsaW8nO1xuaW1wb3J0IHsgQ29pbnRlc3RhdGFyaW9EZXR0YWdsaW8gfSBmcm9tICcuLi8uLi9tb2RlbHMvaW1tb2JpbGkvY29pbnRlc3RhdGFyaW9EZXR0YWdsaW8nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2Vzc2lvblNlcnZpY2Uge1xuXG4gICAgcHVibGljIGNsaWVudGU6IENsaWVudGU7XG4gICAgcHVibGljIGltbW9iaWxpQ2xpZW50ZTogQXJyYXk8SW1tb2JpbGU+O1xuICAgIHB1YmxpYyBpbW1vYmlsZTogSW1tb2JpbGVEZXR0YWdsaW87XG4gICAgcHJpdmF0ZSBlbGVuY29JbW1vYmlsaVN1YmplY3Q6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICAgIHB1YmxpYyBlbGVuY29JbW1vYmlsaU9icyA9IHRoaXMuZWxlbmNvSW1tb2JpbGlTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAgIHByaXZhdGUgdXNlckRhdGE6IFdzVG9rZW47XG5cbiAgICBwcml2YXRlIGNsaWVudERhdGE6IENsaWVudGU7XG5cbiAgICBwcml2YXRlIGNvbm5lY3Rpb246IENvbm5lY3Rpb247XG5cbiAgICBwcml2YXRlIHVzZXJEYXRhU3ViamVjdDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgcHVibGljIHVzZXJEYXRhT2JzZXJ2YWJsZSA9IHRoaXMudXNlckRhdGFTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgcHJpdmF0ZSBpbnRlc3RhemlvbmVQYWdpbmE6IHN0cmluZztcbiAgICBwcml2YXRlIHBhZ2luYVByZWNlZGVudGU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHN0b3JlU2VydmljZTogU3RvcmVTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGltbW9iaWxpU2VydmljZTogSW1tb2JpbGlTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMudXNlckRhdGEgPSBuZXcgV3NUb2tlbigpO1xuICAgICAgICB0aGlzLmNsaWVudERhdGEgPSBuZXcgQ2xpZW50ZSgpO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBuZXcgQ29ubmVjdGlvbigpO1xuICAgICAgICB0aGlzLmNsaWVudGUgPSBuZXcgQ2xpZW50ZSgpO1xuICAgICAgICB0aGlzLmltbW9iaWxpQ2xpZW50ZSA9IG5ldyBBcnJheTxJbW1vYmlsZT4oKTtcbiAgICAgICAgdGhpcy5pbW1vYmlsZSA9IG5ldyBJbW1vYmlsZURldHRhZ2xpbygpO1xuICAgICAgICB0aGlzLmltbW9iaWxlLmRhdGlfY2F0YXN0YWxpID0gbmV3IERhdGlDYXRhc3RhbGlEZXR0YWdsaW8oKTtcbiAgICAgICAgdGhpcy5pbW1vYmlsZS5zcGVzZSA9IG5ldyBBcnJheTxTcGVzYURldHRhZ2xpbz4oKTtcbiAgICAgICAgdGhpcy5pbW1vYmlsZS5vbWkgPSBuZXcgT21pRGV0dGFnbGlvKCk7XG4gICAgICAgIHRoaXMuaW1tb2JpbGUubXV0dW9fZGV0dGFnbGlvID0gbmV3IE11dHVvRGV0dGFnbGlvKCk7XG4gICAgICAgIHRoaXMuaW1tb2JpbGUuYWZmaXR0b19kZXR0YWdsaW8gPSBuZXcgQWZmaXR0b0RldHRhZ2xpbygpO1xuICAgICAgICB0aGlzLmltbW9iaWxlLnRhc3NlID0gbmV3IEFycmF5PFRhc3NhRGV0dGFnbGlvPigpO1xuICAgICAgICB0aGlzLmltbW9iaWxlLmNvaW50ZXN0YXRhcmkgPSBuZXcgQXJyYXk8Q29pbnRlc3RhdGFyaW9EZXR0YWdsaW8+KCk7XG4gICAgICAgIHRoaXMuaW50ZXN0YXppb25lUGFnaW5hID0gJ1JlYWR2aWNlJztcbiAgICAgICAgdGhpcy5wYWdpbmFQcmVjZWRlbnRlID0gJ2hvbWUnO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRQYWdpbmFQcmVjZWRlbnRlKHBhZ2luYTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGFnaW5hUHJlY2VkZW50ZSA9IHBhZ2luYTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UGFnaW5hUHJlY2VkZW50ZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5wYWdpbmFQcmVjZWRlbnRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRJbnRlc3RhemlvbmVQYWdpbmEoaW50ZXN0YXppb25lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbnRlc3RhemlvbmVQYWdpbmEgPSBpbnRlc3RhemlvbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEludGVzdGF6aW9uZVBhZ2luYSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlc3RhemlvbmVQYWdpbmE7XG4gICAgfVxuXG4gICAgcHVibGljIHNldENsaWVudGUoY2xpZW50ZTogQ2xpZW50ZSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNsaWVudGUgPSBjbGllbnRlO1xuICAgICAgICB0aGlzLmNhcmljYUltbW9iaWxpKHRoaXMuY2xpZW50ZS5jbGllbnRlX2lkICsgJycpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjYXJpY2FJbW1vYmlsaShpZENsaWVudGU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmltbW9iaWxpU2VydmljZS5nZXRJbW1vYmlsaShpZENsaWVudGUpLnN1YnNjcmliZShyID0+IHtcbiAgICAgICAgICAgIGlmIChyLlN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmltbW9iaWxpQ2xpZW50ZSA9IHIuRGF0YS5lbGVuY29faW1tb2JpbGk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhcmljYXRpIGdsaSBpbW1vYmlsaSBkZWwgY2xpZW50ZTogJyArIHRoaXMuaW1tb2JpbGlDbGllbnRlLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgLy8gc3ZlZ2xpYSBjaGkgw6ggaW4gYXNjb2x0b1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbmNvSW1tb2JpbGlTdWJqZWN0Lm5leHQodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhclVzZXJEYXRhKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0b3JlU2VydmljZS5jbGVhclVzZXJEYXRhKCk7XG4gICAgICAgIHRoaXMuY2xpZW50ZSA9IG5ldyBDbGllbnRlKCk7XG4gICAgICAgIHRoaXMudXNlckRhdGEgPSBuZXcgV3NUb2tlbigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRVc2VyRGF0YSh1c2VyRGF0YTogV3NUb2tlbik6IG51bWJlciB7XG4gICAgICAgIHRoaXMudXNlckRhdGEgPSB1c2VyRGF0YTtcbiAgICAgICAgaWYgKHVzZXJEYXRhICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmVTZXJ2aWNlLnNldFVzZXJEYXRhKHVzZXJEYXRhKTtcbiAgICAgICAgICAgIGlmICh1c2VyRGF0YS5jbGllbnRlICE9PSB1bmRlZmluZWQgJiYgdXNlckRhdGEuY2xpZW50ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2xpZW50ZSh1c2VyRGF0YS5jbGllbnRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0Q2xpZW50RGF0YShjbGllbnQ6IENsaWVudGUpOiBudW1iZXIge1xuICAgICAgICB0aGlzLmNsaWVudERhdGEgPSBjbGllbnQ7XG4gICAgICAgIGlmIChjbGllbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zdG9yZVNlcnZpY2Uuc2V0Q2xpZW50RGF0YShjbGllbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRVc2VyRGF0YSgpOiBXc1Rva2VuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlckRhdGE7XG4gICAgfVxuXG4gICAgcHVibGljIGV4aXN0c1Nlc3Npb25EYXRhKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKHRoaXMudXNlckRhdGEgIT09IG51bGwgJiYgdGhpcy51c2VyRGF0YSAhPT0gdW5kZWZpbmVkICYmIEpTT04uc3RyaW5naWZ5KHRoaXMudXNlckRhdGEpICE9PSAne30nICYmIHRoaXMudXNlckRhdGEudG9rZW5fdmFsdWUgIT09ICcnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZFVzZXJEYXRhKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy51c2VyRGF0YSAhPT0gbnVsbCAmJiB0aGlzLnVzZXJEYXRhICE9PSB1bmRlZmluZWQgJiYgSlNPTi5zdHJpbmdpZnkodGhpcy51c2VyRGF0YSkgIT09ICd7fScgJiYgdGhpcy51c2VyRGF0YS50b2tlbl92YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMudXNlckRhdGFTdWJqZWN0Lm5leHQodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JlU2VydmljZS5nZXRVc2VyRGF0YVByb21pc2UoKS50aGVuKCh2YWw6IFdzVG9rZW4pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyRGF0YVN1YmplY3QubmV4dChmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyRGF0YSA9IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyRGF0YVN1YmplY3QubmV4dCh0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDbGllbnRlKCk6IENsaWVudGUge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGllbnRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhckNsaWVudGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2xpZW50ZSA9IG5ldyBDbGllbnRlKCk7XG4gICAgICAgIHRoaXMuaW1tb2JpbGlDbGllbnRlID0gbmV3IEFycmF5PEltbW9iaWxlPigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJbW1vYmlsaUNsaWVudGUoKTogQXJyYXk8SW1tb2JpbGU+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1tb2JpbGlDbGllbnRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRJbW1vYmlsZURldHRhZ2xpbyhpbW1vYmlsZURldHRhZ2xpbzogSW1tb2JpbGVEZXR0YWdsaW8pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbW1vYmlsZSA9IGltbW9iaWxlRGV0dGFnbGlvO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJbW1vYmlsZURldHRhZ2xpbygpOiBJbW1vYmlsZURldHRhZ2xpbyB7XG4gICAgICAgIHJldHVybiB0aGlzLmltbW9iaWxlO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhckltbW9iaWxlRGV0dGFnbGlvKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmltbW9iaWxlID0gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0Q29ubmVjdGlvbihjb25uOiBDb25uZWN0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IGNvbm47XG4gICAgfVxuXG4gICAgcHVibGljIGdldENvbm5lY3Rpb24oKTogQ29ubmVjdGlvbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb247XG4gICAgfVxufVxuIl19