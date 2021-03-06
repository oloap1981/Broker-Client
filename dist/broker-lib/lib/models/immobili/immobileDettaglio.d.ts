import { CointestatarioDettaglio } from './cointestatarioDettaglio';
import { TassaDettaglio } from './tassaDettaglio';
import { SpesaDettaglio } from './spesaDettaglio';
import { AffittoDettaglio } from './affittoDettaglio';
import { MutuoDettaglio } from './mutuoDettaglio';
import { DatiCatastaliDettaglio } from './datiCatastaliDettaglio';
import { OmiDettaglio } from './omiDettaglio';
export declare class ImmobileDettaglio {
    proprieta_id: number;
    tipologie_catastali_id: number;
    codice_fiscale: string;
    codice_tipologia: string;
    descrizione_tipologia: string;
    data_aggiornamento: number;
    valore_acquisto: number;
    valore_catastale: number;
    valore_commerciale: number;
    quota: number;
    catastale_cod: string;
    comune_zone_cod: string;
    indirizzo: string;
    civico: string;
    citta: string;
    cap: string;
    provincia: string;
    istat_cod: string;
    latitudine: string;
    longitudine: string;
    prima_casa: boolean;
    destinazione_uso_id: number;
    descrizione_uso: string;
    mutuo: boolean;
    affitto: boolean;
    cointestatari: Array<CointestatarioDettaglio>;
    tasse: Array<TassaDettaglio>;
    spese: Array<SpesaDettaglio>;
    affitto_dettaglio: AffittoDettaglio;
    mutuo_dettaglio: MutuoDettaglio;
    dati_catastali: DatiCatastaliDettaglio;
    omi: OmiDettaglio;
}
