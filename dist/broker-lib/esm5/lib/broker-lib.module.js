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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJva2VyLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9icm9rZXItbGliLyIsInNvdXJjZXMiOlsibGliL2Jyb2tlci1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXBELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU5RDtJQUFBO0lBMkJBLENBQUM7Ozs7SUFOUSx1QkFBTzs7O0lBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGVBQWU7WUFDekIsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDO0lBQ0osQ0FBQzs7Z0JBMUJGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsRUFDYjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsZ0JBQWdCO3dCQUNoQixrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7cUJBQzdCO29CQUNELFNBQVMsRUFBRTt3QkFDVCxnQkFBZ0I7d0JBQ2hCLGlCQUFpQjt3QkFDakIsZUFBZTt3QkFDZixjQUFjO3dCQUNkLGVBQWU7d0JBQ2YsZ0JBQWdCO3dCQUNoQixtQkFBbUI7d0JBQ25CLFlBQVk7cUJBQ2I7b0JBQ0QsT0FBTyxFQUFFLEVBQ1I7aUJBQ0Y7O0lBUUQsc0JBQUM7Q0FBQSxBQTNCRCxJQTJCQztTQVBZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFcnJvckhhbmRsZXJTZXJ2aWNlIH0gZnJvbSAnLi9oYW5kbGVyL2Vycm9yL2Vycm9yLWhhbmRsZXIuc2VydmljZSc7XG5pbXBvcnQgeyBMb2dFcnJvcmlTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9sb2ctZXJyb3JpL2xvZy1lcnJvcmkuc2VydmljZSc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL1N0b3JhZ2UnO1xuaW1wb3J0IHsgSW9uaWNTdG9yYWdlTW9kdWxlIH0gZnJvbSAnQGlvbmljL1N0b3JhZ2UnO1xuXG5pbXBvcnQgeyBDb25zdGFudHNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jb21tb24vY29uc3RhbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQnJva2VySHR0cFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NvbW1vbi9icm9rZXJodHRwLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW1tb2JpbGlTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9pbW1vYmlsaS9pbW1vYmlsaS5zZXJ2aWNlJztcbmltcG9ydCB7IENsaWVudGlTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jbGllbnRpL2NsaWVudGkuc2VydmljZSc7XG5cbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBEcm9wZG93blNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2Ryb3Bkb3duL2Ryb3Bkb3duLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWNvbmVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9pY29uZS9pY29uZS5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIElvbmljU3RvcmFnZU1vZHVsZS5mb3JSb290KClcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ29uc3RhbnRzU2VydmljZSxcbiAgICBCcm9rZXJIdHRwU2VydmljZSxcbiAgICBJbW1vYmlsaVNlcnZpY2UsXG4gICAgQ2xpZW50aVNlcnZpY2UsXG4gICAgRHJvcGRvd25TZXJ2aWNlLFxuICAgIExvZ0Vycm9yaVNlcnZpY2UsXG4gICAgRXJyb3JIYW5kbGVyU2VydmljZSxcbiAgICBJY29uZVNlcnZpY2VcbiAgXSxcbiAgZXhwb3J0czogW1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEJyb2tlckxpYk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCkge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQnJva2VyTGliTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXSxcbiAgICB9O1xuICB9XG59XG4iXX0=