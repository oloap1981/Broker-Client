/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ErrorHandlerService } from './handler/error/error-handler.service';
import { LogErroriService } from './services/log-errori/log-errori.service';
import { NgModule } from '@angular/core';
import { IonicStorageModule } from '@ionic/Storage';
import { ConstantsService } from './services/common/constants.service';
import { BrokerHttpService } from './services/common/brokerhttp.service';
import { ImmobiliService } from './services/immobili/immobili.service';
import { ClientiService } from './services/clienti/clienti.service';
import { HttpClientModule } from '@angular/common/http';
import { DropdownService } from './services/dropdown/dropdown.service';
import { IconeService } from './services/icone/icone.service';
import { DocumentiService } from './services/documenti/documenti.service';
var BrokerLibModule = /** @class */ (function () {
    function BrokerLibModule() {
    }
    /**
     * @return {?}
     */
    BrokerLibModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: BrokerLibModule,
            providers: [],
        };
    };
    BrokerLibModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [],
                    imports: [
                        HttpClientModule,
                        IonicStorageModule.forRoot()
                    ],
                    providers: [
                        ConstantsService,
                        BrokerHttpService,
                        ImmobiliService,
                        DocumentiService,
                        ClientiService,
                        DropdownService,
                        LogErroriService,
                        ErrorHandlerService,
                        IconeService
                    ],
                    exports: []
                },] }
    ];
    return BrokerLibModule;
}());
export { BrokerLibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJva2VyLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9icm9rZXItbGliLyIsInNvdXJjZXMiOlsibGliL2Jyb2tlci1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXBELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUUxRTtJQUFBO0lBNEJBLENBQUM7Ozs7SUFOUSx1QkFBTzs7O0lBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGVBQWU7WUFDekIsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDO0lBQ0osQ0FBQzs7Z0JBM0JGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsRUFDYjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsZ0JBQWdCO3dCQUNoQixrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7cUJBQzdCO29CQUNELFNBQVMsRUFBRTt3QkFDVCxnQkFBZ0I7d0JBQ2hCLGlCQUFpQjt3QkFDakIsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLG1CQUFtQjt3QkFDbkIsWUFBWTtxQkFDYjtvQkFDRCxPQUFPLEVBQUUsRUFDUjtpQkFDRjs7SUFRRCxzQkFBQztDQUFBLEFBNUJELElBNEJDO1NBUFksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVycm9ySGFuZGxlclNlcnZpY2UgfSBmcm9tICcuL2hhbmRsZXIvZXJyb3IvZXJyb3ItaGFuZGxlci5zZXJ2aWNlJztcbmltcG9ydCB7IExvZ0Vycm9yaVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2xvZy1lcnJvcmkvbG9nLWVycm9yaS5zZXJ2aWNlJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAaW9uaWMvU3RvcmFnZSc7XG5pbXBvcnQgeyBJb25pY1N0b3JhZ2VNb2R1bGUgfSBmcm9tICdAaW9uaWMvU3RvcmFnZSc7XG5cbmltcG9ydCB7IENvbnN0YW50c1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NvbW1vbi9jb25zdGFudHMuc2VydmljZSc7XG5pbXBvcnQgeyBCcm9rZXJIdHRwU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY29tbW9uL2Jyb2tlcmh0dHAuc2VydmljZSc7XG5pbXBvcnQgeyBJbW1vYmlsaVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2ltbW9iaWxpL2ltbW9iaWxpLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2xpZW50aVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NsaWVudGkvY2xpZW50aS5zZXJ2aWNlJztcblxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IERyb3Bkb3duU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZHJvcGRvd24vZHJvcGRvd24uc2VydmljZSc7XG5pbXBvcnQgeyBJY29uZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2ljb25lL2ljb25lLnNlcnZpY2UnO1xuaW1wb3J0IHsgRG9jdW1lbnRpU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZG9jdW1lbnRpL2RvY3VtZW50aS5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIElvbmljU3RvcmFnZU1vZHVsZS5mb3JSb290KClcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ29uc3RhbnRzU2VydmljZSxcbiAgICBCcm9rZXJIdHRwU2VydmljZSxcbiAgICBJbW1vYmlsaVNlcnZpY2UsXG4gICAgRG9jdW1lbnRpU2VydmljZSxcbiAgICBDbGllbnRpU2VydmljZSxcbiAgICBEcm9wZG93blNlcnZpY2UsXG4gICAgTG9nRXJyb3JpU2VydmljZSxcbiAgICBFcnJvckhhbmRsZXJTZXJ2aWNlLFxuICAgIEljb25lU2VydmljZVxuICBdLFxuICBleHBvcnRzOiBbXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQnJva2VyTGliTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBCcm9rZXJMaWJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==