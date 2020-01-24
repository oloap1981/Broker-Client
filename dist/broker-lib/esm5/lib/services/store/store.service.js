/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { Storage } from '@ionic/Storage';
var StoreService = /** @class */ (function () {
    function StoreService(storage) {
        this.storage = storage;
        this.USERKEY = "user";
        this.CLIENTEKEY = "client";
        this.wsToken = null;
    }
    /**
     * @return {?}
     */
    StoreService.prototype.clearUserData = /**
     * @return {?}
     */
    function () {
        this.storage.clear();
        this.wsToken = null;
        this.cliente = null;
    };
    /**
     * @param {?} ws_token
     * @return {?}
     */
    StoreService.prototype.setUserData = /**
     * @param {?} ws_token
     * @return {?}
     */
    function (ws_token) {
        console.log("setUserData");
        this.wsToken = ws_token;
        if (ws_token != null) {
            this.storage.set(this.USERKEY, ws_token).then((/**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                console.log(val);
            }));
        }
        else {
            return -1;
        }
        return 1;
    };
    /**
     * @param {?} cliente
     * @return {?}
     */
    StoreService.prototype.setClientData = /**
     * @param {?} cliente
     * @return {?}
     */
    function (cliente) {
        console.log("setUserData");
        this.cliente = cliente;
        if (cliente != null) {
            this.storage.set(this.CLIENTEKEY, cliente).then((/**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                console.log(val);
            }));
        }
        else {
            return -1;
        }
        return 1;
    };
    /**
     * @return {?}
     */
    StoreService.prototype.getUserDataPromise = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            if (_this.wsToken == null) {
                // store service prima inizializzaione
                _this.storage.get(_this.USERKEY).then((/**
                 * @param {?} val
                 * @return {?}
                 */
                function (val) {
                    // recuperato token dal database
                    console.log(val);
                    if (val != null) {
                        resolve(val);
                    }
                    else {
                        console.log("necessario login");
                        _this.setUserData(null);
                        _this.wsToken = null;
                        // devo andare alla pagina del login
                        resolve(null);
                    }
                }));
            }
            else {
                // store service già inizializzato
                // come al punto precedente servirebbe controllare il token ed eventualmente fare di nuovo il login;
                resolve(_this.wsToken);
            }
        }));
    };
    /**
     * @return {?}
     */
    StoreService.prototype.getClientePromise = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            if (_this.cliente == null) {
                // store service prima inizializzaione
                _this.storage.get(_this.CLIENTEKEY).then((/**
                 * @param {?} val
                 * @return {?}
                 */
                function (val) {
                    // recuperato token dal database
                    console.log(val);
                    if (val != null) {
                        resolve(val);
                    }
                    else {
                        console.log("necessario login");
                        _this.setClientData(null);
                        _this.cliente = null;
                        // devo andare alla pagina del login
                        resolve(null);
                    }
                }));
            }
            else {
                // store service già inizializzato
                // come al punto precedente servirebbe controllare il token ed eventualmente fare di nuovo il login;
                resolve(_this.cliente);
            }
        }));
    };
    StoreService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StoreService.ctorParameters = function () { return [
        { type: Storage }
    ]; };
    return StoreService;
}());
export { StoreService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StoreService.prototype.USERKEY;
    /**
     * @type {?}
     * @private
     */
    StoreService.prototype.CLIENTEKEY;
    /**
     * @type {?}
     * @private
     */
    StoreService.prototype.wsToken;
    /**
     * @type {?}
     * @private
     */
    StoreService.prototype.cliente;
    /**
     * @type {?}
     * @private
     */
    StoreService.prototype.storage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jyb2tlci1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc3RvcmUvc3RvcmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJekM7SUFTSSxzQkFBb0IsT0FBZ0I7UUFBaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQU41QixZQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxRQUFRLENBQUM7UUFNMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVNLG9DQUFhOzs7SUFBcEI7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRU0sa0NBQVc7Ozs7SUFBbEIsVUFBbUIsUUFBaUI7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztRQUN4QixJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQyxHQUFHO2dCQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLENBQUMsRUFBQyxDQUFDO1NBQ047YUFBTTtZQUNILE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDYjtRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQzs7Ozs7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QkFBeUI7Ozs7O0lBQ3pCLCtCQUF5Qjs7Ozs7SUFFYiwrQkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAaW9uaWMvU3RvcmFnZSc7XG5pbXBvcnQgeyBXc1Rva2VuIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2xvZ2luL3dzVG9rZW4nO1xuaW1wb3J0IHsgQ2xpZW50ZSB9IGZyb20gJy4uLy4uL21vZGVscy9jbGllbnRpL2NsaWVudGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RvcmVTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgVVNFUktFWSA9IFwidXNlclwiO1xuICAgIHByaXZhdGUgQ0xJRU5URUtFWSA9IFwiY2xpZW50XCI7XG5cbiAgICBwcml2YXRlIHdzVG9rZW46IFdzVG9rZW47XG4gICAgcHJpdmF0ZSBjbGllbnRlOiBDbGllbnRlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlKSB7XG4gICAgICAgIHRoaXMud3NUb2tlbiA9IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyVXNlckRhdGEoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5jbGVhcigpO1xuICAgICAgICB0aGlzLndzVG9rZW4gPSBudWxsO1xuICAgICAgICB0aGlzLmNsaWVudGUgPSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRVc2VyRGF0YSh3c190b2tlbjogV3NUb2tlbik6IG51bWJlciB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2V0VXNlckRhdGFcIik7XG4gICAgICAgIHRoaXMud3NUb2tlbiA9IHdzX3Rva2VuO1xuICAgICAgICBpZiAod3NfdG9rZW4gIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNldCh0aGlzLlVTRVJLRVksIHdzX3Rva2VuKS50aGVuKCh2YWwpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgcHVibGljIHNldENsaWVudERhdGEoY2xpZW50ZTogQ2xpZW50ZSk6IG51bWJlciB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2V0VXNlckRhdGFcIik7XG4gICAgICAgIHRoaXMuY2xpZW50ZSA9IGNsaWVudGU7XG4gICAgICAgIGlmIChjbGllbnRlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5zZXQodGhpcy5DTElFTlRFS0VZLCBjbGllbnRlKS50aGVuKCh2YWwpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFVzZXJEYXRhUHJvbWlzZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMud3NUb2tlbiA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gc3RvcmUgc2VydmljZSBwcmltYSBpbml6aWFsaXp6YWlvbmVcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KHRoaXMuVVNFUktFWSkudGhlbigodmFsOiBXc1Rva2VuKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlY3VwZXJhdG8gdG9rZW4gZGFsIGRhdGFiYXNlXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2YWwpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJuZWNlc3NhcmlvIGxvZ2luXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRVc2VyRGF0YShudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud3NUb2tlbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkZXZvIGFuZGFyZSBhbGxhIHBhZ2luYSBkZWwgbG9naW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gc3RvcmUgc2VydmljZSBnacOgIGluaXppYWxpenphdG9cblxuICAgICAgICAgICAgICAgIC8vIGNvbWUgYWwgcHVudG8gcHJlY2VkZW50ZSBzZXJ2aXJlYmJlIGNvbnRyb2xsYXJlIGlsIHRva2VuIGVkIGV2ZW50dWFsbWVudGUgZmFyZSBkaSBudW92byBpbCBsb2dpbjtcblxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy53c1Rva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldENsaWVudGVQcm9taXNlKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5jbGllbnRlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBzdG9yZSBzZXJ2aWNlIHByaW1hIGluaXppYWxpenphaW9uZVxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5nZXQodGhpcy5DTElFTlRFS0VZKS50aGVuKCh2YWw6IENsaWVudGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVjdXBlcmF0byB0b2tlbiBkYWwgZGF0YWJhc2VcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZhbCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5lY2Vzc2FyaW8gbG9naW5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldENsaWVudERhdGEobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWVudGUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGV2byBhbmRhcmUgYWxsYSBwYWdpbmEgZGVsIGxvZ2luXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHN0b3JlIHNlcnZpY2UgZ2nDoCBpbml6aWFsaXp6YXRvXG5cbiAgICAgICAgICAgICAgICAvLyBjb21lIGFsIHB1bnRvIHByZWNlZGVudGUgc2VydmlyZWJiZSBjb250cm9sbGFyZSBpbCB0b2tlbiBlZCBldmVudHVhbG1lbnRlIGZhcmUgZGkgbnVvdm8gaWwgbG9naW47XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuY2xpZW50ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==