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
var AlertService = /** @class */ (function () {
    function AlertService(alertController, sessionService, router) {
        this.alertController = alertController;
        this.sessionService = sessionService;
        this.router = router;
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
    /**
     * @return {?}
     */
    AlertService.prototype.presentAlertLogout = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                alert = this.alertController.create({
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
                            function (blah) {
                                console.log('Confirm Cancel: blah');
                            })
                        }, {
                            text: 'Si',
                            handler: (/**
                             * @return {?}
                             */
                            function () {
                                _this.sessionService.clearUserData();
                                _this.router.navigate(['login']);
                            })
                        }
                    ]
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
        { type: AlertController },
        { type: SessionService },
        { type: Router }
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
    /**
     * @type {?}
     * @private
     */
    AlertService.prototype.sessionService;
    /** @type {?} */
    AlertService.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jyb2tlci1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvY29tbW9uL2FsZXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUl6QztJQUdJLHNCQUFvQixlQUFnQyxFQUN4QyxjQUE4QixFQUMvQixNQUFjO1FBRkwsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ3hDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUMvQixXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ3pCLENBQUM7Ozs7O0lBRVksbUNBQVk7Ozs7SUFBekIsVUFBMEIsWUFBb0I7Ozs7Z0JBQ3BDLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQztvQkFDdEMsTUFBTSxFQUFFLFVBQVU7b0JBQ2xCLE9BQU8sRUFBRSxZQUFZO29CQUNyQixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUM7aUJBQ2xCLENBQUM7Z0JBQ0YsS0FBSyxDQUFDLElBQUk7Ozs7Z0JBQUMsVUFBQyxNQUFXO29CQUNuQixNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3JCLENBQUMsRUFBQyxDQUFDOzs7O0tBQ047Ozs7O0lBRVksd0NBQWlCOzs7O0lBQTlCLFVBQStCLFlBQW9COzs7O2dCQUN6QyxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7b0JBQ3RDLE1BQU0sRUFBRSxRQUFRO29CQUNoQixPQUFPLEVBQUUsWUFBWTtvQkFDckIsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO2lCQUN0QixDQUFDO2dCQUNGLEtBQUssQ0FBQyxJQUFJOzs7O2dCQUFDLFVBQUMsTUFBVztvQkFDbkIsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNyQixDQUFDLEVBQUMsQ0FBQzs7OztLQUNOOzs7O0lBRVkseUNBQWtCOzs7SUFBL0I7Ozs7O2dCQUNVLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQztvQkFDdEMsTUFBTSxFQUFFLFFBQVE7b0JBQ2hCLE9BQU8sRUFBRSx5QkFBeUI7b0JBQ2xDLE9BQU8sRUFBRTt3QkFDTDs0QkFDSSxJQUFJLEVBQUUsUUFBUTs0QkFDZCxJQUFJLEVBQUUsUUFBUTs0QkFDZCxRQUFRLEVBQUUsV0FBVzs0QkFDckIsT0FBTzs7Ozs0QkFBRSxVQUFDLElBQUk7Z0NBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDOzRCQUN4QyxDQUFDLENBQUE7eUJBQ0osRUFBRTs0QkFDQyxJQUFJLEVBQUUsSUFBSTs0QkFDVixPQUFPOzs7NEJBQUU7Z0NBQ0wsS0FBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQ0FDcEMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzRCQUNwQyxDQUFDLENBQUE7eUJBQ0o7cUJBQ0o7aUJBQ0osQ0FBQztnQkFDRixLQUFLLENBQUMsSUFBSTs7OztnQkFBQyxVQUFDLE1BQVc7b0JBQ25CLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDckIsQ0FBQyxFQUFDLENBQUM7Ozs7S0FDTjs7Z0JBdERKLFVBQVU7Ozs7Z0JBTkYsZUFBZTtnQkFDZixjQUFjO2dCQUNkLE1BQU07O0lBNERmLG1CQUFDO0NBQUEsQUF4REQsSUF3REM7U0F2RFksWUFBWTs7Ozs7O0lBRVQsdUNBQXdDOzs7OztJQUNoRCxzQ0FBc0M7O0lBQ3RDLDhCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsZXJ0Q29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSAnLi9zZXNzaW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbi8vIGltcG9ydCB7IFBsYXRmb3JtLCBNZW51Q29udHJvbGxlciwgTmF2LCBOYXZDb250cm9sbGVyLCBBbGVydENvbnRyb2xsZXIsIFRvYXN0Q29udHJvbGxlciB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbGVydFNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhbGVydENvbnRyb2xsZXI6IEFsZXJ0Q29udHJvbGxlcixcbiAgICAgICAgcHJpdmF0ZSBzZXNzaW9uU2VydmljZTogU2Vzc2lvblNlcnZpY2UsXG4gICAgICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcikge1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBwcmVzZW50QWxlcnQoYWxlcnRNZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgYWxlcnQgPSB0aGlzLmFsZXJ0Q29udHJvbGxlci5jcmVhdGUoe1xuICAgICAgICAgICAgaGVhZGVyOiAnQ29uZmVybWEnLFxuICAgICAgICAgICAgbWVzc2FnZTogYWxlcnRNZXNzYWdlLFxuICAgICAgICAgICAgYnV0dG9uczogWydPSyddXG4gICAgICAgIH0pO1xuICAgICAgICBhbGVydC50aGVuKChfYWxlcnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgX2FsZXJ0LnByZXNlbnQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHByZXNlbnRFcnJvckFsZXJ0KGFsZXJ0TWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGFsZXJ0ID0gdGhpcy5hbGVydENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgICAgICAgIGhlYWRlcjogJ0Vycm9yZScsXG4gICAgICAgICAgICBtZXNzYWdlOiBhbGVydE1lc3NhZ2UsXG4gICAgICAgICAgICBidXR0b25zOiBbJ0NISVVESSddXG4gICAgICAgIH0pO1xuICAgICAgICBhbGVydC50aGVuKChfYWxlcnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgX2FsZXJ0LnByZXNlbnQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHByZXNlbnRBbGVydExvZ291dCgpIHtcbiAgICAgICAgY29uc3QgYWxlcnQgPSB0aGlzLmFsZXJ0Q29udHJvbGxlci5jcmVhdGUoe1xuICAgICAgICAgICAgaGVhZGVyOiAnTG9nb3V0JyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdTaWN1cm8gZGkgdm9sZXIgdXNjaXJlPycsXG4gICAgICAgICAgICBidXR0b25zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQ2FuY2VsJyxcbiAgICAgICAgICAgICAgICAgICAgcm9sZTogJ2NhbmNlbCcsXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogKGJsYWgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb25maXJtIENhbmNlbDogYmxhaCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnU2knLFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlc3Npb25TZXJ2aWNlLmNsZWFyVXNlckRhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbG9naW4nXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuICAgICAgICBhbGVydC50aGVuKChfYWxlcnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgX2FsZXJ0LnByZXNlbnQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iXX0=