/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
// import { Platform, MenuController, Nav, NavController, AlertController, ToastController } from 'ionic-angular';
export class AlertService {
    /**
     * @param {?} alertController
     */
    constructor(alertController) {
        this.alertController = alertController;
    }
    /**
     * @param {?} alertMessage
     * @return {?}
     */
    presentAlert(alertMessage) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const alert = this.alertController.create({
                header: 'Conferma',
                message: alertMessage,
                buttons: ['OK']
            });
            alert.then((/**
             * @param {?} _alert
             * @return {?}
             */
            (_alert) => {
                _alert.present();
            }));
        });
    }
    /**
     * @param {?} alertMessage
     * @return {?}
     */
    presentErrorAlert(alertMessage) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const alert = this.alertController.create({
                header: 'Errore',
                message: alertMessage,
                buttons: ['CHIUDI']
            });
            alert.then((/**
             * @param {?} _alert
             * @return {?}
             */
            (_alert) => {
                _alert.present();
            }));
        });
    }
}
AlertService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AlertService.ctorParameters = () => [
    { type: AlertController }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AlertService.prototype.alertController;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jyb2tlci1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvY29tbW9uL2FsZXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFLakQsTUFBTSxPQUFPLFlBQVk7Ozs7SUFFckIsWUFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQ3BELENBQUM7Ozs7O0lBRVksWUFBWSxDQUFDLFlBQW9COzs7a0JBQ3BDLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQztnQkFDdEMsTUFBTSxFQUFFLFVBQVU7Z0JBQ2xCLE9BQU8sRUFBRSxZQUFZO2dCQUNyQixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUM7YUFDbEIsQ0FBQztZQUNGLEtBQUssQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtnQkFDdkIsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3JCLENBQUMsRUFBQyxDQUFDO1FBQ1AsQ0FBQztLQUFBOzs7OztJQUVZLGlCQUFpQixDQUFDLFlBQW9COzs7a0JBQ3pDLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQztnQkFDdEMsTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLE9BQU8sRUFBRSxZQUFZO2dCQUNyQixPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7YUFDdEIsQ0FBQztZQUNGLEtBQUssQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtnQkFDdkIsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3JCLENBQUMsRUFBQyxDQUFDO1FBQ1AsQ0FBQztLQUFBOzs7WUExQkosVUFBVTs7OztZQUpGLGVBQWU7Ozs7Ozs7SUFPUix1Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGVydENvbnRyb2xsZXIgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG4vLyBpbXBvcnQgeyBQbGF0Zm9ybSwgTWVudUNvbnRyb2xsZXIsIE5hdiwgTmF2Q29udHJvbGxlciwgQWxlcnRDb250cm9sbGVyLCBUb2FzdENvbnRyb2xsZXIgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWxlcnRTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYWxlcnRDb250cm9sbGVyOiBBbGVydENvbnRyb2xsZXIpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgcHJlc2VudEFsZXJ0KGFsZXJ0TWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGFsZXJ0ID0gdGhpcy5hbGVydENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgICAgICAgIGhlYWRlcjogJ0NvbmZlcm1hJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGFsZXJ0TWVzc2FnZSxcbiAgICAgICAgICAgIGJ1dHRvbnM6IFsnT0snXVxuICAgICAgICB9KTtcbiAgICAgICAgYWxlcnQudGhlbigoX2FsZXJ0OiBhbnkpID0+IHtcbiAgICAgICAgICAgIF9hbGVydC5wcmVzZW50KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBwcmVzZW50RXJyb3JBbGVydChhbGVydE1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICBjb25zdCBhbGVydCA9IHRoaXMuYWxlcnRDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICAgICAgICBoZWFkZXI6ICdFcnJvcmUnLFxuICAgICAgICAgICAgbWVzc2FnZTogYWxlcnRNZXNzYWdlLFxuICAgICAgICAgICAgYnV0dG9uczogWydDSElVREknXVxuICAgICAgICB9KTtcbiAgICAgICAgYWxlcnQudGhlbigoX2FsZXJ0OiBhbnkpID0+IHtcbiAgICAgICAgICAgIF9hbGVydC5wcmVzZW50KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==