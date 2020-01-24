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
        this.immobiliService.getImmobili(this.cliente.cliente_id + '').subscribe((/**
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
    loadUserData() {
        if (this.userData !== null && this.userData !== undefined && this.userData.token_value === '') {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYnJva2VyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb21tb24vc2Vzc2lvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRS9ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBSzFFLE1BQU0sT0FBTyxjQUFjOzs7OztJQW1CdkIsWUFDWSxZQUEwQixFQUMxQixlQUFnQztRQURoQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFoQnBDLDBCQUFxQixHQUFxQixJQUFJLE9BQU8sRUFBVyxDQUFDO1FBQ2xFLHNCQUFpQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQU83RCxvQkFBZSxHQUFxQixJQUFJLE9B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Ly4uLy4uL21vZGVscy9sb2dpbi93c1Rva2VuJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlU2VydmljZSB9IGZyb20gJy4uL3N0b3JlL3N0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW1tb2JpbGlTZXJ2aWNlIH0gZnJvbSAnLi4vaW1tb2JpbGkvaW1tb2JpbGkuc2VydmljZSc7XG5cbmltcG9ydCB7IENsaWVudGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvY2xpZW50aS9jbGllbnRlJztcbmltcG9ydCB7IEltbW9iaWxlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ltbW9iaWxpL2ltbW9iaWxlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEltbW9iaWxlRGV0dGFnbGlvIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ltbW9iaWxpL2ltbW9iaWxlRGV0dGFnbGlvJztcbmltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvY29tbW9uL2Nvbm5lY3Rpb24nO1xuaW1wb3J0IHsgRGF0aUNhdGFzdGFsaURldHRhZ2xpbyB9IGZyb20gJy4uLy4uL21vZGVscy9pbW1vYmlsaS9kYXRpQ2F0YXN0YWxpRGV0dGFnbGlvJztcbmltcG9ydCB7IE9taURldHRhZ2xpbyB9IGZyb20gJy4uLy4uL21vZGVscy9pbW1vYmlsaS9vbWlEZXR0YWdsaW8nO1xuaW1wb3J0IHsgU3Blc2FEZXR0YWdsaW8gfSBmcm9tICcuLi8uLi9tb2RlbHMvaW1tb2JpbGkvc3Blc2FEZXR0YWdsaW8nO1xuaW1wb3J0IHsgTXV0dW9EZXR0YWdsaW8gfSBmcm9tICcuLi8uLi9tb2RlbHMvaW1tb2JpbGkvbXV0dW9EZXR0YWdsaW8nO1xuaW1wb3J0IHsgQWZmaXR0b0RldHRhZ2xpbyB9IGZyb20gJy4uLy4uL21vZGVscy9pbW1vYmlsaS9hZmZpdHRvRGV0dGFnbGlvJztcbmltcG9ydCB7IFRhc3NhRGV0dGFnbGlvIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ltbW9iaWxpL3Rhc3NhRGV0dGFnbGlvJztcbmltcG9ydCB7IENvaW50ZXN0YXRhcmlvRGV0dGFnbGlvIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ltbW9iaWxpL2NvaW50ZXN0YXRhcmlvRGV0dGFnbGlvJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlc3Npb25TZXJ2aWNlIHtcblxuICAgIHB1YmxpYyBjbGllbnRlOiBDbGllbnRlO1xuICAgIHB1YmxpYyBpbW1vYmlsaUNsaWVudGU6IEFycmF5PEltbW9iaWxlPjtcbiAgICBwdWJsaWMgaW1tb2JpbGU6IEltbW9iaWxlRGV0dGFnbGlvO1xuICAgIHByaXZhdGUgZWxlbmNvSW1tb2JpbGlTdWJqZWN0OiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgICBwdWJsaWMgZWxlbmNvSW1tb2JpbGlPYnMgPSB0aGlzLmVsZW5jb0ltbW9iaWxpU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgICBwcml2YXRlIHVzZXJEYXRhOiBXc1Rva2VuO1xuXG4gICAgcHJpdmF0ZSBjbGllbnREYXRhOiBDbGllbnRlO1xuXG4gICAgcHJpdmF0ZSBjb25uZWN0aW9uOiBDb25uZWN0aW9uO1xuXG4gICAgcHJpdmF0ZSB1c2VyRGF0YVN1YmplY3Q6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICAgIHB1YmxpYyB1c2VyRGF0YU9ic2VydmFibGUgPSB0aGlzLnVzZXJEYXRhU3ViamVjdC5hc09ic2VydmFibGUoKTtcblxuICAgIHByaXZhdGUgaW50ZXN0YXppb25lUGFnaW5hOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBwYWdpbmFQcmVjZWRlbnRlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBzdG9yZVNlcnZpY2U6IFN0b3JlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBpbW1vYmlsaVNlcnZpY2U6IEltbW9iaWxpU2VydmljZVxuICAgICkge1xuICAgICAgICB0aGlzLnVzZXJEYXRhID0gbmV3IFdzVG9rZW4oKTtcbiAgICAgICAgdGhpcy5jbGllbnREYXRhID0gbmV3IENsaWVudGUoKTtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gbmV3IENvbm5lY3Rpb24oKTtcbiAgICAgICAgdGhpcy5jbGllbnRlID0gbmV3IENsaWVudGUoKTtcbiAgICAgICAgdGhpcy5pbW1vYmlsaUNsaWVudGUgPSBuZXcgQXJyYXk8SW1tb2JpbGU+KCk7XG4gICAgICAgIHRoaXMuaW1tb2JpbGUgPSBuZXcgSW1tb2JpbGVEZXR0YWdsaW8oKTtcbiAgICAgICAgdGhpcy5pbW1vYmlsZS5kYXRpX2NhdGFzdGFsaSA9IG5ldyBEYXRpQ2F0YXN0YWxpRGV0dGFnbGlvKCk7XG4gICAgICAgIHRoaXMuaW1tb2JpbGUuc3Blc2UgPSBuZXcgQXJyYXk8U3Blc2FEZXR0YWdsaW8+KCk7XG4gICAgICAgIHRoaXMuaW1tb2JpbGUub21pID0gbmV3IE9taURldHRhZ2xpbygpO1xuICAgICAgICB0aGlzLmltbW9iaWxlLm11dHVvX2RldHRhZ2xpbyA9IG5ldyBNdXR1b0RldHRhZ2xpbygpO1xuICAgICAgICB0aGlzLmltbW9iaWxlLmFmZml0dG9fZGV0dGFnbGlvID0gbmV3IEFmZml0dG9EZXR0YWdsaW8oKTtcbiAgICAgICAgdGhpcy5pbW1vYmlsZS50YXNzZSA9IG5ldyBBcnJheTxUYXNzYURldHRhZ2xpbz4oKTtcbiAgICAgICAgdGhpcy5pbW1vYmlsZS5jb2ludGVzdGF0YXJpID0gbmV3IEFycmF5PENvaW50ZXN0YXRhcmlvRGV0dGFnbGlvPigpO1xuICAgICAgICB0aGlzLmludGVzdGF6aW9uZVBhZ2luYSA9ICdSZWFkdmljZSc7XG4gICAgICAgIHRoaXMucGFnaW5hUHJlY2VkZW50ZSA9ICdob21lJztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0UGFnaW5hUHJlY2VkZW50ZShwYWdpbmE6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLnBhZ2luYVByZWNlZGVudGUgPSBwYWdpbmE7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFBhZ2luYVByZWNlZGVudGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnaW5hUHJlY2VkZW50ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0SW50ZXN0YXppb25lUGFnaW5hKGludGVzdGF6aW9uZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW50ZXN0YXppb25lUGFnaW5hID0gaW50ZXN0YXppb25lO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJbnRlc3RhemlvbmVQYWdpbmEoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXN0YXppb25lUGFnaW5hO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRDbGllbnRlKGNsaWVudGU6IENsaWVudGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jbGllbnRlID0gY2xpZW50ZTtcbiAgICAgICAgdGhpcy5pbW1vYmlsaVNlcnZpY2UuZ2V0SW1tb2JpbGkodGhpcy5jbGllbnRlLmNsaWVudGVfaWQgKyAnJykuc3Vic2NyaWJlKHIgPT4ge1xuICAgICAgICAgICAgaWYgKHIuU3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRoaXMuaW1tb2JpbGlDbGllbnRlID0gci5EYXRhLmVsZW5jb19pbW1vYmlsaTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2FyaWNhdGkgZ2xpIGltbW9iaWxpIGRlbCBjbGllbnRlOiAnICsgdGhpcy5pbW1vYmlsaUNsaWVudGUubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAvLyBzdmVnbGlhIGNoaSDDqCBpbiBhc2NvbHRvXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVuY29JbW1vYmlsaVN1YmplY3QubmV4dCh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyVXNlckRhdGEoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RvcmVTZXJ2aWNlLmNsZWFyVXNlckRhdGEoKTtcbiAgICAgICAgdGhpcy51c2VyRGF0YSA9IG5ldyBXc1Rva2VuKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFVzZXJEYXRhKHVzZXJEYXRhOiBXc1Rva2VuKTogbnVtYmVyIHtcbiAgICAgICAgdGhpcy51c2VyRGF0YSA9IHVzZXJEYXRhO1xuICAgICAgICBpZiAodXNlckRhdGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zdG9yZVNlcnZpY2Uuc2V0VXNlckRhdGEodXNlckRhdGEpO1xuICAgICAgICAgICAgaWYgKHVzZXJEYXRhLmNsaWVudGUgIT09IHVuZGVmaW5lZCAmJiB1c2VyRGF0YS5jbGllbnRlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDbGllbnRlKHVzZXJEYXRhLmNsaWVudGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRDbGllbnREYXRhKGNsaWVudDogQ2xpZW50ZSk6IG51bWJlciB7XG4gICAgICAgIHRoaXMuY2xpZW50RGF0YSA9IGNsaWVudDtcbiAgICAgICAgaWYgKGNsaWVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JlU2VydmljZS5zZXRDbGllbnREYXRhKGNsaWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFVzZXJEYXRhKCk6IFdzVG9rZW4ge1xuICAgICAgICByZXR1cm4gdGhpcy51c2VyRGF0YTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZFVzZXJEYXRhKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy51c2VyRGF0YSAhPT0gbnVsbCAmJiB0aGlzLnVzZXJEYXRhICE9PSB1bmRlZmluZWQgJiYgdGhpcy51c2VyRGF0YS50b2tlbl92YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMudXNlckRhdGFTdWJqZWN0Lm5leHQodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JlU2VydmljZS5nZXRVc2VyRGF0YVByb21pc2UoKS50aGVuKCh2YWw6IFdzVG9rZW4pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyRGF0YVN1YmplY3QubmV4dChmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyRGF0YSA9IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyRGF0YVN1YmplY3QubmV4dCh0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDbGllbnRlKCk6IENsaWVudGUge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGllbnRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhckNsaWVudGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2xpZW50ZSA9IG5ldyBDbGllbnRlKCk7XG4gICAgICAgIHRoaXMuaW1tb2JpbGlDbGllbnRlID0gbmV3IEFycmF5PEltbW9iaWxlPigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJbW1vYmlsaUNsaWVudGUoKTogQXJyYXk8SW1tb2JpbGU+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1tb2JpbGlDbGllbnRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRJbW1vYmlsZURldHRhZ2xpbyhpbW1vYmlsZURldHRhZ2xpbzogSW1tb2JpbGVEZXR0YWdsaW8pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbW1vYmlsZSA9IGltbW9iaWxlRGV0dGFnbGlvO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJbW1vYmlsZURldHRhZ2xpbygpOiBJbW1vYmlsZURldHRhZ2xpbyB7XG4gICAgICAgIHJldHVybiB0aGlzLmltbW9iaWxlO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhckltbW9iaWxlRGV0dGFnbGlvKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmltbW9iaWxlID0gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0Q29ubmVjdGlvbihjb25uOiBDb25uZWN0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IGNvbm47XG4gICAgfVxuXG4gICAgcHVibGljIGdldENvbm5lY3Rpb24oKTogQ29ubmVjdGlvbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb247XG4gICAgfVxufVxuIl19