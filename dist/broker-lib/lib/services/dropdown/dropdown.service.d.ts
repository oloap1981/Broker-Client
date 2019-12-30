import { Observable } from 'rxjs';
import { Http } from '../../models/common/http.namespace';
import { BrokerHttpService } from '../common/brokerhttp.service';
import { ConstantsService } from '../common/constants.service';
import { DdlItem } from '../../models/common/ddlitem';
export declare class DropdownService {
    private httpService;
    private constants;
    private tipologieTasse;
    private tipiAffittuario;
    private euribor;
    private tipiOmi;
    constructor(httpService: BrokerHttpService, constants: ConstantsService);
    getTipologieTasse(): Array<DdlItem>;
    getTipiAffittuari(): Array<DdlItem>;
    getEuribor(): Array<DdlItem>;
    getTipiOmi(idComuneIstat: string): Array<DdlItem>;
    getDropdown(Tipoddl: number, Filtro: string, Ordina: string, Componi: string, PrimoVuoto: string, PrimoTutti: string): Observable<Http.HttpResponse>;
}
