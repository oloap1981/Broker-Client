import { ReportGeneraleAttivo } from './reportGeneraleAttivo';
import { ReportGeneralePassivo } from './reportGeneralePassivo';
import { ReportGeneraleInteressi } from './reportGeneraleInteressi';
export declare class ReportGenerale {
    proprieta_id: number;
    codice_tipologia: string;
    descrizione_tipologia: string;
    valore_acquisto: number;
    quota: number;
    indirizzo: string;
    civico: string;
    citta: string;
    cap: string;
    provincia: string;
    prima_casa: string;
    passivi: Array<ReportGeneralePassivo>;
    attivo: ReportGeneraleAttivo;
    detrazione_interessi_attivo: ReportGeneraleInteressi;
}
