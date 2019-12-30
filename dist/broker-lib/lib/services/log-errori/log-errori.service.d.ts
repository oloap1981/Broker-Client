import { Observable } from 'rxjs';
import { Http } from '../../models/common/http.namespace';
import { BrokerHttpService } from '../common/brokerhttp.service';
import { ConstantsService } from '../common/constants.service';
import { WsLogErrore } from '../../models/common/wslogerrore';
import { ErrorMessage } from '../../models/common/errormessage';
/**
 *
 *
 * @export
 * LogErroriService
 */
export declare class LogErroriService {
    private httpService;
    private constants;
    constructor(httpService: BrokerHttpService, constants: ConstantsService);
    /**
     * Chiamata per il salvataggio su persistenza di errori
     *
     * @param errorData
     * @param tokenValue
     * @returns
     * LogErroriService
     */
    postErrore(errorData: WsLogErrore): Observable<Http.HttpResponse>;
    generateErrorMessage(errorMessage: ErrorMessage): WsLogErrore;
}
