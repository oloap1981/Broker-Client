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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJva2VyLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9icm9rZXItbGliLyIsInNvdXJjZXMiOlsibGliL2Jyb2tlci1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXBELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQXVCMUUsTUFBTSxPQUFPLGVBQWU7Ozs7SUFDMUIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLGVBQWU7WUFDekIsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDO0lBQ0osQ0FBQzs7O1lBM0JGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsRUFDYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsZ0JBQWdCO29CQUNoQixrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7aUJBQzdCO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxnQkFBZ0I7b0JBQ2hCLGlCQUFpQjtvQkFDakIsZUFBZTtvQkFDZixnQkFBZ0I7b0JBQ2hCLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZixnQkFBZ0I7b0JBQ2hCLG1CQUFtQjtvQkFDbkIsWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUUsRUFDUjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXJyb3JIYW5kbGVyU2VydmljZSB9IGZyb20gJy4vaGFuZGxlci9lcnJvci9lcnJvci1oYW5kbGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9nRXJyb3JpU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbG9nLWVycm9yaS9sb2ctZXJyb3JpLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9TdG9yYWdlJztcbmltcG9ydCB7IElvbmljU3RvcmFnZU1vZHVsZSB9IGZyb20gJ0Bpb25pYy9TdG9yYWdlJztcblxuaW1wb3J0IHsgQ29uc3RhbnRzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY29tbW9uL2NvbnN0YW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IEJyb2tlckh0dHBTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jb21tb24vYnJva2VyaHR0cC5zZXJ2aWNlJztcbmltcG9ydCB7IEltbW9iaWxpU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvaW1tb2JpbGkvaW1tb2JpbGkuc2VydmljZSc7XG5pbXBvcnQgeyBDbGllbnRpU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY2xpZW50aS9jbGllbnRpLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRHJvcGRvd25TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kcm9wZG93bi9kcm9wZG93bi5zZXJ2aWNlJztcbmltcG9ydCB7IEljb25lU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvaWNvbmUvaWNvbmUuc2VydmljZSc7XG5pbXBvcnQgeyBEb2N1bWVudGlTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kb2N1bWVudGkvZG9jdW1lbnRpLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgSW9uaWNTdG9yYWdlTW9kdWxlLmZvclJvb3QoKVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBDb25zdGFudHNTZXJ2aWNlLFxuICAgIEJyb2tlckh0dHBTZXJ2aWNlLFxuICAgIEltbW9iaWxpU2VydmljZSxcbiAgICBEb2N1bWVudGlTZXJ2aWNlLFxuICAgIENsaWVudGlTZXJ2aWNlLFxuICAgIERyb3Bkb3duU2VydmljZSxcbiAgICBMb2dFcnJvcmlTZXJ2aWNlLFxuICAgIEVycm9ySGFuZGxlclNlcnZpY2UsXG4gICAgSWNvbmVTZXJ2aWNlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBCcm9rZXJMaWJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEJyb2tlckxpYk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW10sXG4gICAgfTtcbiAgfVxufVxuIl19