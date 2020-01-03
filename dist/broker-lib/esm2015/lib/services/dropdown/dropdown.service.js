/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BrokerHttpService } from '../common/brokerhttp.service';
import { ConstantsService } from '../common/constants.service';
export class DropdownService {
    /**
     * @param {?} httpService
     * @param {?} constants
     */
    constructor(httpService, constants) {
        this.httpService = httpService;
        this.constants = constants;
        this.tipologieTasse = [
            { codice: 0, descrizione: "" },
            { codice: 1, descrizione: "tasse1" },
            { codice: 2, descrizione: "tasse2" },
            { codice: 3, descrizione: "tasse3" },
        ];
        this.tipiAffittuario = [
            { codice: 0, descrizione: "" },
            { codice: 1, descrizione: "tipoAffittuario1" },
            { codice: 2, descrizione: "tipoAffittuario2" },
            { codice: 3, descrizione: "tipoAffittuario3" },
        ];
        this.euribor = [
            { codice: 0, descrizione: "" },
            { codice: 1, descrizione: "euribor1" },
            { codice: 2, descrizione: "euribor2" },
            { codice: 3, descrizione: "euribor3" },
        ];
        this.tipiOmi = [
            { codice: 0, descrizione: "" },
            { codice: 1, descrizione: "omi1" },
            { codice: 2, descrizione: "omi2" },
            { codice: 3, descrizione: "omi3" },
            { codice: 4, descrizione: "omi4" },
            { codice: 5, descrizione: "omi5" }
        ];
    }
    /**
     * @return {?}
     */
    getTipologieTasse() {
        return this.tipologieTasse;
    }
    /**
     * @return {?}
     */
    getTipiAffittuari() {
        return this.tipiAffittuario;
    }
    /**
     * @return {?}
     */
    getEuribor() {
        return this.euribor;
    }
    /**
     * @param {?} idComuneIstat
     * @return {?}
     */
    getTipiOmi(idComuneIstat) {
        return this.tipiOmi;
    }
    /**
     * @param {?} Tipoddl
     * @param {?} Filtro
     * @param {?} Ordina
     * @param {?} Componi
     * @param {?} PrimoVuoto
     * @param {?} PrimoTutti
     * @return {?}
     */
    getDropdown(Tipoddl, Filtro, Ordina, Componi, PrimoVuoto, PrimoTutti) {
        /** @type {?} */
        const path = '/' + Tipoddl + '/' + Filtro + '/' + Ordina + '/' + Componi + '/' + PrimoVuoto + '/' + PrimoTutti;
        return this.httpService.get(this.constants.getDropdownServiceName + path);
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
    DropdownService.prototype.tipologieTasse;
    /**
     * @type {?}
     * @private
     */
    DropdownService.prototype.tipiAffittuario;
    /**
     * @type {?}
     * @private
     */
    DropdownService.prototype.euribor;
    /**
     * @type {?}
     * @private
     */
    DropdownService.prototype.tipiOmi;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jyb2tlci1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZHJvcGRvd24vZHJvcGRvd24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUkvRCxNQUFNLE9BQU8sZUFBZTs7Ozs7SUFnQ3hCLFlBQ1ksV0FBOEIsRUFDOUIsU0FBMkI7UUFEM0IsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO1FBQzlCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBaEMvQixtQkFBYyxHQUFtQjtZQUNyQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRTtZQUM5QixFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRTtZQUNwQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRTtZQUNwQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRTtTQUN2QyxDQUFDO1FBRU0sb0JBQWUsR0FBbUI7WUFDdEMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUU7WUFDOUIsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxrQkFBa0IsRUFBRTtZQUM5QyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLGtCQUFrQixFQUFFO1lBQzlDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUU7U0FDakQsQ0FBQztRQUVNLFlBQU8sR0FBbUI7WUFDOUIsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUU7WUFDOUIsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUU7WUFDdEMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUU7WUFDdEMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUU7U0FDekMsQ0FBQztRQUVNLFlBQU8sR0FBbUI7WUFDOUIsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUU7WUFDOUIsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7WUFDbEMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7WUFDbEMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7WUFDbEMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7WUFDbEMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7U0FDckMsQ0FBQztJQUl5QyxDQUFDOzs7O0lBRXJDLGlCQUFpQjtRQUNwQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVNLGlCQUFpQjtRQUNwQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVNLFVBQVU7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFTSxVQUFVLENBQUMsYUFBcUI7UUFDbkMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Ozs7Ozs7Ozs7SUFFTSxXQUFXLENBQUMsT0FBZSxFQUFFLE1BQWMsRUFBRSxNQUFjLEVBQUUsT0FBZSxFQUFFLFVBQWtCLEVBQUUsVUFBa0I7O2NBQ2pILElBQUksR0FBRyxHQUFHLEdBQUcsT0FBTyxHQUFHLEdBQUcsR0FBRyxNQUFNLEdBQUcsR0FBRyxHQUFHLE1BQU0sR0FBRyxHQUFHLEdBQUcsT0FBTyxHQUFHLEdBQUcsR0FBRyxVQUFVLEdBQUcsR0FBRyxHQUFHLFVBQVU7UUFDOUcsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxDQUFDO0lBQzlFLENBQUM7OztZQXhESixVQUFVOzs7O1lBSkYsaUJBQWlCO1lBQ2pCLGdCQUFnQjs7Ozs7OztJQU1yQix5Q0FLRTs7Ozs7SUFFRiwwQ0FLRTs7Ozs7SUFFRixrQ0FLRTs7Ozs7SUFFRixrQ0FPRTs7Ozs7SUFHRSxzQ0FBc0M7Ozs7O0lBQ3RDLG9DQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgSHR0cCB9IGZyb20gJy4uLy4uL21vZGVscy9jb21tb24vaHR0cC5uYW1lc3BhY2UnO1xuaW1wb3J0IHsgQnJva2VySHR0cFNlcnZpY2UgfSBmcm9tICcuLi9jb21tb24vYnJva2VyaHR0cC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnN0YW50c1NlcnZpY2UgfSBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGRsSXRlbSB9IGZyb20gJy4uLy4uL21vZGVscy9jb21tb24vZGRsaXRlbSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEcm9wZG93blNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSB0aXBvbG9naWVUYXNzZTogQXJyYXk8RGRsSXRlbT4gPSBbXG4gICAgICAgIHsgY29kaWNlOiAwLCBkZXNjcml6aW9uZTogXCJcIiB9LFxuICAgICAgICB7IGNvZGljZTogMSwgZGVzY3JpemlvbmU6IFwidGFzc2UxXCIgfSxcbiAgICAgICAgeyBjb2RpY2U6IDIsIGRlc2NyaXppb25lOiBcInRhc3NlMlwiIH0sXG4gICAgICAgIHsgY29kaWNlOiAzLCBkZXNjcml6aW9uZTogXCJ0YXNzZTNcIiB9LFxuICAgIF07XG5cbiAgICBwcml2YXRlIHRpcGlBZmZpdHR1YXJpbzogQXJyYXk8RGRsSXRlbT4gPSBbXG4gICAgICAgIHsgY29kaWNlOiAwLCBkZXNjcml6aW9uZTogXCJcIiB9LFxuICAgICAgICB7IGNvZGljZTogMSwgZGVzY3JpemlvbmU6IFwidGlwb0FmZml0dHVhcmlvMVwiIH0sXG4gICAgICAgIHsgY29kaWNlOiAyLCBkZXNjcml6aW9uZTogXCJ0aXBvQWZmaXR0dWFyaW8yXCIgfSxcbiAgICAgICAgeyBjb2RpY2U6IDMsIGRlc2NyaXppb25lOiBcInRpcG9BZmZpdHR1YXJpbzNcIiB9LFxuICAgIF07XG5cbiAgICBwcml2YXRlIGV1cmlib3I6IEFycmF5PERkbEl0ZW0+ID0gW1xuICAgICAgICB7IGNvZGljZTogMCwgZGVzY3JpemlvbmU6IFwiXCIgfSxcbiAgICAgICAgeyBjb2RpY2U6IDEsIGRlc2NyaXppb25lOiBcImV1cmlib3IxXCIgfSxcbiAgICAgICAgeyBjb2RpY2U6IDIsIGRlc2NyaXppb25lOiBcImV1cmlib3IyXCIgfSxcbiAgICAgICAgeyBjb2RpY2U6IDMsIGRlc2NyaXppb25lOiBcImV1cmlib3IzXCIgfSxcbiAgICBdO1xuXG4gICAgcHJpdmF0ZSB0aXBpT21pOiBBcnJheTxEZGxJdGVtPiA9IFtcbiAgICAgICAgeyBjb2RpY2U6IDAsIGRlc2NyaXppb25lOiBcIlwiIH0sXG4gICAgICAgIHsgY29kaWNlOiAxLCBkZXNjcml6aW9uZTogXCJvbWkxXCIgfSxcbiAgICAgICAgeyBjb2RpY2U6IDIsIGRlc2NyaXppb25lOiBcIm9taTJcIiB9LFxuICAgICAgICB7IGNvZGljZTogMywgZGVzY3JpemlvbmU6IFwib21pM1wiIH0sXG4gICAgICAgIHsgY29kaWNlOiA0LCBkZXNjcml6aW9uZTogXCJvbWk0XCIgfSxcbiAgICAgICAgeyBjb2RpY2U6IDUsIGRlc2NyaXppb25lOiBcIm9taTVcIiB9XG4gICAgXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGh0dHBTZXJ2aWNlOiBCcm9rZXJIdHRwU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBjb25zdGFudHM6IENvbnN0YW50c1NlcnZpY2UpIHsgfVxuXG4gICAgcHVibGljIGdldFRpcG9sb2dpZVRhc3NlKCk6IEFycmF5PERkbEl0ZW0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGlwb2xvZ2llVGFzc2U7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFRpcGlBZmZpdHR1YXJpKCk6IEFycmF5PERkbEl0ZW0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGlwaUFmZml0dHVhcmlvO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRFdXJpYm9yKCk6IEFycmF5PERkbEl0ZW0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXVyaWJvcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VGlwaU9taShpZENvbXVuZUlzdGF0OiBzdHJpbmcpOiBBcnJheTxEZGxJdGVtPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpcGlPbWk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldERyb3Bkb3duKFRpcG9kZGw6IG51bWJlciwgRmlsdHJvOiBzdHJpbmcsIE9yZGluYTogc3RyaW5nLCBDb21wb25pOiBzdHJpbmcsIFByaW1vVnVvdG86IHN0cmluZywgUHJpbW9UdXR0aTogc3RyaW5nKTogT2JzZXJ2YWJsZTxIdHRwLkh0dHBSZXNwb25zZT4ge1xuICAgICAgICBjb25zdCBwYXRoID0gJy8nICsgVGlwb2RkbCArICcvJyArIEZpbHRybyArICcvJyArIE9yZGluYSArICcvJyArIENvbXBvbmkgKyAnLycgKyBQcmltb1Z1b3RvICsgJy8nICsgUHJpbW9UdXR0aTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KHRoaXMuY29uc3RhbnRzLmdldERyb3Bkb3duU2VydmljZU5hbWUgKyBwYXRoKTtcbiAgICB9XG59XG4iXX0=