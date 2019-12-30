import { Observable } from "rxjs";
import { Http } from "../../models/common/http.namespace";
import { LoginRequest } from "../../models/login/loginRequest";
import { CambioPasswordRequest } from "../../models/login/cambioPasswordRequest";
import { BrokerHttpService } from "../common/brokerhttp.service";
import { StoreService } from '../store/store.service';
import { ConstantsService } from '../common/constants.service';
export declare class LoginService {
    private httpService;
    private storeService;
    private constants;
    constructor(httpService: BrokerHttpService, storeService: StoreService, constants: ConstantsService);
    CambioPassword(bodyCambio: CambioPasswordRequest): Observable<Http.HttpResponse>;
    Login(body: LoginRequest): Observable<Http.HttpResponse>;
}
