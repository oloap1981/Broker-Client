import { LogErroriService } from '../../services/log-errori/log-errori.service';
import { ErrorHandler, Injector, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertService } from '../../services/common/alert.service';
import { SessionService } from '../../services/common/session.service';
export declare class ErrorHandlerService implements ErrorHandler {
    private injector;
    private zone;
    private logErroriService;
    private alertService;
    private sessionService;
    constructor(injector: Injector, zone: NgZone, logErroriService: LogErroriService, alertService: AlertService, sessionService: SessionService);
    handleError(error: Error | HttpErrorResponse): void;
}
