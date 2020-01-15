import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { SessionService, StoreService, LogErroriService, AlertService, IconeService, WsToken } from 'broker-lib';

import { Router } from '@angular/router';
import { ClientHomePage } from './pages/client-home/client-home.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  public rootPage: any = ClientHomePage;
  public wsToken: WsToken;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    public sessionService: SessionService,
    private alertService: AlertService
  ) {
  }
  hideMe = true;
  showMe = false;
  show() {
    if (this.showMe === false) {
      this.showMe = true;
    } else {
      this.showMe = false;
    }
    console.log("show");
  }
  hide() {
    this.hideMe = false;
    console.log("hide");
  }

  ngOnInit(): void {
    this.initializeApp();
  }

  public getUtenteEmail(): string {
    if (this.wsToken !== undefined) {
      return this.wsToken.utente.email;
    } else {
      return 'email utente';
    }
  }

  initializeApp() {

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.sessionService.userDataObservable.subscribe(present => {
      if (present) {
        this.wsToken = this.sessionService.getUserData();
      } else {
        this.router.navigate(['login']);
      }
    });
    this.sessionService.loadUserData();
  }

  public goBack(): void {
    this.router.navigate([this.sessionService.getPaginaPrecedente()]);
  }

  public isLoginPage(): boolean {
    return this.router.url === '/login';
  }
}
