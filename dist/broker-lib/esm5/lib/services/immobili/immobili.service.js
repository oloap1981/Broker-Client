/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BrokerHttpService } from '../common/brokerhttp.service';
import { ConstantsService } from '../common/constants.service';
/**
 * Classe che raduna tutti i servizi riconducibili all'entità immobile
 *
 * @export
 * ImmobiliService
 */
var ImmobiliService = /** @class */ (function () {
    function ImmobiliService(httpService, constants) {
        this.httpService = httpService;
        this.constants = constants;
    }
    /**
     * Chiamata per ottenere l'elenco degli immobili appartenenti ad uno specifico cliente
     *
     * @param  id_cliente
     * @param  tokenValue Token di autenticazione ottenuto dalla login
     * @returns response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
     * Data dentro al quale si trova l'elenco degli immobili
     */
    /**
     * Chiamata per ottenere l'elenco degli immobili appartenenti ad uno specifico cliente
     *
     * @param {?} id_cliente
     * @return {?} response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
     * Data dentro al quale si trova l'elenco degli immobili
     */
    ImmobiliService.prototype.getImmobili = /**
     * Chiamata per ottenere l'elenco degli immobili appartenenti ad uno specifico cliente
     *
     * @param {?} id_cliente
     * @return {?} response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
     * Data dentro al quale si trova l'elenco degli immobili
     */
    function (id_cliente) {
        return this.httpService.get(this.constants.getImmobiliServiceName
            + this.constants.pathSeparator
            + id_cliente);
        // return this.httpService.get('getimmobili' + '/' + idCliente, tokenValue);
    };
    /**
     * Chiamata per ottenere il singolo immobile passando il suo identificativo unico
     *
     * @param  immobile_id
     * @param  tokenValue Token di autenticazione ottenuto dalla login
     * @returns response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
     * Data dentro al quale si trova l'oggetto Immobile
     */
    /**
     * Chiamata per ottenere il singolo immobile passando il suo identificativo unico
     *
     * @param {?} immobile_id
     * @return {?} response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
     * Data dentro al quale si trova l'oggetto Immobile
     */
    ImmobiliService.prototype.getImmobile = /**
     * Chiamata per ottenere il singolo immobile passando il suo identificativo unico
     *
     * @param {?} immobile_id
     * @return {?} response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
     * Data dentro al quale si trova l'oggetto Immobile
     */
    function (immobile_id) {
        // return this.httpService.get(this.constants.getImmobileServiceName + this.constants.pathSeparator + immobile_id, tokenValue);
        return this.httpService.get(this.constants.getImmobileServiceName
            + this.constants.pathSeparator
            + immobile_id);
    };
    /**
     * Chiamata per inserire un nuovo immobile
     *
     * @param  immobile
     * @param  tokenValue Token di autenticazione ottenuto dalla login
     * @returns response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
     * Data dentro al quale si trova l'id dell'immobile appena salvato
     */
    /**
     * Chiamata per inserire un nuovo immobile
     *
     * @param {?} immobile
     * @return {?} response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
     * Data dentro al quale si trova l'id dell'immobile appena salvato
     */
    ImmobiliService.prototype.putImmobile = /**
     * Chiamata per inserire un nuovo immobile
     *
     * @param {?} immobile
     * @return {?} response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
     * Data dentro al quale si trova l'id dell'immobile appena salvato
     */
    function (immobile) {
        return this.httpService.post(this.constants.putImmobileServiceName, immobile);
    };
    /**
     * Chiamata per cancellare un immobile passando il suo identificativo unico
     *
     * @param  cancellazioneRequest
     * @param  tokenValue Token di autenticazione ottenuto dalla login
     * @returns response contenente l'esito in Success e ErrorMessages.
     */
    /**
     * Chiamata per cancellare un immobile passando il suo identificativo unico
     *
     * @param {?} cancellazioneRequest
     * @return {?} response contenente l'esito in Success e ErrorMessages.
     */
    ImmobiliService.prototype.delImmobile = /**
     * Chiamata per cancellare un immobile passando il suo identificativo unico
     *
     * @param {?} cancellazioneRequest
     * @return {?} response contenente l'esito in Success e ErrorMessages.
     */
    function (cancellazioneRequest) {
        return this.httpService.post(this.constants.delImmobileServiceName, cancellazioneRequest);
    };
    /**
     * Chiamata per attivare il flusso di invio dei dati catastali via mail all'utente proprietario dell'immobile di cui deve
     * essere passato l'identificativo unico
     *
     * @param  immobile_id
     * @param  tokenValue Token di autenticazione ottenuto dalla login
     * @returns response contenente l'esito in Success e ErrorMessages.
     */
    /**
     * Chiamata per attivare il flusso di invio dei dati catastali via mail all'utente proprietario dell'immobile di cui deve
     * essere passato l'identificativo unico
     *
     * @param {?} immobile_id
     * @return {?} response contenente l'esito in Success e ErrorMessages.
     */
    ImmobiliService.prototype.invioDatiCatastali = /**
     * Chiamata per attivare il flusso di invio dei dati catastali via mail all'utente proprietario dell'immobile di cui deve
     * essere passato l'identificativo unico
     *
     * @param {?} immobile_id
     * @return {?} response contenente l'esito in Success e ErrorMessages.
     */
    function (immobile_id) {
        return this.httpService.get(this.constants.getCatastoServiceName + this.constants.pathSeparator + immobile_id);
    };
    /**
     * @param {?} immobile_id
     * @return {?}
     */
    ImmobiliService.prototype.getPianoAmmortamentoImmobile = /**
     * @param {?} immobile_id
     * @return {?}
     */
    function (immobile_id) {
        return this.httpService.get(this.constants.getPianoAmmortamentoServiceName + this.constants.pathSeparator + immobile_id);
    };
    ImmobiliService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ImmobiliService.ctorParameters = function () { return [
        { type: BrokerHttpService },
        { type: ConstantsService }
    ]; };
    return ImmobiliService;
}());
export { ImmobiliService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ImmobiliService.prototype.httpService;
    /**
     * @type {?}
     * @private
     */
    ImmobiliService.prototype.constants;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1tb2JpbGkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jyb2tlci1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvaW1tb2JpbGkvaW1tb2JpbGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7OztBQVUvRDtJQUdJLHlCQUNZLFdBQThCLEVBQzlCLFNBQTJCO1FBRDNCLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtRQUM5QixjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUFJLENBQUM7SUFFNUM7Ozs7Ozs7T0FPRzs7Ozs7Ozs7SUFDSSxxQ0FBVzs7Ozs7OztJQUFsQixVQUFtQixVQUFrQjtRQUNqQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCO2NBQzNELElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYTtjQUM1QixVQUFVLENBQUMsQ0FBQztRQUNsQiw0RUFBNEU7SUFDaEYsQ0FBQztJQUVEOzs7Ozs7O09BT0c7Ozs7Ozs7O0lBQ0kscUNBQVc7Ozs7Ozs7SUFBbEIsVUFBbUIsV0FBbUI7UUFDbEMsK0hBQStIO1FBQy9ILE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0I7Y0FDM0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhO2NBQzVCLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7Ozs7OztPQU9HOzs7Ozs7OztJQUNJLHFDQUFXOzs7Ozs7O0lBQWxCLFVBQW1CLFFBQTJCO1FBQzFDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRUQ7Ozs7OztPQU1HOzs7Ozs7O0lBQ0kscUNBQVc7Ozs7OztJQUFsQixVQUFtQixvQkFBa0Q7UUFDakUsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUVEOzs7Ozs7O09BT0c7Ozs7Ozs7O0lBQ0ksNENBQWtCOzs7Ozs7O0lBQXpCLFVBQTBCLFdBQW1CO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUMsQ0FBQztJQUNuSCxDQUFDOzs7OztJQUVNLHNEQUE0Qjs7OztJQUFuQyxVQUFvQyxXQUFtQjtRQUNuRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsK0JBQStCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFDLENBQUM7SUFDN0gsQ0FBQzs7Z0JBMUVKLFVBQVU7Ozs7Z0JBWEYsaUJBQWlCO2dCQUNqQixnQkFBZ0I7O0lBcUZ6QixzQkFBQztDQUFBLEFBM0VELElBMkVDO1NBMUVZLGVBQWU7Ozs7OztJQUdwQixzQ0FBc0M7Ozs7O0lBQ3RDLG9DQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgSHR0cCB9IGZyb20gJy4uLy4uL21vZGVscy9jb21tb24vaHR0cC5uYW1lc3BhY2UnO1xuaW1wb3J0IHsgQnJva2VySHR0cFNlcnZpY2UgfSBmcm9tICcuLi9jb21tb24vYnJva2VyaHR0cC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnN0YW50c1NlcnZpY2UgfSBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW1tb2JpbGVEZXR0YWdsaW8gfSBmcm9tICcuLi8uLi9tb2RlbHMvaW1tb2JpbGkvaW1tb2JpbGVEZXR0YWdsaW8nO1xuaW1wb3J0IHsgQ2FuY2VsbGF6aW9uZUltbW9iaWxlUmVxdWVzdCB9IGZyb20gJy4uLy4uL21vZGVscy9pbW1vYmlsaS9jYW5jZWxsYXppb25lSW1tb2JpbGVSZXF1ZXN0JztcblxuLyoqXG4gKiBDbGFzc2UgY2hlIHJhZHVuYSB0dXR0aSBpIHNlcnZpemkgcmljb25kdWNpYmlsaSBhbGwnZW50aXTDoCBpbW1vYmlsZVxuICpcbiAqIEBleHBvcnRcbiAqIEltbW9iaWxpU2VydmljZVxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW1tb2JpbGlTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGh0dHBTZXJ2aWNlOiBCcm9rZXJIdHRwU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBjb25zdGFudHM6IENvbnN0YW50c1NlcnZpY2UpIHsgfVxuXG4gICAgLyoqXG4gICAgICogQ2hpYW1hdGEgcGVyIG90dGVuZXJlIGwnZWxlbmNvIGRlZ2xpIGltbW9iaWxpIGFwcGFydGVuZW50aSBhZCB1bm8gc3BlY2lmaWNvIGNsaWVudGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgaWRfY2xpZW50ZVxuICAgICAqIEBwYXJhbSAgdG9rZW5WYWx1ZSBUb2tlbiBkaSBhdXRlbnRpY2F6aW9uZSBvdHRlbnV0byBkYWxsYSBsb2dpblxuICAgICAqIEByZXR1cm5zIHJlc3BvbnNlIGNvbnRlbmVudGUgbCdlc2l0byBpbiBTdWNjZXNzIGUgRXJyb3JNZXNzYWdlcy4gQ29udGVuZW50ZSBsJ29nZ2V0dG8gXG4gICAgICogRGF0YSBkZW50cm8gYWwgcXVhbGUgc2kgdHJvdmEgbCdlbGVuY28gZGVnbGkgaW1tb2JpbGlcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0SW1tb2JpbGkoaWRfY2xpZW50ZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxIdHRwLkh0dHBSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQodGhpcy5jb25zdGFudHMuZ2V0SW1tb2JpbGlTZXJ2aWNlTmFtZVxuICAgICAgICAgICAgKyB0aGlzLmNvbnN0YW50cy5wYXRoU2VwYXJhdG9yXG4gICAgICAgICAgICArIGlkX2NsaWVudGUpO1xuICAgICAgICAvLyByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoJ2dldGltbW9iaWxpJyArICcvJyArIGlkQ2xpZW50ZSwgdG9rZW5WYWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hpYW1hdGEgcGVyIG90dGVuZXJlIGlsIHNpbmdvbG8gaW1tb2JpbGUgcGFzc2FuZG8gaWwgc3VvIGlkZW50aWZpY2F0aXZvIHVuaWNvXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIGltbW9iaWxlX2lkXG4gICAgICogQHBhcmFtICB0b2tlblZhbHVlIFRva2VuIGRpIGF1dGVudGljYXppb25lIG90dGVudXRvIGRhbGxhIGxvZ2luXG4gICAgICogQHJldHVybnMgcmVzcG9uc2UgY29udGVuZW50ZSBsJ2VzaXRvIGluIFN1Y2Nlc3MgZSBFcnJvck1lc3NhZ2VzLiBDb250ZW5lbnRlIGwnb2dnZXR0byBcbiAgICAgKiBEYXRhIGRlbnRybyBhbCBxdWFsZSBzaSB0cm92YSBsJ29nZ2V0dG8gSW1tb2JpbGVcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0SW1tb2JpbGUoaW1tb2JpbGVfaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8SHR0cC5IdHRwUmVzcG9uc2U+IHtcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KHRoaXMuY29uc3RhbnRzLmdldEltbW9iaWxlU2VydmljZU5hbWUgKyB0aGlzLmNvbnN0YW50cy5wYXRoU2VwYXJhdG9yICsgaW1tb2JpbGVfaWQsIHRva2VuVmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQodGhpcy5jb25zdGFudHMuZ2V0SW1tb2JpbGVTZXJ2aWNlTmFtZVxuICAgICAgICAgICAgKyB0aGlzLmNvbnN0YW50cy5wYXRoU2VwYXJhdG9yXG4gICAgICAgICAgICArIGltbW9iaWxlX2lkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGlhbWF0YSBwZXIgaW5zZXJpcmUgdW4gbnVvdm8gaW1tb2JpbGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgaW1tb2JpbGVcbiAgICAgKiBAcGFyYW0gIHRva2VuVmFsdWUgVG9rZW4gZGkgYXV0ZW50aWNhemlvbmUgb3R0ZW51dG8gZGFsbGEgbG9naW5cbiAgICAgKiBAcmV0dXJucyByZXNwb25zZSBjb250ZW5lbnRlIGwnZXNpdG8gaW4gU3VjY2VzcyBlIEVycm9yTWVzc2FnZXMuIENvbnRlbmVudGUgbCdvZ2dldHRvIFxuICAgICAqIERhdGEgZGVudHJvIGFsIHF1YWxlIHNpIHRyb3ZhIGwnaWQgZGVsbCdpbW1vYmlsZSBhcHBlbmEgc2FsdmF0b1xuICAgICAqL1xuICAgIHB1YmxpYyBwdXRJbW1vYmlsZShpbW1vYmlsZTogSW1tb2JpbGVEZXR0YWdsaW8pOiBPYnNlcnZhYmxlPEh0dHAuSHR0cFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QodGhpcy5jb25zdGFudHMucHV0SW1tb2JpbGVTZXJ2aWNlTmFtZSwgaW1tb2JpbGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoaWFtYXRhIHBlciBjYW5jZWxsYXJlIHVuIGltbW9iaWxlIHBhc3NhbmRvIGlsIHN1byBpZGVudGlmaWNhdGl2byB1bmljb1xuICAgICAqXG4gICAgICogQHBhcmFtICBjYW5jZWxsYXppb25lUmVxdWVzdFxuICAgICAqIEBwYXJhbSAgdG9rZW5WYWx1ZSBUb2tlbiBkaSBhdXRlbnRpY2F6aW9uZSBvdHRlbnV0byBkYWxsYSBsb2dpblxuICAgICAqIEByZXR1cm5zIHJlc3BvbnNlIGNvbnRlbmVudGUgbCdlc2l0byBpbiBTdWNjZXNzIGUgRXJyb3JNZXNzYWdlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVsSW1tb2JpbGUoY2FuY2VsbGF6aW9uZVJlcXVlc3Q6IENhbmNlbGxhemlvbmVJbW1vYmlsZVJlcXVlc3QpOiBPYnNlcnZhYmxlPEh0dHAuSHR0cFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QodGhpcy5jb25zdGFudHMuZGVsSW1tb2JpbGVTZXJ2aWNlTmFtZSwgY2FuY2VsbGF6aW9uZVJlcXVlc3QpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoaWFtYXRhIHBlciBhdHRpdmFyZSBpbCBmbHVzc28gZGkgaW52aW8gZGVpIGRhdGkgY2F0YXN0YWxpIHZpYSBtYWlsIGFsbCd1dGVudGUgcHJvcHJpZXRhcmlvIGRlbGwnaW1tb2JpbGUgZGkgY3VpIGRldmUgXG4gICAgICogZXNzZXJlIHBhc3NhdG8gbCdpZGVudGlmaWNhdGl2byB1bmljb1xuICAgICAqXG4gICAgICogQHBhcmFtICBpbW1vYmlsZV9pZFxuICAgICAqIEBwYXJhbSAgdG9rZW5WYWx1ZSBUb2tlbiBkaSBhdXRlbnRpY2F6aW9uZSBvdHRlbnV0byBkYWxsYSBsb2dpblxuICAgICAqIEByZXR1cm5zIHJlc3BvbnNlIGNvbnRlbmVudGUgbCdlc2l0byBpbiBTdWNjZXNzIGUgRXJyb3JNZXNzYWdlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW52aW9EYXRpQ2F0YXN0YWxpKGltbW9iaWxlX2lkOiBudW1iZXIpOiBPYnNlcnZhYmxlPEh0dHAuSHR0cFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldCh0aGlzLmNvbnN0YW50cy5nZXRDYXRhc3RvU2VydmljZU5hbWUgKyB0aGlzLmNvbnN0YW50cy5wYXRoU2VwYXJhdG9yICsgaW1tb2JpbGVfaWQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQaWFub0FtbW9ydGFtZW50b0ltbW9iaWxlKGltbW9iaWxlX2lkOiBudW1iZXIpOiBPYnNlcnZhYmxlPEh0dHAuSHR0cFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldCh0aGlzLmNvbnN0YW50cy5nZXRQaWFub0FtbW9ydGFtZW50b1NlcnZpY2VOYW1lICsgdGhpcy5jb25zdGFudHMucGF0aFNlcGFyYXRvciArIGltbW9iaWxlX2lkKTtcbiAgICB9XG59XG4iXX0=