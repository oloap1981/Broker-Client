/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { SessionService } from './session.service';
import { Router } from '@angular/router';
// import { Platform, MenuController, Nav, NavController, AlertController, ToastController } from 'ionic-angular';
export class AlertService {
    /**
     * @param {?} alertController
     * @param {?} sessionService
     * @param {?} router
     */
    constructor(alertController, sessionService, router) {
        this.alertController = alertController;
        this.sessionService = sessionService;
        this.router = router;
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
    /**
     * @return {?}
     */
    presentAlertLogout() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const alert = this.alertController.create({
                header: 'Logout',
                message: 'Sicuro di voler uscire?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (/**
                         * @param {?} blah
                         * @return {?}
                         */
                        (blah) => {
                            console.log('Confirm Cancel: blah');
                        })
                    }, {
                        text: 'Si',
                        handler: (/**
                         * @return {?}
                         */
                        () => {
                            this.sessionService.clearUserData();
                            this.router.navigate(['login']);
                        })
                    }
                ]
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
    { type: AlertController },
    { type: SessionService },
    { type: Router }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AlertService.prototype.alertController;
    /**
     * @type {?}
     * @private
     */
    AlertService.prototype.sessionService;
    /** @type {?} */
    AlertService.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jyb2tlci1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvY29tbW9uL2FsZXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUt6QyxNQUFNLE9BQU8sWUFBWTs7Ozs7O0lBRXJCLFlBQW9CLGVBQWdDLEVBQ3hDLGNBQThCLEVBQy9CLE1BQWM7UUFGTCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDeEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQy9CLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDekIsQ0FBQzs7Ozs7SUFFWSxZQUFZLENBQUMsWUFBb0I7OztrQkFDcEMsS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDO2dCQUN0QyxNQUFNLEVBQUUsVUFBVTtnQkFDbEIsT0FBTyxFQUFFLFlBQVk7Z0JBQ3JCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQzthQUNsQixDQUFDO1lBQ0YsS0FBSyxDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLE1BQVcsRUFBRSxFQUFFO2dCQUN2QixNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDckIsQ0FBQyxFQUFDLENBQUM7UUFDUCxDQUFDO0tBQUE7Ozs7O0lBRVksaUJBQWlCLENBQUMsWUFBb0I7OztrQkFDekMsS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDO2dCQUN0QyxNQUFNLEVBQUUsUUFBUTtnQkFDaEIsT0FBTyxFQUFFLFlBQVk7Z0JBQ3JCLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzthQUN0QixDQUFDO1lBQ0YsS0FBSyxDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLE1BQVcsRUFBRSxFQUFFO2dCQUN2QixNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDckIsQ0FBQyxFQUFDLENBQUM7UUFDUCxDQUFDO0tBQUE7Ozs7SUFFWSxrQkFBa0I7OztrQkFDckIsS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDO2dCQUN0QyxNQUFNLEVBQUUsUUFBUTtnQkFDaEIsT0FBTyxFQUFFLHlCQUF5QjtnQkFDbEMsT0FBTyxFQUFFO29CQUNMO3dCQUNJLElBQUksRUFBRSxRQUFRO3dCQUNkLElBQUksRUFBRSxRQUFRO3dCQUNkLFFBQVEsRUFBRSxXQUFXO3dCQUNyQixPQUFPOzs7O3dCQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7NEJBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO3dCQUN4QyxDQUFDLENBQUE7cUJBQ0osRUFBRTt3QkFDQyxJQUFJLEVBQUUsSUFBSTt3QkFDVixPQUFPOzs7d0JBQUUsR0FBRyxFQUFFOzRCQUNWLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUM7NEJBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFDcEMsQ0FBQyxDQUFBO3FCQUNKO2lCQUNKO2FBQ0osQ0FBQztZQUNGLEtBQUssQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtnQkFDdkIsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3JCLENBQUMsRUFBQyxDQUFDO1FBQ1AsQ0FBQztLQUFBOzs7WUF0REosVUFBVTs7OztZQU5GLGVBQWU7WUFDZixjQUFjO1lBQ2QsTUFBTTs7Ozs7OztJQU9DLHVDQUF3Qzs7Ozs7SUFDaEQsc0NBQXNDOztJQUN0Qyw4QkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGVydENvbnRyb2xsZXIgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gJy4vc2Vzc2lvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG4vLyBpbXBvcnQgeyBQbGF0Zm9ybSwgTWVudUNvbnRyb2xsZXIsIE5hdiwgTmF2Q29udHJvbGxlciwgQWxlcnRDb250cm9sbGVyLCBUb2FzdENvbnRyb2xsZXIgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWxlcnRTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYWxlcnRDb250cm9sbGVyOiBBbGVydENvbnRyb2xsZXIsXG4gICAgICAgIHByaXZhdGUgc2Vzc2lvblNlcnZpY2U6IFNlc3Npb25TZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgcHJlc2VudEFsZXJ0KGFsZXJ0TWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGFsZXJ0ID0gdGhpcy5hbGVydENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgICAgICAgIGhlYWRlcjogJ0NvbmZlcm1hJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGFsZXJ0TWVzc2FnZSxcbiAgICAgICAgICAgIGJ1dHRvbnM6IFsnT0snXVxuICAgICAgICB9KTtcbiAgICAgICAgYWxlcnQudGhlbigoX2FsZXJ0OiBhbnkpID0+IHtcbiAgICAgICAgICAgIF9hbGVydC5wcmVzZW50KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBwcmVzZW50RXJyb3JBbGVydChhbGVydE1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICBjb25zdCBhbGVydCA9IHRoaXMuYWxlcnRDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICAgICAgICBoZWFkZXI6ICdFcnJvcmUnLFxuICAgICAgICAgICAgbWVzc2FnZTogYWxlcnRNZXNzYWdlLFxuICAgICAgICAgICAgYnV0dG9uczogWydDSElVREknXVxuICAgICAgICB9KTtcbiAgICAgICAgYWxlcnQudGhlbigoX2FsZXJ0OiBhbnkpID0+IHtcbiAgICAgICAgICAgIF9hbGVydC5wcmVzZW50KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBwcmVzZW50QWxlcnRMb2dvdXQoKSB7XG4gICAgICAgIGNvbnN0IGFsZXJ0ID0gdGhpcy5hbGVydENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgICAgICAgIGhlYWRlcjogJ0xvZ291dCcsXG4gICAgICAgICAgICBtZXNzYWdlOiAnU2ljdXJvIGRpIHZvbGVyIHVzY2lyZT8nLFxuICAgICAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0NhbmNlbCcsXG4gICAgICAgICAgICAgICAgICAgIHJvbGU6ICdjYW5jZWwnLFxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogJ3NlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IChibGFoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ29uZmlybSBDYW5jZWw6IGJsYWgnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1NpJyxcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uU2VydmljZS5jbGVhclVzZXJEYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2xvZ2luJ10pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICAgICAgYWxlcnQudGhlbigoX2FsZXJ0OiBhbnkpID0+IHtcbiAgICAgICAgICAgIF9hbGVydC5wcmVzZW50KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuIl19