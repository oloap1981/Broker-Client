import { ConstantsService } from '../common/constants.service';
export declare class IconeService {
    private constants;
    private tipologiaVilla;
    private tipologiaCasa;
    private tipologiaAgricolo;
    private tipologiaUfficio;
    private tipologiaAlbergo;
    private tipologiaOspedale;
    private tipologiaScuola;
    private tipologiaMuseo;
    private tipologiaChiesa;
    private tipologiaMagazzino;
    private tipologiaNegozio;
    private tipologiaSport;
    private tipologiaGarage;
    private tipologiaFabbrica;
    private tipologiaTeatro;
    private tipologiaBanca;
    private tipologiaPonte;
    private tipologiaStazione;
    private tipologiaCantiere;
    constructor(constants: ConstantsService);
    getClasseIcona(tipologia: string): string;
}
