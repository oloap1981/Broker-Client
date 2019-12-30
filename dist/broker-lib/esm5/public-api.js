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
export { TassaDettaglio } from './lib/models/immobili/tassaDettaglio';
export { PianoAmmortamento } from './lib/models/immobili/pianoAmmortamento';
export { AnnoPianoAmmortamento } from './lib/models/immobili/annoPianoAmmortamento';
// -- utenti
export { WsToken } from './lib/models/login/wsToken';
export { LoginRequest } from './lib/models/login/loginRequest';
export { Utente } from './lib/models/login/utente';
export { CambioPasswordRequest } from './lib/models/login/cambioPasswordRequest';
// -- vari
export { ErrorMessage } from './lib/models/common/errormessage';
export { WsLogErrore } from './lib/models/common/wslogerrore';
export { DdlItem } from './lib/models/common/ddlitem';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLWFwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jyb2tlci1saWIvIiwic291cmNlcyI6WyJwdWJsaWMtYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxnQ0FBYyx5QkFBeUIsQ0FBQzs7O0FBSXhDLDhCQUFjLHNDQUFzQyxDQUFDOztBQUVyRCwrQkFBYyx3Q0FBd0MsQ0FBQzs7QUFFdkQsZ0NBQWMsMENBQTBDLENBQUM7O0FBRXpELGdDQUFjLDBDQUEwQyxDQUFDO0FBQ3pELGlDQUFjLDhDQUE4QyxDQUFDO0FBQzdELCtCQUFjLHVDQUF1QyxDQUFDO0FBQ3RELDZCQUFjLG9DQUFvQyxDQUFDO0FBQ25ELDZCQUFjLG9DQUFvQyxDQUFDO0FBQ25ELDZCQUFjLHFDQUFxQyxDQUFDO0FBQ3BELDZCQUFjLG9DQUFvQyxDQUFDOztBQUduRCxvQ0FBYywyQ0FBMkMsQ0FBQzs7O0FBSTFELHdCQUFjLDZCQUE2QixDQUFDO0FBQzVDLG1DQUFjLHdDQUF3QyxDQUFDO0FBQ3ZELHdDQUFjLDZDQUE2QyxDQUFDO0FBQzVELHNDQUFjLDJDQUEyQyxDQUFDO0FBQzFELGtDQUFjLHVDQUF1QyxDQUFDO0FBQ3RELCtCQUFjLG9DQUFvQyxDQUFDO0FBQ25ELHFDQUFjLDBDQUEwQyxDQUFDO0FBQ3pELHNDQUFjLDJDQUEyQyxDQUFDO0FBQzFELDZDQUFjLGtEQUFrRCxDQUFDOztBQUVqRSx3QkFBYyw4QkFBOEIsQ0FBQztBQUM3Qyx5Q0FBYywrQ0FBK0MsQ0FBQztBQUM5RCwwQkFBYyxnQ0FBZ0MsQ0FBQztBQUMvQywwQ0FBYyxnREFBZ0QsQ0FBQztBQUMvRCwyQ0FBYyxpREFBaUQsQ0FBQzs7QUFFaEUseUJBQWMsZ0NBQWdDLENBQUM7QUFDL0MsaUNBQWMsd0NBQXdDLENBQUM7QUFDdkQsNkNBQWMsb0RBQW9ELENBQUM7QUFDbkUsd0NBQWMsK0NBQStDLENBQUM7QUFDOUQsdUNBQWMsOENBQThDLENBQUM7QUFDN0Qsa0NBQWMseUNBQXlDLENBQUM7QUFDeEQsb0NBQWMsMkNBQTJDLENBQUM7QUFDMUQsNENBQWMsbURBQW1ELENBQUM7QUFDbEUsK0JBQWMsc0NBQXNDLENBQUM7QUFDckQsNkJBQWMsb0NBQW9DLENBQUM7QUFDbkQsK0JBQWMsc0NBQXNDLENBQUM7QUFDckQsK0JBQWMsc0NBQXNDLENBQUM7QUFDckQsa0NBQWMseUNBQXlDLENBQUM7QUFDeEQsc0NBQWMsNkNBQTZDLENBQUM7O0FBRzVELHdCQUFjLDRCQUE0QixDQUFDO0FBQzNDLDZCQUFjLGlDQUFpQyxDQUFDO0FBQ2hELHVCQUFjLDJCQUEyQixDQUFDO0FBQzFDLHNDQUFjLDBDQUEwQyxDQUFDOztBQUV6RCw2QkFBYyxrQ0FBa0MsQ0FBQztBQUNqRCw0QkFBYyxpQ0FBaUMsQ0FBQztBQUNoRCx3QkFBYyw2QkFBNkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBQdWJsaWMgQVBJIFN1cmZhY2Ugb2YgbXktYXBwLWxpYlxuICovXG5cbmV4cG9ydCAqIGZyb20gJy4vbGliL2Jyb2tlci1saWIubW9kdWxlJztcblxuLy8gc2Vydml6aSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC0tIHJlcG9ydFxuZXhwb3J0ICogZnJvbSAnLi9saWIvc2VydmljZXMvcmVwb3J0L3JlcG9ydC5zZXJ2aWNlJztcbi8vIC0tIGNsaWVudGlcbmV4cG9ydCAqIGZyb20gJy4vbGliL3NlcnZpY2VzL2NsaWVudGkvY2xpZW50aS5zZXJ2aWNlJztcbi8vIC0tIGltbW9iaWxpXG5leHBvcnQgKiBmcm9tICcuL2xpYi9zZXJ2aWNlcy9pbW1vYmlsaS9pbW1vYmlsaS5zZXJ2aWNlJztcbi8vIC0tIHZhcmlcbmV4cG9ydCAqIGZyb20gJy4vbGliL3NlcnZpY2VzL2Ryb3Bkb3duL2Ryb3Bkb3duLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvc2VydmljZXMvbG9nLWVycm9yaS9sb2ctZXJyb3JpLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvc2VydmljZXMvY29tbW9uL3Nlc3Npb24uc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9zZXJ2aWNlcy9zdG9yZS9zdG9yZS5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL3NlcnZpY2VzL2xvZ2luL2xvZ2luLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvc2VydmljZXMvY29tbW9uL2FsZXJ0LnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvc2VydmljZXMvaWNvbmUvaWNvbmUuc2VydmljZSc7XG5cbi8vIGhhbmRsZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgKiBmcm9tICcuL2xpYi9oYW5kbGVyL2Vycm9yL2Vycm9yLWhhbmRsZXIuc2VydmljZSc7XG5cbi8vIG1vZGVsbGkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAtLSByZXBvcnRcbmV4cG9ydCAqIGZyb20gJy4vbGliL21vZGVscy9yZXBvcnQvZ3JhZmljaSc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9tb2RlbHMvcmVwb3J0L2dyYWZpY2lBZmZpdHR1YXJpbyc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9tb2RlbHMvcmVwb3J0L2dyYWZpY2lBbmRhbWVudG9Bbm51YWxlJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL21vZGVscy9yZXBvcnQvZ3JhZmljaUNvbmNlbnRyYXppb25lJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL21vZGVscy9yZXBvcnQvZ3JhZmljaUluZGljYXRvcmUnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbW9kZWxzL3JlcG9ydC9yZXBvcnRHZW5lcmFsZSc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9tb2RlbHMvcmVwb3J0L3JlcG9ydEdlbmVyYWxlQXR0aXZvJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL21vZGVscy9yZXBvcnQvcmVwb3J0R2VuZXJhbGVQYXNzaXZvJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL21vZGVscy9yZXBvcnQvcmVwb3J0R2VuZXJhbGVPZ2dldHRvQ29sb25uYSc7XG4vLyAtLSBjbGllbnRpXG5leHBvcnQgKiBmcm9tICcuL2xpYi9tb2RlbHMvY2xpZW50aS9jbGllbnRlJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL21vZGVscy9jbGllbnRpL2FiaWxpdGFBcHBDbGllbnRlUmVxdWVzdCc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9tb2RlbHMvY2xpZW50aS9ib29rVmFsdWUnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbW9kZWxzL2NsaWVudGkvaW5zZXJpbWVudG9DbGllbnRlUmVxdWVzdCc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9tb2RlbHMvY2xpZW50aS9pbnNlcmltZW50b0NsaWVudGVSZXNwb25zZSc7XG4vLyAtLSBpbW1vYmlsaVxuZXhwb3J0ICogZnJvbSAnLi9saWIvbW9kZWxzL2ltbW9iaWxpL2ltbW9iaWxlJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL21vZGVscy9pbW1vYmlsaS9hZmZpdHRvRGV0dGFnbGlvJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL21vZGVscy9pbW1vYmlsaS9jYW5jZWxsYXppb25lSW1tb2JpbGVSZXF1ZXN0JztcbmV4cG9ydCAqIGZyb20gJy4vbGliL21vZGVscy9pbW1vYmlsaS9jb2ludGVzdGF0YXJpb0RldHRhZ2xpbyc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9tb2RlbHMvaW1tb2JpbGkvZGF0aUNhdGFzdGFsaURldHRhZ2xpbyc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9tb2RlbHMvaW1tb2JpbGkvaW1tb2JpbGVEZXR0YWdsaW8nO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbW9kZWxzL2ltbW9iaWxpL2ltbW9iaWxlRGV0dGFnbGlvVk0nO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbW9kZWxzL2ltbW9iaWxpL2luc2VyaW1lbnRvSW1tb2JpbGVSZXNwb25zZSc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9tb2RlbHMvaW1tb2JpbGkvbXV0dW9EZXR0YWdsaW8nO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbW9kZWxzL2ltbW9iaWxpL29taURldHRhZ2xpbyc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9tb2RlbHMvaW1tb2JpbGkvc3Blc2FEZXR0YWdsaW8nO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbW9kZWxzL2ltbW9iaWxpL3Rhc3NhRGV0dGFnbGlvJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL21vZGVscy9pbW1vYmlsaS9waWFub0FtbW9ydGFtZW50byc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9tb2RlbHMvaW1tb2JpbGkvYW5ub1BpYW5vQW1tb3J0YW1lbnRvJztcblxuLy8gLS0gdXRlbnRpXG5leHBvcnQgKiBmcm9tICcuL2xpYi9tb2RlbHMvbG9naW4vd3NUb2tlbic7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9tb2RlbHMvbG9naW4vbG9naW5SZXF1ZXN0JztcbmV4cG9ydCAqIGZyb20gJy4vbGliL21vZGVscy9sb2dpbi91dGVudGUnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbW9kZWxzL2xvZ2luL2NhbWJpb1Bhc3N3b3JkUmVxdWVzdCc7XG4vLyAtLSB2YXJpXG5leHBvcnQgKiBmcm9tICcuL2xpYi9tb2RlbHMvY29tbW9uL2Vycm9ybWVzc2FnZSc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9tb2RlbHMvY29tbW9uL3dzbG9nZXJyb3JlJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL21vZGVscy9jb21tb24vZGRsaXRlbSc7XG4iXX0=