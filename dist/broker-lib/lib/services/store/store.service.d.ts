import { Storage } from '@ionic/Storage';
import { WsToken } from '../../models/login/wsToken';
export declare class StoreService {
    private storage;
    private USERKEY;
    private wsToken;
    constructor(storage: Storage);
    clearUserData(): void;
    setUserData(ws_token: WsToken): number;
    getUserDataPromise(): Promise<{}>;
}
