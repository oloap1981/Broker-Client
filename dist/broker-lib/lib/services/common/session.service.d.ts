import { WsToken } from './../../models/login/wsToken';
import { StoreService } from '../store/store.service';
import { ImmobiliService } from '../immobili/immobili.service';
import { Cliente } from '../../models/clienti/cliente';
import { Immobile } from '../../models/immobili/immobile';
import { ImmobileDettaglio } from '../../models/immobili/immobileDettaglio';
import { Connection } from '../../models/common/connection';
export declare class SessionService {
    private storeService;
    private immobiliService;
    cliente: Cliente;
    immobiliCliente: Array<Immobile>;
    immobile: ImmobileDettaglio;
    private elencoImmobiliSubject;
    elencoImmobiliObs: import("rxjs").Observable<boolean>;
    private userData;
    private clientData;
    private connection;
    private userDataSubject;
    userDataObservable: import("rxjs").Observable<boolean>;
    private intestazionePagina;
    private paginaPrecedente;
    constructor(storeService: StoreService, immobiliService: ImmobiliService);
    setPaginaPrecedente(pagina: string): void;
    getPaginaPrecedente(): string;
    setIntestazionePagina(intestazione: string): void;
    getIntestazionePagina(): string;
    setCliente(cliente: Cliente): void;
    caricaImmobili(idCliente: string): void;
    clearUserData(): void;
    setUserData(userData: WsToken): number;
    setClientData(client: Cliente): number;
    getUserData(): WsToken;
    existsSessionData(): boolean;
    loadUserData(): void;
    getCliente(): Cliente;
    clearCliente(): void;
    getImmobiliCliente(): Array<Immobile>;
    setImmobileDettaglio(immobileDettaglio: ImmobileDettaglio): void;
    getImmobileDettaglio(): ImmobileDettaglio;
    clearImmobileDettaglio(): void;
    setConnection(conn: Connection): void;
    getConnection(): Connection;
}
