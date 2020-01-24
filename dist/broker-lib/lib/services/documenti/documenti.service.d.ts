import { BrokerHttpService } from '../common/brokerhttp.service';
import { ConstantsService } from '../common/constants.service';
import { Observable } from 'rxjs';
import { Http } from '../../models/common/http.namespace';
import { Cartella } from '../../models/documenti/cartella';
import { Documento } from '../../models/documenti/documento';
export declare class DocumentiService {
    private httpService;
    private constants;
    constructor(httpService: BrokerHttpService, constants: ConstantsService);
    getCartelle(idcliente: number, idcartella: number): Observable<Http.HttpResponse>;
    getDocumento(iddocumento: number): Observable<Http.HttpResponse>;
    putCartelle(cartella: Cartella): Observable<Http.HttpResponse>;
    putDocumento(documento: Documento): Observable<Http.HttpResponse>;
}
