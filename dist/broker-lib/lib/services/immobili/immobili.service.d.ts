import { Observable } from 'rxjs';
import { Http } from '../../models/common/http.namespace';
import { BrokerHttpService } from '../common/brokerhttp.service';
import { ConstantsService } from '../common/constants.service';
import { ImmobileDettaglio } from '../../models/immobili/immobileDettaglio';
import { CancellazioneImmobileRequest } from '../../models/immobili/cancellazioneImmobileRequest';
/**
 * Classe che raduna tutti i servizi riconducibili all'entità immobile
 *
 * @export
 * ImmobiliService
 */
export declare class ImmobiliService {
    private httpService;
    private constants;
    constructor(httpService: BrokerHttpService, constants: ConstantsService);
    /**
     * Chiamata per ottenere l'elenco degli immobili appartenenti ad uno specifico cliente
     *
     * @param  id_cliente
     * @param  tokenValue Token di autenticazione ottenuto dalla login
     * @returns response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
     * Data dentro al quale si trova l'elenco degli immobili
     */
    getImmobili(id_cliente: string): Observable<Http.HttpResponse>;
    /**
     * Chiamata per ottenere il singolo immobile passando il suo identificativo unico
     *
     * @param  immobile_id
     * @param  tokenValue Token di autenticazione ottenuto dalla login
     * @returns response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
     * Data dentro al quale si trova l'oggetto Immobile
     */
    getImmobile(immobile_id: string): Observable<Http.HttpResponse>;
    /**
     * Chiamata per inserire un nuovo immobile
     *
     * @param  immobile
     * @param  tokenValue Token di autenticazione ottenuto dalla login
     * @returns response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
     * Data dentro al quale si trova l'id dell'immobile appena salvato
     */
    putImmobile(immobile: ImmobileDettaglio): Observable<Http.HttpResponse>;
    /**
     * Chiamata per cancellare un immobile passando il suo identificativo unico
     *
     * @param  cancellazioneRequest
     * @param  tokenValue Token di autenticazione ottenuto dalla login
     * @returns response contenente l'esito in Success e ErrorMessages.
     */
    delImmobile(cancellazioneRequest: CancellazioneImmobileRequest): Observable<Http.HttpResponse>;
    /**
     * Chiamata per attivare il flusso di invio dei dati catastali via mail all'utente proprietario dell'immobile di cui deve
     * essere passato l'identificativo unico
     *
     * @param  immobile_id
     * @param  tokenValue Token di autenticazione ottenuto dalla login
     * @returns response contenente l'esito in Success e ErrorMessages.
     */
    invioDatiCatastali(immobile_id: number): Observable<Http.HttpResponse>;
    getPianoAmmortamentoImmobile(immobile_id: number): Observable<Http.HttpResponse>;
    /**
     * Chiamata per ottenere la tassazione imu dell'immobile
     *
     * @param  primacasa
     * @param  affittata
     * @param  anno anno per il quale viene richiesta l'IMU
     * @param  immobile_id
     * @returns response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
     * Data dentro al quale si trova l'oggetto Imu
     */
    getImu(primacasa: boolean, affittata: boolean, anno: string, immobile_id: string): Observable<Http.HttpResponse>;
    private getBooleanAsString;
}
