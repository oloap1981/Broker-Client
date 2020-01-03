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
export class BrokerLibModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: BrokerLibModule,
            providers: [],
        };
    }
}
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
                    ClientiService,
                    DropdownService,
                    LogErroriService,
                    ErrorHandlerService,
                    IconeService
                ],
                exports: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJva2VyLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9icm9rZXItbGliLyIsInNvdXJjZXMiOlsibGliL2Jyb2tlci1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXBELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQXNCOUQsTUFBTSxPQUFPLGVBQWU7Ozs7SUFDMUIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLGVBQWU7WUFDekIsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDO0lBQ0osQ0FBQzs7O1lBMUJGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsRUFDYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsZ0JBQWdCO29CQUNoQixrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7aUJBQzdCO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxnQkFBZ0I7b0JBQ2hCLGlCQUFpQjtvQkFDakIsZUFBZTtvQkFDZixjQUFjO29CQUNkLGVBQWU7b0JBQ2YsZ0JBQWdCO29CQUNoQixtQkFBbUI7b0JBQ25CLFlBQVk7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFLEVBQ1I7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVycm9ySGFuZGxlclNlcnZpY2UgfSBmcm9tICcuL2hhbmRsZXIvZXJyb3IvZXJyb3ItaGFuZGxlci5zZXJ2aWNlJztcbmltcG9ydCB7IExvZ0Vycm9yaVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2xvZy1lcnJvcmkvbG9nLWVycm9yaS5zZXJ2aWNlJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAaW9uaWMvU3RvcmFnZSc7XG5pbXBvcnQgeyBJb25pY1N0b3JhZ2VNb2R1bGUgfSBmcm9tICdAaW9uaWMvU3RvcmFnZSc7XG5cbmltcG9ydCB7IENvbnN0YW50c1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NvbW1vbi9jb25zdGFudHMuc2VydmljZSc7XG5pbXBvcnQgeyBCcm9rZXJIdHRwU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY29tbW9uL2Jyb2tlcmh0dHAuc2VydmljZSc7XG5pbXBvcnQgeyBJbW1vYmlsaVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2ltbW9iaWxpL2ltbW9iaWxpLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2xpZW50aVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NsaWVudGkvY2xpZW50aS5zZXJ2aWNlJztcblxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IERyb3Bkb3duU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZHJvcGRvd24vZHJvcGRvd24uc2VydmljZSc7XG5pbXBvcnQgeyBJY29uZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2ljb25lL2ljb25lLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgSW9uaWNTdG9yYWdlTW9kdWxlLmZvclJvb3QoKVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBDb25zdGFudHNTZXJ2aWNlLFxuICAgIEJyb2tlckh0dHBTZXJ2aWNlLFxuICAgIEltbW9iaWxpU2VydmljZSxcbiAgICBDbGllbnRpU2VydmljZSxcbiAgICBEcm9wZG93blNlcnZpY2UsXG4gICAgTG9nRXJyb3JpU2VydmljZSxcbiAgICBFcnJvckhhbmRsZXJTZXJ2aWNlLFxuICAgIEljb25lU2VydmljZVxuICBdLFxuICBleHBvcnRzOiBbXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQnJva2VyTGliTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBCcm9rZXJMaWJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==