import { Observable } from 'rxjs';
import { Http } from '../../models/common/http.namespace';
import { BrokerHttpService } from '../common/brokerhttp.service';
import { ConstantsService } from '../common/constants.service';
export declare class DropdownService {
    private httpService;
    private constants;
    constructor(httpService: BrokerHttpService, constants: ConstantsService);
    getTipologieTasse(primacasa: boolean, residente: boolean, affittata: boolean): Observable<Http.HttpResponse>;
    getTipiAffittuari(): Observable<Http.HttpResponse>;
    getEuribor(): Observable<Http.HttpResponse>;
    getTipiOmi(idComuneIstat: string): Observable<Http.HttpResponse>;
    getTipologieCatastali(): Observable<Http.HttpResponse>;
    getComuni(nomeComune: string): Observable<Http.HttpResponse>;
    getDropdown(Tipoddl: string, Filtro: string): Observable<Http.HttpResponse>;
    private getBooleanAsString;
}
