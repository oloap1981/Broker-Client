(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('@ionic/angular'), require('@ionic/Storage'), require('rxjs'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('broker-lib', ['exports', '@angular/core', '@angular/common/http', '@ionic/angular', '@ionic/Storage', 'rxjs', '@angular/router'], factory) :
    (global = global || self, factory(global['broker-lib'] = {}, global.ng.core, global.ng.common.http, global.angular, global.Storage, global.rxjs, global.ng.router));
}(this, (function (exports, core, http, angular, Storage, rxjs, router) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ConstantsService = /** @class */ (function () {
        function ConstantsService() {
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
            this.getClienteServiceName = 'getcliente';
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
            // documenti
            this.getCartelle = 'getcartelle';
            this.getDocumento = 'getdocumento';
            this.putCartelle = 'putcartelle';
            this.putDocumento = 'putdocumento';
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
            this.getDdlTipologiaCatastale = 'get_ddl_tipologia_catastale';
            this.getDdlComuni = 'get_ddl_comuni';
        }
        ConstantsService.decorators = [
            { type: core.Injectable }
        ];
        return ConstantsService;
    }());
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
        ConstantsService.prototype.getClienteServiceName;
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
        ConstantsService.prototype.getCartelle;
        /** @type {?} */
        ConstantsService.prototype.getDocumento;
        /** @type {?} */
        ConstantsService.prototype.putCartelle;
        /** @type {?} */
        ConstantsService.prototype.putDocumento;
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
        ConstantsService.prototype.getDdlTipologiaCatastale;
        /** @type {?} */
        ConstantsService.prototype.getDdlComuni;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BrokerHttpService = /** @class */ (function () {
        function BrokerHttpService(http$1, constants, backEnd) {
            this.http = http$1;
            this.constants = constants;
            this.backEnd = backEnd;
            this.httpClientLogin = new http.HttpClient(this.backEnd);
        }
        /**
         * @param {?} path
         * @return {?}
         */
        BrokerHttpService.prototype.get = /**
         * @param {?} path
         * @return {?}
         */
        function (path) {
            return this.http.get(this.constants.baseAppUrl + "/" + path);
        };
        /**
         * @param {?} path
         * @return {?}
         */
        BrokerHttpService.prototype.getNoToken = /**
         * @param {?} path
         * @return {?}
         */
        function (path) {
            console.log("HttpService get " + path);
            return this.httpClientLogin.get(this.constants.baseAppUrl + "/" + path);
        };
        /**
         * @param {?} path
         * @param {?} body
         * @return {?}
         */
        BrokerHttpService.prototype.post = /**
         * @param {?} path
         * @param {?} body
         * @return {?}
         */
        function (path, body) {
            return this.http.post(this.constants.baseAppUrl + "/" + path, body);
        };
        /**
         * @param {?} path
         * @param {?} body
         * @return {?}
         */
        BrokerHttpService.prototype.postNoToken = /**
         * @param {?} path
         * @param {?} body
         * @return {?}
         */
        function (path, body) {
            console.log("HttpService post " + path);
            return this.httpClientLogin.post(this.constants.baseAppUrl + "/" + path, body);
        };
        BrokerHttpService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        BrokerHttpService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: ConstantsService },
            { type: http.HttpBackend }
        ]; };
        return BrokerHttpService;
    }());
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
    var WsLogErrore = /** @class */ (function () {
        function WsLogErrore() {
        }
        return WsLogErrore;
    }());
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
    var LogErroriService = /** @class */ (function () {
        function LogErroriService(httpService, constants) {
            this.httpService = httpService;
            this.constants = constants;
        }
        /**
         * Chiamata per il salvataggio su persistenza di errori
         *
         * @param errorData
         * @param tokenValue
         * @returns
         * LogErroriService
         */
        /**
         * Chiamata per il salvataggio su persistenza di errori
         *
         * @param {?} errorData
         * @return {?}
         * LogErroriService
         */
        LogErroriService.prototype.postErrore = /**
         * Chiamata per il salvataggio su persistenza di errori
         *
         * @param {?} errorData
         * @return {?}
         * LogErroriService
         */
        function (errorData) {
            return this.httpService.post(this.constants.postErroreServiceName, errorData);
        };
        /**
         * @param {?} errorMessage
         * @return {?}
         */
        LogErroriService.prototype.generateErrorMessage = /**
         * @param {?} errorMessage
         * @return {?}
         */
        function (errorMessage) {
            /** @type {?} */
            var logErrore = new WsLogErrore();
            logErrore.log_descrerr = errorMessage.msg_testo;
            logErrore.log_stacktrace = errorMessage.msg_techdata;
            return logErrore;
        };
        LogErroriService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        LogErroriService.ctorParameters = function () { return [
            { type: BrokerHttpService },
            { type: ConstantsService }
        ]; };
        return LogErroriService;
    }());
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
    var WsToken = /** @class */ (function () {
        function WsToken() {
        }
        return WsToken;
    }());
    if (false) {
        /** @type {?} */
        WsToken.prototype.token_value;
        /** @type {?} */
        WsToken.prototype.tipo_utente;
        /** @type {?} */
        WsToken.prototype.utente;
        /** @type {?} */
        WsToken.prototype.cliente;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StoreService = /** @class */ (function () {
        function StoreService(storage) {
            this.storage = storage;
            this.USERKEY = "user";
            this.CLIENTEKEY = "client";
            this.wsToken = null;
        }
        /**
         * @return {?}
         */
        StoreService.prototype.clearUserData = /**
         * @return {?}
         */
        function () {
            this.storage.clear();
            this.wsToken = null;
            this.cliente = null;
        };
        /**
         * @param {?} ws_token
         * @return {?}
         */
        StoreService.prototype.setUserData = /**
         * @param {?} ws_token
         * @return {?}
         */
        function (ws_token) {
            console.log("setUserData");
            this.wsToken = ws_token;
            if (ws_token != null) {
                this.storage.set(this.USERKEY, ws_token).then((/**
                 * @param {?} val
                 * @return {?}
                 */
                function (val) {
                    console.log(val);
                }));
            }
            else {
                return -1;
            }
            return 1;
        };
        /**
         * @param {?} cliente
         * @return {?}
         */
        StoreService.prototype.setClientData = /**
         * @param {?} cliente
         * @return {?}
         */
        function (cliente) {
            console.log("setUserData");
            this.cliente = cliente;
            if (cliente != null) {
                this.storage.set(this.CLIENTEKEY, cliente).then((/**
                 * @param {?} val
                 * @return {?}
                 */
                function (val) {
                    console.log(val);
                }));
            }
            else {
                return -1;
            }
            return 1;
        };
        /**
         * @return {?}
         */
        StoreService.prototype.getUserDataPromise = /**
         * @return {?}
         */
        function () {
            var _this = this;
            return new Promise((/**
             * @param {?} resolve
             * @return {?}
             */
            function (resolve) {
                if (_this.wsToken == null) {
                    // store service prima inizializzaione
                    _this.storage.get(_this.USERKEY).then((/**
                     * @param {?} val
                     * @return {?}
                     */
                    function (val) {
                        // recuperato token dal database
                        console.log(val);
                        if (val != null) {
                            resolve(val);
                        }
                        else {
                            console.log("necessario login");
                            _this.setUserData(null);
                            _this.wsToken = null;
                            // devo andare alla pagina del login
                            resolve(null);
                        }
                    }));
                }
                else {
                    // store service già inizializzato
                    // come al punto precedente servirebbe controllare il token ed eventualmente fare di nuovo il login;
                    resolve(_this.wsToken);
                }
            }));
        };
        /**
         * @return {?}
         */
        StoreService.prototype.getClientePromise = /**
         * @return {?}
         */
        function () {
            var _this = this;
            return new Promise((/**
             * @param {?} resolve
             * @return {?}
             */
            function (resolve) {
                if (_this.cliente == null) {
                    // store service prima inizializzaione
                    _this.storage.get(_this.CLIENTEKEY).then((/**
                     * @param {?} val
                     * @return {?}
                     */
                    function (val) {
                        // recuperato token dal database
                        console.log(val);
                        if (val != null) {
                            resolve(val);
                        }
                        else {
                            console.log("necessario login");
                            _this.setClientData(null);
                            _this.cliente = null;
                            // devo andare alla pagina del login
                            resolve(null);
                        }
                    }));
                }
                else {
                    // store service già inizializzato
                    // come al punto precedente servirebbe controllare il token ed eventualmente fare di nuovo il login;
                    resolve(_this.cliente);
                }
            }));
        };
        StoreService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        StoreService.ctorParameters = function () { return [
            { type: Storage.Storage }
        ]; };
        return StoreService;
    }());
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
        StoreService.prototype.CLIENTEKEY;
        /**
         * @type {?}
         * @private
         */
        StoreService.prototype.wsToken;
        /**
         * @type {?}
         * @private
         */
        StoreService.prototype.cliente;
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
    var ImmobiliService = /** @class */ (function () {
        function ImmobiliService(httpService, constants) {
            this.httpService = httpService;
            this.constants = constants;
        }
        /**
         * Chiamata per ottenere l'elenco degli immobili appartenenti ad uno specifico cliente
         *
         * @param  id_cliente
         * @param  tokenValue Token di autenticazione ottenuto dalla login
         * @returns response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
         * Data dentro al quale si trova l'elenco degli immobili
         */
        /**
         * Chiamata per ottenere l'elenco degli immobili appartenenti ad uno specifico cliente
         *
         * @param {?} id_cliente
         * @return {?} response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
         * Data dentro al quale si trova l'elenco degli immobili
         */
        ImmobiliService.prototype.getImmobili = /**
         * Chiamata per ottenere l'elenco degli immobili appartenenti ad uno specifico cliente
         *
         * @param {?} id_cliente
         * @return {?} response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
         * Data dentro al quale si trova l'elenco degli immobili
         */
        function (id_cliente) {
            return this.httpService.get(this.constants.getImmobiliServiceName
                + this.constants.pathSeparator
                + id_cliente);
            // return this.httpService.get('getimmobili' + '/' + idCliente, tokenValue);
        };
        /**
         * Chiamata per ottenere il singolo immobile passando il suo identificativo unico
         *
         * @param  immobile_id
         * @param  tokenValue Token di autenticazione ottenuto dalla login
         * @returns response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
         * Data dentro al quale si trova l'oggetto Immobile
         */
        /**
         * Chiamata per ottenere il singolo immobile passando il suo identificativo unico
         *
         * @param {?} immobile_id
         * @return {?} response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
         * Data dentro al quale si trova l'oggetto Immobile
         */
        ImmobiliService.prototype.getImmobile = /**
         * Chiamata per ottenere il singolo immobile passando il suo identificativo unico
         *
         * @param {?} immobile_id
         * @return {?} response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
         * Data dentro al quale si trova l'oggetto Immobile
         */
        function (immobile_id) {
            // return this.httpService.get(this.constants.getImmobileServiceName + this.constants.pathSeparator + immobile_id, tokenValue);
            return this.httpService.get(this.constants.getImmobileServiceName
                + this.constants.pathSeparator
                + immobile_id);
        };
        /**
         * Chiamata per inserire un nuovo immobile
         *
         * @param  immobile
         * @param  tokenValue Token di autenticazione ottenuto dalla login
         * @returns response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
         * Data dentro al quale si trova l'id dell'immobile appena salvato
         */
        /**
         * Chiamata per inserire un nuovo immobile
         *
         * @param {?} immobile
         * @return {?} response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
         * Data dentro al quale si trova l'id dell'immobile appena salvato
         */
        ImmobiliService.prototype.putImmobile = /**
         * Chiamata per inserire un nuovo immobile
         *
         * @param {?} immobile
         * @return {?} response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
         * Data dentro al quale si trova l'id dell'immobile appena salvato
         */
        function (immobile) {
            return this.httpService.post(this.constants.putImmobileServiceName, immobile);
        };
        /**
         * Chiamata per cancellare un immobile passando il suo identificativo unico
         *
         * @param  cancellazioneRequest
         * @param  tokenValue Token di autenticazione ottenuto dalla login
         * @returns response contenente l'esito in Success e ErrorMessages.
         */
        /**
         * Chiamata per cancellare un immobile passando il suo identificativo unico
         *
         * @param {?} cancellazioneRequest
         * @return {?} response contenente l'esito in Success e ErrorMessages.
         */
        ImmobiliService.prototype.delImmobile = /**
         * Chiamata per cancellare un immobile passando il suo identificativo unico
         *
         * @param {?} cancellazioneRequest
         * @return {?} response contenente l'esito in Success e ErrorMessages.
         */
        function (cancellazioneRequest) {
            return this.httpService.post(this.constants.delImmobileServiceName, cancellazioneRequest);
        };
        /**
         * Chiamata per attivare il flusso di invio dei dati catastali via mail all'utente proprietario dell'immobile di cui deve
         * essere passato l'identificativo unico
         *
         * @param  immobile_id
         * @param  tokenValue Token di autenticazione ottenuto dalla login
         * @returns response contenente l'esito in Success e ErrorMessages.
         */
        /**
         * Chiamata per attivare il flusso di invio dei dati catastali via mail all'utente proprietario dell'immobile di cui deve
         * essere passato l'identificativo unico
         *
         * @param {?} immobile_id
         * @return {?} response contenente l'esito in Success e ErrorMessages.
         */
        ImmobiliService.prototype.invioDatiCatastali = /**
         * Chiamata per attivare il flusso di invio dei dati catastali via mail all'utente proprietario dell'immobile di cui deve
         * essere passato l'identificativo unico
         *
         * @param {?} immobile_id
         * @return {?} response contenente l'esito in Success e ErrorMessages.
         */
        function (immobile_id) {
            return this.httpService.get(this.constants.getCatastoServiceName + this.constants.pathSeparator + immobile_id);
        };
        /**
         * @param {?} immobile_id
         * @return {?}
         */
        ImmobiliService.prototype.getPianoAmmortamentoImmobile = /**
         * @param {?} immobile_id
         * @return {?}
         */
        function (immobile_id) {
            return this.httpService.get(this.constants.getPianoAmmortamentoServiceName + this.constants.pathSeparator + immobile_id);
        };
        ImmobiliService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        ImmobiliService.ctorParameters = function () { return [
            { type: BrokerHttpService },
            { type: ConstantsService }
        ]; };
        return ImmobiliService;
    }());
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
    var   
    // tslint:disable-next-line: no-namespace
    Cliente = /** @class */ (function () {
        function Cliente() {
        }
        return Cliente;
    }());
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
        Cliente.prototype.omi_value_min;
        /** @type {?} */
        Cliente.prototype.omi_value_max;
        /** @type {?} */
        Cliente.prototype.stato_cliente;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ImmobileDettaglio = /** @class */ (function () {
        function ImmobileDettaglio() {
            this.proprieta_id = 0;
            this.codice_fiscale = "";
            this.codice_tipologia = "";
            this.descrizione_tipologia = "";
            this.data_aggiornamento = 0;
            this.valore_acquisto = 0;
            this.quota = 0;
            this.catastale_cod = "";
            this.comune_zone_cod = "";
            this.indirizzo = "";
            this.civico = "";
            this.citta = "";
            this.cap = "";
            this.provincia = "";
            this.istat_cod = "";
            this.latitudine = "";
            this.longitudine = "";
            this.prima_casa = false;
            this.destinazione_uso_id = 0;
            this.descrizione_uso = "";
            this.mutuo = false;
            this.affitto = false;
        }
        return ImmobileDettaglio;
    }());
    if (false) {
        /** @type {?} */
        ImmobileDettaglio.prototype.proprieta_id;
        /** @type {?} */
        ImmobileDettaglio.prototype.tipologie_catastali_id;
        /** @type {?} */
        ImmobileDettaglio.prototype.codice_fiscale;
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
        ImmobileDettaglio.prototype.affitto;
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
    var Connection = /** @class */ (function () {
        function Connection() {
        }
        return Connection;
    }());
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
    var DatiCatastaliDettaglio = /** @class */ (function () {
        function DatiCatastaliDettaglio() {
            this.proprieta_catasto_id = 0;
            this.sezione = '';
            this.foglio = '';
            this.zona = '';
            this.micro_zona = '';
            this.particella = '';
            this.subalterno = '';
            this.categoria = '';
            this.classe = '';
            this.rendita = 0;
            this.vani = '';
            this.superficie_interni = 0;
            this.superficie_totale = 0;
        }
        return DatiCatastaliDettaglio;
    }());
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
    var OmiDettaglio = /** @class */ (function () {
        function OmiDettaglio() {
            this.valore_omi = 0;
            this.valore_pot = 0;
            this.affitto_pot = 0;
            this.ammortamento_decadenza = 0;
        }
        return OmiDettaglio;
    }());
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
    var MutuoDettaglio = /** @class */ (function () {
        function MutuoDettaglio() {
            this.proprieta_mutuo_id = 0;
            this.detrazione_interessi = '';
            this.tipo_tasso = '';
            this.euribor_id = 0;
            this.descrizione_euribor = '';
            this.spread = 0;
            this.rate_id = 0;
            this.descrizione_rate = '';
            this.numero_rate = 0;
            this.durata = 0;
            this.data_inizio = '';
            this.importo_iniziale = 0;
        }
        return MutuoDettaglio;
    }());
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
    var AffittoDettaglio = /** @class */ (function () {
        function AffittoDettaglio() {
            this.proprieta_affitto_id = 0;
            this.tipo_affittuario_id = 0;
            this.descrizione_affittuario = '';
            this.spese_condominiali = false;
            this.importo_spese_condominiali = 0;
            this.cedolare_secca = false;
            this.aliquota_cedolare = 0;
            this.prima_scadenza_anni = 0;
            this.data_inizio = '';
            this.importo_mensile = 0;
        }
        return AffittoDettaglio;
    }());
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
    var SessionService = /** @class */ (function () {
        function SessionService(storeService, immobiliService) {
            this.storeService = storeService;
            this.immobiliService = immobiliService;
            this.elencoImmobiliSubject = new rxjs.Subject();
            this.elencoImmobiliObs = this.elencoImmobiliSubject.asObservable();
            this.userDataSubject = new rxjs.Subject();
            this.userDataObservable = this.userDataSubject.asObservable();
            this.userData = new WsToken();
            this.clientData = new Cliente();
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
        SessionService.prototype.setPaginaPrecedente = /**
         * @param {?} pagina
         * @return {?}
         */
        function (pagina) {
            this.paginaPrecedente = pagina;
        };
        /**
         * @return {?}
         */
        SessionService.prototype.getPaginaPrecedente = /**
         * @return {?}
         */
        function () {
            return this.paginaPrecedente;
        };
        /**
         * @param {?} intestazione
         * @return {?}
         */
        SessionService.prototype.setIntestazionePagina = /**
         * @param {?} intestazione
         * @return {?}
         */
        function (intestazione) {
            this.intestazionePagina = intestazione;
        };
        /**
         * @return {?}
         */
        SessionService.prototype.getIntestazionePagina = /**
         * @return {?}
         */
        function () {
            return this.intestazionePagina;
        };
        /**
         * @param {?} cliente
         * @return {?}
         */
        SessionService.prototype.setCliente = /**
         * @param {?} cliente
         * @return {?}
         */
        function (cliente) {
            var _this = this;
            this.cliente = cliente;
            this.immobiliService.getImmobili(this.cliente.cliente_id + '').subscribe((/**
             * @param {?} r
             * @return {?}
             */
            function (r) {
                if (r.Success) {
                    _this.immobiliCliente = r.Data.elenco_immobili;
                    console.log('caricati gli immobili del cliente: ' + _this.immobiliCliente.length);
                    // sveglia chi è in ascolto
                    _this.elencoImmobiliSubject.next(true);
                }
            }));
        };
        /**
         * @return {?}
         */
        SessionService.prototype.clearUserData = /**
         * @return {?}
         */
        function () {
            this.storeService.clearUserData();
            this.userData = new WsToken();
        };
        /**
         * @param {?} userData
         * @return {?}
         */
        SessionService.prototype.setUserData = /**
         * @param {?} userData
         * @return {?}
         */
        function (userData) {
            this.userData = userData;
            if (userData != null) {
                this.storeService.setUserData(userData);
                if (userData.cliente !== undefined && userData.cliente !== null) {
                    this.setCliente(userData.cliente);
                }
            }
            else {
                return -1;
            }
            return 1;
        };
        /**
         * @param {?} client
         * @return {?}
         */
        SessionService.prototype.setClientData = /**
         * @param {?} client
         * @return {?}
         */
        function (client) {
            this.clientData = client;
            if (client != null) {
                this.storeService.setClientData(client);
            }
            else {
                return -1;
            }
            return 1;
        };
        /**
         * @return {?}
         */
        SessionService.prototype.getUserData = /**
         * @return {?}
         */
        function () {
            return this.userData;
        };
        /**
         * @return {?}
         */
        SessionService.prototype.loadUserData = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.userData !== null && this.userData !== undefined && this.userData.token_value === '') {
                this.userDataSubject.next(true);
            }
            else {
                this.storeService.getUserDataPromise().then((/**
                 * @param {?} val
                 * @return {?}
                 */
                function (val) {
                    if (val == null) {
                        _this.userDataSubject.next(false);
                    }
                    else {
                        _this.userData = val;
                        _this.userDataSubject.next(true);
                    }
                }));
            }
        };
        /**
         * @return {?}
         */
        SessionService.prototype.getCliente = /**
         * @return {?}
         */
        function () {
            return this.cliente;
        };
        /**
         * @return {?}
         */
        SessionService.prototype.clearCliente = /**
         * @return {?}
         */
        function () {
            this.cliente = new Cliente();
            this.immobiliCliente = new Array();
        };
        /**
         * @return {?}
         */
        SessionService.prototype.getImmobiliCliente = /**
         * @return {?}
         */
        function () {
            return this.immobiliCliente;
        };
        /**
         * @param {?} immobileDettaglio
         * @return {?}
         */
        SessionService.prototype.setImmobileDettaglio = /**
         * @param {?} immobileDettaglio
         * @return {?}
         */
        function (immobileDettaglio) {
            this.immobile = immobileDettaglio;
        };
        /**
         * @return {?}
         */
        SessionService.prototype.getImmobileDettaglio = /**
         * @return {?}
         */
        function () {
            return this.immobile;
        };
        /**
         * @return {?}
         */
        SessionService.prototype.clearImmobileDettaglio = /**
         * @return {?}
         */
        function () {
            this.immobile = null;
        };
        /**
         * @param {?} conn
         * @return {?}
         */
        SessionService.prototype.setConnection = /**
         * @param {?} conn
         * @return {?}
         */
        function (conn) {
            this.connection = conn;
        };
        /**
         * @return {?}
         */
        SessionService.prototype.getConnection = /**
         * @return {?}
         */
        function () {
            return this.connection;
        };
        SessionService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        SessionService.ctorParameters = function () { return [
            { type: StoreService },
            { type: ImmobiliService }
        ]; };
        return SessionService;
    }());
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
        SessionService.prototype.clientData;
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
    var AlertService = /** @class */ (function () {
        function AlertService(alertController, sessionService, router) {
            this.alertController = alertController;
            this.sessionService = sessionService;
            this.router = router;
        }
        /**
         * @param {?} alertMessage
         * @return {?}
         */
        AlertService.prototype.presentAlert = /**
         * @param {?} alertMessage
         * @return {?}
         */
        function (alertMessage) {
            return __awaiter(this, void 0, void 0, function () {
                var alert;
                return __generator(this, function (_a) {
                    alert = this.alertController.create({
                        header: 'Conferma',
                        message: alertMessage,
                        buttons: ['OK']
                    });
                    alert.then((/**
                     * @param {?} _alert
                     * @return {?}
                     */
                    function (_alert) {
                        _alert.present();
                    }));
                    return [2 /*return*/];
                });
            });
        };
        /**
         * @param {?} alertMessage
         * @return {?}
         */
        AlertService.prototype.presentErrorAlert = /**
         * @param {?} alertMessage
         * @return {?}
         */
        function (alertMessage) {
            return __awaiter(this, void 0, void 0, function () {
                var alert;
                return __generator(this, function (_a) {
                    alert = this.alertController.create({
                        header: 'Errore',
                        message: alertMessage,
                        buttons: ['CHIUDI']
                    });
                    alert.then((/**
                     * @param {?} _alert
                     * @return {?}
                     */
                    function (_alert) {
                        _alert.present();
                    }));
                    return [2 /*return*/];
                });
            });
        };
        /**
         * @return {?}
         */
        AlertService.prototype.presentAlertLogout = /**
         * @return {?}
         */
        function () {
            return __awaiter(this, void 0, void 0, function () {
                var alert;
                var _this = this;
                return __generator(this, function (_a) {
                    alert = this.alertController.create({
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
                                function (blah) {
                                    console.log('Confirm Cancel: blah');
                                })
                            }, {
                                text: 'Si',
                                handler: (/**
                                 * @return {?}
                                 */
                                function () {
                                    _this.sessionService.clearUserData();
                                    _this.router.navigate(['login']);
                                })
                            }
                        ]
                    });
                    alert.then((/**
                     * @param {?} _alert
                     * @return {?}
                     */
                    function (_alert) {
                        _alert.present();
                    }));
                    return [2 /*return*/];
                });
            });
        };
        AlertService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        AlertService.ctorParameters = function () { return [
            { type: angular.AlertController },
            { type: SessionService },
            { type: router.Router }
        ]; };
        return AlertService;
    }());
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
    var ErrorHandlerService = /** @class */ (function () {
        function ErrorHandlerService(injector, zone, logErroriService, alertService, sessionService) {
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
        ErrorHandlerService.prototype.handleError = /**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            var _this = this;
            /** @type {?} */
            var token = this.sessionService.getUserData().token_value;
            console.log('gestisco un errore');
            /** @type {?} */
            var errore = new WsLogErrore();
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
            function (r) {
                console.log('errore trasmesso: ' + errore);
                _this.alertService.presentErrorAlert('Errore ' + error.message + ' trasmesso al server');
            }));
            console.log('gestione errore completata');
        };
        ErrorHandlerService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        ErrorHandlerService.ctorParameters = function () { return [
            { type: core.Injector },
            { type: core.NgZone },
            { type: LogErroriService },
            { type: AlertService },
            { type: SessionService }
        ]; };
        return ErrorHandlerService;
    }());
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
    var ClientiService = /** @class */ (function () {
        function ClientiService(httpService, constants) {
            this.httpService = httpService;
            this.constants = constants;
        }
        /**
         * Chiamata per ottenere l'elenco dei clienti completo.
         *
         * @param  tokenValue Token di autenticazione ottenuto dalla login
         * @returns contenente l'oggetto Data che a sua volta contiene l'elenco degli oggetti Cliente
         */
        /**
         * Chiamata per ottenere l'elenco dei clienti completo.
         *
         * @return {?} contenente l'oggetto Data che a sua volta contiene l'elenco degli oggetti Cliente
         */
        ClientiService.prototype.getClienti = /**
         * Chiamata per ottenere l'elenco dei clienti completo.
         *
         * @return {?} contenente l'oggetto Data che a sua volta contiene l'elenco degli oggetti Cliente
         */
        function () {
            return this.httpService.get(this.constants.getClientiServiceName);
        };
        /**
         * Chiamata per ottenere il singolo cliente passando il suo id come parametro
         *
         * @param  tokenValue Token di autenticazione ottenuto dalla login
         * @returns contenente l'oggetto Data che a sua volta contiene l'elenco degli oggetti Cliente
         */
        /**
         * Chiamata per ottenere il singolo cliente passando il suo id come parametro
         *
         * @param {?} idcliente
         * @return {?} contenente l'oggetto Data che a sua volta contiene l'elenco degli oggetti Cliente
         */
        ClientiService.prototype.getCliente = /**
         * Chiamata per ottenere il singolo cliente passando il suo id come parametro
         *
         * @param {?} idcliente
         * @return {?} contenente l'oggetto Data che a sua volta contiene l'elenco degli oggetti Cliente
         */
        function (idcliente) {
            return this.httpService.get(this.constants.getClienteServiceName + this.constants.pathSeparator + idcliente);
        };
        /**
         * Chiamata per inserire un nuovo cliente
         *
         * @param  cliente
         * @param  tokenValue Token di autenticazione ottenuto dalla login
         * @returns response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
         * Data dentro al quale si trova l'id dell'oggetto appena generato
         */
        /**
         * Chiamata per inserire un nuovo cliente
         *
         * @param {?} cliente
         * @return {?} response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
         * Data dentro al quale si trova l'id dell'oggetto appena generato
         */
        ClientiService.prototype.putCliente = /**
         * Chiamata per inserire un nuovo cliente
         *
         * @param {?} cliente
         * @return {?} response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
         * Data dentro al quale si trova l'id dell'oggetto appena generato
         */
        function (cliente) {
            return this.httpService.post(this.constants.putClientiServiceName, cliente);
        };
        /**
         * Chiamata per abilitare l'app di uno specifico cliente
         *
         * @param  request oggetto contenente i parametri per l'abilitazione
         * @param  tokenValue Token di autenticazione ottenuto dalla login
         * @returns response contenente l'esito in Success e ErrorMessages.
         */
        /**
         * Chiamata per abilitare l'app di uno specifico cliente
         *
         * @param {?} request oggetto contenente i parametri per l'abilitazione
         * @return {?} response contenente l'esito in Success e ErrorMessages.
         */
        ClientiService.prototype.abilitaAppCliente = /**
         * Chiamata per abilitare l'app di uno specifico cliente
         *
         * @param {?} request oggetto contenente i parametri per l'abilitazione
         * @return {?} response contenente l'esito in Success e ErrorMessages.
         */
        function (request) {
            return this.httpService.post(this.constants.abilitaAppClienteServiceName, request);
        };
        /**
         * Chiamata per ottenere il BookValue di un cliente
         *
         * @param  cliente_id identificativo unico del cliente del quale si vuole il BookValue
         * @param  tokenValue Token di autenticazione ottenuto dalla login
         * @returns response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
         * Data che a sua volta contiene l'elenco degli oggetti BookValue
         */
        /**
         * Chiamata per ottenere il BookValue di un cliente
         *
         * @param {?} cliente_id identificativo unico del cliente del quale si vuole il BookValue
         * @return {?} response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
         * Data che a sua volta contiene l'elenco degli oggetti BookValue
         */
        ClientiService.prototype.getBookValue = /**
         * Chiamata per ottenere il BookValue di un cliente
         *
         * @param {?} cliente_id identificativo unico del cliente del quale si vuole il BookValue
         * @return {?} response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
         * Data che a sua volta contiene l'elenco degli oggetti BookValue
         */
        function (cliente_id) {
            return this.httpService.get(this.constants.bookValueServiceName + this.constants.pathSeparator + cliente_id);
        };
        /**
         * Chiamata per ottenere il piano di ammortamento di un mutuo
         *
         * @param  mutuo_id identificativo unico del mutuo del quale si vuole il PianoAmmortamento
         * @param  tokenValue Token di autenticazione ottenuto dalla login
         * @returns response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
         * Data che a sua volta contiene l'elenco degli oggetti PianoAmmortamento
         */
        /**
         * Chiamata per ottenere il piano di ammortamento di un mutuo
         *
         * @param {?} mutuo_id identificativo unico del mutuo del quale si vuole il PianoAmmortamento
         * @return {?} response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
         * Data che a sua volta contiene l'elenco degli oggetti PianoAmmortamento
         */
        ClientiService.prototype.getPianoAmmortamento = /**
         * Chiamata per ottenere il piano di ammortamento di un mutuo
         *
         * @param {?} mutuo_id identificativo unico del mutuo del quale si vuole il PianoAmmortamento
         * @return {?} response contenente l'esito in Success e ErrorMessages. Contenente l'oggetto
         * Data che a sua volta contiene l'elenco degli oggetti PianoAmmortamento
         */
        function (mutuo_id) {
            return this.httpService.get(this.constants.pianoAmmortamentoServiceName + this.constants.pathSeparator + mutuo_id);
        };
        ClientiService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        ClientiService.ctorParameters = function () { return [
            { type: BrokerHttpService },
            { type: ConstantsService }
        ]; };
        return ClientiService;
    }());
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
    var DropdownService = /** @class */ (function () {
        function DropdownService(httpService, constants) {
            this.httpService = httpService;
            this.constants = constants;
        }
        /**
         * @param {?} primacasa
         * @param {?} residente
         * @param {?} affittata
         * @return {?}
         */
        DropdownService.prototype.getTipologieTasse = /**
         * @param {?} primacasa
         * @param {?} residente
         * @param {?} affittata
         * @return {?}
         */
        function (primacasa, residente, affittata) {
            return this.getDropdown(this.constants.getDdlTasse, this.constants.pathSeparator + this.getBooleanAsString(primacasa)
                + this.constants.pathSeparator + this.getBooleanAsString(residente)
                + this.constants.pathSeparator + this.getBooleanAsString(affittata));
        };
        /**
         * @return {?}
         */
        DropdownService.prototype.getTipiAffittuari = /**
         * @return {?}
         */
        function () {
            return this.getDropdown(this.constants.getDdlAffittuari, '');
        };
        /**
         * @return {?}
         */
        DropdownService.prototype.getEuribor = /**
         * @return {?}
         */
        function () {
            return this.getDropdown(this.constants.getDdlEuribor, '');
        };
        /**
         * @param {?} idComuneIstat
         * @return {?}
         */
        DropdownService.prototype.getTipiOmi = /**
         * @param {?} idComuneIstat
         * @return {?}
         */
        function (idComuneIstat) {
            return this.getDropdown(this.constants.getDdlOmi, this.constants.pathSeparator + idComuneIstat);
        };
        /**
         * @return {?}
         */
        DropdownService.prototype.getTipologieCatastali = /**
         * @return {?}
         */
        function () {
            return this.getDropdown(this.constants.getDdlTipologiaCatastale, '');
        };
        /**
         * @param {?} nomeComune
         * @return {?}
         */
        DropdownService.prototype.getComuni = /**
         * @param {?} nomeComune
         * @return {?}
         */
        function (nomeComune) {
            return this.getDropdown(this.constants.getDdlComuni, this.constants.pathSeparator + nomeComune);
        };
        /**
         * @param {?} Tipoddl
         * @param {?} Filtro
         * @return {?}
         */
        DropdownService.prototype.getDropdown = /**
         * @param {?} Tipoddl
         * @param {?} Filtro
         * @return {?}
         */
        function (Tipoddl, Filtro) {
            /** @type {?} */
            var path = Tipoddl + Filtro;
            return this.httpService.get(path);
        };
        /**
         * @private
         * @param {?} input
         * @return {?}
         */
        DropdownService.prototype.getBooleanAsString = /**
         * @private
         * @param {?} input
         * @return {?}
         */
        function (input) {
            return (input ? 'true' : 'false');
        };
        DropdownService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        DropdownService.ctorParameters = function () { return [
            { type: BrokerHttpService },
            { type: ConstantsService }
        ]; };
        return DropdownService;
    }());
    if (false) {
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
    var IconeService = /** @class */ (function () {
        function IconeService(constants) {
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
        IconeService.prototype.getClasseIcona = /**
         * @param {?} tipologia
         * @return {?}
         */
        function (tipologia) {
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
        };
        IconeService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        IconeService.ctorParameters = function () { return [
            { type: ConstantsService }
        ]; };
        return IconeService;
    }());
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
    var BrokerLibModule = /** @class */ (function () {
        function BrokerLibModule() {
        }
        /**
         * @return {?}
         */
        BrokerLibModule.forRoot = /**
         * @return {?}
         */
        function () {
            return {
                ngModule: BrokerLibModule,
                providers: [],
            };
        };
        BrokerLibModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [],
                        imports: [
                            http.HttpClientModule,
                            Storage.IonicStorageModule.forRoot()
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
        return BrokerLibModule;
    }());

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
    var ReportService = /** @class */ (function () {
        function ReportService(httpService, constants) {
            this.httpService = httpService;
            this.constants = constants;
        }
        /**
         * Chiamata per ottenere il report della situazione generale di un cliente
         *
         * @param cliente_id
         * @param tokenValue Token di autenticazione ottenuto dalla login
         * @returns
         */
        /**
         * Chiamata per ottenere il report della situazione generale di un cliente
         *
         * @param {?} cliente_id
         * @return {?}
         */
        ReportService.prototype.getSituazioneGenerale = /**
         * Chiamata per ottenere il report della situazione generale di un cliente
         *
         * @param {?} cliente_id
         * @return {?}
         */
        function (cliente_id) {
            return this.httpService.get(this.constants.situazioneGeneraleServiceName + this.constants.pathSeparator + cliente_id);
        };
        /**
         * Chiamata per ottenere i dati che vanno a popolare i grafici
         *
         * @param  cliente_id
         * @param  tokenValue Token di autenticazione ottenuto dalla login
         * @returns
         */
        /**
         * Chiamata per ottenere i dati che vanno a popolare i grafici
         *
         * @param {?} cliente_id
         * @return {?}
         */
        ReportService.prototype.getGrafici = /**
         * Chiamata per ottenere i dati che vanno a popolare i grafici
         *
         * @param {?} cliente_id
         * @return {?}
         */
        function (cliente_id) {
            return this.httpService.get(this.constants.graficiServiceName + this.constants.pathSeparator + cliente_id);
        };
        /**
         * Chiamata per scatenare l'invio del report generale in formato PDF al cliente passandolo in una mail
         *
         * @param  cliente_id
         * @param  tokenValue Token di autenticazione ottenuto dalla login
         * @returns
         */
        /**
         * Chiamata per scatenare l'invio del report generale in formato PDF al cliente passandolo in una mail
         *
         * @param {?} cliente_id
         * @return {?}
         */
        ReportService.prototype.getPdfReport = /**
         * Chiamata per scatenare l'invio del report generale in formato PDF al cliente passandolo in una mail
         *
         * @param {?} cliente_id
         * @return {?}
         */
        function (cliente_id) {
            return this.httpService.get(this.constants.pdfReportServiceName + this.constants.pathSeparator + cliente_id);
        };
        ReportService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        ReportService.ctorParameters = function () { return [
            { type: BrokerHttpService },
            { type: ConstantsService }
        ]; };
        return ReportService;
    }());
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
    var DocumentiService = /** @class */ (function () {
        function DocumentiService(httpService, constants) {
            this.httpService = httpService;
            this.constants = constants;
        }
        /**
         * @param {?} idcliente
         * @param {?} idcartella
         * @return {?}
         */
        DocumentiService.prototype.getCartelle = /**
         * @param {?} idcliente
         * @param {?} idcartella
         * @return {?}
         */
        function (idcliente, idcartella) {
            return this.httpService.get(this.constants.getCartelle
                + this.constants.pathSeparator + idcliente
                + this.constants.pathSeparator + idcartella);
        };
        /**
         * @param {?} iddocumento
         * @return {?}
         */
        DocumentiService.prototype.getDocumento = /**
         * @param {?} iddocumento
         * @return {?}
         */
        function (iddocumento) {
            return this.httpService.get(this.constants.getDocumento
                + this.constants.pathSeparator + iddocumento);
        };
        /**
         * @param {?} cartella
         * @return {?}
         */
        DocumentiService.prototype.putCartelle = /**
         * @param {?} cartella
         * @return {?}
         */
        function (cartella) {
            return this.httpService.post(this.constants.putCartelle, cartella);
        };
        /**
         * @param {?} documento
         * @return {?}
         */
        DocumentiService.prototype.putDocumento = /**
         * @param {?} documento
         * @return {?}
         */
        function (documento) {
            return this.httpService.post(this.constants.putDocumento, documento);
        };
        DocumentiService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        DocumentiService.ctorParameters = function () { return [
            { type: BrokerHttpService },
            { type: ConstantsService }
        ]; };
        return DocumentiService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        DocumentiService.prototype.httpService;
        /**
         * @type {?}
         * @private
         */
        DocumentiService.prototype.constants;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoginService = /** @class */ (function () {
        function LoginService(httpService, storeService, constants) {
            this.httpService = httpService;
            this.storeService = storeService;
            this.constants = constants;
        }
        /**
         * @param {?} bodyCambio
         * @return {?}
         */
        LoginService.prototype.CambioPassword = /**
         * @param {?} bodyCambio
         * @return {?}
         */
        function (bodyCambio) {
            return this.httpService.post(this.constants.cambioPasswordServiceName, bodyCambio);
        };
        /**
         * @param {?} body
         * @return {?}
         */
        LoginService.prototype.Login = /**
         * @param {?} body
         * @return {?}
         */
        function (body) {
            // eseguo la post
            return this.httpService.postNoToken(this.constants.loginServiceName, body);
        };
        LoginService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        LoginService.ctorParameters = function () { return [
            { type: BrokerHttpService },
            { type: StoreService },
            { type: ConstantsService }
        ]; };
        return LoginService;
    }());
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
    var Grafici = /** @class */ (function () {
        function Grafici() {
        }
        return Grafici;
    }());
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
    var GraficiAffittuario = /** @class */ (function () {
        function GraficiAffittuario() {
        }
        return GraficiAffittuario;
    }());
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
    var GraficiAndamentoAnnuale = /** @class */ (function () {
        function GraficiAndamentoAnnuale() {
        }
        return GraficiAndamentoAnnuale;
    }());
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
    var GraficiConcentrazione = /** @class */ (function () {
        function GraficiConcentrazione() {
        }
        return GraficiConcentrazione;
    }());
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
    var GraficiIndicatore = /** @class */ (function () {
        function GraficiIndicatore() {
        }
        return GraficiIndicatore;
    }());
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
    var ReportGenerale = /** @class */ (function () {
        function ReportGenerale() {
        }
        return ReportGenerale;
    }());
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
    var ReportGeneraleAttivo = /** @class */ (function () {
        function ReportGeneraleAttivo() {
        }
        return ReportGeneraleAttivo;
    }());
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
    var ReportGeneralePassivo = /** @class */ (function () {
        function ReportGeneralePassivo() {
        }
        return ReportGeneralePassivo;
    }());
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
    var ReportGeneraleOggettoColonna = /** @class */ (function () {
        function ReportGeneraleOggettoColonna() {
        }
        return ReportGeneraleOggettoColonna;
    }());
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
    var AbilitaAppClienteRequest = /** @class */ (function () {
        function AbilitaAppClienteRequest() {
        }
        return AbilitaAppClienteRequest;
    }());
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
    var BookValue = /** @class */ (function () {
        function BookValue() {
        }
        return BookValue;
    }());
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
    var InserimentoClienteRequest = /** @class */ (function () {
        function InserimentoClienteRequest() {
        }
        return InserimentoClienteRequest;
    }());
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
    var InserimentoClienteResponse = /** @class */ (function () {
        function InserimentoClienteResponse() {
        }
        return InserimentoClienteResponse;
    }());
    if (false) {
        /** @type {?} */
        InserimentoClienteResponse.prototype.return_id;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable-next-line: no-namespace
    var   
    // tslint:disable-next-line: no-namespace
    Immobile = /** @class */ (function () {
        function Immobile() {
        }
        return Immobile;
    }());
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
    var CancellazioneImmobileRequest = /** @class */ (function () {
        function CancellazioneImmobileRequest() {
        }
        return CancellazioneImmobileRequest;
    }());
    if (false) {
        /** @type {?} */
        CancellazioneImmobileRequest.prototype.immobile_id;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CointestatarioDettaglio = /** @class */ (function () {
        function CointestatarioDettaglio() {
            this.proprieta_possesso_id = 0;
            this.nominativo = '';
            this.codice_fiscale = '';
            this.quota = 0;
        }
        return CointestatarioDettaglio;
    }());
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
    var ImmobileDettaglioVM = /** @class */ (function (_super) {
        __extends(ImmobileDettaglioVM, _super);
        function ImmobileDettaglioVM() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ImmobileDettaglioVM;
    }(ImmobileDettaglio));
    if (false) {
        /** @type {?} */
        ImmobileDettaglioVM.prototype.tasse_totale;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var InserimentoImmobileResponse = /** @class */ (function () {
        function InserimentoImmobileResponse() {
        }
        return InserimentoImmobileResponse;
    }());
    if (false) {
        /** @type {?} */
        InserimentoImmobileResponse.prototype.return_id;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SpesaDettaglio = /** @class */ (function () {
        function SpesaDettaglio() {
            this.proprieta_spese_id = 0;
            this.descrizione_spesa = '';
            this.importo_annuale = 0;
        }
        return SpesaDettaglio;
    }());
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
    var TassaDettaglio = /** @class */ (function () {
        function TassaDettaglio() {
            this.proprieta_tasse_id = 0;
            this.descrizione_tassa = '';
            this.importo_annuale = 0;
        }
        return TassaDettaglio;
    }());
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
    var PianoAmmortamento = /** @class */ (function () {
        function PianoAmmortamento() {
        }
        return PianoAmmortamento;
    }());
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
    var AnnoPianoAmmortamento = /** @class */ (function () {
        function AnnoPianoAmmortamento() {
        }
        return AnnoPianoAmmortamento;
    }());
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
    var Cartella = /** @class */ (function () {
        function Cartella() {
        }
        return Cartella;
    }());
    if (false) {
        /** @type {?} */
        Cartella.prototype.doc_cartella_id;
        /** @type {?} */
        Cartella.prototype.cartella_desc;
        /** @type {?} */
        Cartella.prototype.doc_cartella_padre_id;
        /** @type {?} */
        Cartella.prototype.cliente_id;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Documento = /** @class */ (function () {
        function Documento() {
        }
        return Documento;
    }());
    if (false) {
        /** @type {?} */
        Documento.prototype.doc_file_id;
        /** @type {?} */
        Documento.prototype.nome_file;
        /** @type {?} */
        Documento.prototype.descrizione;
        /** @type {?} */
        Documento.prototype.file;
        /** @type {?} */
        Documento.prototype.note;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoginRequest = /** @class */ (function () {
        function LoginRequest() {
        }
        return LoginRequest;
    }());
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
    var Utente = /** @class */ (function () {
        function Utente() {
        }
        return Utente;
    }());
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
    var CambioPasswordRequest = /** @class */ (function () {
        function CambioPasswordRequest() {
        }
        return CambioPasswordRequest;
    }());
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
    var ErrorMessage = /** @class */ (function () {
        function ErrorMessage() {
        }
        return ErrorMessage;
    }());
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
    var DdlItem = /** @class */ (function () {
        function DdlItem() {
        }
        return DdlItem;
    }());
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
    var DdlItemSearch = /** @class */ (function () {
        function DdlItemSearch() {
        }
        return DdlItemSearch;
    }());
    if (false) {
        /** @type {?} */
        DdlItemSearch.prototype.id;
        /** @type {?} */
        DdlItemSearch.prototype.description;
    }

    exports.AbilitaAppClienteRequest = AbilitaAppClienteRequest;
    exports.AffittoDettaglio = AffittoDettaglio;
    exports.AlertService = AlertService;
    exports.AnnoPianoAmmortamento = AnnoPianoAmmortamento;
    exports.BookValue = BookValue;
    exports.BrokerLibModule = BrokerLibModule;
    exports.CambioPasswordRequest = CambioPasswordRequest;
    exports.CancellazioneImmobileRequest = CancellazioneImmobileRequest;
    exports.Cartella = Cartella;
    exports.Cliente = Cliente;
    exports.ClientiService = ClientiService;
    exports.CointestatarioDettaglio = CointestatarioDettaglio;
    exports.Connection = Connection;
    exports.DatiCatastaliDettaglio = DatiCatastaliDettaglio;
    exports.DdlItem = DdlItem;
    exports.DdlItemSearch = DdlItemSearch;
    exports.DocumentiService = DocumentiService;
    exports.Documento = Documento;
    exports.DropdownService = DropdownService;
    exports.ErrorHandlerService = ErrorHandlerService;
    exports.ErrorMessage = ErrorMessage;
    exports.Grafici = Grafici;
    exports.GraficiAffittuario = GraficiAffittuario;
    exports.GraficiAndamentoAnnuale = GraficiAndamentoAnnuale;
    exports.GraficiConcentrazione = GraficiConcentrazione;
    exports.GraficiIndicatore = GraficiIndicatore;
    exports.IconeService = IconeService;
    exports.Immobile = Immobile;
    exports.ImmobileDettaglio = ImmobileDettaglio;
    exports.ImmobileDettaglioVM = ImmobileDettaglioVM;
    exports.ImmobiliService = ImmobiliService;
    exports.InserimentoClienteRequest = InserimentoClienteRequest;
    exports.InserimentoClienteResponse = InserimentoClienteResponse;
    exports.InserimentoImmobileResponse = InserimentoImmobileResponse;
    exports.LogErroriService = LogErroriService;
    exports.LoginRequest = LoginRequest;
    exports.LoginService = LoginService;
    exports.MutuoDettaglio = MutuoDettaglio;
    exports.OmiDettaglio = OmiDettaglio;
    exports.PianoAmmortamento = PianoAmmortamento;
    exports.ReportGenerale = ReportGenerale;
    exports.ReportGeneraleAttivo = ReportGeneraleAttivo;
    exports.ReportGeneraleOggettoColonna = ReportGeneraleOggettoColonna;
    exports.ReportGeneralePassivo = ReportGeneralePassivo;
    exports.ReportService = ReportService;
    exports.SessionService = SessionService;
    exports.SpesaDettaglio = SpesaDettaglio;
    exports.StoreService = StoreService;
    exports.TassaDettaglio = TassaDettaglio;
    exports.Utente = Utente;
    exports.WsLogErrore = WsLogErrore;
    exports.WsToken = WsToken;
    exports.ɵa = ConstantsService;
    exports.ɵb = BrokerHttpService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=broker-lib.umd.js.map
