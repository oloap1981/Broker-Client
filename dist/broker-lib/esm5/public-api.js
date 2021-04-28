/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * Public API Surface of my-app-lib
 */
export { BrokerLibModule } from './lib/broker-lib.module';
// servizi ------------------------------------------------
// -- report
export { ReportService } from './lib/services/report/report.service';
// -- clienti
export { ClientiService } from './lib/services/clienti/clienti.service';
// -- immobili
export { ImmobiliService } from './lib/services/immobili/immobili.service';
// -- documenti
export { DocumentiService } from './lib/services/documenti/documenti.service';
// -- vari
export { DropdownService } from './lib/services/dropdown/dropdown.service';
export { LogErroriService } from './lib/services/log-errori/log-errori.service';
export { SessionService } from './lib/services/common/session.service';
export { StoreService } from './lib/services/store/store.service';
export { LoginService } from './lib/services/login/login.service';
export { AlertService } from './lib/services/common/alert.service';
export { IconeService } from './lib/services/icone/icone.service';
// handler ------------------------------------------------
export { ErrorHandlerService } from './lib/handler/error/error-handler.service';
// modelli ------------------------------------------------
// -- report
export { Grafici } from './lib/models/report/grafici';
export { GraficiAffittuario } from './lib/models/report/graficiAffittuario';
export { GraficiAndamentoAnnuale } from './lib/models/report/graficiAndamentoAnnuale';
export { GraficiConcentrazione } from './lib/models/report/graficiConcentrazione';
export { GraficiIndicatore } from './lib/models/report/graficiIndicatore';
export { ReportGenerale } from './lib/models/report/reportGenerale';
export { ReportGeneraleAttivo } from './lib/models/report/reportGeneraleAttivo';
export { ReportGeneralePassivo } from './lib/models/report/reportGeneralePassivo';
export { ReportGeneraleOggettoColonna } from './lib/models/report/reportGeneraleOggettoColonna';
// -- clienti
export { Cliente } from './lib/models/clienti/cliente';
export { AbilitaAppClienteRequest } from './lib/models/clienti/abilitaAppClienteRequest';
export { BookValue } from './lib/models/clienti/bookValue';
export { InserimentoClienteRequest } from './lib/models/clienti/inserimentoClienteRequest';
export { InserimentoClienteResponse } from './lib/models/clienti/inserimentoClienteResponse';
// -- immobili
export { Immobile } from './lib/models/immobili/immobile';
export { AffittoDettaglio } from './lib/models/immobili/affittoDettaglio';
export { CancellazioneImmobileRequest } from './lib/models/immobili/cancellazioneImmobileRequest';
export { CointestatarioDettaglio } from './lib/models/immobili/cointestatarioDettaglio';
export { DatiCatastaliDettaglio } from './lib/models/immobili/datiCatastaliDettaglio';
export { ImmobileDettaglio } from './lib/models/immobili/immobileDettaglio';
export { ImmobileDettaglioVM } from './lib/models/immobili/immobileDettaglioVM';
export { InserimentoImmobileResponse } from './lib/models/immobili/inserimentoImmobileResponse';
export { MutuoDettaglio } from './lib/models/immobili/mutuoDettaglio';
export { OmiDettaglio } from './lib/models/immobili/omiDettaglio';
export { SpesaDettaglio } from './lib/models/immobili/spesaDettaglio';
export { TassaDettaglio, Imu } from './lib/models/immobili/tassaDettaglio';
export { PianoAmmortamento } from './lib/models/immobili/pianoAmmortamento';
export { AnnoPianoAmmortamento } from './lib/models/immobili/annoPianoAmmortamento';
// documenti
export { Cartella } from './lib/models/documenti/cartella';
export { Documento } from './lib/models/documenti/documento';
// -- utenti
export { WsToken } from './lib/models/login/wsToken';
export { LoginRequest } from './lib/models/login/loginRequest';
export { Utente } from './lib/models/login/utente';
export { CambioPasswordRequest } from './lib/models/login/cambioPasswordRequest';
// -- vari
export { ErrorMessage } from './lib/models/common/errormessage';
export { WsLogErrore } from './lib/models/common/wslogerrore';
export { DdlItem } from './lib/models/common/ddlitem';
export { DdlItemSearch } from './lib/models/common/ddlItemSearch';
export { Connection } from './lib/models/common/connection';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLWFwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jyb2tlci1saWIvIiwic291cmNlcyI6WyJwdWJsaWMtYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxnQ0FBYyx5QkFBeUIsQ0FBQzs7O0FBSXhDLDhCQUFjLHNDQUFzQyxDQUFDOztBQUVyRCwrQkFBYyx3Q0FBd0MsQ0FBQzs7QUFFdkQsZ0NBQWMsMENBQTBDLENBQUM7O0FBRXpELGlDQUFjLDRDQUE0QyxDQUFDOztBQUUzRCxnQ0FBYywwQ0FBMEMsQ0FBQztBQUN6RCxpQ0FBYyw4Q0FBOEMsQ0FBQztBQUM3RCwrQkFBYyx1Q0FBdUMsQ0FBQztBQUN0RCw2QkFBYyxvQ0FBb0MsQ0FBQztBQUNuRCw2QkFBYyxvQ0FBb0MsQ0FBQztBQUNuRCw2QkFBYyxxQ0FBcUMsQ0FBQztBQUNwRCw2QkFBYyxvQ0FBb0MsQ0FBQzs7QUFHbkQsb0NBQWMsMkNBQTJDLENBQUM7OztBQUkxRCx3QkFBYyw2QkFBNkIsQ0FBQztBQUM1QyxtQ0FBYyx3Q0FBd0MsQ0FBQztBQUN2RCx3Q0FBYyw2Q0FBNkMsQ0FBQztBQUM1RCxzQ0FBYywyQ0FBMkMsQ0FBQztBQUMxRCxrQ0FBYyx1Q0FBdUMsQ0FBQztBQUN0RCwrQkFBYyxvQ0FBb0MsQ0FBQztBQUNuRCxxQ0FBYywwQ0FBMEMsQ0FBQztBQUN6RCxzQ0FBYywyQ0FBMkMsQ0FBQztBQUMxRCw2Q0FBYyxrREFBa0QsQ0FBQzs7QUFFakUsd0JBQWMsOEJBQThCLENBQUM7QUFDN0MseUNBQWMsK0NBQStDLENBQUM7QUFDOUQsMEJBQWMsZ0NBQWdDLENBQUM7QUFDL0MsMENBQWMsZ0RBQWdELENBQUM7QUFDL0QsMkNBQWMsaURBQWlELENBQUM7O0FBRWhFLHlCQUFjLGdDQUFnQyxDQUFDO0FBQy9DLGlDQUFjLHdDQUF3QyxDQUFDO0FBQ3ZELDZDQUFjLG9EQUFvRCxDQUFDO0FBQ25FLHdDQUFjLCtDQUErQyxDQUFDO0FBQzlELHVDQUFjLDhDQUE4QyxDQUFDO0FBQzdELGtDQUFjLHlDQUF5QyxDQUFDO0FBQ3hELG9DQUFjLDJDQUEyQyxDQUFDO0FBQzFELDRDQUFjLG1EQUFtRCxDQUFDO0FBQ2xFLCtCQUFjLHNDQUFzQyxDQUFDO0FBQ3JELDZCQUFjLG9DQUFvQyxDQUFDO0FBQ25ELCtCQUFjLHNDQUFzQyxDQUFDO0FBQ3JELG9DQUFjLHNDQUFzQyxDQUFDO0FBQ3JELGtDQUFjLHlDQUF5QyxDQUFDO0FBQ3hELHNDQUFjLDZDQUE2QyxDQUFDOztBQUU1RCx5QkFBYyxpQ0FBaUMsQ0FBQztBQUNoRCwwQkFBYyxrQ0FBa0MsQ0FBQzs7QUFHakQsd0JBQWMsNEJBQTRCLENBQUM7QUFDM0MsNkJBQWMsaUNBQWlDLENBQUM7QUFDaEQsdUJBQWMsMkJBQTJCLENBQUM7QUFDMUMsc0NBQWMsMENBQTBDLENBQUM7O0FBRXpELDZCQUFjLGtDQUFrQyxDQUFDO0FBQ2pELDRCQUFjLGlDQUFpQyxDQUFDO0FBQ2hELHdCQUFjLDZCQUE2QixDQUFDO0FBQzVDLDhCQUFjLG1DQUFtQyxDQUFDO0FBQ2xELDJCQUFjLGdDQUFnQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFB1YmxpYyBBUEkgU3VyZmFjZSBvZiBteS1hcHAtbGliXG4gKi9cblxuZXhwb3J0ICogZnJvbSAnLi9saWIvYnJva2VyLWxpYi5tb2R1bGUnO1xuXG4vLyBzZXJ2aXppIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLS0gcmVwb3J0XG5leHBvcnQgKiBmcm9tICcuL2xpYi9zZXJ2aWNlcy9yZXBvcnQvcmVwb3J0LnNlcnZpY2UnO1xuLy8gLS0gY2xpZW50aVxuZXhwb3J0ICogZnJvbSAnLi9saWIvc2VydmljZXMvY2xpZW50aS9jbGllbnRpLnNlcnZpY2UnO1xuLy8gLS0gaW1tb2JpbGlcbmV4cG9ydCAqIGZyb20gJy4vbGliL3NlcnZpY2VzL2ltbW9iaWxpL2ltbW9iaWxpLnNlcnZpY2UnO1xuLy8gLS0gZG9jdW1lbnRpXG5leHBvcnQgKiBmcm9tICcuL2xpYi9zZXJ2aWNlcy9kb2N1bWVudGkvZG9jdW1lbnRpLnNlcnZpY2UnO1xuLy8gLS0gdmFyaVxuZXhwb3J0ICogZnJvbSAnLi9saWIvc2VydmljZXMvZHJvcGRvd24vZHJvcGRvd24uc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9zZXJ2aWNlcy9sb2ctZXJyb3JpL2xvZy1lcnJvcmkuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9zZXJ2aWNlcy9jb21tb24vc2Vzc2lvbi5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL3NlcnZpY2VzL3N0b3JlL3N0b3JlLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvc2VydmljZXMvbG9naW4vbG9naW4uc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9zZXJ2aWNlcy9jb21tb24vYWxlcnQuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9zZXJ2aWNlcy9pY29uZS9pY29uZS5zZXJ2aWNlJztcblxuLy8gaGFuZGxlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmV4cG9ydCAqIGZyb20gJy4vbGliL2hhbmRsZXIvZXJyb3IvZXJyb3ItaGFuZGxlci5zZXJ2aWNlJztcblxuLy8gbW9kZWxsaSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC0tIHJlcG9ydFxuZXhwb3J0ICogZnJvbSAnLi9saWIvbW9kZWxzL3JlcG9ydC9ncmFmaWNpJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL21vZGVscy9yZXBvcnQvZ3JhZmljaUFmZml0dHVhcmlvJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL21vZGVscy9yZXBvcnQvZ3JhZmljaUFuZGFtZW50b0FubnVhbGUnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbW9kZWxzL3JlcG9ydC9ncmFmaWNpQ29uY2VudHJhemlvbmUnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbW9kZWxzL3JlcG9ydC9ncmFmaWNpSW5kaWNhdG9yZSc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9tb2RlbHMvcmVwb3J0L3JlcG9ydEdlbmVyYWxlJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL21vZGVscy9yZXBvcnQvcmVwb3J0R2VuZXJhbGVBdHRpdm8nO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbW9kZWxzL3JlcG9ydC9yZXBvcnRHZW5lcmFsZVBhc3Npdm8nO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbW9kZWxzL3JlcG9ydC9yZXBvcnRHZW5lcmFsZU9nZ2V0dG9Db2xvbm5hJztcbi8vIC0tIGNsaWVudGlcbmV4cG9ydCAqIGZyb20gJy4vbGliL21vZGVscy9jbGllbnRpL2NsaWVudGUnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbW9kZWxzL2NsaWVudGkvYWJpbGl0YUFwcENsaWVudGVSZXF1ZXN0JztcbmV4cG9ydCAqIGZyb20gJy4vbGliL21vZGVscy9jbGllbnRpL2Jvb2tWYWx1ZSc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9tb2RlbHMvY2xpZW50aS9pbnNlcmltZW50b0NsaWVudGVSZXF1ZXN0JztcbmV4cG9ydCAqIGZyb20gJy4vbGliL21vZGVscy9jbGllbnRpL2luc2VyaW1lbnRvQ2xpZW50ZVJlc3BvbnNlJztcbi8vIC0tIGltbW9iaWxpXG5leHBvcnQgKiBmcm9tICcuL2xpYi9tb2RlbHMvaW1tb2JpbGkvaW1tb2JpbGUnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbW9kZWxzL2ltbW9iaWxpL2FmZml0dG9EZXR0YWdsaW8nO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbW9kZWxzL2ltbW9iaWxpL2NhbmNlbGxhemlvbmVJbW1vYmlsZVJlcXVlc3QnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbW9kZWxzL2ltbW9iaWxpL2NvaW50ZXN0YXRhcmlvRGV0dGFnbGlvJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL21vZGVscy9pbW1vYmlsaS9kYXRpQ2F0YXN0YWxpRGV0dGFnbGlvJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL21vZGVscy9pbW1vYmlsaS9pbW1vYmlsZURldHRhZ2xpbyc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9tb2RlbHMvaW1tb2JpbGkvaW1tb2JpbGVEZXR0YWdsaW9WTSc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9tb2RlbHMvaW1tb2JpbGkvaW5zZXJpbWVudG9JbW1vYmlsZVJlc3BvbnNlJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL21vZGVscy9pbW1vYmlsaS9tdXR1b0RldHRhZ2xpbyc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9tb2RlbHMvaW1tb2JpbGkvb21pRGV0dGFnbGlvJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL21vZGVscy9pbW1vYmlsaS9zcGVzYURldHRhZ2xpbyc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9tb2RlbHMvaW1tb2JpbGkvdGFzc2FEZXR0YWdsaW8nO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbW9kZWxzL2ltbW9iaWxpL3BpYW5vQW1tb3J0YW1lbnRvJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL21vZGVscy9pbW1vYmlsaS9hbm5vUGlhbm9BbW1vcnRhbWVudG8nO1xuLy8gZG9jdW1lbnRpXG5leHBvcnQgKiBmcm9tICcuL2xpYi9tb2RlbHMvZG9jdW1lbnRpL2NhcnRlbGxhJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL21vZGVscy9kb2N1bWVudGkvZG9jdW1lbnRvJztcblxuLy8gLS0gdXRlbnRpXG5leHBvcnQgKiBmcm9tICcuL2xpYi9tb2RlbHMvbG9naW4vd3NUb2tlbic7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9tb2RlbHMvbG9naW4vbG9naW5SZXF1ZXN0JztcbmV4cG9ydCAqIGZyb20gJy4vbGliL21vZGVscy9sb2dpbi91dGVudGUnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbW9kZWxzL2xvZ2luL2NhbWJpb1Bhc3N3b3JkUmVxdWVzdCc7XG4vLyAtLSB2YXJpXG5leHBvcnQgKiBmcm9tICcuL2xpYi9tb2RlbHMvY29tbW9uL2Vycm9ybWVzc2FnZSc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9tb2RlbHMvY29tbW9uL3dzbG9nZXJyb3JlJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL21vZGVscy9jb21tb24vZGRsaXRlbSc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9tb2RlbHMvY29tbW9uL2RkbEl0ZW1TZWFyY2gnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbW9kZWxzL2NvbW1vbi9jb25uZWN0aW9uJztcbiJdfQ==