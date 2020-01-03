import { Injectable, Injector, NgZone, NgModule } from '@angular/core';
import { HttpClient, HttpBackend, HttpClientModule } from '@angular/common/http';
import { __awaiter } from 'tslib';
import { AlertController } from '@ionic/angular';
import { Storage, IonicStorageModule } from '@ionic/Storage';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConstantsService {
    constructor() {
        this.baseAppUrl = 'http://89.31.75.45:443/Spring-JPA-Security';
        this.tokenHeaderKey = 'Authorization';
        this.pathSeparator = '/';
        this.loginServiceName = 'login';
        this.cambioPasswordServiceName = 'putPassword';
        // immobili
        this.getImmobiliServiceName = 'getimmobili';
        this.getImmobileServiceName = 'getimmobile';
        this.putImmobileServiceName = 'putimmobile';
        this.delImmobileServiceName = 'delimmobile';
        this.getCatastoServiceName = 'getcatasto';
        this.getPianoAmmortamentoServiceName = 'getPiano';
        // clienti
        this.getClientiServiceName = 'getclienti';
        this.putClientiServiceName = 'putcliente';
        this.abilitaAppClienteServiceName = 'appcliente';
        this.bookValueServiceName = 'getbookvalue';
        this.pianoAmmortamentoServiceName = 'getpiano';
        // report
        this.situazioneGeneraleServiceName = 'getsituazione';
        this.graficiServiceName = 'getgrafici';
        this.pdfReportServiceName = 'getpdfreport';
        this.postErroreServiceName = 'writeLog';
        this.getDropdownServiceName = 'get_dropdown';
        // tipologia icone immobili
        this.tipologiaImmobileVilla = 'villa';
        this.tipologiaImmobileCasa = 'casa';
        this.tipologiaImmobileAgricolo = 'agricolo';
        this.tipologiaImmobileUfficio = 'ufficio';
        this.tipologiaImmobileAlbergo = 'albergo';
        this.tipologiaImmobileOspedale = 'ospedale';
        this.tipologiaImmobileScuola = 'scuola';
        this.tipologiaImmobileMuseo = 'museo';
        this.tipologiaImmobileChiesa = 'chiesa';
        this.tipologiaImmobileMagazzino = 'magazzino';
        this.tipologiaImmobileNegozio = 'negozio';
        this.tipologiaImmobileSport = 'sport';
        this.tipologiaImmobileGarage = 'garage';
        this.tipologiaImmobileFabbrica = 'fabbrica';
        this.tipologiaImmobileTeatro = 'teatro';
        this.tipologiaImmobileBanca = 'banca';
        this.tipologiaImmobilePonte = 'ponte';
        this.tipologiaImmobileStazione = 'stazione';
        this.tipologiaImmobileCantiere = 'cantiere';
        // dropdown
        this.getDdlEuribor = 'get_ddl_tipo_euribor';
        this.getDdlAffittuari = 'get_ddl_tipo_affittuari';
        this.getDdlTasse = 'get_ddl_tasse';
        this.getDdlOmi = 'get_ddl_omi';
        this.getDdlCategoriaCatastale = 'get_ddl_categoria_catastale';
    }
}
ConstantsService.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    ConstantsService.prototype.baseAppUrl;
    /** @type {?} */
    ConstantsService.prototype.tokenHeaderKey;
    /** @type {?} */
    ConstantsService.prototype.pathSeparator;
    /** @type {?} */
    ConstantsService.prototype.loginServiceName;
    /** @type {?} */
    ConstantsService.prototype.cambioPasswordServiceName;
    /** @type {?} */
    ConstantsService.prototype.getImmobiliServiceName;
    /** @type {?} */
    ConstantsService.prototype.getImmobileServiceName;
    /** @type {?} */
    ConstantsService.prototype.putImmobileServiceName;
    /** @type {?} */
    ConstantsService.prototype.delImmobileServiceName;
    /** @type {?} */
    ConstantsService.prototype.getCatastoServiceName;
    /** @type {?} */
    ConstantsService.prototype.getPianoAmmortamentoServiceName;
    /** @type {?} */
    ConstantsService.prototype.getClientiServiceName;
    /** @type {?} */
    ConstantsService.prototype.putClientiServiceName;
    /** @type {?} */
    ConstantsService.prototype.abilitaAppClienteServiceName;
    /** @type {?} */
    ConstantsService.prototype.bookValueServiceName;
    /** @type {?} */
    ConstantsService.prototype.pianoAmmortamentoServiceName;
    /** @type {?} */
    ConstantsService.prototype.situazioneGeneraleServiceName;
    /** @type {?} */
    ConstantsService.prototype.graficiServiceName;
    /** @type {?} */
    ConstantsService.prototype.pdfReportServiceName;
    /** @type {?} */
    ConstantsService.prototype.postErroreServiceName;
    /** @type {?} */
    ConstantsService.prototype.getDropdownServiceName;
    /** @type {?} */
    ConstantsService.prototype.tipologiaImmobileVilla;
    /** @type {?} */
    ConstantsService.prototype.tipologiaImmobileCasa;
    /** @type {?} */
    ConstantsService.prototype.tipologiaImmobileAgricolo;
    /** @type {?} */
    ConstantsService.prototype.tipologiaImmobileUfficio;
    /** @type {?} */
    ConstantsService.prototype.tipologiaImmobileAlbergo;
    /** @type {?} */
    ConstantsService.prototype.tipologiaImmobileOspedale;
    /** @type {?} */
    ConstantsService.prototype.tipologiaImmobileScuola;
    /** @type {?} */
    ConstantsService.prototype.tipologiaImmobileMuseo;
    /** @type {?} */
    ConstantsService.prototype.tipologiaImmobileChiesa;
    /** @type {?} */
    ConstantsService.prototype.tipologiaImmobileMagazzino;
    /** @type {?} */
    ConstantsService.prototype.tipologiaImmobileNegozio;
    /** @type {?} */
    ConstantsService.prototype.tipologiaImmobileSport;
    /** @type {?} */
    ConstantsService.prototype.tipologiaImmobileGarage;
    /** @type {?} */
    ConstantsService.prototype.tipologiaImmobileFabbrica;
    /** @type {?} */
    ConstantsService.prototype.tipologiaImmobileTeatro;
    /** @type {?} */
    ConstantsService.prototype.tipologiaImmobileBanca;
    /** @type {?} */
    ConstantsService.prototype.tipologiaImmobilePonte;
    /** @type {?} */
    ConstantsService.prototype.tipologiaImmobileStazione;
    /** @type {?} */
    ConstantsService.prototype.tipologiaImmobileCantiere;
    /** @type {?} */
    ConstantsService.prototype.getDdlEuribor;
    /** @type {?} */
    ConstantsService.prototype.getDdlAffittuari;
    /** @type {?} */
    ConstantsService.prototype.getDdlTasse;
    /** @type {?} */
    ConstantsService.prototype.getDdlOmi;
    /** @type {?} */
    ConstantsService.prototype.getDdlCategoriaCatastale;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BrokerHttpService {
    /**
     * @param {?} http
     * @param {?} constants
     * @param {?} backEnd
     */
    constructor(http, constants, backEnd) {
        this.http = http;
        this.constants = constants;
        this.backEnd = backEnd;
        this.httpClientLogin = new HttpClient(this.backEnd);
    }
    /**
     * @param {?} path
     * @return {?}
     */
    get(path) {
        return this.http.get(this.constants.baseAppUrl + "/" + path);
    }
    /**
     * @param {?} path
     * @return {?}
     */
    getNoToken(path) {
        console.log("HttpService get " + path);
        return this.httpClientLogin.get(this.constants.baseAppUrl + "/" + path);
    }
    /**
     * @param {?} path
     * @param {?} body
     * @return {?}
     */
    post(path, body) {
        return this.http.post(this.constants.baseAppUrl + "/" + path, body);
    }
    /**
     * @param {?} path
     * @param {?} body
     * @return {?}
     */
    postNoToken(path, body) {
        console.log("HttpService post " + path);
        return this.httpClientLogin.post(this.constants.baseAppUrl + "/" + path, body);
    }
}
BrokerHttpService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BrokerHttpService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConstantsService },
    { type: HttpBackend }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    BrokerHttpService.prototype.httpClientLogin;
    /**
     * @type {?}
     * @private
     */
    BrokerHttpService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    BrokerHttpService.prototype.constants;
    /**
     * @type {?}
     * @private
     */
    BrokerHttpService.prototype.backEnd;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WsLogErrore {
}
if (false) {
    /** @type {?} */
    WsLogErrore.prototype.token;
    /** @type {?} */
    WsLogErrore.prototype.log_stacktrace;
    /** @type {?} */
    WsLogErrore.prototype.log_descrerr;
    /** @type {?} */
    WsLogErrore.prototype.log_metodoerr;
    /** @type {?} */
    WsLogErrore.prototype.log_link;
    /** @type {?} */
    WsLogErrore.prototype.log_query;
    /** @type {?} */
    WsLogErrore.prototype.username;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 *
 *
 * @export
 * LogErroriService
 */
class LogErroriService {
    /**
     * @param {?} httpService
     * @param {?} constants
     */
    constructor(httpService, constants) {
        this.httpService = httpService;
        this.constants = constants;
    }
    /**
     * Chiamata per il salvataggio su persistenza di errori
     *
     * @param {?} errorData
     * @return {?}
     * LogErroriService
     */
    postErrore(errorData) {
        return this.httpService.post(this.constants.postErroreServiceName, errorData);
    }
    /**
     * @param {?} errorMessage
     * @return {?}
     */
    generateErrorMessage(errorMessage) {
        /** @type {?} */
        const logErrore = new WsLogErrore();
        logErrore.log_descrerr = errorMessage.msg_testo;
        logErrore.log_stacktrace = errorMessage.msg_techdata;
        return logErrore;
    }
}
LogErroriService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LogErroriService.ctorParameters = () => [
    { type: BrokerHttpService },
    { type: ConstantsService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    LogErroriService.prototype.httpService;
    /**
     * @type {?}
     * @private
     */
    LogErroriService.prototype.constants;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WsToken {
}
if (false) {
    /** @type {?} */
    WsToken.prototype.token_value;
    /** @type {?} */
    WsToken.prototype.tipo_utente;
    /** @type {?} */
    WsToken.prototype.utente;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StoreService {
    /**
     * @param {?} storage
     */
    constructor(storage) {
        this.storage = storage;
        this.USERKEY = "user";
        this.wsToken = null;
    }
    /**
     * @return {?}
     */
    clearUserData() {
        this.storage.clear();
        this.wsToken = null;
    }
    /**
     * @param {?} ws_token
     * @return {?}
     */
    setUserData(ws_token) {
        console.log("setUserData");
        this.wsToken = ws_token;
        if (ws_token != null) {
            this.storage.set(this.USERKEY, ws_token).then((/**
             * @param {?} val
             * @return {?}
             */
            (val) => {
                console.log(val);
            }));
        }
        else {
            return -1;
        }
        return 1;
    }
    /**
     * @return {?}
     */
    getUserDataPromise() {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            if (this.wsToken == null) {
                // store service prima inizializzaione
                this.storage.get(this.USERKEY).then((/**
                 * @param {?} val
                 * @return {?}
                 */
                (val) => {
                    // recuperato token dal database
                    console.log(val);
                    if (val != null) {
                        resolve(val);
                    }
                    else {
                        console.log("necessario login");
                        this.setUserData(null);
                        this.wsToken = null;
                        // devo andare alla pagina del login
                        resolve(null);
                    }
                }));
            }
            else {
                // store service già inizializzato
                // come al punto precedente servirebbe controllare il token ed eventualmente fare di nuovo il login;
                resolve(this.wsToken);
            }
        }));
    }
}
StoreService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StoreService.ctorParameters = () => [
    { type: Storage }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StoreService.prototype.USERKEY;
    /**
     * @type {?}
     * @private
     */
    StoreService.prototype.wsToken;
    /**
     * @type {?}
     * @private
     */
    StoreService.prototype.storage;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Classe che raduna tutti i servizi riconducibili all'entità immobile
 *
 * @export
 * ImmobiliService
 */
class ImmobiliService {
    /**
     * @param {?} httpService
     * @param {?} constants
     */
    constructor(httpService, constants) {
        this.httpService = httpService;
        this.constants = constants;
    }
    /**
     * Chiamata per ottenere l'elenco degli immobili appartenenti ad uno specifico cliente
     *
     * @param {?} id_cliente
     * @return {?} response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
     * Data dentro al quale si trova l'elenco degli immobili
     */
    getImmobili(id_cliente) {
        return this.httpService.get(this.constants.getImmobiliServiceName
            + this.constants.pathSeparator
            + id_cliente);
        // return this.httpService.get('getimmobili' + '/' + idCliente, tokenValue);
    }
    /**
     * Chiamata per ottenere il singolo immobile passando il suo identificativo unico
     *
     * @param {?} immobile_id
     * @return {?} response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
     * Data dentro al quale si trova l'oggetto Immobile
     */
    getImmobile(immobile_id) {
        // return this.httpService.get(this.constants.getImmobileServiceName + this.constants.pathSeparator + immobile_id, tokenValue);
        return this.httpService.get(this.constants.getImmobileServiceName
            + this.constants.pathSeparator
            + immobile_id);
    }
    /**
     * Chiamata per inserire un nuovo immobile
     *
     * @param {?} immobile
     * @return {?} response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
     * Data dentro al quale si trova l'id dell'immobile appena salvato
     */
    putImmobile(immobile) {
        return this.httpService.post(this.constants.putImmobileServiceName, immobile);
    }
    /**
     * Chiamata per cancellare un immobile passando il suo identificativo unico
     *
     * @param {?} cancellazioneRequest
     * @return {?} response contenente l'esito in Success e ErrorMessages.
     */
    delImmobile(cancellazioneRequest) {
        return this.httpService.post(this.constants.delImmobileServiceName, cancellazioneRequest);
    }
    /**
     * Chiamata per attivare il flusso di invio dei dati catastali via mail all'utente proprietario dell'immobile di cui deve
     * essere passato l'identificativo unico
     *
     * @param {?} immobile_id
     * @return {?} response contenente l'esito in Success e ErrorMessages.
     */
    invioDatiCatastali(immobile_id) {
        return this.httpService.get(this.constants.getCatastoServiceName + this.constants.pathSeparator + immobile_id);
    }
    /**
     * @param {?} immobile_id
     * @return {?}
     */
    getPianoAmmortamentoImmobile(immobile_id) {
        return this.httpService.get(this.constants.getPianoAmmortamentoServiceName + this.constants.pathSeparator + immobile_id);
    }
}
ImmobiliService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ImmobiliService.ctorParameters = () => [
    { type: BrokerHttpService },
    { type: ConstantsService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ImmobiliService.prototype.httpService;
    /**
     * @type {?}
     * @private
     */
    ImmobiliService.prototype.constants;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable-next-line: no-namespace
class Cliente {
}
if (false) {
    /** @type {?} */
    Cliente.prototype.cliente_id;
    /** @type {?} */
    Cliente.prototype.nome;
    /** @type {?} */
    Cliente.prototype.cognome;
    /** @type {?} */
    Cliente.prototype.email;
    /** @type {?} */
    Cliente.prototype.codice_fiscale;
    /** @type {?} */
    Cliente.prototype.numero_proprieta;
    /** @type {?} */
    Cliente.prototype.book_value;
    /** @type {?} */
    Cliente.prototype.data_aggiornamento;
    /** @type {?} */
    Cliente.prototype.stato_cliente;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ImmobileDettaglio {
}
if (false) {
    /** @type {?} */
    ImmobileDettaglio.prototype.proprieta_id;
    /** @type {?} */
    ImmobileDettaglio.prototype.tipologie_catastali_id;
    /** @type {?} */
    ImmobileDettaglio.prototype.codice_tipologia;
    /** @type {?} */
    ImmobileDettaglio.prototype.descrizione_tipologia;
    /** @type {?} */
    ImmobileDettaglio.prototype.data_aggiornamento;
    /** @type {?} */
    ImmobileDettaglio.prototype.valore_acquisto;
    /** @type {?} */
    ImmobileDettaglio.prototype.quota;
    /** @type {?} */
    ImmobileDettaglio.prototype.catastale_cod;
    /** @type {?} */
    ImmobileDettaglio.prototype.comune_zone_cod;
    /** @type {?} */
    ImmobileDettaglio.prototype.indirizzo;
    /** @type {?} */
    ImmobileDettaglio.prototype.civico;
    /** @type {?} */
    ImmobileDettaglio.prototype.citta;
    /** @type {?} */
    ImmobileDettaglio.prototype.cap;
    /** @type {?} */
    ImmobileDettaglio.prototype.provincia;
    /** @type {?} */
    ImmobileDettaglio.prototype.istat_cod;
    /** @type {?} */
    ImmobileDettaglio.prototype.latitudine;
    /** @type {?} */
    ImmobileDettaglio.prototype.longitudine;
    /** @type {?} */
    ImmobileDettaglio.prototype.prima_casa;
    /** @type {?} */
    ImmobileDettaglio.prototype.destinazione_uso_id;
    /** @type {?} */
    ImmobileDettaglio.prototype.descrizione_uso;
    /** @type {?} */
    ImmobileDettaglio.prototype.mutuo;
    /** @type {?} */
    ImmobileDettaglio.prototype.tasso;
    /** @type {?} */
    ImmobileDettaglio.prototype.affitto;
    /** @type {?} */
    ImmobileDettaglio.prototype.detrazione_interessi;
    /** @type {?} */
    ImmobileDettaglio.prototype.euribor_id;
    /** @type {?} */
    ImmobileDettaglio.prototype.descrizione_euribor;
    /** @type {?} */
    ImmobileDettaglio.prototype.cointestatari;
    /** @type {?} */
    ImmobileDettaglio.prototype.tasse;
    /** @type {?} */
    ImmobileDettaglio.prototype.spese;
    /** @type {?} */
    ImmobileDettaglio.prototype.affitto_dettaglio;
    /** @type {?} */
    ImmobileDettaglio.prototype.mutuo_dettaglio;
    /** @type {?} */
    ImmobileDettaglio.prototype.dati_catastali;
    /** @type {?} */
    ImmobileDettaglio.prototype.omi;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Connection {
}
if (false) {
    /** @type {?} */
    Connection.prototype.url;
    /** @type {?} */
    Connection.prototype.pathseparator;
    /** @type {?} */
    Connection.prototype.headertokenkey;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DatiCatastaliDettaglio {
}
if (false) {
    /** @type {?} */
    DatiCatastaliDettaglio.prototype.proprieta_catasto_id;
    /** @type {?} */
    DatiCatastaliDettaglio.prototype.sezione;
    /** @type {?} */
    DatiCatastaliDettaglio.prototype.foglio;
    /** @type {?} */
    DatiCatastaliDettaglio.prototype.zona;
    /** @type {?} */
    DatiCatastaliDettaglio.prototype.micro_zona;
    /** @type {?} */
    DatiCatastaliDettaglio.prototype.particella;
    /** @type {?} */
    DatiCatastaliDettaglio.prototype.subalterno;
    /** @type {?} */
    DatiCatastaliDettaglio.prototype.categoria;
    /** @type {?} */
    DatiCatastaliDettaglio.prototype.classe;
    /** @type {?} */
    DatiCatastaliDettaglio.prototype.rendita;
    /** @type {?} */
    DatiCatastaliDettaglio.prototype.vani;
    /** @type {?} */
    DatiCatastaliDettaglio.prototype.superficie_interni;
    /** @type {?} */
    DatiCatastaliDettaglio.prototype.superficie_totale;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OmiDettaglio {
}
if (false) {
    /** @type {?} */
    OmiDettaglio.prototype.valore_omi;
    /** @type {?} */
    OmiDettaglio.prototype.valore_pot;
    /** @type {?} */
    OmiDettaglio.prototype.affitto_pot;
    /** @type {?} */
    OmiDettaglio.prototype.ammortamento_decadenza;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MutuoDettaglio {
}
if (false) {
    /** @type {?} */
    MutuoDettaglio.prototype.proprieta_mutuo_id;
    /** @type {?} */
    MutuoDettaglio.prototype.detrazione_interessi;
    /** @type {?} */
    MutuoDettaglio.prototype.tipo_tasso;
    /** @type {?} */
    MutuoDettaglio.prototype.euribor_id;
    /** @type {?} */
    MutuoDettaglio.prototype.descrizione_euribor;
    /** @type {?} */
    MutuoDettaglio.prototype.spread;
    /** @type {?} */
    MutuoDettaglio.prototype.rate_id;
    /** @type {?} */
    MutuoDettaglio.prototype.descrizione_rate;
    /** @type {?} */
    MutuoDettaglio.prototype.numero_rate;
    /** @type {?} */
    MutuoDettaglio.prototype.durata;
    /** @type {?} */
    MutuoDettaglio.prototype.data_inizio;
    /** @type {?} */
    MutuoDettaglio.prototype.importo_iniziale;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AffittoDettaglio {
}
if (false) {
    /** @type {?} */
    AffittoDettaglio.prototype.proprieta_affitto_id;
    /** @type {?} */
    AffittoDettaglio.prototype.tipo_affittuario_id;
    /** @type {?} */
    AffittoDettaglio.prototype.descrizione_affittuario;
    /** @type {?} */
    AffittoDettaglio.prototype.spese_condominiali;
    /** @type {?} */
    AffittoDettaglio.prototype.importo_spese_condominiali;
    /** @type {?} */
    AffittoDettaglio.prototype.cedolare_secca;
    /** @type {?} */
    AffittoDettaglio.prototype.aliquota_cedolare;
    /** @type {?} */
    AffittoDettaglio.prototype.prima_scadenza_anni;
    /** @type {?} */
    AffittoDettaglio.prototype.data_inizio;
    /** @type {?} */
    AffittoDettaglio.prototype.importo_mensile;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SessionService {
    /**
     * @param {?} storeService
     * @param {?} immobiliService
     */
    constructor(storeService, immobiliService) {
        this.storeService = storeService;
        this.immobiliService = immobiliService;
        this.immobile = undefined;
        this.elencoImmobiliSubject = new Subject();
        this.elencoImmobiliObs = this.elencoImmobiliSubject.asObservable();
        this.userDataSubject = new Subject();
        this.userDataObservable = this.userDataSubject.asObservable();
        this.userData = new WsToken();
        this.connection = new Connection();
        this.cliente = new Cliente();
        this.immobiliCliente = new Array();
        this.immobile = new ImmobileDettaglio();
        this.immobile.dati_catastali = new DatiCatastaliDettaglio();
        this.immobile.spese = new Array();
        this.immobile.omi = new OmiDettaglio();
        this.immobile.mutuo_dettaglio = new MutuoDettaglio();
        this.immobile.affitto_dettaglio = new AffittoDettaglio();
        this.immobile.tasse = new Array();
        this.immobile.cointestatari = new Array();
        this.intestazionePagina = 'Readvice';
        this.paginaPrecedente = 'home';
    }
    /**
     * @param {?} pagina
     * @return {?}
     */
    setPaginaPrecedente(pagina) {
        this.paginaPrecedente = pagina;
    }
    /**
     * @return {?}
     */
    getPaginaPrecedente() {
        return this.paginaPrecedente;
    }
    /**
     * @param {?} intestazione
     * @return {?}
     */
    setIntestazionePagina(intestazione) {
        this.intestazionePagina = intestazione;
    }
    /**
     * @return {?}
     */
    getIntestazionePagina() {
        return this.intestazionePagina;
    }
    /**
     * @param {?} cliente
     * @return {?}
     */
    setCliente(cliente) {
        this.cliente = cliente;
        this.immobiliService.getImmobili(this.cliente.cliente_id + '').subscribe((/**
         * @param {?} r
         * @return {?}
         */
        r => {
            if (r.Success) {
                this.immobiliCliente = r.Data.elenco_immobili;
                console.log('caricati gli immobili del cliente: ' + this.immobiliCliente.length);
                // sveglia chi è in ascolto
                this.elencoImmobiliSubject.next(true);
            }
        }));
    }
    /**
     * @return {?}
     */
    clearUserData() {
        this.storeService.clearUserData();
        this.userData = new WsToken();
    }
    /**
     * @param {?} userData
     * @return {?}
     */
    setUserData(userData) {
        this.userData = userData;
        if (userData != null) {
            this.storeService.setUserData(userData);
        }
        else {
            return -1;
        }
        return 1;
    }
    /**
     * @return {?}
     */
    getUserData() {
        return this.userData;
    }
    /**
     * @return {?}
     */
    loadUserData() {
        if (this.userData !== null && this.userData !== undefined && this.userData.token_value === '') {
            this.userDataSubject.next(true);
        }
        else {
            this.storeService.getUserDataPromise().then((/**
             * @param {?} val
             * @return {?}
             */
            (val) => {
                if (val == null) {
                    this.userDataSubject.next(false);
                }
                else {
                    this.userData = val;
                    this.userDataSubject.next(true);
                }
            }));
        }
    }
    /**
     * @return {?}
     */
    getCliente() {
        return this.cliente;
    }
    /**
     * @return {?}
     */
    getImmobiliCliente() {
        return this.immobiliCliente;
    }
    /**
     * @param {?} immobileDettaglio
     * @return {?}
     */
    setImmobileDettaglio(immobileDettaglio) {
        this.immobile = immobileDettaglio;
    }
    /**
     * @return {?}
     */
    getImmobileDettaglio() {
        return this.immobile;
    }
    /**
     * @return {?}
     */
    clearImmobileDettaglio() {
        this.immobile = null;
    }
    /**
     * @param {?} conn
     * @return {?}
     */
    setConnection(conn) {
        this.connection = conn;
    }
    /**
     * @return {?}
     */
    getConnection() {
        return this.connection;
    }
}
SessionService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SessionService.ctorParameters = () => [
    { type: StoreService },
    { type: ImmobiliService }
];
if (false) {
    /** @type {?} */
    SessionService.prototype.cliente;
    /** @type {?} */
    SessionService.prototype.immobiliCliente;
    /** @type {?} */
    SessionService.prototype.immobile;
    /**
     * @type {?}
     * @private
     */
    SessionService.prototype.elencoImmobiliSubject;
    /** @type {?} */
    SessionService.prototype.elencoImmobiliObs;
    /**
     * @type {?}
     * @private
     */
    SessionService.prototype.userData;
    /**
     * @type {?}
     * @private
     */
    SessionService.prototype.connection;
    /**
     * @type {?}
     * @private
     */
    SessionService.prototype.userDataSubject;
    /** @type {?} */
    SessionService.prototype.userDataObservable;
    /**
     * @type {?}
     * @private
     */
    SessionService.prototype.intestazionePagina;
    /**
     * @type {?}
     * @private
     */
    SessionService.prototype.paginaPrecedente;
    /**
     * @type {?}
     * @private
     */
    SessionService.prototype.storeService;
    /**
     * @type {?}
     * @private
     */
    SessionService.prototype.immobiliService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import { Platform, MenuController, Nav, NavController, AlertController, ToastController } from 'ionic-angular';
class AlertService {
    /**
     * @param {?} alertController
     * @param {?} sessionService
     * @param {?} router
     */
    constructor(alertController, sessionService, router) {
        this.alertController = alertController;
        this.sessionService = sessionService;
        this.router = router;
    }
    /**
     * @param {?} alertMessage
     * @return {?}
     */
    presentAlert(alertMessage) {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const alert = this.alertController.create({
                header: 'Conferma',
                message: alertMessage,
                buttons: ['OK']
            });
            alert.then((/**
             * @param {?} _alert
             * @return {?}
             */
            (_alert) => {
                _alert.present();
            }));
        });
    }
    /**
     * @param {?} alertMessage
     * @return {?}
     */
    presentErrorAlert(alertMessage) {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const alert = this.alertController.create({
                header: 'Errore',
                message: alertMessage,
                buttons: ['CHIUDI']
            });
            alert.then((/**
             * @param {?} _alert
             * @return {?}
             */
            (_alert) => {
                _alert.present();
            }));
        });
    }
    /**
     * @return {?}
     */
    presentAlertLogout() {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const alert = this.alertController.create({
                header: 'Logout',
                message: 'Sicuro di voler uscire?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (/**
                         * @param {?} blah
                         * @return {?}
                         */
                        (blah) => {
                            console.log('Confirm Cancel: blah');
                        })
                    }, {
                        text: 'Si',
                        handler: (/**
                         * @return {?}
                         */
                        () => {
                            this.sessionService.clearUserData();
                            this.router.navigate(['login']);
                        })
                    }
                ]
            });
            alert.then((/**
             * @param {?} _alert
             * @return {?}
             */
            (_alert) => {
                _alert.present();
            }));
        });
    }
}
AlertService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AlertService.ctorParameters = () => [
    { type: AlertController },
    { type: SessionService },
    { type: Router }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AlertService.prototype.alertController;
    /**
     * @type {?}
     * @private
     */
    AlertService.prototype.sessionService;
    /** @type {?} */
    AlertService.prototype.router;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ErrorHandlerService {
    /**
     * @param {?} injector
     * @param {?} zone
     * @param {?} logErroriService
     * @param {?} alertService
     * @param {?} sessionService
     */
    constructor(injector, zone, logErroriService, alertService, sessionService) {
        this.injector = injector;
        this.zone = zone;
        this.logErroriService = logErroriService;
        this.alertService = alertService;
        this.sessionService = sessionService;
    }
    /**
     * @param {?} error
     * @return {?}
     */
    handleError(error) {
        /** @type {?} */
        const token = this.sessionService.getUserData().token_value;
        console.log('gestisco un errore');
        /** @type {?} */
        const errore = new WsLogErrore();
        errore.token = token;
        errore.log_stacktrace = JSON.stringify(error);
        errore.log_descrerr = error.message;
        errore.log_metodoerr = '';
        errore.log_link = '';
        errore.log_query = '';
        errore.username = '';
        // console.log('trasmetto l\'errore');
        this.logErroriService.postErrore(errore).subscribe((/**
         * @param {?} r
         * @return {?}
         */
        r => {
            console.log('errore trasmesso: ' + errore);
            this.alertService.presentErrorAlert('Errore ' + error.message + ' trasmesso al server');
        }));
        console.log('gestione errore completata');
    }
}
ErrorHandlerService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ErrorHandlerService.ctorParameters = () => [
    { type: Injector },
    { type: NgZone },
    { type: LogErroriService },
    { type: AlertService },
    { type: SessionService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ErrorHandlerService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    ErrorHandlerService.prototype.zone;
    /**
     * @type {?}
     * @private
     */
    ErrorHandlerService.prototype.logErroriService;
    /**
     * @type {?}
     * @private
     */
    ErrorHandlerService.prototype.alertService;
    /**
     * @type {?}
     * @private
     */
    ErrorHandlerService.prototype.sessionService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Classe che raduna tutti i servizi riconducibili all'entità cliente
 *
 * @export
 * ClientiService
 */
class ClientiService {
    /**
     * @param {?} httpService
     * @param {?} constants
     */
    constructor(httpService, constants) {
        this.httpService = httpService;
        this.constants = constants;
    }
    /**
     * Chiamata per ottenere l'elenco dei clienti completo.
     *
     * @return {?} contenente l'oggetto Data che a sua volta contiene l'elenco degli oggetti Cliente
     */
    getClienti() {
        return this.httpService.get(this.constants.getClientiServiceName);
    }
    /**
     * Chiamata per inserire un nuovo cliente
     *
     * @param {?} cliente
     * @return {?} response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
     * Data dentro al quale si trova l'id dell'oggetto appena generato
     */
    putCliente(cliente) {
        return this.httpService.post(this.constants.putClientiServiceName, cliente);
    }
    /**
     * Chiamata per abilitare l'app di uno specifico cliente
     *
     * @param {?} request oggetto contenente i parametri per l'abilitazione
     * @return {?} response contenente l'esito in Success e ErrorMessages.
     */
    abilitaAppCliente(request) {
        return this.httpService.post(this.constants.abilitaAppClienteServiceName, request);
    }
    /**
     * Chiamata per ottenere il BookValue di un cliente
     *
     * @param {?} cliente_id identificativo unico del cliente del quale si vuole il BookValue
     * @return {?} response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
     * Data che a sua volta contiene l'elenco degli oggetti BookValue
     */
    getBookValue(cliente_id) {
        return this.httpService.get(this.constants.bookValueServiceName + this.constants.pathSeparator + cliente_id);
    }
    /**
     * Chiamata per ottenere il piano di ammortamento di un mutuo
     *
     * @param {?} mutuo_id identificativo unico del mutuo del quale si vuole il PianoAmmortamento
     * @return {?} response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
     * Data che a sua volta contiene l'elenco degli oggetti PianoAmmortamento
     */
    getPianoAmmortamento(mutuo_id) {
        return this.httpService.get(this.constants.pianoAmmortamentoServiceName + this.constants.pathSeparator + mutuo_id);
    }
}
ClientiService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ClientiService.ctorParameters = () => [
    { type: BrokerHttpService },
    { type: ConstantsService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ClientiService.prototype.httpService;
    /**
     * @type {?}
     * @private
     */
    ClientiService.prototype.constants;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DropdownService {
    /**
     * @param {?} httpService
     * @param {?} constants
     */
    constructor(httpService, constants) {
        this.httpService = httpService;
        this.constants = constants;
        this.tipologieTasse = [
            { codice: 0, descrizione: "" },
            { codice: 1, descrizione: "tasse1" },
            { codice: 2, descrizione: "tasse2" },
            { codice: 3, descrizione: "tasse3" },
        ];
        this.tipiAffittuario = [
            { codice: 0, descrizione: "" },
            { codice: 1, descrizione: "tipoAffittuario1" },
            { codice: 2, descrizione: "tipoAffittuario2" },
            { codice: 3, descrizione: "tipoAffittuario3" },
        ];
        this.euribor = [
            { codice: 0, descrizione: "" },
            { codice: 1, descrizione: "euribor1" },
            { codice: 2, descrizione: "euribor2" },
            { codice: 3, descrizione: "euribor3" },
        ];
        this.tipiOmi = [
            { codice: 0, descrizione: "" },
            { codice: 1, descrizione: "omi1" },
            { codice: 2, descrizione: "omi2" },
            { codice: 3, descrizione: "omi3" },
            { codice: 4, descrizione: "omi4" },
            { codice: 5, descrizione: "omi5" }
        ];
    }
    /**
     * @return {?}
     */
    getTipologieTasse() {
        return this.tipologieTasse;
    }
    /**
     * @return {?}
     */
    getTipiAffittuari() {
        return this.tipiAffittuario;
    }
    /**
     * @return {?}
     */
    getEuribor() {
        return this.euribor;
    }
    /**
     * @param {?} idComuneIstat
     * @return {?}
     */
    getTipiOmi(idComuneIstat) {
        return this.tipiOmi;
    }
    /**
     * @param {?} Tipoddl
     * @param {?} Filtro
     * @param {?} Ordina
     * @param {?} Componi
     * @param {?} PrimoVuoto
     * @param {?} PrimoTutti
     * @return {?}
     */
    getDropdown(Tipoddl, Filtro, Ordina, Componi, PrimoVuoto, PrimoTutti) {
        /** @type {?} */
        const path = '/' + Tipoddl + '/' + Filtro + '/' + Ordina + '/' + Componi + '/' + PrimoVuoto + '/' + PrimoTutti;
        return this.httpService.get(this.constants.getDropdownServiceName + path);
    }
}
DropdownService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DropdownService.ctorParameters = () => [
    { type: BrokerHttpService },
    { type: ConstantsService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    DropdownService.prototype.tipologieTasse;
    /**
     * @type {?}
     * @private
     */
    DropdownService.prototype.tipiAffittuario;
    /**
     * @type {?}
     * @private
     */
    DropdownService.prototype.euribor;
    /**
     * @type {?}
     * @private
     */
    DropdownService.prototype.tipiOmi;
    /**
     * @type {?}
     * @private
     */
    DropdownService.prototype.httpService;
    /**
     * @type {?}
     * @private
     */
    DropdownService.prototype.constants;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IconeService {
    /**
     * @param {?} constants
     */
    constructor(constants) {
        this.constants = constants;
        this.tipologiaVilla = [
            "A/1",
            "A/7",
            "A/8",
            "A/9"
        ];
        this.tipologiaCasa = [
            "A/2",
            "A/3",
            "A/4",
            "A/5",
            "A/11"
        ];
        this.tipologiaAgricolo = [
            "A/6",
            "D/10"
        ];
        this.tipologiaUfficio = [
            "A/10",
            "C/3",
            "E/3",
            "E/4",
            "E/6",
            "E/8",
            "E/9",
            "F/1",
            "F/2"
        ];
        this.tipologiaAlbergo = [
            "B/1",
            "B/3",
            "C/5",
            "D/2"
        ];
        this.tipologiaOspedale = [
            "B/2",
            "D/4"
        ];
        this.tipologiaScuola = [
            "B/5"
        ];
        this.tipologiaMuseo = [
            "B/6"
        ];
        this.tipologiaChiesa = [
            "B/7",
            "E/7"
        ];
        this.tipologiaMagazzino = [
            "B/8",
            "C/2",
            "E/5",
            "F/5"
        ];
        this.tipologiaNegozio = [
            "C/1",
            "D/8"
        ];
        this.tipologiaSport = [
            "C/4",
            "D/6"
        ];
        this.tipologiaGarage = [
            "C/6",
            "C/7"
        ];
        this.tipologiaFabbrica = [
            "D/1",
            "D/7"
        ];
        this.tipologiaTeatro = [
            "D/3"
        ];
        this.tipologiaBanca = [
            "D/5"
        ];
        this.tipologiaPonte = [
            "D/9",
            "E/2"
        ];
        this.tipologiaStazione = [
            "E/1"
        ];
        this.tipologiaCantiere = [
            "F/3",
            "F/4",
            "F/6"
        ];
    }
    /**
     * @param {?} tipologia
     * @return {?}
     */
    getClasseIcona(tipologia) {
        if (this.tipologiaAgricolo.includes(tipologia)) {
            return this.constants.tipologiaImmobileAgricolo;
        }
        if (this.tipologiaAlbergo.includes(tipologia)) {
            return this.constants.tipologiaImmobileAlbergo;
        }
        if (this.tipologiaBanca.includes(tipologia)) {
            return this.constants.tipologiaImmobileBanca;
        }
        if (this.tipologiaCantiere.includes(tipologia)) {
            return this.constants.tipologiaImmobileCantiere;
        }
        if (this.tipologiaCasa.includes(tipologia)) {
            return this.constants.tipologiaImmobileCasa;
        }
        if (this.tipologiaChiesa.includes(tipologia)) {
            return this.constants.tipologiaImmobileChiesa;
        }
        if (this.tipologiaFabbrica.includes(tipologia)) {
            return this.constants.tipologiaImmobileFabbrica;
        }
        if (this.tipologiaGarage.includes(tipologia)) {
            return this.constants.tipologiaImmobileGarage;
        }
        if (this.tipologiaMagazzino.includes(tipologia)) {
            return this.constants.tipologiaImmobileMagazzino;
        }
        if (this.tipologiaMuseo.includes(tipologia)) {
            return this.constants.tipologiaImmobileMuseo;
        }
        if (this.tipologiaNegozio.includes(tipologia)) {
            return this.constants.tipologiaImmobileNegozio;
        }
        if (this.tipologiaOspedale.includes(tipologia)) {
            return this.constants.tipologiaImmobileOspedale;
        }
        if (this.tipologiaPonte.includes(tipologia)) {
            return this.constants.tipologiaImmobilePonte;
        }
        if (this.tipologiaScuola.includes(tipologia)) {
            return this.constants.tipologiaImmobileScuola;
        }
        if (this.tipologiaSport.includes(tipologia)) {
            return this.constants.tipologiaImmobileSport;
        }
        if (this.tipologiaStazione.includes(tipologia)) {
            return this.constants.tipologiaImmobileStazione;
        }
        if (this.tipologiaTeatro.includes(tipologia)) {
            return this.constants.tipologiaImmobileTeatro;
        }
        if (this.tipologiaUfficio.includes(tipologia)) {
            return this.constants.tipologiaImmobileUfficio;
        }
        if (this.tipologiaVilla.includes(tipologia)) {
            return this.constants.tipologiaImmobileVilla;
        }
        return this.constants.tipologiaImmobileCasa;
    }
}
IconeService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
IconeService.ctorParameters = () => [
    { type: ConstantsService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    IconeService.prototype.tipologiaVilla;
    /**
     * @type {?}
     * @private
     */
    IconeService.prototype.tipologiaCasa;
    /**
     * @type {?}
     * @private
     */
    IconeService.prototype.tipologiaAgricolo;
    /**
     * @type {?}
     * @private
     */
    IconeService.prototype.tipologiaUfficio;
    /**
     * @type {?}
     * @private
     */
    IconeService.prototype.tipologiaAlbergo;
    /**
     * @type {?}
     * @private
     */
    IconeService.prototype.tipologiaOspedale;
    /**
     * @type {?}
     * @private
     */
    IconeService.prototype.tipologiaScuola;
    /**
     * @type {?}
     * @private
     */
    IconeService.prototype.tipologiaMuseo;
    /**
     * @type {?}
     * @private
     */
    IconeService.prototype.tipologiaChiesa;
    /**
     * @type {?}
     * @private
     */
    IconeService.prototype.tipologiaMagazzino;
    /**
     * @type {?}
     * @private
     */
    IconeService.prototype.tipologiaNegozio;
    /**
     * @type {?}
     * @private
     */
    IconeService.prototype.tipologiaSport;
    /**
     * @type {?}
     * @private
     */
    IconeService.prototype.tipologiaGarage;
    /**
     * @type {?}
     * @private
     */
    IconeService.prototype.tipologiaFabbrica;
    /**
     * @type {?}
     * @private
     */
    IconeService.prototype.tipologiaTeatro;
    /**
     * @type {?}
     * @private
     */
    IconeService.prototype.tipologiaBanca;
    /**
     * @type {?}
     * @private
     */
    IconeService.prototype.tipologiaPonte;
    /**
     * @type {?}
     * @private
     */
    IconeService.prototype.tipologiaStazione;
    /**
     * @type {?}
     * @private
     */
    IconeService.prototype.tipologiaCantiere;
    /**
     * @type {?}
     * @private
     */
    IconeService.prototype.constants;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BrokerLibModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: BrokerLibModule,
            providers: [],
        };
    }
}
BrokerLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [
                    HttpClientModule,
                    IonicStorageModule.forRoot()
                ],
                providers: [
                    ConstantsService,
                    BrokerHttpService,
                    ImmobiliService,
                    ClientiService,
                    DropdownService,
                    LogErroriService,
                    ErrorHandlerService,
                    IconeService
                ],
                exports: []
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Classe che raggruppa i servizi relativi ai Report
 *
 * @export
 * ReportService
 */
class ReportService {
    /**
     * @param {?} httpService
     * @param {?} constants
     */
    constructor(httpService, constants) {
        this.httpService = httpService;
        this.constants = constants;
    }
    /**
     * Chiamata per ottenere il report della situazione generale di un cliente
     *
     * @param {?} cliente_id
     * @return {?}
     */
    getSituazioneGenerale(cliente_id) {
        return this.httpService.get(this.constants.situazioneGeneraleServiceName + this.constants.pathSeparator + cliente_id);
    }
    /**
     * Chiamata per ottenere i dati che vanno a popolare i grafici
     *
     * @param {?} cliente_id
     * @return {?}
     */
    getGrafici(cliente_id) {
        return this.httpService.get(this.constants.graficiServiceName + this.constants.pathSeparator + cliente_id);
    }
    /**
     * Chiamata per scatenare l'invio del report generale in formato PDF al cliente passandolo in una mail
     *
     * @param {?} cliente_id
     * @return {?}
     */
    getPdfReport(cliente_id) {
        return this.httpService.get(this.constants.pdfReportServiceName + this.constants.pathSeparator + cliente_id);
    }
}
ReportService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ReportService.ctorParameters = () => [
    { type: BrokerHttpService },
    { type: ConstantsService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ReportService.prototype.httpService;
    /**
     * @type {?}
     * @private
     */
    ReportService.prototype.constants;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoginService {
    /**
     * @param {?} httpService
     * @param {?} storeService
     * @param {?} constants
     */
    constructor(httpService, storeService, constants) {
        this.httpService = httpService;
        this.storeService = storeService;
        this.constants = constants;
    }
    /**
     * @param {?} bodyCambio
     * @return {?}
     */
    CambioPassword(bodyCambio) {
        return this.httpService.post(this.constants.cambioPasswordServiceName, bodyCambio);
    }
    /**
     * @param {?} body
     * @return {?}
     */
    Login(body) {
        // eseguo la post
        return this.httpService.postNoToken(this.constants.loginServiceName, body);
    }
}
LoginService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LoginService.ctorParameters = () => [
    { type: BrokerHttpService },
    { type: StoreService },
    { type: ConstantsService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    LoginService.prototype.httpService;
    /**
     * @type {?}
     * @private
     */
    LoginService.prototype.storeService;
    /**
     * @type {?}
     * @private
     */
    LoginService.prototype.constants;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Grafici {
}
if (false) {
    /** @type {?} */
    Grafici.prototype.andamento_annuale;
    /** @type {?} */
    Grafici.prototype.indicatori;
    /** @type {?} */
    Grafici.prototype.concentrazione;
    /** @type {?} */
    Grafici.prototype.affittuari;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GraficiAffittuario {
}
if (false) {
    /** @type {?} */
    GraficiAffittuario.prototype.descrizione_affittuario;
    /** @type {?} */
    GraficiAffittuario.prototype.percentuale;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GraficiAndamentoAnnuale {
}
if (false) {
    /** @type {?} */
    GraficiAndamentoAnnuale.prototype.anno;
    /** @type {?} */
    GraficiAndamentoAnnuale.prototype.attivo;
    /** @type {?} */
    GraficiAndamentoAnnuale.prototype.passivo;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GraficiConcentrazione {
}
if (false) {
    /** @type {?} */
    GraficiConcentrazione.prototype.codice_catastale;
    /** @type {?} */
    GraficiConcentrazione.prototype.percentuale;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GraficiIndicatore {
}
if (false) {
    /** @type {?} */
    GraficiIndicatore.prototype.descrizione_indicatore;
    /** @type {?} */
    GraficiIndicatore.prototype.percentuale;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ReportGenerale {
}
if (false) {
    /** @type {?} */
    ReportGenerale.prototype.proprieta_id;
    /** @type {?} */
    ReportGenerale.prototype.codice_tipologia;
    /** @type {?} */
    ReportGenerale.prototype.descrizione_tipologia;
    /** @type {?} */
    ReportGenerale.prototype.valore_acquisto;
    /** @type {?} */
    ReportGenerale.prototype.quota;
    /** @type {?} */
    ReportGenerale.prototype.indirizzo;
    /** @type {?} */
    ReportGenerale.prototype.civico;
    /** @type {?} */
    ReportGenerale.prototype.citta;
    /** @type {?} */
    ReportGenerale.prototype.cap;
    /** @type {?} */
    ReportGenerale.prototype.provincia;
    /** @type {?} */
    ReportGenerale.prototype.prima_casa;
    /** @type {?} */
    ReportGenerale.prototype.passivi;
    /** @type {?} */
    ReportGenerale.prototype.attivo;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ReportGeneraleAttivo {
}
if (false) {
    /** @type {?} */
    ReportGeneraleAttivo.prototype.descrizione_affittuario;
    /** @type {?} */
    ReportGeneraleAttivo.prototype.cedolare_secca;
    /** @type {?} */
    ReportGeneraleAttivo.prototype.aliquota_cedolare;
    /** @type {?} */
    ReportGeneraleAttivo.prototype.prima_scadenza_anni;
    /** @type {?} */
    ReportGeneraleAttivo.prototype.data_inizio;
    /** @type {?} */
    ReportGeneraleAttivo.prototype.importo_mensile;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ReportGeneralePassivo {
}
if (false) {
    /** @type {?} */
    ReportGeneralePassivo.prototype.descrizione_passivo;
    /** @type {?} */
    ReportGeneralePassivo.prototype.importo_annuale;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ReportGeneraleOggettoColonna {
}
if (false) {
    /** @type {?} */
    ReportGeneraleOggettoColonna.prototype.descrizione;
    /** @type {?} */
    ReportGeneraleOggettoColonna.prototype.valore;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AbilitaAppClienteRequest {
}
if (false) {
    /** @type {?} */
    AbilitaAppClienteRequest.prototype.cliente_id;
    /** @type {?} */
    AbilitaAppClienteRequest.prototype.password;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BookValue {
}
if (false) {
    /** @type {?} */
    BookValue.prototype.gruppo_catastale;
    /** @type {?} */
    BookValue.prototype.codice_catastale;
    /** @type {?} */
    BookValue.prototype.descrizione_tipologia;
    /** @type {?} */
    BookValue.prototype.book_value;
    /** @type {?} */
    BookValue.prototype.numero_proprieta;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InserimentoClienteRequest {
}
if (false) {
    /** @type {?} */
    InserimentoClienteRequest.prototype.cliente_id;
    /** @type {?} */
    InserimentoClienteRequest.prototype.promotore_id;
    /** @type {?} */
    InserimentoClienteRequest.prototype.nome;
    /** @type {?} */
    InserimentoClienteRequest.prototype.cognome;
    /** @type {?} */
    InserimentoClienteRequest.prototype.codice_fiscale;
    /** @type {?} */
    InserimentoClienteRequest.prototype.email;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InserimentoClienteResponse {
}
if (false) {
    /** @type {?} */
    InserimentoClienteResponse.prototype.return_id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable-next-line: no-namespace
class Immobile {
}
if (false) {
    /** @type {?} */
    Immobile.prototype.cliente_id;
    /** @type {?} */
    Immobile.prototype.proprieta_id;
    /** @type {?} */
    Immobile.prototype.indirizzo;
    /** @type {?} */
    Immobile.prototype.civico;
    /** @type {?} */
    Immobile.prototype.email;
    /** @type {?} */
    Immobile.prototype.citta;
    /** @type {?} */
    Immobile.prototype.cap;
    /** @type {?} */
    Immobile.prototype.provincia;
    /** @type {?} */
    Immobile.prototype.prima_casa;
    /** @type {?} */
    Immobile.prototype.valore_acquisto;
    /** @type {?} */
    Immobile.prototype.quota;
    /** @type {?} */
    Immobile.prototype.data_aggiornamento;
    /** @type {?} */
    Immobile.prototype.codice_tipologia;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CancellazioneImmobileRequest {
}
if (false) {
    /** @type {?} */
    CancellazioneImmobileRequest.prototype.immobile_id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CointestatarioDettaglio {
}
if (false) {
    /** @type {?} */
    CointestatarioDettaglio.prototype.proprieta_possesso_id;
    /** @type {?} */
    CointestatarioDettaglio.prototype.nominativo;
    /** @type {?} */
    CointestatarioDettaglio.prototype.codice_fiscale;
    /** @type {?} */
    CointestatarioDettaglio.prototype.quota;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ImmobileDettaglioVM extends ImmobileDettaglio {
}
if (false) {
    /** @type {?} */
    ImmobileDettaglioVM.prototype.tasse_totale;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InserimentoImmobileResponse {
}
if (false) {
    /** @type {?} */
    InserimentoImmobileResponse.prototype.return_id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SpesaDettaglio {
}
if (false) {
    /** @type {?} */
    SpesaDettaglio.prototype.proprieta_spese_id;
    /** @type {?} */
    SpesaDettaglio.prototype.spesa_id;
    /** @type {?} */
    SpesaDettaglio.prototype.descrizione_spesa;
    /** @type {?} */
    SpesaDettaglio.prototype.importo_annuale;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TassaDettaglio {
}
if (false) {
    /** @type {?} */
    TassaDettaglio.prototype.proprieta_tasse_id;
    /** @type {?} */
    TassaDettaglio.prototype.tassa_id;
    /** @type {?} */
    TassaDettaglio.prototype.descrizione_tassa;
    /** @type {?} */
    TassaDettaglio.prototype.importo_annuale;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PianoAmmortamento {
}
if (false) {
    /** @type {?} */
    PianoAmmortamento.prototype.indice;
    /** @type {?} */
    PianoAmmortamento.prototype.anno;
    /** @type {?} */
    PianoAmmortamento.prototype.importo_rata;
    /** @type {?} */
    PianoAmmortamento.prototype.quota_interessi;
    /** @type {?} */
    PianoAmmortamento.prototype.quota_capitale;
    /** @type {?} */
    PianoAmmortamento.prototype.interessi_residui;
    /** @type {?} */
    PianoAmmortamento.prototype.capitale_residuo;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AnnoPianoAmmortamento {
}
if (false) {
    /** @type {?} */
    AnnoPianoAmmortamento.prototype.anno;
    /** @type {?} */
    AnnoPianoAmmortamento.prototype.piano_lista;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoginRequest {
}
if (false) {
    /** @type {?} */
    LoginRequest.prototype.username;
    /** @type {?} */
    LoginRequest.prototype.password;
    /** @type {?} */
    LoginRequest.prototype.id_phone;
    /** @type {?} */
    LoginRequest.prototype.app_chiamante;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Utente {
}
if (false) {
    /** @type {?} */
    Utente.prototype.utente_id;
    /** @type {?} */
    Utente.prototype.nome;
    /** @type {?} */
    Utente.prototype.cognome;
    /** @type {?} */
    Utente.prototype.codice_fiscale;
    /** @type {?} */
    Utente.prototype.email;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CambioPasswordRequest {
}
if (false) {
    /** @type {?} */
    CambioPasswordRequest.prototype.vecchia_password;
    /** @type {?} */
    CambioPasswordRequest.prototype.nuova_password;
    /** @type {?} */
    CambioPasswordRequest.prototype.ripeti_password;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ErrorMessage {
}
if (false) {
    /** @type {?} */
    ErrorMessage.prototype.msg_tipo;
    /** @type {?} */
    ErrorMessage.prototype.msg_code;
    /** @type {?} */
    ErrorMessage.prototype.msg_testo;
    /** @type {?} */
    ErrorMessage.prototype.msg_method;
    /** @type {?} */
    ErrorMessage.prototype.msg_techdata;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DdlItem {
}
if (false) {
    /** @type {?} */
    DdlItem.prototype.codice;
    /** @type {?} */
    DdlItem.prototype.descrizione;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AbilitaAppClienteRequest, AffittoDettaglio, AlertService, AnnoPianoAmmortamento, BookValue, BrokerLibModule, CambioPasswordRequest, CancellazioneImmobileRequest, Cliente, ClientiService, CointestatarioDettaglio, Connection, DatiCatastaliDettaglio, DdlItem, DropdownService, ErrorHandlerService, ErrorMessage, Grafici, GraficiAffittuario, GraficiAndamentoAnnuale, GraficiConcentrazione, GraficiIndicatore, IconeService, Immobile, ImmobileDettaglio, ImmobileDettaglioVM, ImmobiliService, InserimentoClienteRequest, InserimentoClienteResponse, InserimentoImmobileResponse, LogErroriService, LoginRequest, LoginService, MutuoDettaglio, OmiDettaglio, PianoAmmortamento, ReportGenerale, ReportGeneraleAttivo, ReportGeneraleOggettoColonna, ReportGeneralePassivo, ReportService, SessionService, SpesaDettaglio, StoreService, TassaDettaglio, Utente, WsLogErrore, WsToken, ConstantsService as ɵa, BrokerHttpService as ɵb };
//# sourceMappingURL=broker-lib.js.map
