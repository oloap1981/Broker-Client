import { Observable } from 'rxjs';
import { Http } from '../../models/common/http.namespace';
import { BrokerHttpService } from '../common/brokerhttp.service';
import { ConstantsService } from '../common/constants.service';
/**
 * Classe che raggruppa i servizi relativi ai Report
 *
 * @export
 * ReportService
 */
export declare class ReportService {
    private httpService;
    private constants;
    constructor(httpService: BrokerHttpService, constants: ConstantsService);
    /**
     * Chiamata per ottenere il report della situazione generale di un cliente
     *
     * @param cliente_id
     * @param tokenValue Token di autenticazione ottenuto dalla login
     * @returns
     */
    getSituazioneGenerale(cliente_id: number): Observable<Http.HttpResponse>;
    /**
     * Chiamata per ottenere i dati che vanno a popolare i grafici
     *
     * @param  cliente_id
     * @param  tokenValue Token di autenticazione ottenuto dalla login
     * @returns
     */
    getGrafici(cliente_id: number): Observable<Http.HttpResponse>;
    /**
     * Chiamata per scatenare l'invio del report generale in formato PDF al cliente passandolo in una mail
     *
     * @param  cliente_id
     * @param  tokenValue Token di autenticazione ottenuto dalla login
     * @returns
     */
    getPdfReport(cliente_id: number): Observable<Http.HttpResponse>;
}
