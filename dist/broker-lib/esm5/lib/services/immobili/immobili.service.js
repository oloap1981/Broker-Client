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
    /**
     * Chiamata per ottenere la tassazione imu dell'immobile
     *
     * @param  primacasa
     * @param  affittata
     * @param  anno anno per il quale viene richiesta l'IMU
     * @param  immobile_id
     * @returns response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
     * Data dentro al quale si trova l'oggetto Imu
     */
    /**
     * Chiamata per ottenere la tassazione imu dell'immobile
     *
     * @param {?} primacasa
     * @param {?} affittata
     * @param {?} anno anno per il quale viene richiesta l'IMU
     * @param {?} immobile_id
     * @return {?} response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
     * Data dentro al quale si trova l'oggetto Imu
     */
    ImmobiliService.prototype.getImu = /**
     * Chiamata per ottenere la tassazione imu dell'immobile
     *
     * @param {?} primacasa
     * @param {?} affittata
     * @param {?} anno anno per il quale viene richiesta l'IMU
     * @param {?} immobile_id
     * @return {?} response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
     * Data dentro al quale si trova l'oggetto Imu
     */
    function (primacasa, affittata, anno, immobile_id) {
        // return this.httpService.get(this.constants.getImmobileServiceName + this.constants.pathSeparator + immobile_id, tokenValue);
        return this.httpService.get(this.constants.getImuServiceName
            + this.constants.pathSeparator
            + this.getBooleanAsString(primacasa)
            + this.constants.pathSeparator
            + this.getBooleanAsString(affittata)
            + this.constants.pathSeparator
            + anno
            + this.constants.pathSeparator
            + immobile_id);
    };
    /**
     * @private
     * @param {?} input
     * @return {?}
     */
    ImmobiliService.prototype.getBooleanAsString = /**
     * @private
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return (input ? 'true' : 'false');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1tb2JpbGkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jyb2tlci1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvaW1tb2JpbGkvaW1tb2JpbGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7OztBQVUvRDtJQUdJLHlCQUNZLFdBQThCLEVBQzlCLFNBQTJCO1FBRDNCLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtRQUM5QixjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUFJLENBQUM7SUFFNUM7Ozs7Ozs7T0FPRzs7Ozs7Ozs7SUFDSSxxQ0FBVzs7Ozs7OztJQUFsQixVQUFtQixVQUFrQjtRQUNqQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCO2NBQzNELElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYTtjQUM1QixVQUFVLENBQUMsQ0FBQztRQUNsQiw0RUFBNEU7SUFDaEYsQ0FBQztJQUVEOzs7Ozs7O09BT0c7Ozs7Ozs7O0lBQ0kscUNBQVc7Ozs7Ozs7SUFBbEIsVUFBbUIsV0FBbUI7UUFDbEMsK0hBQStIO1FBQy9ILE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0I7Y0FDM0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhO2NBQzVCLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7Ozs7OztPQU9HOzs7Ozs7OztJQUNJLHFDQUFXOzs7Ozs7O0lBQWxCLFVBQW1CLFFBQTJCO1FBQzFDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRUQ7Ozs7OztPQU1HOzs7Ozs7O0lBQ0kscUNBQVc7Ozs7OztJQUFsQixVQUFtQixvQkFBa0Q7UUFDakUsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUVEOzs7Ozs7O09BT0c7Ozs7Ozs7O0lBQ0ksNENBQWtCOzs7Ozs7O0lBQXpCLFVBQTBCLFdBQW1CO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUMsQ0FBQztJQUNuSCxDQUFDOzs7OztJQUVNLHNEQUE0Qjs7OztJQUFuQyxVQUFvQyxXQUFtQjtRQUNuRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsK0JBQStCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFDLENBQUM7SUFDN0gsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRzs7Ozs7Ozs7Ozs7SUFDSSxnQ0FBTTs7Ozs7Ozs7OztJQUFiLFVBQWMsU0FBa0IsRUFBRSxTQUFrQixFQUFFLElBQVksRUFBRSxXQUFtQjtRQUNuRiwrSEFBK0g7UUFDL0gsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQjtjQUN0RCxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWE7Y0FDNUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQztjQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWE7Y0FDNUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQztjQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWE7Y0FDNUIsSUFBSTtjQUNKLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYTtjQUM1QixXQUFXLENBQUMsQ0FBQztJQUN2QixDQUFDOzs7Ozs7SUFFTyw0Q0FBa0I7Ozs7O0lBQTFCLFVBQTJCLEtBQWM7UUFDckMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDOztnQkFyR0osVUFBVTs7OztnQkFYRixpQkFBaUI7Z0JBQ2pCLGdCQUFnQjs7SUFpSHpCLHNCQUFDO0NBQUEsQUF2R0QsSUF1R0M7U0F0R1ksZUFBZTs7Ozs7O0lBR3BCLHNDQUFzQzs7Ozs7SUFDdEMsb0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbW1vbi9odHRwLm5hbWVzcGFjZSc7XG5pbXBvcnQgeyBCcm9rZXJIdHRwU2VydmljZSB9IGZyb20gJy4uL2NvbW1vbi9icm9rZXJodHRwLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29uc3RhbnRzU2VydmljZSB9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMuc2VydmljZSc7XG5pbXBvcnQgeyBJbW1vYmlsZURldHRhZ2xpbyB9IGZyb20gJy4uLy4uL21vZGVscy9pbW1vYmlsaS9pbW1vYmlsZURldHRhZ2xpbyc7XG5pbXBvcnQgeyBDYW5jZWxsYXppb25lSW1tb2JpbGVSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ltbW9iaWxpL2NhbmNlbGxhemlvbmVJbW1vYmlsZVJlcXVlc3QnO1xuXG4vKipcbiAqIENsYXNzZSBjaGUgcmFkdW5hIHR1dHRpIGkgc2Vydml6aSByaWNvbmR1Y2liaWxpIGFsbCdlbnRpdMOgIGltbW9iaWxlXG4gKlxuICogQGV4cG9ydFxuICogSW1tb2JpbGlTZXJ2aWNlXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbW1vYmlsaVNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgaHR0cFNlcnZpY2U6IEJyb2tlckh0dHBTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGNvbnN0YW50czogQ29uc3RhbnRzU2VydmljZSkgeyB9XG5cbiAgICAvKipcbiAgICAgKiBDaGlhbWF0YSBwZXIgb3R0ZW5lcmUgbCdlbGVuY28gZGVnbGkgaW1tb2JpbGkgYXBwYXJ0ZW5lbnRpIGFkIHVubyBzcGVjaWZpY28gY2xpZW50ZVxuICAgICAqXG4gICAgICogQHBhcmFtICBpZF9jbGllbnRlXG4gICAgICogQHBhcmFtICB0b2tlblZhbHVlIFRva2VuIGRpIGF1dGVudGljYXppb25lIG90dGVudXRvIGRhbGxhIGxvZ2luXG4gICAgICogQHJldHVybnMgcmVzcG9uc2UgY29udGVuZW50ZSBsJ2VzaXRvIGluIFN1Y2Nlc3MgZSBFcnJvck1lc3NhZ2VzLiBDb250ZW5lbnRlIGwnb2dnZXR0byBcbiAgICAgKiBEYXRhIGRlbnRybyBhbCBxdWFsZSBzaSB0cm92YSBsJ2VsZW5jbyBkZWdsaSBpbW1vYmlsaVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRJbW1vYmlsaShpZF9jbGllbnRlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEh0dHAuSHR0cFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldCh0aGlzLmNvbnN0YW50cy5nZXRJbW1vYmlsaVNlcnZpY2VOYW1lXG4gICAgICAgICAgICArIHRoaXMuY29uc3RhbnRzLnBhdGhTZXBhcmF0b3JcbiAgICAgICAgICAgICsgaWRfY2xpZW50ZSk7XG4gICAgICAgIC8vIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldCgnZ2V0aW1tb2JpbGknICsgJy8nICsgaWRDbGllbnRlLCB0b2tlblZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGlhbWF0YSBwZXIgb3R0ZW5lcmUgaWwgc2luZ29sbyBpbW1vYmlsZSBwYXNzYW5kbyBpbCBzdW8gaWRlbnRpZmljYXRpdm8gdW5pY29cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgaW1tb2JpbGVfaWRcbiAgICAgKiBAcGFyYW0gIHRva2VuVmFsdWUgVG9rZW4gZGkgYXV0ZW50aWNhemlvbmUgb3R0ZW51dG8gZGFsbGEgbG9naW5cbiAgICAgKiBAcmV0dXJucyByZXNwb25zZSBjb250ZW5lbnRlIGwnZXNpdG8gaW4gU3VjY2VzcyBlIEVycm9yTWVzc2FnZXMuIENvbnRlbmVudGUgbCdvZ2dldHRvIFxuICAgICAqIERhdGEgZGVudHJvIGFsIHF1YWxlIHNpIHRyb3ZhIGwnb2dnZXR0byBJbW1vYmlsZVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRJbW1vYmlsZShpbW1vYmlsZV9pZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxIdHRwLkh0dHBSZXNwb25zZT4ge1xuICAgICAgICAvLyByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQodGhpcy5jb25zdGFudHMuZ2V0SW1tb2JpbGVTZXJ2aWNlTmFtZSArIHRoaXMuY29uc3RhbnRzLnBhdGhTZXBhcmF0b3IgKyBpbW1vYmlsZV9pZCwgdG9rZW5WYWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldCh0aGlzLmNvbnN0YW50cy5nZXRJbW1vYmlsZVNlcnZpY2VOYW1lXG4gICAgICAgICAgICArIHRoaXMuY29uc3RhbnRzLnBhdGhTZXBhcmF0b3JcbiAgICAgICAgICAgICsgaW1tb2JpbGVfaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoaWFtYXRhIHBlciBpbnNlcmlyZSB1biBudW92byBpbW1vYmlsZVxuICAgICAqXG4gICAgICogQHBhcmFtICBpbW1vYmlsZVxuICAgICAqIEBwYXJhbSAgdG9rZW5WYWx1ZSBUb2tlbiBkaSBhdXRlbnRpY2F6aW9uZSBvdHRlbnV0byBkYWxsYSBsb2dpblxuICAgICAqIEByZXR1cm5zIHJlc3BvbnNlIGNvbnRlbmVudGUgbCdlc2l0byBpbiBTdWNjZXNzIGUgRXJyb3JNZXNzYWdlcy4gQ29udGVuZW50ZSBsJ29nZ2V0dG8gXG4gICAgICogRGF0YSBkZW50cm8gYWwgcXVhbGUgc2kgdHJvdmEgbCdpZCBkZWxsJ2ltbW9iaWxlIGFwcGVuYSBzYWx2YXRvXG4gICAgICovXG4gICAgcHVibGljIHB1dEltbW9iaWxlKGltbW9iaWxlOiBJbW1vYmlsZURldHRhZ2xpbyk6IE9ic2VydmFibGU8SHR0cC5IdHRwUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdCh0aGlzLmNvbnN0YW50cy5wdXRJbW1vYmlsZVNlcnZpY2VOYW1lLCBpbW1vYmlsZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hpYW1hdGEgcGVyIGNhbmNlbGxhcmUgdW4gaW1tb2JpbGUgcGFzc2FuZG8gaWwgc3VvIGlkZW50aWZpY2F0aXZvIHVuaWNvXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIGNhbmNlbGxhemlvbmVSZXF1ZXN0XG4gICAgICogQHBhcmFtICB0b2tlblZhbHVlIFRva2VuIGRpIGF1dGVudGljYXppb25lIG90dGVudXRvIGRhbGxhIGxvZ2luXG4gICAgICogQHJldHVybnMgcmVzcG9uc2UgY29udGVuZW50ZSBsJ2VzaXRvIGluIFN1Y2Nlc3MgZSBFcnJvck1lc3NhZ2VzLlxuICAgICAqL1xuICAgIHB1YmxpYyBkZWxJbW1vYmlsZShjYW5jZWxsYXppb25lUmVxdWVzdDogQ2FuY2VsbGF6aW9uZUltbW9iaWxlUmVxdWVzdCk6IE9ic2VydmFibGU8SHR0cC5IdHRwUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdCh0aGlzLmNvbnN0YW50cy5kZWxJbW1vYmlsZVNlcnZpY2VOYW1lLCBjYW5jZWxsYXppb25lUmVxdWVzdCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hpYW1hdGEgcGVyIGF0dGl2YXJlIGlsIGZsdXNzbyBkaSBpbnZpbyBkZWkgZGF0aSBjYXRhc3RhbGkgdmlhIG1haWwgYWxsJ3V0ZW50ZSBwcm9wcmlldGFyaW8gZGVsbCdpbW1vYmlsZSBkaSBjdWkgZGV2ZSBcbiAgICAgKiBlc3NlcmUgcGFzc2F0byBsJ2lkZW50aWZpY2F0aXZvIHVuaWNvXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIGltbW9iaWxlX2lkXG4gICAgICogQHBhcmFtICB0b2tlblZhbHVlIFRva2VuIGRpIGF1dGVudGljYXppb25lIG90dGVudXRvIGRhbGxhIGxvZ2luXG4gICAgICogQHJldHVybnMgcmVzcG9uc2UgY29udGVuZW50ZSBsJ2VzaXRvIGluIFN1Y2Nlc3MgZSBFcnJvck1lc3NhZ2VzLlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnZpb0RhdGlDYXRhc3RhbGkoaW1tb2JpbGVfaWQ6IG51bWJlcik6IE9ic2VydmFibGU8SHR0cC5IdHRwUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KHRoaXMuY29uc3RhbnRzLmdldENhdGFzdG9TZXJ2aWNlTmFtZSArIHRoaXMuY29uc3RhbnRzLnBhdGhTZXBhcmF0b3IgKyBpbW1vYmlsZV9pZCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFBpYW5vQW1tb3J0YW1lbnRvSW1tb2JpbGUoaW1tb2JpbGVfaWQ6IG51bWJlcik6IE9ic2VydmFibGU8SHR0cC5IdHRwUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KHRoaXMuY29uc3RhbnRzLmdldFBpYW5vQW1tb3J0YW1lbnRvU2VydmljZU5hbWUgKyB0aGlzLmNvbnN0YW50cy5wYXRoU2VwYXJhdG9yICsgaW1tb2JpbGVfaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoaWFtYXRhIHBlciBvdHRlbmVyZSBsYSB0YXNzYXppb25lIGltdSBkZWxsJ2ltbW9iaWxlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHByaW1hY2FzYSBcbiAgICAgKiBAcGFyYW0gIGFmZml0dGF0YSBcbiAgICAgKiBAcGFyYW0gIGFubm8gYW5ubyBwZXIgaWwgcXVhbGUgdmllbmUgcmljaGllc3RhIGwnSU1VIFxuICAgICAqIEBwYXJhbSAgaW1tb2JpbGVfaWRcbiAgICAgKiBAcmV0dXJucyByZXNwb25zZSBjb250ZW5lbnRlIGwnZXNpdG8gaW4gU3VjY2VzcyBlIEVycm9yTWVzc2FnZXMuIENvbnRlbmVudGUgbCdvZ2dldHRvIFxuICAgICAqIERhdGEgZGVudHJvIGFsIHF1YWxlIHNpIHRyb3ZhIGwnb2dnZXR0byBJbXVcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0SW11KHByaW1hY2FzYTogYm9vbGVhbiwgYWZmaXR0YXRhOiBib29sZWFuLCBhbm5vOiBzdHJpbmcsIGltbW9iaWxlX2lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEh0dHAuSHR0cFJlc3BvbnNlPiB7XG4gICAgICAgIC8vIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldCh0aGlzLmNvbnN0YW50cy5nZXRJbW1vYmlsZVNlcnZpY2VOYW1lICsgdGhpcy5jb25zdGFudHMucGF0aFNlcGFyYXRvciArIGltbW9iaWxlX2lkLCB0b2tlblZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KHRoaXMuY29uc3RhbnRzLmdldEltdVNlcnZpY2VOYW1lXG4gICAgICAgICAgICArIHRoaXMuY29uc3RhbnRzLnBhdGhTZXBhcmF0b3JcbiAgICAgICAgICAgICsgdGhpcy5nZXRCb29sZWFuQXNTdHJpbmcocHJpbWFjYXNhKVxuICAgICAgICAgICAgKyB0aGlzLmNvbnN0YW50cy5wYXRoU2VwYXJhdG9yXG4gICAgICAgICAgICArIHRoaXMuZ2V0Qm9vbGVhbkFzU3RyaW5nKGFmZml0dGF0YSlcbiAgICAgICAgICAgICsgdGhpcy5jb25zdGFudHMucGF0aFNlcGFyYXRvclxuICAgICAgICAgICAgKyBhbm5vXG4gICAgICAgICAgICArIHRoaXMuY29uc3RhbnRzLnBhdGhTZXBhcmF0b3JcbiAgICAgICAgICAgICsgaW1tb2JpbGVfaWQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Qm9vbGVhbkFzU3RyaW5nKGlucHV0OiBib29sZWFuKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIChpbnB1dCA/ICd0cnVlJyA6ICdmYWxzZScpO1xuICAgIH1cblxufVxuIl19