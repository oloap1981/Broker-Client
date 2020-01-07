/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BrokerHttpService } from '../common/brokerhttp.service';
import { ConstantsService } from '../common/constants.service';
export class DropdownService {
    // private tipologieTasse: Array<DdlItem> = [
    //     { codice: 0, descrizione: "" },
    //     { codice: 1, descrizione: "tasse1" },
    //     { codice: 2, descrizione: "tasse2" },
    //     { codice: 3, descrizione: "tasse3" },
    // ];
    // private tipiAffittuario: Array<DdlItem> = [
    //     { codice: 0, descrizione: "" },
    //     { codice: 1, descrizione: "tipoAffittuario1" },
    //     { codice: 2, descrizione: "tipoAffittuario2" },
    //     { codice: 3, descrizione: "tipoAffittuario3" },
    // ];
    // private euribor: Array<DdlItem> = [
    //     { codice: 0, descrizione: "" },
    //     { codice: 1, descrizione: "euribor1" },
    //     { codice: 2, descrizione: "euribor2" },
    //     { codice: 3, descrizione: "euribor3" },
    // ];
    // private tipiOmi: Array<DdlItem> = [
    //     { codice: 0, descrizione: "" },
    //     { codice: 1, descrizione: "omi1" },
    //     { codice: 2, descrizione: "omi2" },
    //     { codice: 3, descrizione: "omi3" },
    //     { codice: 4, descrizione: "omi4" },
    //     { codice: 5, descrizione: "omi5" }
    // ];
    /**
     * @param {?} httpService
     * @param {?} constants
     */
    constructor(httpService, constants) {
        this.httpService = httpService;
        this.constants = constants;
    }
    /**
     * @param {?} primacasa
     * @param {?} residente
     * @param {?} affittata
     * @return {?}
     */
    getTipologieTasse(primacasa, residente, affittata) {
        return this.getDropdown(this.constants.getDdlAffittuari, this.constants.pathSeparator + this.getBooleanAsString(primacasa)
            + this.constants.pathSeparator + this.getBooleanAsString(residente)
            + this.constants.pathSeparator + this.getBooleanAsString(affittata));
    }
    /**
     * @return {?}
     */
    getTipiAffittuari() {
        return this.getDropdown(this.constants.getDdlAffittuari, '');
    }
    /**
     * @return {?}
     */
    getEuribor() {
        return this.getDropdown(this.constants.getDdlEuribor, '');
    }
    /**
     * @param {?} idComuneIstat
     * @return {?}
     */
    getTipiOmi(idComuneIstat) {
        return this.getDropdown(this.constants.getDdlOmi, this.constants.pathSeparator + idComuneIstat);
    }
    /**
     * @return {?}
     */
    getTipologieCatastali() {
        return this.getDropdown(this.constants.getDdlTipologiaCatastale, '');
    }
    /**
     * @param {?} Tipoddl
     * @param {?} Filtro
     * @return {?}
     */
    getDropdown(Tipoddl, Filtro) {
        /** @type {?} */
        const path = this.constants.pathSeparator + Tipoddl + Filtro;
        return this.httpService.get(path);
    }
    /**
     * @private
     * @param {?} input
     * @return {?}
     */
    getBooleanAsString(input) {
        return (input ? 'true' : 'false');
    }
}
DropdownService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DropdownService.ctorParameters = () => [
    { type: BrokerHttpService },
    { type: ConstantsService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    DropdownService.prototype.httpService;
    /**
     * @type {?}
     * @private
     */
    DropdownService.prototype.constants;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jyb2tlci1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZHJvcGRvd24vZHJvcGRvd24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUkvRCxNQUFNLE9BQU8sZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWdDeEIsWUFDWSxXQUE4QixFQUM5QixTQUEyQjtRQUQzQixnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7UUFDOUIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFBSSxDQUFDOzs7Ozs7O0lBRXJDLGlCQUFpQixDQUFDLFNBQWtCLEVBQUUsU0FBa0IsRUFBRSxTQUFrQjtRQUMvRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFDbkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQztjQUMvRCxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDO2NBQ2pFLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7Ozs7SUFFTSxpQkFBaUI7UUFDcEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDakUsQ0FBQzs7OztJQUVNLFVBQVU7UUFDYixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7SUFFTSxVQUFVLENBQUMsYUFBcUI7UUFDbkMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQyxDQUFDO0lBQ3BHLENBQUM7Ozs7SUFFTSxxQkFBcUI7UUFDeEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsd0JBQXdCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekUsQ0FBQzs7Ozs7O0lBRU0sV0FBVyxDQUFDLE9BQWUsRUFBRSxNQUFjOztjQUN4QyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsT0FBTyxHQUFHLE1BQU07UUFDNUQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7Ozs7SUFFTyxrQkFBa0IsQ0FBQyxLQUFjO1FBQ3JDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7O1lBbkVKLFVBQVU7Ozs7WUFKRixpQkFBaUI7WUFDakIsZ0JBQWdCOzs7Ozs7O0lBcUNqQixzQ0FBc0M7Ozs7O0lBQ3RDLG9DQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgSHR0cCB9IGZyb20gJy4uLy4uL21vZGVscy9jb21tb24vaHR0cC5uYW1lc3BhY2UnO1xuaW1wb3J0IHsgQnJva2VySHR0cFNlcnZpY2UgfSBmcm9tICcuLi9jb21tb24vYnJva2VyaHR0cC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnN0YW50c1NlcnZpY2UgfSBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGRsSXRlbSB9IGZyb20gJy4uLy4uL21vZGVscy9jb21tb24vZGRsaXRlbSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEcm9wZG93blNlcnZpY2Uge1xuXG4gICAgLy8gcHJpdmF0ZSB0aXBvbG9naWVUYXNzZTogQXJyYXk8RGRsSXRlbT4gPSBbXG4gICAgLy8gICAgIHsgY29kaWNlOiAwLCBkZXNjcml6aW9uZTogXCJcIiB9LFxuICAgIC8vICAgICB7IGNvZGljZTogMSwgZGVzY3JpemlvbmU6IFwidGFzc2UxXCIgfSxcbiAgICAvLyAgICAgeyBjb2RpY2U6IDIsIGRlc2NyaXppb25lOiBcInRhc3NlMlwiIH0sXG4gICAgLy8gICAgIHsgY29kaWNlOiAzLCBkZXNjcml6aW9uZTogXCJ0YXNzZTNcIiB9LFxuICAgIC8vIF07XG5cbiAgICAvLyBwcml2YXRlIHRpcGlBZmZpdHR1YXJpbzogQXJyYXk8RGRsSXRlbT4gPSBbXG4gICAgLy8gICAgIHsgY29kaWNlOiAwLCBkZXNjcml6aW9uZTogXCJcIiB9LFxuICAgIC8vICAgICB7IGNvZGljZTogMSwgZGVzY3JpemlvbmU6IFwidGlwb0FmZml0dHVhcmlvMVwiIH0sXG4gICAgLy8gICAgIHsgY29kaWNlOiAyLCBkZXNjcml6aW9uZTogXCJ0aXBvQWZmaXR0dWFyaW8yXCIgfSxcbiAgICAvLyAgICAgeyBjb2RpY2U6IDMsIGRlc2NyaXppb25lOiBcInRpcG9BZmZpdHR1YXJpbzNcIiB9LFxuICAgIC8vIF07XG5cbiAgICAvLyBwcml2YXRlIGV1cmlib3I6IEFycmF5PERkbEl0ZW0+ID0gW1xuICAgIC8vICAgICB7IGNvZGljZTogMCwgZGVzY3JpemlvbmU6IFwiXCIgfSxcbiAgICAvLyAgICAgeyBjb2RpY2U6IDEsIGRlc2NyaXppb25lOiBcImV1cmlib3IxXCIgfSxcbiAgICAvLyAgICAgeyBjb2RpY2U6IDIsIGRlc2NyaXppb25lOiBcImV1cmlib3IyXCIgfSxcbiAgICAvLyAgICAgeyBjb2RpY2U6IDMsIGRlc2NyaXppb25lOiBcImV1cmlib3IzXCIgfSxcbiAgICAvLyBdO1xuXG4gICAgLy8gcHJpdmF0ZSB0aXBpT21pOiBBcnJheTxEZGxJdGVtPiA9IFtcbiAgICAvLyAgICAgeyBjb2RpY2U6IDAsIGRlc2NyaXppb25lOiBcIlwiIH0sXG4gICAgLy8gICAgIHsgY29kaWNlOiAxLCBkZXNjcml6aW9uZTogXCJvbWkxXCIgfSxcbiAgICAvLyAgICAgeyBjb2RpY2U6IDIsIGRlc2NyaXppb25lOiBcIm9taTJcIiB9LFxuICAgIC8vICAgICB7IGNvZGljZTogMywgZGVzY3JpemlvbmU6IFwib21pM1wiIH0sXG4gICAgLy8gICAgIHsgY29kaWNlOiA0LCBkZXNjcml6aW9uZTogXCJvbWk0XCIgfSxcbiAgICAvLyAgICAgeyBjb2RpY2U6IDUsIGRlc2NyaXppb25lOiBcIm9taTVcIiB9XG4gICAgLy8gXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGh0dHBTZXJ2aWNlOiBCcm9rZXJIdHRwU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBjb25zdGFudHM6IENvbnN0YW50c1NlcnZpY2UpIHsgfVxuXG4gICAgcHVibGljIGdldFRpcG9sb2dpZVRhc3NlKHByaW1hY2FzYTogYm9vbGVhbiwgcmVzaWRlbnRlOiBib29sZWFuLCBhZmZpdHRhdGE6IGJvb2xlYW4pOiBPYnNlcnZhYmxlPEh0dHAuSHR0cFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERyb3Bkb3duKHRoaXMuY29uc3RhbnRzLmdldERkbEFmZml0dHVhcmksXG4gICAgICAgICAgICB0aGlzLmNvbnN0YW50cy5wYXRoU2VwYXJhdG9yICsgdGhpcy5nZXRCb29sZWFuQXNTdHJpbmcocHJpbWFjYXNhKVxuICAgICAgICAgICAgKyB0aGlzLmNvbnN0YW50cy5wYXRoU2VwYXJhdG9yICsgdGhpcy5nZXRCb29sZWFuQXNTdHJpbmcocmVzaWRlbnRlKVxuICAgICAgICAgICAgKyB0aGlzLmNvbnN0YW50cy5wYXRoU2VwYXJhdG9yICsgdGhpcy5nZXRCb29sZWFuQXNTdHJpbmcoYWZmaXR0YXRhKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFRpcGlBZmZpdHR1YXJpKCk6IE9ic2VydmFibGU8SHR0cC5IdHRwUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RHJvcGRvd24odGhpcy5jb25zdGFudHMuZ2V0RGRsQWZmaXR0dWFyaSwgJycpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRFdXJpYm9yKCk6IE9ic2VydmFibGU8SHR0cC5IdHRwUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RHJvcGRvd24odGhpcy5jb25zdGFudHMuZ2V0RGRsRXVyaWJvciwgJycpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRUaXBpT21pKGlkQ29tdW5lSXN0YXQ6IHN0cmluZyk6IE9ic2VydmFibGU8SHR0cC5IdHRwUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RHJvcGRvd24odGhpcy5jb25zdGFudHMuZ2V0RGRsT21pLCB0aGlzLmNvbnN0YW50cy5wYXRoU2VwYXJhdG9yICsgaWRDb211bmVJc3RhdCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFRpcG9sb2dpZUNhdGFzdGFsaSgpOiBPYnNlcnZhYmxlPEh0dHAuSHR0cFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERyb3Bkb3duKHRoaXMuY29uc3RhbnRzLmdldERkbFRpcG9sb2dpYUNhdGFzdGFsZSwgJycpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXREcm9wZG93bihUaXBvZGRsOiBzdHJpbmcsIEZpbHRybzogc3RyaW5nKTogT2JzZXJ2YWJsZTxIdHRwLkh0dHBSZXNwb25zZT4ge1xuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5jb25zdGFudHMucGF0aFNlcGFyYXRvciArIFRpcG9kZGwgKyBGaWx0cm87XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChwYXRoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEJvb2xlYW5Bc1N0cmluZyhpbnB1dDogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAoaW5wdXQgPyAndHJ1ZScgOiAnZmFsc2UnKTtcbiAgICB9XG59XG4iXX0=