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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYnJva2VyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb21tb24vc2Vzc2lvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRS9ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBSzFFLE1BQU0sT0FBTyxjQUFjOzs7OztJQWlCdkIsWUFDWSxZQUEwQixFQUMxQixlQUFnQztRQURoQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFkcEMsMEJBQXFCLEdBQXFCLElBQUksT0FBTyxFQUFXLENBQUM7UUFDbEUsc0JBQWlCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBSzdELG9CQUFlLEdBQXFCLElBQUksT0FB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QUM7SUFDekIsQ0FBQzs7OztJQUVNLHNCQUFzQjtRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDOzs7OztJQUVNLGFBQWEsQ0FBQyxJQUFnQjtRQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDOzs7O0lBRU0sYUFBYTtRQUNoQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQzs7O1lBbklKLFVBQVU7Ozs7WUFoQkYsWUFBWTtZQUNaLGVBQWU7Ozs7SUFrQnBCLGlDQUF3Qjs7SUFDeEIseUNBQXdDOztJQUN4QyxrQ0FBbUM7Ozs7O0lBQ25DLCtDQUF5RTs7SUFDekUsMkNBQXFFOzs7OztJQUNyRSxrQ0FBMEI7Ozs7O0lBRTFCLG9DQUErQjs7Ozs7SUFFL0IseUNBQW1FOztJQUNuRSw0Q0FBZ0U7Ozs7O0lBRWhFLDRDQUFtQzs7Ozs7SUFDbkMsMENBQWlDOzs7OztJQUc3QixzQ0FBa0M7Ozs7O0lBQ2xDLHlDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdzVG9rZW4gfSBmcm9tICcuLy4uLy4uL21vZGVscy9sb2dpbi93c1Rva2VuJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlU2VydmljZSB9IGZyb20gJy4uL3N0b3JlL3N0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW1tb2JpbGlTZXJ2aWNlIH0gZnJvbSAnLi4vaW1tb2JpbGkvaW1tb2JpbGkuc2VydmljZSc7XG5cbmltcG9ydCB7IENsaWVudGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvY2xpZW50aS9jbGllbnRlJztcbmltcG9ydCB7IEltbW9iaWxlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ltbW9iaWxpL2ltbW9iaWxlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEltbW9iaWxlRGV0dGFnbGlvIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ltbW9iaWxpL2ltbW9iaWxlRGV0dGFnbGlvJztcbmltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvY29tbW9uL2Nvbm5lY3Rpb24nO1xuaW1wb3J0IHsgRGF0aUNhdGFzdGFsaURldHRhZ2xpbyB9IGZyb20gJy4uLy4uL21vZGVscy9pbW1vYmlsaS9kYXRpQ2F0YXN0YWxpRGV0dGFnbGlvJztcbmltcG9ydCB7IE9taURldHRhZ2xpbyB9IGZyb20gJy4uLy4uL21vZGVscy9pbW1vYmlsaS9vbWlEZXR0YWdsaW8nO1xuaW1wb3J0IHsgU3Blc2FEZXR0YWdsaW8gfSBmcm9tICcuLi8uLi9tb2RlbHMvaW1tb2JpbGkvc3Blc2FEZXR0YWdsaW8nO1xuaW1wb3J0IHsgTXV0dW9EZXR0YWdsaW8gfSBmcm9tICcuLi8uLi9tb2RlbHMvaW1tb2JpbGkvbXV0dW9EZXR0YWdsaW8nO1xuaW1wb3J0IHsgQWZmaXR0b0RldHRhZ2xpbyB9IGZyb20gJy4uLy4uL21vZGVscy9pbW1vYmlsaS9hZmZpdHRvRGV0dGFnbGlvJztcbmltcG9ydCB7IFRhc3NhRGV0dGFnbGlvIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ltbW9iaWxpL3Rhc3NhRGV0dGFnbGlvJztcbmltcG9ydCB7IENvaW50ZXN0YXRhcmlvRGV0dGFnbGlvIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ltbW9iaWxpL2NvaW50ZXN0YXRhcmlvRGV0dGFnbGlvJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlc3Npb25TZXJ2aWNlIHtcblxuICAgIHB1YmxpYyBjbGllbnRlOiBDbGllbnRlO1xuICAgIHB1YmxpYyBpbW1vYmlsaUNsaWVudGU6IEFycmF5PEltbW9iaWxlPjtcbiAgICBwdWJsaWMgaW1tb2JpbGU6IEltbW9iaWxlRGV0dGFnbGlvO1xuICAgIHByaXZhdGUgZWxlbmNvSW1tb2JpbGlTdWJqZWN0OiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgICBwdWJsaWMgZWxlbmNvSW1tb2JpbGlPYnMgPSB0aGlzLmVsZW5jb0ltbW9iaWxpU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgICBwcml2YXRlIHVzZXJEYXRhOiBXc1Rva2VuO1xuXG4gICAgcHJpdmF0ZSBjb25uZWN0aW9uOiBDb25uZWN0aW9uO1xuXG4gICAgcHJpdmF0ZSB1c2VyRGF0YVN1YmplY3Q6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICAgIHB1YmxpYyB1c2VyRGF0YU9ic2VydmFibGUgPSB0aGlzLnVzZXJEYXRhU3ViamVjdC5hc09ic2VydmFibGUoKTtcblxuICAgIHByaXZhdGUgaW50ZXN0YXppb25lUGFnaW5hOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBwYWdpbmFQcmVjZWRlbnRlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBzdG9yZVNlcnZpY2U6IFN0b3JlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBpbW1vYmlsaVNlcnZpY2U6IEltbW9iaWxpU2VydmljZVxuICAgICkge1xuICAgICAgICB0aGlzLnVzZXJEYXRhID0gbmV3IFdzVG9rZW4oKTtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gbmV3IENvbm5lY3Rpb24oKTtcbiAgICAgICAgdGhpcy5jbGllbnRlID0gbmV3IENsaWVudGUoKTtcbiAgICAgICAgdGhpcy5pbW1vYmlsaUNsaWVudGUgPSBuZXcgQXJyYXk8SW1tb2JpbGU+KCk7XG4gICAgICAgIHRoaXMuaW1tb2JpbGUgPSBuZXcgSW1tb2JpbGVEZXR0YWdsaW8oKTtcbiAgICAgICAgdGhpcy5pbW1vYmlsZS5kYXRpX2NhdGFzdGFsaSA9IG5ldyBEYXRpQ2F0YXN0YWxpRGV0dGFnbGlvKCk7XG4gICAgICAgIHRoaXMuaW1tb2JpbGUuc3Blc2UgPSBuZXcgQXJyYXk8U3Blc2FEZXR0YWdsaW8+KCk7XG4gICAgICAgIHRoaXMuaW1tb2JpbGUub21pID0gbmV3IE9taURldHRhZ2xpbygpO1xuICAgICAgICB0aGlzLmltbW9iaWxlLm11dHVvX2RldHRhZ2xpbyA9IG5ldyBNdXR1b0RldHRhZ2xpbygpO1xuICAgICAgICB0aGlzLmltbW9iaWxlLmFmZml0dG9fZGV0dGFnbGlvID0gbmV3IEFmZml0dG9EZXR0YWdsaW8oKTtcbiAgICAgICAgdGhpcy5pbW1vYmlsZS50YXNzZSA9IG5ldyBBcnJheTxUYXNzYURldHRhZ2xpbz4oKTtcbiAgICAgICAgdGhpcy5pbW1vYmlsZS5jb2ludGVzdGF0YXJpID0gbmV3IEFycmF5PENvaW50ZXN0YXRhcmlvRGV0dGFnbGlvPigpO1xuICAgICAgICB0aGlzLmludGVzdGF6aW9uZVBhZ2luYSA9ICdSZWFkdmljZSc7XG4gICAgICAgIHRoaXMucGFnaW5hUHJlY2VkZW50ZSA9ICdob21lJztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0UGFnaW5hUHJlY2VkZW50ZShwYWdpbmE6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLnBhZ2luYVByZWNlZGVudGUgPSBwYWdpbmE7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFBhZ2luYVByZWNlZGVudGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnaW5hUHJlY2VkZW50ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0SW50ZXN0YXppb25lUGFnaW5hKGludGVzdGF6aW9uZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW50ZXN0YXppb25lUGFnaW5hID0gaW50ZXN0YXppb25lO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJbnRlc3RhemlvbmVQYWdpbmEoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXN0YXppb25lUGFnaW5hO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRDbGllbnRlKGNsaWVudGU6IENsaWVudGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jbGllbnRlID0gY2xpZW50ZTtcbiAgICAgICAgdGhpcy5pbW1vYmlsaVNlcnZpY2UuZ2V0SW1tb2JpbGkodGhpcy5jbGllbnRlLmNsaWVudGVfaWQgKyAnJykuc3Vic2NyaWJlKHIgPT4ge1xuICAgICAgICAgICAgaWYgKHIuU3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRoaXMuaW1tb2JpbGlDbGllbnRlID0gci5EYXRhLmVsZW5jb19pbW1vYmlsaTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2FyaWNhdGkgZ2xpIGltbW9iaWxpIGRlbCBjbGllbnRlOiAnICsgdGhpcy5pbW1vYmlsaUNsaWVudGUubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAvLyBzdmVnbGlhIGNoaSDDqCBpbiBhc2NvbHRvXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVuY29JbW1vYmlsaVN1YmplY3QubmV4dCh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyVXNlckRhdGEoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RvcmVTZXJ2aWNlLmNsZWFyVXNlckRhdGEoKTtcbiAgICAgICAgdGhpcy51c2VyRGF0YSA9IG5ldyBXc1Rva2VuKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFVzZXJEYXRhKHVzZXJEYXRhOiBXc1Rva2VuKTogbnVtYmVyIHtcbiAgICAgICAgdGhpcy51c2VyRGF0YSA9IHVzZXJEYXRhO1xuICAgICAgICBpZiAodXNlckRhdGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zdG9yZVNlcnZpY2Uuc2V0VXNlckRhdGEodXNlckRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRVc2VyRGF0YSgpOiBXc1Rva2VuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlckRhdGE7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRVc2VyRGF0YSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMudXNlckRhdGEgIT09IG51bGwgJiYgdGhpcy51c2VyRGF0YSAhPT0gdW5kZWZpbmVkICYmIHRoaXMudXNlckRhdGEudG9rZW5fdmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJEYXRhU3ViamVjdC5uZXh0KHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdG9yZVNlcnZpY2UuZ2V0VXNlckRhdGFQcm9taXNlKCkudGhlbigodmFsOiBXc1Rva2VuKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlckRhdGFTdWJqZWN0Lm5leHQoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlckRhdGEgPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlckRhdGFTdWJqZWN0Lm5leHQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q2xpZW50ZSgpOiBDbGllbnRlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXJDbGllbnRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNsaWVudGUgPSBuZXcgQ2xpZW50ZSgpO1xuICAgICAgICB0aGlzLmltbW9iaWxpQ2xpZW50ZSA9IG5ldyBBcnJheTxJbW1vYmlsZT4oKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SW1tb2JpbGlDbGllbnRlKCk6IEFycmF5PEltbW9iaWxlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmltbW9iaWxpQ2xpZW50ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0SW1tb2JpbGVEZXR0YWdsaW8oaW1tb2JpbGVEZXR0YWdsaW86IEltbW9iaWxlRGV0dGFnbGlvKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW1tb2JpbGUgPSBpbW1vYmlsZURldHRhZ2xpbztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SW1tb2JpbGVEZXR0YWdsaW8oKTogSW1tb2JpbGVEZXR0YWdsaW8ge1xuICAgICAgICByZXR1cm4gdGhpcy5pbW1vYmlsZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXJJbW1vYmlsZURldHRhZ2xpbygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbW1vYmlsZSA9IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIHNldENvbm5lY3Rpb24oY29ubjogQ29ubmVjdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBjb25uO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDb25uZWN0aW9uKCk6IENvbm5lY3Rpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0aW9uO1xuICAgIH1cbn1cbiJdfQ==