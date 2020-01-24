import { Storage } from '@ionic/Storage';
import { WsToken } from '../../models/login/wsToken';
import { Cliente } from '../../models/clienti/cliente';
export declare class StoreService {
    private storage;
    private USERKEY;
    private CLIENTEKEY;
    private wsToken;
    private cliente;
    constructor(storage: Storage);
    clearUserData(): void;
    setUserData(ws_token: WsToken): number;
    setClientData(cliente: Cliente): number;
    getUserDataPromise(): Promise<{}>;
    getClientePromise(): Promise<{}>;
}
