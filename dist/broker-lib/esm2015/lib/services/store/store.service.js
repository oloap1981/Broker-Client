/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { Storage } from '@ionic/Storage';
export class StoreService {
    /**
     * @param {?} storage
     */
    constructor(storage) {
        this.storage = storage;
        this.USERKEY = "user";
        this.CLIENTEKEY = "client";
        this.wsToken = null;
    }
    /**
     * @return {?}
     */
    clearUserData() {
        this.storage.clear();
        this.wsToken = null;
        this.cliente = null;
    }
    /**
     * @param {?} ws_token
     * @return {?}
     */
    setUserData(ws_token) {
        console.log("setUserData");
        this.wsToken = ws_token;
        if (ws_token != null) {
            this.storage.set(this.USERKEY, ws_token).then((/**
             * @param {?} val
             * @return {?}
             */
            (val) => {
                console.log(val);
            }));
        }
        else {
            return -1;
        }
        return 1;
    }
    /**
     * @param {?} cliente
     * @return {?}
     */
    setClientData(cliente) {
        console.log("setUserData");
        this.cliente = cliente;
        if (cliente != null) {
            this.storage.set(this.CLIENTEKEY, cliente).then((/**
             * @param {?} val
             * @return {?}
             */
            (val) => {
                console.log(val);
            }));
        }
        else {
            return -1;
        }
        return 1;
    }
    /**
     * @return {?}
     */
    getUserDataPromise() {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            if (this.wsToken == null) {
                // store service prima inizializzaione
                this.storage.get(this.USERKEY).then((/**
                 * @param {?} val
                 * @return {?}
                 */
                (val) => {
                    // recuperato token dal database
                    console.log(val);
                    if (val != null) {
                        resolve(val);
                    }
                    else {
                        console.log("necessario login");
                        this.setUserData(null);
                        this.wsToken = null;
                        // devo andare alla pagina del login
                        resolve(null);
                    }
                }));
            }
            else {
                // store service già inizializzato
                // come al punto precedente servirebbe controllare il token ed eventualmente fare di nuovo il login;
                resolve(this.wsToken);
            }
        }));
    }
    /**
     * @return {?}
     */
    getClientePromise() {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            if (this.cliente == null) {
                // store service prima inizializzaione
                this.storage.get(this.CLIENTEKEY).then((/**
                 * @param {?} val
                 * @return {?}
                 */
                (val) => {
                    // recuperato token dal database
                    console.log(val);
                    if (val != null) {
                        resolve(val);
                    }
                    else {
                        console.log("necessario login");
                        this.setClientData(null);
                        this.cliente = null;
                        // devo andare alla pagina del login
                        resolve(null);
                    }
                }));
            }
            else {
                // store service già inizializzato
                // come al punto precedente servirebbe controllare il token ed eventualmente fare di nuovo il login;
                resolve(this.cliente);
            }
        }));
    }
}
StoreService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StoreService.ctorParameters = () => [
    { type: Storage }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jyb2tlci1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc3RvcmUvc3RvcmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLekMsTUFBTSxPQUFPLFlBQVk7Ozs7SUFRckIsWUFBb0IsT0FBZ0I7UUFBaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQU41QixZQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxRQUFRLENBQUM7UUFNMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVNLGFBQWE7UUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDOzs7OztJQUVNLFdBQVcsQ0FBQyxRQUFpQjtRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO1FBQ3hCLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLENBQUMsRUFBQyxDQUFDO1NBQ047YUFBTTtZQUNILE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDYjtRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ2Is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Y2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAaW9uaWMvU3RvcmFnZSc7XG5pbXBvcnQgeyBXc1Rva2VuIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2xvZ2luL3dzVG9rZW4nO1xuaW1wb3J0IHsgQ2xpZW50ZSB9IGZyb20gJy4uLy4uL21vZGVscy9jbGllbnRpL2NsaWVudGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RvcmVTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgVVNFUktFWSA9IFwidXNlclwiO1xuICAgIHByaXZhdGUgQ0xJRU5URUtFWSA9IFwiY2xpZW50XCI7XG5cbiAgICBwcml2YXRlIHdzVG9rZW46IFdzVG9rZW47XG4gICAgcHJpdmF0ZSBjbGllbnRlOiBDbGllbnRlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlKSB7XG4gICAgICAgIHRoaXMud3NUb2tlbiA9IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyVXNlckRhdGEoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5jbGVhcigpO1xuICAgICAgICB0aGlzLndzVG9rZW4gPSBudWxsO1xuICAgICAgICB0aGlzLmNsaWVudGUgPSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRVc2VyRGF0YSh3c190b2tlbjogV3NUb2tlbik6IG51bWJlciB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2V0VXNlckRhdGFcIik7XG4gICAgICAgIHRoaXMud3NUb2tlbiA9IHdzX3Rva2VuO1xuICAgICAgICBpZiAod3NfdG9rZW4gIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNldCh0aGlzLlVTRVJLRVksIHdzX3Rva2VuKS50aGVuKCh2YWwpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgcHVibGljIHNldENsaWVudERhdGEoY2xpZW50ZTogQ2xpZW50ZSk6IG51bWJlciB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2V0VXNlckRhdGFcIik7XG4gICAgICAgIHRoaXMuY2xpZW50ZSA9IGNsaWVudGU7XG4gICAgICAgIGlmIChjbGllbnRlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5zZXQodGhpcy5DTElFTlRFS0VZLCBjbGllbnRlKS50aGVuKCh2YWwpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFVzZXJEYXRhUHJvbWlzZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMud3NUb2tlbiA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gc3RvcmUgc2VydmljZSBwcmltYSBpbml6aWFsaXp6YWlvbmVcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KHRoaXMuVVNFUktFWSkudGhlbigodmFsOiBXc1Rva2VuKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlY3VwZXJhdG8gdG9rZW4gZGFsIGRhdGFiYXNlXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2YWwpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJuZWNlc3NhcmlvIGxvZ2luXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRVc2VyRGF0YShudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud3NUb2tlbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkZXZvIGFuZGFyZSBhbGxhIHBhZ2luYSBkZWwgbG9naW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gc3RvcmUgc2VydmljZSBnacOgIGluaXppYWxpenphdG9cblxuICAgICAgICAgICAgICAgIC8vIGNvbWUgYWwgcHVudG8gcHJlY2VkZW50ZSBzZXJ2aXJlYmJlIGNvbnRyb2xsYXJlIGlsIHRva2VuIGVkIGV2ZW50dWFsbWVudGUgZmFyZSBkaSBudW92byBpbCBsb2dpbjtcblxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy53c1Rva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldENsaWVudGVQcm9taXNlKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5jbGllbnRlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBzdG9yZSBzZXJ2aWNlIHByaW1hIGluaXppYWxpenphaW9uZVxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5nZXQodGhpcy5DTElFTlRFS0VZKS50aGVuKCh2YWw6IENsaWVudGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVjdXBlcmF0byB0b2tlbiBkYWwgZGF0YWJhc2VcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZhbCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5lY2Vzc2FyaW8gbG9naW5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldENsaWVudERhdGEobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWVudGUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGV2byBhbmRhcmUgYWxsYSBwYWdpbmEgZGVsIGxvZ2luXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHN0b3JlIHNlcnZpY2UgZ2nDoCBpbml6aWFsaXp6YXRvXG5cbiAgICAgICAgICAgICAgICAvLyBjb21lIGFsIHB1bnRvIHByZWNlZGVudGUgc2VydmlyZWJiZSBjb250cm9sbGFyZSBpbCB0b2tlbiBlZCBldmVudHVhbG1lbnRlIGZhcmUgZGkgbnVvdm8gaWwgbG9naW47XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuY2xpZW50ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==