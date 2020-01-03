/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BrokerHttpService } from '../common/brokerhttp.service';
import { ConstantsService } from '../common/constants.service';
/**
 * Classe che raduna tutti i servizi riconducibili all'entità cliente
 *
 * @export
 * ClientiService
 */
var ClientiService = /** @class */ (function () {
    function ClientiService(httpService, constants) {
        this.httpService = httpService;
        this.constants = constants;
    }
    /**
     * Chiamata per ottenere l'elenco dei clienti completo.
     *
     * @param  tokenValue Token di autenticazione ottenuto dalla login
     * @returns contenente l'oggetto Data che a sua volta contiene l'elenco degli oggetti Cliente
     */
    /**
     * Chiamata per ottenere l'elenco dei clienti completo.
     *
     * @return {?} contenente l'oggetto Data che a sua volta contiene l'elenco degli oggetti Cliente
     */
    ClientiService.prototype.getClienti = /**
     * Chiamata per ottenere l'elenco dei clienti completo.
     *
     * @return {?} contenente l'oggetto Data che a sua volta contiene l'elenco degli oggetti Cliente
     */
    function () {
        return this.httpService.get(this.constants.getClientiServiceName);
    };
    /**
     * Chiamata per inserire un nuovo cliente
     *
     * @param  cliente
     * @param  tokenValue Token di autenticazione ottenuto dalla login
     * @returns response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
     * Data dentro al quale si trova l'id dell'oggetto appena generato
     */
    /**
     * Chiamata per inserire un nuovo cliente
     *
     * @param {?} cliente
     * @return {?} response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
     * Data dentro al quale si trova l'id dell'oggetto appena generato
     */
    ClientiService.prototype.putCliente = /**
     * Chiamata per inserire un nuovo cliente
     *
     * @param {?} cliente
     * @return {?} response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
     * Data dentro al quale si trova l'id dell'oggetto appena generato
     */
    function (cliente) {
        return this.httpService.post(this.constants.putClientiServiceName, cliente);
    };
    /**
     * Chiamata per abilitare l'app di uno specifico cliente
     *
     * @param  request oggetto contenente i parametri per l'abilitazione
     * @param  tokenValue Token di autenticazione ottenuto dalla login
     * @returns response contenente l'esito in Success e ErrorMessages.
     */
    /**
     * Chiamata per abilitare l'app di uno specifico cliente
     *
     * @param {?} request oggetto contenente i parametri per l'abilitazione
     * @return {?} response contenente l'esito in Success e ErrorMessages.
     */
    ClientiService.prototype.abilitaAppCliente = /**
     * Chiamata per abilitare l'app di uno specifico cliente
     *
     * @param {?} request oggetto contenente i parametri per l'abilitazione
     * @return {?} response contenente l'esito in Success e ErrorMessages.
     */
    function (request) {
        return this.httpService.post(this.constants.abilitaAppClienteServiceName, request);
    };
    /**
     * Chiamata per ottenere il BookValue di un cliente
     *
     * @param  cliente_id identificativo unico del cliente del quale si vuole il BookValue
     * @param  tokenValue Token di autenticazione ottenuto dalla login
     * @returns response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
     * Data che a sua volta contiene l'elenco degli oggetti BookValue
     */
    /**
     * Chiamata per ottenere il BookValue di un cliente
     *
     * @param {?} cliente_id identificativo unico del cliente del quale si vuole il BookValue
     * @return {?} response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
     * Data che a sua volta contiene l'elenco degli oggetti BookValue
     */
    ClientiService.prototype.getBookValue = /**
     * Chiamata per ottenere il BookValue di un cliente
     *
     * @param {?} cliente_id identificativo unico del cliente del quale si vuole il BookValue
     * @return {?} response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
     * Data che a sua volta contiene l'elenco degli oggetti BookValue
     */
    function (cliente_id) {
        return this.httpService.get(this.constants.bookValueServiceName + this.constants.pathSeparator + cliente_id);
    };
    /**
     * Chiamata per ottenere il piano di ammortamento di un mutuo
     *
     * @param  mutuo_id identificativo unico del mutuo del quale si vuole il PianoAmmortamento
     * @param  tokenValue Token di autenticazione ottenuto dalla login
     * @returns response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
     * Data che a sua volta contiene l'elenco degli oggetti PianoAmmortamento
     */
    /**
     * Chiamata per ottenere il piano di ammortamento di un mutuo
     *
     * @param {?} mutuo_id identificativo unico del mutuo del quale si vuole il PianoAmmortamento
     * @return {?} response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
     * Data che a sua volta contiene l'elenco degli oggetti PianoAmmortamento
     */
    ClientiService.prototype.getPianoAmmortamento = /**
     * Chiamata per ottenere il piano di ammortamento di un mutuo
     *
     * @param {?} mutuo_id identificativo unico del mutuo del quale si vuole il PianoAmmortamento
     * @return {?} response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
     * Data che a sua volta contiene l'elenco degli oggetti PianoAmmortamento
     */
    function (mutuo_id) {
        return this.httpService.get(this.constants.pianoAmmortamentoServiceName + this.constants.pathSeparator + mutuo_id);
    };
    ClientiService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ClientiService.ctorParameters = function () { return [
        { type: BrokerHttpService },
        { type: ConstantsService }
    ]; };
    return ClientiService;
}());
export { ClientiService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ClientiService.prototype.httpService;
    /**
     * @type {?}
     * @private
     */
    ClientiService.prototype.constants;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50aS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYnJva2VyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jbGllbnRpL2NsaWVudGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7OztBQVUvRDtJQUdJLHdCQUNZLFdBQThCLEVBQzlCLFNBQTJCO1FBRDNCLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtRQUM5QixjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUFJLENBQUM7SUFFNUM7Ozs7O09BS0c7Ozs7OztJQUNJLG1DQUFVOzs7OztJQUFqQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRDs7Ozs7OztPQU9HOzs7Ozs7OztJQUNJLG1DQUFVOzs7Ozs7O0lBQWpCLFVBQWtCLE9BQWtDO1FBQ2hELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRUQ7Ozs7OztPQU1HOzs7Ozs7O0lBQ0ksMENBQWlCOzs7Ozs7SUFBeEIsVUFBeUIsT0FBaUM7UUFDdEQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLDRCQUE0QixFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7SUFFRDs7Ozs7OztPQU9HOzs7Ozs7OztJQUNJLHFDQUFZOzs7Ozs7O0lBQW5CLFVBQW9CLFVBQWtCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUMsQ0FBQztJQUNqSCxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRzs7Ozs7Ozs7SUFDSSw2Q0FBb0I7Ozs7Ozs7SUFBM0IsVUFBNEIsUUFBZ0I7UUFDeEMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLDRCQUE0QixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZILENBQUM7O2dCQTlESixVQUFVOzs7O2dCQVhGLGlCQUFpQjtnQkFDakIsZ0JBQWdCOztJQTBFekIscUJBQUM7Q0FBQSxBQWhFRCxJQWdFQztTQS9EWSxjQUFjOzs7Ozs7SUFHbkIscUNBQXNDOzs7OztJQUN0QyxtQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEh0dHAgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29tbW9uL2h0dHAubmFtZXNwYWNlJztcbmltcG9ydCB7IEJyb2tlckh0dHBTZXJ2aWNlIH0gZnJvbSAnLi4vY29tbW9uL2Jyb2tlcmh0dHAuc2VydmljZSc7XG5pbXBvcnQgeyBDb25zdGFudHNTZXJ2aWNlIH0gZnJvbSAnLi4vY29tbW9uL2NvbnN0YW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IEluc2VyaW1lbnRvQ2xpZW50ZVJlcXVlc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvY2xpZW50aS9pbnNlcmltZW50b0NsaWVudGVSZXF1ZXN0JztcbmltcG9ydCB7IEFiaWxpdGFBcHBDbGllbnRlUmVxdWVzdCB9IGZyb20gJy4uLy4uL21vZGVscy9jbGllbnRpL2FiaWxpdGFBcHBDbGllbnRlUmVxdWVzdCc7XG5cbi8qKlxuICogQ2xhc3NlIGNoZSByYWR1bmEgdHV0dGkgaSBzZXJ2aXppIHJpY29uZHVjaWJpbGkgYWxsJ2VudGl0w6AgY2xpZW50ZVxuICpcbiAqIEBleHBvcnRcbiAqIENsaWVudGlTZXJ2aWNlXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDbGllbnRpU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBodHRwU2VydmljZTogQnJva2VySHR0cFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgY29uc3RhbnRzOiBDb25zdGFudHNTZXJ2aWNlKSB7IH1cblxuICAgIC8qKlxuICAgICAqIENoaWFtYXRhIHBlciBvdHRlbmVyZSBsJ2VsZW5jbyBkZWkgY2xpZW50aSBjb21wbGV0by5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgdG9rZW5WYWx1ZSBUb2tlbiBkaSBhdXRlbnRpY2F6aW9uZSBvdHRlbnV0byBkYWxsYSBsb2dpblxuICAgICAqIEByZXR1cm5zIGNvbnRlbmVudGUgbCdvZ2dldHRvIERhdGEgY2hlIGEgc3VhIHZvbHRhIGNvbnRpZW5lIGwnZWxlbmNvIGRlZ2xpIG9nZ2V0dGkgQ2xpZW50ZVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRDbGllbnRpKCk6IE9ic2VydmFibGU8SHR0cC5IdHRwUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KHRoaXMuY29uc3RhbnRzLmdldENsaWVudGlTZXJ2aWNlTmFtZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hpYW1hdGEgcGVyIGluc2VyaXJlIHVuIG51b3ZvIGNsaWVudGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgY2xpZW50ZVxuICAgICAqIEBwYXJhbSAgdG9rZW5WYWx1ZSBUb2tlbiBkaSBhdXRlbnRpY2F6aW9uZSBvdHRlbnV0byBkYWxsYSBsb2dpblxuICAgICAqIEByZXR1cm5zIHJlc3BvbnNlIGNvbnRlbmVudGUgbCdlc2l0byBpbiBTdWNjZXNzIGUgRXJyb3JNZXNzYWdlcy4gQ29udGVuZW50ZSBsJ29nZ2V0dG8gXG4gICAgICogRGF0YSBkZW50cm8gYWwgcXVhbGUgc2kgdHJvdmEgbCdpZCBkZWxsJ29nZ2V0dG8gYXBwZW5hIGdlbmVyYXRvXG4gICAgICovXG4gICAgcHVibGljIHB1dENsaWVudGUoY2xpZW50ZTogSW5zZXJpbWVudG9DbGllbnRlUmVxdWVzdCk6IE9ic2VydmFibGU8SHR0cC5IdHRwUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdCh0aGlzLmNvbnN0YW50cy5wdXRDbGllbnRpU2VydmljZU5hbWUsIGNsaWVudGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoaWFtYXRhIHBlciBhYmlsaXRhcmUgbCdhcHAgZGkgdW5vIHNwZWNpZmljbyBjbGllbnRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHJlcXVlc3Qgb2dnZXR0byBjb250ZW5lbnRlIGkgcGFyYW1ldHJpIHBlciBsJ2FiaWxpdGF6aW9uZVxuICAgICAqIEBwYXJhbSAgdG9rZW5WYWx1ZSBUb2tlbiBkaSBhdXRlbnRpY2F6aW9uZSBvdHRlbnV0byBkYWxsYSBsb2dpblxuICAgICAqIEByZXR1cm5zIHJlc3BvbnNlIGNvbnRlbmVudGUgbCdlc2l0byBpbiBTdWNjZXNzIGUgRXJyb3JNZXNzYWdlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWJpbGl0YUFwcENsaWVudGUocmVxdWVzdDogQWJpbGl0YUFwcENsaWVudGVSZXF1ZXN0KTogT2JzZXJ2YWJsZTxIdHRwLkh0dHBSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wb3N0KHRoaXMuY29uc3RhbnRzLmFiaWxpdGFBcHBDbGllbnRlU2VydmljZU5hbWUsIHJlcXVlc3QpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoaWFtYXRhIHBlciBvdHRlbmVyZSBpbCBCb29rVmFsdWUgZGkgdW4gY2xpZW50ZVxuICAgICAqXG4gICAgICogQHBhcmFtICBjbGllbnRlX2lkIGlkZW50aWZpY2F0aXZvIHVuaWNvIGRlbCBjbGllbnRlIGRlbCBxdWFsZSBzaSB2dW9sZSBpbCBCb29rVmFsdWVcbiAgICAgKiBAcGFyYW0gIHRva2VuVmFsdWUgVG9rZW4gZGkgYXV0ZW50aWNhemlvbmUgb3R0ZW51dG8gZGFsbGEgbG9naW5cbiAgICAgKiBAcmV0dXJucyByZXNwb25zZSBjb250ZW5lbnRlIGwnZXNpdG8gaW4gU3VjY2VzcyBlIEVycm9yTWVzc2FnZXMuIENvbnRlbmVudGUgbCdvZ2dldHRvIFxuICAgICAqIERhdGEgY2hlIGEgc3VhIHZvbHRhIGNvbnRpZW5lIGwnZWxlbmNvIGRlZ2xpIG9nZ2V0dGkgQm9va1ZhbHVlXG4gICAgICovXG4gICAgcHVibGljIGdldEJvb2tWYWx1ZShjbGllbnRlX2lkOiBudW1iZXIpOiBPYnNlcnZhYmxlPEh0dHAuSHR0cFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldCh0aGlzLmNvbnN0YW50cy5ib29rVmFsdWVTZXJ2aWNlTmFtZSArIHRoaXMuY29uc3RhbnRzLnBhdGhTZXBhcmF0b3IgKyBjbGllbnRlX2lkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGlhbWF0YSBwZXIgb3R0ZW5lcmUgaWwgcGlhbm8gZGkgYW1tb3J0YW1lbnRvIGRpIHVuIG11dHVvXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIG11dHVvX2lkIGlkZW50aWZpY2F0aXZvIHVuaWNvIGRlbCBtdXR1byBkZWwgcXVhbGUgc2kgdnVvbGUgaWwgUGlhbm9BbW1vcnRhbWVudG9cbiAgICAgKiBAcGFyYW0gIHRva2VuVmFsdWUgVG9rZW4gZGkgYXV0ZW50aWNhemlvbmUgb3R0ZW51dG8gZGFsbGEgbG9naW5cbiAgICAgKiBAcmV0dXJucyByZXNwb25zZSBjb250ZW5lbnRlIGwnZXNpdG8gaW4gU3VjY2VzcyBlIEVycm9yTWVzc2FnZXMuIENvbnRlbmVudGUgbCdvZ2dldHRvIFxuICAgICAqIERhdGEgY2hlIGEgc3VhIHZvbHRhIGNvbnRpZW5lIGwnZWxlbmNvIGRlZ2xpIG9nZ2V0dGkgUGlhbm9BbW1vcnRhbWVudG9cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0UGlhbm9BbW1vcnRhbWVudG8obXV0dW9faWQ6IG51bWJlcik6IE9ic2VydmFibGU8SHR0cC5IdHRwUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KHRoaXMuY29uc3RhbnRzLnBpYW5vQW1tb3J0YW1lbnRvU2VydmljZU5hbWUgKyB0aGlzLmNvbnN0YW50cy5wYXRoU2VwYXJhdG9yICsgbXV0dW9faWQpO1xuICAgIH1cblxufVxuIl19