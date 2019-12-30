import { HttpClient, HttpBackend } from "@angular/common/http";
import { Observable } from "rxjs";
import { Http } from "../../models/common/http.namespace";
import { ConstantsService } from "./constants.service";
export declare class BrokerHttpService {
    private http;
    private constants;
    private backEnd;
    private httpClientLogin;
    constructor(http: HttpClient, constants: ConstantsService, backEnd: HttpBackend);
    get(path: string): Observable<Http.HttpResponse>;
    getNoToken(path: string): Observable<Http.HttpResponse>;
    post(path: string, body: any): Observable<Http.HttpResponse>;
    postNoToken(path: string, body: any): Observable<Http.HttpResponse>;
}
