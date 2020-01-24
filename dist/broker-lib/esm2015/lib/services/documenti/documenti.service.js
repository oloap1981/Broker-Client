/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BrokerHttpService } from '../common/brokerhttp.service';
import { ConstantsService } from '../common/constants.service';
export class DocumentiService {
    /**
     * @param {?} httpService
     * @param {?} constants
     */
    constructor(httpService, constants) {
        this.httpService = httpService;
        this.constants = constants;
    }
    /**
     * @param {?} idcliente
     * @param {?} idcartella
     * @return {?}
     */
    getCartelle(idcliente, idcartella) {
        return this.httpService.get(this.constants.getCartelle
            + this.constants.pathSeparator + idcliente
            + this.constants.pathSeparator + idcartella);
    }
    /**
     * @param {?} iddocumento
     * @return {?}
     */
    getDocumento(iddocumento) {
        return this.httpService.get(this.constants.getDocumento
            + this.constants.pathSeparator + iddocumento);
    }
    /**
     * @param {?} cartella
     * @return {?}
     */
    putCartelle(cartella) {
        return this.httpService.post(this.constants.putCartelle, cartella);
    }
    /**
     * @param {?} documento
     * @return {?}
     */
    putDocumento(documento) {
        return this.httpService.post(this.constants.putDocumento, documento);
    }
}
DocumentiService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DocumentiService.ctorParameters = () => [
    { type: BrokerHttpService },
    { type: ConstantsService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    DocumentiService.prototype.httpService;
    /**
     * @type {?}
     * @private
     */
    DocumentiService.prototype.constants;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnRpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9icm9rZXItbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2RvY3VtZW50aS9kb2N1bWVudGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQU8vRCxNQUFNLE9BQU8sZ0JBQWdCOzs7OztJQUV6QixZQUNZLFdBQThCLEVBQzlCLFNBQTJCO1FBRDNCLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtRQUM5QixjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUN2QyxDQUFDOzs7Ozs7SUFFTSxXQUFXLENBQUMsU0FBaUIsRUFBRSxVQUFrQjtRQUNwRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVztjQUNoRCxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxTQUFTO2NBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7O0lBRU0sWUFBWSxDQUFDLFdBQW1CO1FBQ25DLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZO2NBQ2pELElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7O0lBRU0sV0FBVyxDQUFDLFFBQWtCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7Ozs7SUFFTSxZQUFZLENBQUMsU0FBb0I7UUFDcEMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN6RSxDQUFDOzs7WUF6QkosVUFBVTs7OztZQVBGLGlCQUFpQjtZQUNqQixnQkFBZ0I7Ozs7Ozs7SUFVakIsdUNBQXNDOzs7OztJQUN0QyxxQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm9rZXJIdHRwU2VydmljZSB9IGZyb20gJy4uL2NvbW1vbi9icm9rZXJodHRwLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29uc3RhbnRzU2VydmljZSB9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMuc2VydmljZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbW1vbi9odHRwLm5hbWVzcGFjZSc7XG5pbXBvcnQgeyBDYXJ0ZWxsYSB9IGZyb20gJy4uLy4uL21vZGVscy9kb2N1bWVudGkvY2FydGVsbGEnO1xuaW1wb3J0IHsgRG9jdW1lbnRvIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2RvY3VtZW50aS9kb2N1bWVudG8nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRpU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBodHRwU2VydmljZTogQnJva2VySHR0cFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgY29uc3RhbnRzOiBDb25zdGFudHNTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgcHVibGljIGdldENhcnRlbGxlKGlkY2xpZW50ZTogbnVtYmVyLCBpZGNhcnRlbGxhOiBudW1iZXIpOiBPYnNlcnZhYmxlPEh0dHAuSHR0cFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldCh0aGlzLmNvbnN0YW50cy5nZXRDYXJ0ZWxsZVxuICAgICAgICAgICAgKyB0aGlzLmNvbnN0YW50cy5wYXRoU2VwYXJhdG9yICsgaWRjbGllbnRlXG4gICAgICAgICAgICArIHRoaXMuY29uc3RhbnRzLnBhdGhTZXBhcmF0b3IgKyBpZGNhcnRlbGxhKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RG9jdW1lbnRvKGlkZG9jdW1lbnRvOiBudW1iZXIpOiBPYnNlcnZhYmxlPEh0dHAuSHR0cFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldCh0aGlzLmNvbnN0YW50cy5nZXREb2N1bWVudG9cbiAgICAgICAgICAgICsgdGhpcy5jb25zdGFudHMucGF0aFNlcGFyYXRvciArIGlkZG9jdW1lbnRvKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHV0Q2FydGVsbGUoY2FydGVsbGE6IENhcnRlbGxhKTogT2JzZXJ2YWJsZTxIdHRwLkh0dHBSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wb3N0KHRoaXMuY29uc3RhbnRzLnB1dENhcnRlbGxlLCBjYXJ0ZWxsYSk7XG4gICAgfVxuXG4gICAgcHVibGljIHB1dERvY3VtZW50byhkb2N1bWVudG86IERvY3VtZW50byk6IE9ic2VydmFibGU8SHR0cC5IdHRwUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdCh0aGlzLmNvbnN0YW50cy5wdXREb2N1bWVudG8sIGRvY3VtZW50byk7XG4gICAgfVxufVxuIl19