import { AlertController } from '@ionic/angular';
import { SessionService } from './session.service';
import { Router } from '@angular/router';
export declare class AlertService {
    private alertController;
    private sessionService;
    router: Router;
    constructor(alertController: AlertController, sessionService: SessionService, router: Router);
    presentAlert(alertMessage: string): Promise<void>;
    presentErrorAlert(alertMessage: string): Promise<void>;
    presentAlertLogout(): Promise<void>;
}
