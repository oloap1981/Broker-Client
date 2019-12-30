import { AlertController } from '@ionic/angular';
export declare class AlertService {
    private alertController;
    constructor(alertController: AlertController);
    presentAlert(alertMessage: string): Promise<void>;
    presentErrorAlert(alertMessage: string): Promise<void>;
}
