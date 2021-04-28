import { Component, OnInit, NgZone } from '@angular/core';
import { BaseComponent } from 'src/app/component/base.component';
import { Router, ActivatedRoute } from '@angular/router';
import { ImmobiliService, SessionService, LogErroriService, StoreService, AlertService, IconeService, DocumentiService, Cartella, Documento } from 'broker-lib';
import { ModalService } from 'src/app/services/modal/modal.service';
import { AlertController } from '@ionic/angular';
import { LogoutCommunicationService } from 'src/app/services/logoutCommunication/logoutcommunication.service';
import { CurrencyPipe } from '@angular/common';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NavigationObject } from 'src/app/models/navigationobject';

@Component({
  selector: 'app-client-documentale',
  templateUrl: './client-documentale.page.html',
  styleUrls: ['./client-documentale.page.scss'],
})
export class ClientDocumentalePage extends BaseComponent implements OnInit {

  private unsubscribe$ = new Subject<void>();

  private idCartella = 0;
  private idCartellaPadre = 0;
  private nomeCartella = 'root';
  public indirizzoImmobile = '';

  private selectedDocument: Documento;

  public documenti = [];

  public navigation: Array<NavigationObject>;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private documentiService: DocumentiService,
    public sessionService: SessionService,
    public logErroriService: LogErroriService,
    public storeService: StoreService,
    public alertService: AlertService,
    public modalService: ModalService,
    public iconeService: IconeService,
    public ngZone: NgZone,
    public alertController: AlertController,
    public logoutComm: LogoutCommunicationService,
    public currencyPipe: CurrencyPipe) {
    super(sessionService, storeService, router, logErroriService, alertService, iconeService, ngZone);
    this.navigation = new Array<NavigationObject>();

    const navigationObject = new NavigationObject();
    navigationObject.id = this.idCartella;
    navigationObject.descrizione = this.nomeCartella;
    this.navigation.push(navigationObject);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ionViewDidEnter() {
    this.initializeApp();
    this.sessionService.setIntestazionePagina('DOCUMENTI');
  }

  private initializeApp() {
    // this.unsubscribe$.next();
    // this.unsubscribe$.complete();
    this.route.queryParams.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(params => {

      this.indirizzoImmobile = params.indirizzoImmobile;
    });

    this.logoutComm.logoutObservable.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(r => {
      this.unsubscribe$.next();
      this.unsubscribe$.complete();
      this.ngZone.run(() => this.router.navigate(['login'])).then();
    });

    if (this.sessionService.existsSessionData()) {
      this.wsToken = this.sessionService.getUserData();
      this.loadPageData();
    } else {
      this.sessionService.userDataObservable.pipe(
        takeUntil(this.unsubscribe$)
      ).subscribe(present => {
        if (present) {
          this.wsToken = this.sessionService.getUserData();
          this.loadPageData();
        } else {
          this.logout();
        }
      });
      this.sessionService.loadUserData();
    }
  }

  private loadPageData(): void {

    const idCliente = this.sessionService.getCliente().cliente_id;
    if (idCliente !== null
      && idCliente !== 0) {
      this.documentiService.getCartelle(idCliente, this.idCartella).pipe(
        takeUntil(this.unsubscribe$)
      ).subscribe(r => {
        if (r.Success) {
          this.documenti = r.Data.elencoCartelle;
          this.documenti = this.documenti.concat(r.Data.elencoDocumenti);
        } else {
          this.manageError(r);
        }
      }, err => {
        this.manageHttpError(err);
      });
    } else {
      this.alertService.presentAlert("Id cliente non trovato");
    }
  }

  public isCartella(oggetto) {
    return (oggetto.doc_cartella_id !== undefined && oggetto.doc_cartella_id !== null);
  }

  public isDocumento(oggetto) {
    return (oggetto.doc_file_id !== undefined && oggetto.doc_file_id !== null);
  }

  public indietro() {
    if (this.navigation.length === 1) {
      this.goToPage('client-immobile');
    } else {
      const navigationObject = this.navigation.pop();// //tolgo l'ultimo
      this.idCartella = this.navigation[this.navigation.length - 1].id;
      this.nomeCartella = this.navigation[this.navigation.length - 1].descrizione;
      this.loadPageData();
    }    
  }

  public clickFile(oggetto) {
    if (this.isCartella(oggetto)) {
      
      const cartella = oggetto as Cartella;
      this.idCartellaPadre = cartella.doc_cartella_padre_id;
      this.idCartella = cartella.doc_cartella_id;
      
      const navigationObject = new NavigationObject();
      navigationObject.id = this.idCartella;
      navigationObject.descrizione = this.nomeCartella;
      this.navigation.push(navigationObject);

      this.loadPageData();
    } else if (this.isDocumento(oggetto)) {
      this.selectedDocument = oggetto as Documento;
      this.alertService.presentAlert("Id: " + this.selectedDocument.doc_file_id + " Descrizione: " + this.selectedDocument.descrizione);

      // avvio la provedura di download
    }
  }

  // public downloadFile(file?, alertCtrl?) {
  //   file = this.file;

  //   const url: string = this.d_url + this.selectedDocumento.doc_foreign_type + "/" + this.selectedDocumento.documenti_key + "/";

  //   const name: string = this.selectedDocumento.ultima_rev.doc_file;

  //   alertCtrl = this.alertController;

  //   const alert = alertCtrl.create({
  //     title: 'Download in corso...',
  //     subTitle: name + " in scaricamento dal server.",
  //     buttons: ['Attendere prego']
  //   });
  //   alert.present();

  //   // REQUEST CREATION
  //   const oReq = new XMLHttpRequest();

  //   // SENDING REQUEST
  //   oReq.open("GET", url, true);
  //   oReq.responseType = "blob"; // blob pls

  //   // IF DATA RECEIVED THEN  WRITE FILE
  //   oReq.onload = function (oEvent) {

  //     alert.dismiss();

  //     const a_ok = alertCtrl.create({
  //       title: 'Download effettuato',
  //       subTitle: name + " è stato scaricato nella cartella download.",
  //       buttons: ['OK']
  //     });
  //     // SAVE TEMP FILE IN APP FOLDER
  //     if (file.externalRootDirectory != null) {
  //       file.writeFile(file.externalRootDirectory + 'download/', name, oReq.response, { replace: true }).then(data => {
  //         console.log('File scritto');
  //         a_ok.present();
  //       }
  //       ).catch(err =>
  //         console.log('Errore in scrittura')
  //       );
  //     }
  //     if (file.documentsDirectory != null) {
  //       file.writeFile(file.documentsDirectory, name, oReq.response, { replace: true }).then(data => {
  //         console.log('File scritto');
  //         a_ok.present();
  //       }
  //       ).catch(err =>
  //         console.log('Errore in scrittura')
  //       );
  //     }
  //   };

  //   oReq.send();// this is useless right?

  // }

  private logout(): void {
    this.sessionService.clearUserData();
    this.logoutComm.comunicateLogout();
  }
  ionViewDidLeave() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
