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
        this.wsToken = null;
    }
    /**
     * @return {?}
     */
    clearUserData() {
        this.storage.clear();
        this.wsToken = null;
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
    StoreService.prototype.wsToken;
    /**
     * @type {?}
     * @private
     */
    StoreService.prototype.storage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jyb2tlci1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc3RvcmUvc3RvcmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJekMsTUFBTSxPQUFPLFlBQVk7Ozs7SUFNckIsWUFBb0IsT0FBZ0I7UUFBaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUo1QixZQUFPLEdBQUcsTUFBTSxDQUFDO1FBS3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFTSxhQUFhO1FBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFTSxXQUFXLENBQUMsUUFBaUI7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztRQUN4QixJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyQixDQUFDLEVBQUMsQ0FBQztTQUNOO2FBQU07WUFDSCxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ2I7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7Ozs7SUFFTSxrQkFBa0I7UUFDckIsT0FBTyxJQUFJLE9BQU87Ozs7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUN6QixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFFO2dCQUN0QixzQ0FBc0M7Z0JBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJOzs7O2dCQUFDLENBQUMsR0FBWSxFQUFFLEVBQUU7b0JBQ2pELGdDQUFnQztvQkFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDakIsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO3dCQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDaEI7eUJBQU07d0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO3dCQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzt3QkFDcEIsb0NBQW9DO3dCQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ2pCO2dCQUNMLENBQUMsRUFDQSxDQUFDO2FBQ0w7aUJBQU07Z0JBQ0gsa0NBQWtDO2dCQUVsQyxvR0FBb0c7Z0JBRXBHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDekI7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7OztZQXZESixVQUFVOzs7O1lBSEYsT0FBTzs7Ozs7OztJQU1aLCtCQUF5Qjs7Ozs7SUFFekIsK0JBQXlCOzs7OztJQUViLCtCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9TdG9yYWdlJztcbmltcG9ydCB7IFdzVG9rZW4gfSBmcm9tICcuLi8uLi9tb2RlbHMvbG9naW4vd3NUb2tlbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdG9yZVNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBVU0VSS0VZID0gXCJ1c2VyXCI7XG5cbiAgICBwcml2YXRlIHdzVG9rZW46IFdzVG9rZW47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2UpIHtcbiAgICAgICAgdGhpcy53c1Rva2VuID0gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXJVc2VyRGF0YSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgIHRoaXMud3NUb2tlbiA9IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFVzZXJEYXRhKHdzX3Rva2VuOiBXc1Rva2VuKTogbnVtYmVyIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzZXRVc2VyRGF0YVwiKTtcbiAgICAgICAgdGhpcy53c1Rva2VuID0gd3NfdG9rZW47XG4gICAgICAgIGlmICh3c190b2tlbiAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KHRoaXMuVVNFUktFWSwgd3NfdG9rZW4pLnRoZW4oKHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VXNlckRhdGFQcm9taXNlKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy53c1Rva2VuID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBzdG9yZSBzZXJ2aWNlIHByaW1hIGluaXppYWxpenphaW9uZVxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5nZXQodGhpcy5VU0VSS0VZKS50aGVuKCh2YWw6IFdzVG9rZW4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVjdXBlcmF0byB0b2tlbiBkYWwgZGF0YWJhc2VcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZhbCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5lY2Vzc2FyaW8gbG9naW5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFVzZXJEYXRhKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53c1Rva2VuID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRldm8gYW5kYXJlIGFsbGEgcGFnaW5hIGRlbCBsb2dpblxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBzdG9yZSBzZXJ2aWNlIGdpw6AgaW5pemlhbGl6emF0b1xuXG4gICAgICAgICAgICAgICAgLy8gY29tZSBhbCBwdW50byBwcmVjZWRlbnRlIHNlcnZpcmViYmUgY29udHJvbGxhcmUgaWwgdG9rZW4gZWQgZXZlbnR1YWxtZW50ZSBmYXJlIGRpIG51b3ZvIGlsIGxvZ2luO1xuXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLndzVG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=