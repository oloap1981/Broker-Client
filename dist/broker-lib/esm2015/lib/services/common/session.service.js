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
    setCliente(cliente) {
        this.cliente = cliente;
        this.immobiliService.getImmobili(this.cliente.cliente_id + '').subscribe((/**
         * @param {?} r
         * @return {?}
         */
        r => {
            if (r.Success) {
                this.immobiliCliente = r.Data.elenco_immobili;
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
    SessionService.prototype.storeService;
    /**
     * @type {?}
     * @private
     */
    SessionService.prototype.immobiliService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYnJva2VyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb21tb24vc2Vzc2lvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRS9ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBSzFFLE1BQU0sT0FBTyxjQUFjOzs7OztJQWN2QixZQUNZLFlBQTBCLEVBQzFCLGVBQWdDO1FBRGhDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQVpyQyxhQUFRLEdBQXNCLFNBQVMsQ0FBQztRQUN2QywwQkFBcUIsR0FBcUIsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQUNsRSxzQkFBaUIsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxFQUFFLENBQUM7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LFFBQVEsR0FBRyxHQUFHLENBQUM7b0JBQ3BCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNuQztZQUNMLENBQUMsRUFBQyxDQUFDO1NBQ047SUFDTCxDQUFDOzs7O0lBRU0sVUFBVTtRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDOzs7O0lBRU0sa0JBQWtCO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVNLG9CQUFvQixDQUFDLGlCQUFvQztRQUM1RCxJQUFJLENBQUMsUUFBUSxHQUFHLGlCQUFpQixDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFTSxvQkFBb0I7UUFDdkIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFTSxzQkFBc0I7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFTSxhQUFhLENBQUMsSUFBZ0I7UUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVNLGFBQWE7UUFDaEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7OztZQXZHSixVQUFVOzs7O1lBaEJGLFlBQVk7WUFDWixlQUFlOzs7O0lBa0JwQixpQ0FBd0I7O0lBQ3hCLHlDQUF3Qzs7SUFDeEMsa0NBQStDOzs7OztJQUMvQywrQ0FBeUU7O0lBQ3pFLDJDQUFxRTs7Ozs7SUFDckUsa0NBQTBCOzs7OztJQUUxQixvQ0FBK0I7Ozs7O0lBRS9CLHlDQUFtRTs7SUFDbkUsNENBQWdFOzs7OztJQUc1RCxzQ0FBa0M7Ozs7O0lBQ2xDLHlDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdzVG9rZW4gfSBmcm9tICcuLy4uLy4uL21vZGVscy9sb2dpbi93c1Rva2VuJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlU2VydmljZSB9IGZyb20gJy4uL3N0b3JlL3N0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW1tb2JpbGlTZXJ2aWNlIH0gZnJvbSAnLi4vaW1tb2JpbGkvaW1tb2JpbGkuc2VydmljZSc7XG5cbmltcG9ydCB7IENsaWVudGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvY2xpZW50aS9jbGllbnRlJztcbmltcG9ydCB7IEltbW9iaWxlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ltbW9iaWxpL2ltbW9iaWxlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEltbW9iaWxlRGV0dGFnbGlvIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ltbW9iaWxpL2ltbW9iaWxlRGV0dGFnbGlvJztcbmltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvY29tbW9uL2Nvbm5lY3Rpb24nO1xuaW1wb3J0IHsgRGF0aUNhdGFzdGFsaURldHRhZ2xpbyB9IGZyb20gJy4uLy4uL21vZGVscy9pbW1vYmlsaS9kYXRpQ2F0YXN0YWxpRGV0dGFnbGlvJztcbmltcG9ydCB7IE9taURldHRhZ2xpbyB9IGZyb20gJy4uLy4uL21vZGVscy9pbW1vYmlsaS9vbWlEZXR0YWdsaW8nO1xuaW1wb3J0IHsgU3Blc2FEZXR0YWdsaW8gfSBmcm9tICcuLi8uLi9tb2RlbHMvaW1tb2JpbGkvc3Blc2FEZXR0YWdsaW8nO1xuaW1wb3J0IHsgTXV0dW9EZXR0YWdsaW8gfSBmcm9tICcuLi8uLi9tb2RlbHMvaW1tb2JpbGkvbXV0dW9EZXR0YWdsaW8nO1xuaW1wb3J0IHsgQWZmaXR0b0RldHRhZ2xpbyB9IGZyb20gJy4uLy4uL21vZGVscy9pbW1vYmlsaS9hZmZpdHRvRGV0dGFnbGlvJztcbmltcG9ydCB7IFRhc3NhRGV0dGFnbGlvIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ltbW9iaWxpL3Rhc3NhRGV0dGFnbGlvJztcbmltcG9ydCB7IENvaW50ZXN0YXRhcmlvRGV0dGFnbGlvIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ltbW9iaWxpL2NvaW50ZXN0YXRhcmlvRGV0dGFnbGlvJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlc3Npb25TZXJ2aWNlIHtcblxuICAgIHB1YmxpYyBjbGllbnRlOiBDbGllbnRlO1xuICAgIHB1YmxpYyBpbW1vYmlsaUNsaWVudGU6IEFycmF5PEltbW9iaWxlPjtcbiAgICBwdWJsaWMgaW1tb2JpbGU6IEltbW9iaWxlRGV0dGFnbGlvID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgZWxlbmNvSW1tb2JpbGlTdWJqZWN0OiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgICBwdWJsaWMgZWxlbmNvSW1tb2JpbGlPYnMgPSB0aGlzLmVsZW5jb0ltbW9iaWxpU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgICBwcml2YXRlIHVzZXJEYXRhOiBXc1Rva2VuO1xuXG4gICAgcHJpdmF0ZSBjb25uZWN0aW9uOiBDb25uZWN0aW9uO1xuXG4gICAgcHJpdmF0ZSB1c2VyRGF0YVN1YmplY3Q6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICAgIHB1YmxpYyB1c2VyRGF0YU9ic2VydmFibGUgPSB0aGlzLnVzZXJEYXRhU3ViamVjdC5hc09ic2VydmFibGUoKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHN0b3JlU2VydmljZTogU3RvcmVTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGltbW9iaWxpU2VydmljZTogSW1tb2JpbGlTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMudXNlckRhdGEgPSBuZXcgV3NUb2tlbigpO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBuZXcgQ29ubmVjdGlvbigpO1xuICAgICAgICB0aGlzLmNsaWVudGUgPSBuZXcgQ2xpZW50ZSgpO1xuICAgICAgICB0aGlzLmltbW9iaWxlID0gbmV3IEltbW9iaWxlRGV0dGFnbGlvKCk7XG4gICAgICAgIHRoaXMuaW1tb2JpbGUuZGF0aV9jYXRhc3RhbGkgPSBuZXcgRGF0aUNhdGFzdGFsaURldHRhZ2xpbygpO1xuICAgICAgICB0aGlzLmltbW9iaWxlLnNwZXNlID0gbmV3IEFycmF5PFNwZXNhRGV0dGFnbGlvPigpO1xuICAgICAgICB0aGlzLmltbW9iaWxlLm9taSA9IG5ldyBPbWlEZXR0YWdsaW8oKTtcbiAgICAgICAgdGhpcy5pbW1vYmlsZS5tdXR1b19kZXR0YWdsaW8gPSBuZXcgTXV0dW9EZXR0YWdsaW8oKTtcbiAgICAgICAgdGhpcy5pbW1vYmlsZS5hZmZpdHRvX2RldHRhZ2xpbyA9IG5ldyBBZmZpdHRvRGV0dGFnbGlvKCk7XG4gICAgICAgIHRoaXMuaW1tb2JpbGUudGFzc2UgPSBuZXcgQXJyYXk8VGFzc2FEZXR0YWdsaW8+KCk7XG4gICAgICAgIHRoaXMuaW1tb2JpbGUuY29pbnRlc3RhdGFyaSA9IG5ldyBBcnJheTxDb2ludGVzdGF0YXJpb0RldHRhZ2xpbz4oKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0Q2xpZW50ZShjbGllbnRlOiBDbGllbnRlKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2xpZW50ZSA9IGNsaWVudGU7XG4gICAgICAgIHRoaXMuaW1tb2JpbGlTZXJ2aWNlLmdldEltbW9iaWxpKHRoaXMuY2xpZW50ZS5jbGllbnRlX2lkICsgJycpLnN1YnNjcmliZShyID0+IHtcbiAgICAgICAgICAgIGlmIChyLlN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmltbW9iaWxpQ2xpZW50ZSA9IHIuRGF0YS5lbGVuY29faW1tb2JpbGk7XG4gICAgICAgICAgICAgICAgLy8gc3ZlZ2xpYSBjaGkgw6ggaW4gYXNjb2x0b1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbmNvSW1tb2JpbGlTdWJqZWN0Lm5leHQodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhclVzZXJEYXRhKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0b3JlU2VydmljZS5jbGVhclVzZXJEYXRhKCk7XG4gICAgICAgIHRoaXMudXNlckRhdGEgPSBuZXcgV3NUb2tlbigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRVc2VyRGF0YSh1c2VyRGF0YTogV3NUb2tlbik6IG51bWJlciB7XG4gICAgICAgIHRoaXMudXNlckRhdGEgPSB1c2VyRGF0YTtcbiAgICAgICAgaWYgKHVzZXJEYXRhICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmVTZXJ2aWNlLnNldFVzZXJEYXRhKHVzZXJEYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VXNlckRhdGEoKTogV3NUb2tlbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJEYXRhO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkVXNlckRhdGEoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnVzZXJEYXRhICE9PSBudWxsICYmIHRoaXMudXNlckRhdGEgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnVzZXJEYXRhLnRva2VuX3ZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgdGhpcy51c2VyRGF0YVN1YmplY3QubmV4dCh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmVTZXJ2aWNlLmdldFVzZXJEYXRhUHJvbWlzZSgpLnRoZW4oKHZhbDogV3NUb2tlbikgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2YWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJEYXRhU3ViamVjdC5uZXh0KGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJEYXRhID0gdmFsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJEYXRhU3ViamVjdC5uZXh0KHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldENsaWVudGUoKTogQ2xpZW50ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudGU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEltbW9iaWxpQ2xpZW50ZSgpOiBBcnJheTxJbW1vYmlsZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pbW1vYmlsaUNsaWVudGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEltbW9iaWxlRGV0dGFnbGlvKGltbW9iaWxlRGV0dGFnbGlvOiBJbW1vYmlsZURldHRhZ2xpbyk6IHZvaWQge1xuICAgICAgICB0aGlzLmltbW9iaWxlID0gaW1tb2JpbGVEZXR0YWdsaW87XG4gICAgfVxuXG4gICAgcHVibGljIGdldEltbW9iaWxlRGV0dGFnbGlvKCk6IEltbW9iaWxlRGV0dGFnbGlvIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1tb2JpbGU7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFySW1tb2JpbGVEZXR0YWdsaW8oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW1tb2JpbGUgPSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRDb25uZWN0aW9uKGNvbm46IENvbm5lY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gY29ubjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q29ubmVjdGlvbigpOiBDb25uZWN0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbjtcbiAgICB9XG59XG4iXX0=