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
        this.cliente = cliente;
        this.caricaImmobili(this.cliente.cliente_id + '');
    };
    /**
     * @param {?} idCliente
     * @return {?}
     */
    SessionService.prototype.caricaImmobili = /**
     * @param {?} idCliente
     * @return {?}
     */
    function (idCliente) {
        var _this = this;
        this.immobiliService.getImmobili(idCliente).subscribe((/**
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
        this.cliente = new Cliente();
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
    SessionService.prototype.existsSessionData = /**
     * @return {?}
     */
    function () {
        return (this.userData !== null && this.userData !== undefined && JSON.stringify(this.userData) !== '{}' && this.userData.token_value !== '');
    };
    /**
     * @return {?}
     */
    SessionService.prototype.loadUserData = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.userData !== null && this.userData !== undefined && JSON.stringify(this.userData) !== '{}' && this.userData.token_value !== '') {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYnJva2VyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb21tb24vc2Vzc2lvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRS9ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBSTFFO0lBb0JJLHdCQUNZLFlBQTBCLEVBQzFCLGVBQWdDO1FBRGhDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQWhCcEMsMEJBQXFCLEdBQXFCLElBQUksT0FBTyxFQUFXLENBQUM7UUFDbEUsc0JBQWlCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBTzdELG9CQUFlLEdBQXFCLElBQUksT0FBTyxFQUFXLENBQUM7UUFDNUQsdUJBQWtCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQVM1RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLEtBQUssRUFBWSxDQUFDO1FBQzdDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxHQUFHLElBQUksc0JBQXNCLEVBQUUsQ0FBQztRQUM1RCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBa0IsQ0FBQztRQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7UUFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7UUFDekQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQWtCLENBQUM7UUFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEdBQUcsSUFBSSxLQUFLLEVBQTJCLENBQUM7UUFDbkUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFVBQVUsQ0FBQztRQUNyQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRU0sNENBQW1COzs7O0lBQTFCLFVBQTJCLE1BQWM7UUFDckMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQztJQUNuQyxDQUFDOzs7O0lBRU0sNENBQW1COzs7SUFBMUI7UUFDSSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVNLDhDQUFxQjs7OztJQUE1QixVQUE2QixZQUFvQjtRQUM3QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsWUFBWSxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFTSw4Q0FBcUI7OztJQUE1QjtRQUNJLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRU0sbUNBQVU7Ozs7SUFBakIsVUFBa0IsT0FBZ0I7UUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7OztJQUVNLHVDQUFjOzs7O0lBQXJCLFVBQXNCLFNBQWlCO1FBQXZDLGlCQVNDO1FBUkcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsQ0FBQztZQUNuRCxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUU7Z0JBQ1gsS0FBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztnQkFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNqRiwyQkFBMkI7Z0JBQzNCLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDekM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFFTSxzQ0FBYTs7O0lBQXBCO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRU0sb0NBQVc7Ozs7SUFBbEIsVUFBbUIsUUFBaUI7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3hDLElBQUksUUFBUSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksUUFBUSxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7Z0JBQzdELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3JDO1NBQ0o7YUFBTTtZQUNILE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDYjtRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQzs7Ozs7SUFFTSxzQ0FBYTs7OztJQUFwQixVQUFxQixNQUFlO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMzQzthQUFNO1lBQ0gsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUNiO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDOzs7O0lBRU0sb0NBQVc7OztJQUFsQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDOzs7O0lBRU0sMENBQWlCOzs7SUFBeEI7UUFDSSxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ2pKLENBQUM7Ozs7SUFFTSxxQ0FBWTs7O0lBQW5CO1FBQUEsaUJBYUM7UUFaRyxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsS0FBSyxFQUFFLEVBQUU7WUFDckksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkM7YUFBTTtZQUNILElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQyxHQUFZO2dCQUNyRCxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7b0JBQ2IsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3BDO3FCQUFNO29CQUNILEtBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO29CQUNwQixLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDbkM7WUFDTCxDQUFDLEVBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQzs7OztJQUVNLG1DQUFVOzs7SUFBakI7UUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVNLHFDQUFZOzs7SUFBbkI7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLEtBQUssRUFBWSxDQUFDO0lBQ2pELENBQUM7Ozs7SUFFTSwyQ0FBa0I7OztJQUF6QjtRQUNJLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVNLDZDQUFvQjs7OztJQUEzQixVQUE0QixpQkFBb0M7UUFDNUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRU0sNkNBQW9COzs7SUFBM0I7UUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQzs7OztJQUVNLCtDQUFzQjs7O0lBQTdCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFTSxzQ0FBYTs7OztJQUFwQixVQUFxQixJQUFnQjtRQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDOzs7O0lBRU0sc0NBQWE7OztJQUFwQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDOztnQkE1SkosVUFBVTs7OztnQkFoQkYsWUFBWTtnQkFDWixlQUFlOztJQTRLeEIscUJBQUM7Q0FBQSxBQTdKRCxJQTZKQztTQTVKWSxjQUFjOzs7SUFFdkIsaUNBQXdCOztJQUN4Qix5Q0FBd0M7O0lBQ3hDLGtDQUFtQzs7Ozs7SUFDbkMsK0NBQXlFOztJQUN6RSwyQ0FBcUU7Ozs7O0lBQ3JFLGtDQUEwQjs7Ozs7SUFFMUIsb0NBQTRCOzs7OztJQUU1QixvQ0FBK0I7Ozs7O0lBRS9CLHlDQUFtRTs7SUFDbkUsNENBQWdFOzs7OztJQUVoRSw0Q0FBbUM7Ozs7O0lBQ25DLDBDQUFpQzs7Ozs7SUFHN0Isc0NBQWtDOzs7OztJQUNsQyx5Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXc1Rva2VuIH0gZnJvbSAnLi8uLi8uLi9tb2RlbHMvbG9naW4vd3NUb2tlbic7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZVNlcnZpY2UgfSBmcm9tICcuLi9zdG9yZS9zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7IEltbW9iaWxpU2VydmljZSB9IGZyb20gJy4uL2ltbW9iaWxpL2ltbW9iaWxpLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBDbGllbnRlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NsaWVudGkvY2xpZW50ZSc7XG5pbXBvcnQgeyBJbW1vYmlsZSB9IGZyb20gJy4uLy4uL21vZGVscy9pbW1vYmlsaS9pbW1vYmlsZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbW1vYmlsZURldHRhZ2xpbyB9IGZyb20gJy4uLy4uL21vZGVscy9pbW1vYmlsaS9pbW1vYmlsZURldHRhZ2xpbyc7XG5pbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbW1vbi9jb25uZWN0aW9uJztcbmltcG9ydCB7IERhdGlDYXRhc3RhbGlEZXR0YWdsaW8gfSBmcm9tICcuLi8uLi9tb2RlbHMvaW1tb2JpbGkvZGF0aUNhdGFzdGFsaURldHRhZ2xpbyc7XG5pbXBvcnQgeyBPbWlEZXR0YWdsaW8gfSBmcm9tICcuLi8uLi9tb2RlbHMvaW1tb2JpbGkvb21pRGV0dGFnbGlvJztcbmltcG9ydCB7IFNwZXNhRGV0dGFnbGlvIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ltbW9iaWxpL3NwZXNhRGV0dGFnbGlvJztcbmltcG9ydCB7IE11dHVvRGV0dGFnbGlvIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ltbW9iaWxpL211dHVvRGV0dGFnbGlvJztcbmltcG9ydCB7IEFmZml0dG9EZXR0YWdsaW8gfSBmcm9tICcuLi8uLi9tb2RlbHMvaW1tb2JpbGkvYWZmaXR0b0RldHRhZ2xpbyc7XG5pbXBvcnQgeyBUYXNzYURldHRhZ2xpbyB9IGZyb20gJy4uLy4uL21vZGVscy9pbW1vYmlsaS90YXNzYURldHRhZ2xpbyc7XG5pbXBvcnQgeyBDb2ludGVzdGF0YXJpb0RldHRhZ2xpbyB9IGZyb20gJy4uLy4uL21vZGVscy9pbW1vYmlsaS9jb2ludGVzdGF0YXJpb0RldHRhZ2xpbyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXNzaW9uU2VydmljZSB7XG5cbiAgICBwdWJsaWMgY2xpZW50ZTogQ2xpZW50ZTtcbiAgICBwdWJsaWMgaW1tb2JpbGlDbGllbnRlOiBBcnJheTxJbW1vYmlsZT47XG4gICAgcHVibGljIGltbW9iaWxlOiBJbW1vYmlsZURldHRhZ2xpbztcbiAgICBwcml2YXRlIGVsZW5jb0ltbW9iaWxpU3ViamVjdDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgcHVibGljIGVsZW5jb0ltbW9iaWxpT2JzID0gdGhpcy5lbGVuY29JbW1vYmlsaVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgcHJpdmF0ZSB1c2VyRGF0YTogV3NUb2tlbjtcblxuICAgIHByaXZhdGUgY2xpZW50RGF0YTogQ2xpZW50ZTtcblxuICAgIHByaXZhdGUgY29ubmVjdGlvbjogQ29ubmVjdGlvbjtcblxuICAgIHByaXZhdGUgdXNlckRhdGFTdWJqZWN0OiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgICBwdWJsaWMgdXNlckRhdGFPYnNlcnZhYmxlID0gdGhpcy51c2VyRGF0YVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICBwcml2YXRlIGludGVzdGF6aW9uZVBhZ2luYTogc3RyaW5nO1xuICAgIHByaXZhdGUgcGFnaW5hUHJlY2VkZW50ZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgc3RvcmVTZXJ2aWNlOiBTdG9yZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgaW1tb2JpbGlTZXJ2aWNlOiBJbW1vYmlsaVNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgdGhpcy51c2VyRGF0YSA9IG5ldyBXc1Rva2VuKCk7XG4gICAgICAgIHRoaXMuY2xpZW50RGF0YSA9IG5ldyBDbGllbnRlKCk7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IG5ldyBDb25uZWN0aW9uKCk7XG4gICAgICAgIHRoaXMuY2xpZW50ZSA9IG5ldyBDbGllbnRlKCk7XG4gICAgICAgIHRoaXMuaW1tb2JpbGlDbGllbnRlID0gbmV3IEFycmF5PEltbW9iaWxlPigpO1xuICAgICAgICB0aGlzLmltbW9iaWxlID0gbmV3IEltbW9iaWxlRGV0dGFnbGlvKCk7XG4gICAgICAgIHRoaXMuaW1tb2JpbGUuZGF0aV9jYXRhc3RhbGkgPSBuZXcgRGF0aUNhdGFzdGFsaURldHRhZ2xpbygpO1xuICAgICAgICB0aGlzLmltbW9iaWxlLnNwZXNlID0gbmV3IEFycmF5PFNwZXNhRGV0dGFnbGlvPigpO1xuICAgICAgICB0aGlzLmltbW9iaWxlLm9taSA9IG5ldyBPbWlEZXR0YWdsaW8oKTtcbiAgICAgICAgdGhpcy5pbW1vYmlsZS5tdXR1b19kZXR0YWdsaW8gPSBuZXcgTXV0dW9EZXR0YWdsaW8oKTtcbiAgICAgICAgdGhpcy5pbW1vYmlsZS5hZmZpdHRvX2RldHRhZ2xpbyA9IG5ldyBBZmZpdHRvRGV0dGFnbGlvKCk7XG4gICAgICAgIHRoaXMuaW1tb2JpbGUudGFzc2UgPSBuZXcgQXJyYXk8VGFzc2FEZXR0YWdsaW8+KCk7XG4gICAgICAgIHRoaXMuaW1tb2JpbGUuY29pbnRlc3RhdGFyaSA9IG5ldyBBcnJheTxDb2ludGVzdGF0YXJpb0RldHRhZ2xpbz4oKTtcbiAgICAgICAgdGhpcy5pbnRlc3RhemlvbmVQYWdpbmEgPSAnUmVhZHZpY2UnO1xuICAgICAgICB0aGlzLnBhZ2luYVByZWNlZGVudGUgPSAnaG9tZSc7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFBhZ2luYVByZWNlZGVudGUocGFnaW5hOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wYWdpbmFQcmVjZWRlbnRlID0gcGFnaW5hO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQYWdpbmFQcmVjZWRlbnRlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2luYVByZWNlZGVudGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEludGVzdGF6aW9uZVBhZ2luYShpbnRlc3RhemlvbmU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmludGVzdGF6aW9uZVBhZ2luYSA9IGludGVzdGF6aW9uZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SW50ZXN0YXppb25lUGFnaW5hKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVzdGF6aW9uZVBhZ2luYTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0Q2xpZW50ZShjbGllbnRlOiBDbGllbnRlKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2xpZW50ZSA9IGNsaWVudGU7XG4gICAgICAgIHRoaXMuY2FyaWNhSW1tb2JpbGkodGhpcy5jbGllbnRlLmNsaWVudGVfaWQgKyAnJyk7XG4gICAgfVxuXG4gICAgcHVibGljIGNhcmljYUltbW9iaWxpKGlkQ2xpZW50ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW1tb2JpbGlTZXJ2aWNlLmdldEltbW9iaWxpKGlkQ2xpZW50ZSkuc3Vic2NyaWJlKHIgPT4ge1xuICAgICAgICAgICAgaWYgKHIuU3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRoaXMuaW1tb2JpbGlDbGllbnRlID0gci5EYXRhLmVsZW5jb19pbW1vYmlsaTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2FyaWNhdGkgZ2xpIGltbW9iaWxpIGRlbCBjbGllbnRlOiAnICsgdGhpcy5pbW1vYmlsaUNsaWVudGUubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAvLyBzdmVnbGlhIGNoaSDDqCBpbiBhc2NvbHRvXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVuY29JbW1vYmlsaVN1YmplY3QubmV4dCh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyVXNlckRhdGEoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RvcmVTZXJ2aWNlLmNsZWFyVXNlckRhdGEoKTtcbiAgICAgICAgdGhpcy5jbGllbnRlID0gbmV3IENsaWVudGUoKTtcbiAgICAgICAgdGhpcy51c2VyRGF0YSA9IG5ldyBXc1Rva2VuKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFVzZXJEYXRhKHVzZXJEYXRhOiBXc1Rva2VuKTogbnVtYmVyIHtcbiAgICAgICAgdGhpcy51c2VyRGF0YSA9IHVzZXJEYXRhO1xuICAgICAgICBpZiAodXNlckRhdGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zdG9yZVNlcnZpY2Uuc2V0VXNlckRhdGEodXNlckRhdGEpO1xuICAgICAgICAgICAgaWYgKHVzZXJEYXRhLmNsaWVudGUgIT09IHVuZGVmaW5lZCAmJiB1c2VyRGF0YS5jbGllbnRlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDbGllbnRlKHVzZXJEYXRhLmNsaWVudGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRDbGllbnREYXRhKGNsaWVudDogQ2xpZW50ZSk6IG51bWJlciB7XG4gICAgICAgIHRoaXMuY2xpZW50RGF0YSA9IGNsaWVudDtcbiAgICAgICAgaWYgKGNsaWVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JlU2VydmljZS5zZXRDbGllbnREYXRhKGNsaWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFVzZXJEYXRhKCk6IFdzVG9rZW4ge1xuICAgICAgICByZXR1cm4gdGhpcy51c2VyRGF0YTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZXhpc3RzU2Vzc2lvbkRhdGEoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAodGhpcy51c2VyRGF0YSAhPT0gbnVsbCAmJiB0aGlzLnVzZXJEYXRhICE9PSB1bmRlZmluZWQgJiYgSlNPTi5zdHJpbmdpZnkodGhpcy51c2VyRGF0YSkgIT09ICd7fScgJiYgdGhpcy51c2VyRGF0YS50b2tlbl92YWx1ZSAhPT0gJycpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkVXNlckRhdGEoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnVzZXJEYXRhICE9PSBudWxsICYmIHRoaXMudXNlckRhdGEgIT09IHVuZGVmaW5lZCAmJiBKU09OLnN0cmluZ2lmeSh0aGlzLnVzZXJEYXRhKSAhPT0gJ3t9JyAmJiB0aGlzLnVzZXJEYXRhLnRva2VuX3ZhbHVlICE9PSAnJykge1xuICAgICAgICAgICAgdGhpcy51c2VyRGF0YVN1YmplY3QubmV4dCh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmVTZXJ2aWNlLmdldFVzZXJEYXRhUHJvbWlzZSgpLnRoZW4oKHZhbDogV3NUb2tlbikgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2YWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJEYXRhU3ViamVjdC5uZXh0KGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJEYXRhID0gdmFsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJEYXRhU3ViamVjdC5uZXh0KHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldENsaWVudGUoKTogQ2xpZW50ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudGU7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyQ2xpZW50ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jbGllbnRlID0gbmV3IENsaWVudGUoKTtcbiAgICAgICAgdGhpcy5pbW1vYmlsaUNsaWVudGUgPSBuZXcgQXJyYXk8SW1tb2JpbGU+KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEltbW9iaWxpQ2xpZW50ZSgpOiBBcnJheTxJbW1vYmlsZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pbW1vYmlsaUNsaWVudGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEltbW9iaWxlRGV0dGFnbGlvKGltbW9iaWxlRGV0dGFnbGlvOiBJbW1vYmlsZURldHRhZ2xpbyk6IHZvaWQge1xuICAgICAgICB0aGlzLmltbW9iaWxlID0gaW1tb2JpbGVEZXR0YWdsaW87XG4gICAgfVxuXG4gICAgcHVibGljIGdldEltbW9iaWxlRGV0dGFnbGlvKCk6IEltbW9iaWxlRGV0dGFnbGlvIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1tb2JpbGU7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFySW1tb2JpbGVEZXR0YWdsaW8oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW1tb2JpbGUgPSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRDb25uZWN0aW9uKGNvbm46IENvbm5lY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gY29ubjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q29ubmVjdGlvbigpOiBDb25uZWN0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbjtcbiAgICB9XG59XG4iXX0=