/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
// import { Platform, MenuController, Nav, NavController, AlertController, ToastController } from 'ionic-angular';
var AlertService = /** @class */ (function () {
    function AlertService(alertController) {
        this.alertController = alertController;
    }
    /**
     * @param {?} alertMessage
     * @return {?}
     */
    AlertService.prototype.presentAlert = /**
     * @param {?} alertMessage
     * @return {?}
     */
    function (alertMessage) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                alert = this.alertController.create({
                    header: 'Conferma',
                    message: alertMessage,
                    buttons: ['OK']
                });
                alert.then((/**
                 * @param {?} _alert
                 * @return {?}
                 */
                function (_alert) {
                    _alert.present();
                }));
                return [2 /*return*/];
            });
        });
    };
    /**
     * @param {?} alertMessage
     * @return {?}
     */
    AlertService.prototype.presentErrorAlert = /**
     * @param {?} alertMessage
     * @return {?}
     */
    function (alertMessage) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                alert = this.alertController.create({
                    header: 'Errore',
                    message: alertMessage,
                    buttons: ['CHIUDI']
                });
                alert.then((/**
                 * @param {?} _alert
                 * @return {?}
                 */
                function (_alert) {
                    _alert.present();
                }));
                return [2 /*return*/];
            });
        });
    };
    AlertService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AlertService.ctorParameters = function () { return [
        { type: AlertController }
    ]; };
    return AlertService;
}());
export { AlertService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AlertService.prototype.alertController;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jyb2tlci1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvY29tbW9uL2FsZXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFJakQ7SUFHSSxzQkFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQ3BELENBQUM7Ozs7O0lBRVksbUNBQVk7Ozs7SUFBekIsVUFBMEIsWUFBb0I7Ozs7Z0JBQ3BDLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQztvQkFDdEMsTUFBTSxFQUFFLFVBQVU7b0JBQ2xCLE9BQU8sRUFBRSxZQUFZO29CQUNyQixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUM7aUJBQ2xCLENBQUM7Z0JBQ0YsS0FBSyxDQUFDLElBQUk7Ozs7Z0JBQUMsVUFBQyxNQUFXO29CQUNuQixNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3JCLENBQUMsRUFBQyxDQUFDOzs7O0tBQ047Ozs7O0lBRVksd0NBQWlCOzs7O0lBQTlCLFVBQStCLFlBQW9COzs7O2dCQUN6QyxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7b0JBQ3RDLE1BQU0sRUFBRSxRQUFRO29CQUNoQixPQUFPLEVBQUUsWUFBWTtvQkFDckIsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO2lCQUN0QixDQUFDO2dCQUNGLEtBQUssQ0FBQyxJQUFJOzs7O2dCQUFDLFVBQUMsTUFBVztvQkFDbkIsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNyQixDQUFDLEVBQUMsQ0FBQzs7OztLQUNOOztnQkExQkosVUFBVTs7OztnQkFKRixlQUFlOztJQStCeEIsbUJBQUM7Q0FBQSxBQTNCRCxJQTJCQztTQTFCWSxZQUFZOzs7Ozs7SUFFVCx1Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGVydENvbnRyb2xsZXIgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG4vLyBpbXBvcnQgeyBQbGF0Zm9ybSwgTWVudUNvbnRyb2xsZXIsIE5hdiwgTmF2Q29udHJvbGxlciwgQWxlcnRDb250cm9sbGVyLCBUb2FzdENvbnRyb2xsZXIgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWxlcnRTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYWxlcnRDb250cm9sbGVyOiBBbGVydENvbnRyb2xsZXIpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgcHJlc2VudEFsZXJ0KGFsZXJ0TWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGFsZXJ0ID0gdGhpcy5hbGVydENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgICAgICAgIGhlYWRlcjogJ0NvbmZlcm1hJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGFsZXJ0TWVzc2FnZSxcbiAgICAgICAgICAgIGJ1dHRvbnM6IFsnT0snXVxuICAgICAgICB9KTtcbiAgICAgICAgYWxlcnQudGhlbigoX2FsZXJ0OiBhbnkpID0+IHtcbiAgICAgICAgICAgIF9hbGVydC5wcmVzZW50KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBwcmVzZW50RXJyb3JBbGVydChhbGVydE1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICBjb25zdCBhbGVydCA9IHRoaXMuYWxlcnRDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICAgICAgICBoZWFkZXI6ICdFcnJvcmUnLFxuICAgICAgICAgICAgbWVzc2FnZTogYWxlcnRNZXNzYWdlLFxuICAgICAgICAgICAgYnV0dG9uczogWydDSElVREknXVxuICAgICAgICB9KTtcbiAgICAgICAgYWxlcnQudGhlbigoX2FsZXJ0OiBhbnkpID0+IHtcbiAgICAgICAgICAgIF9hbGVydC5wcmVzZW50KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==