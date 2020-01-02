
import { SessionService, StoreService, LoginService, ReportService, IconeService, AlertService } from 'broker-lib';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';

import { BrokerLibModule } from 'broker-lib';

import { FormsModule } from '@angular/forms';
import { LoginPageModule } from './pages/login/login.module';
import { WizardPageModule } from './pages/wizard/wizard.module';
import { ReportGeneralePageModule } from './pages/report-generale/report-generale.module';
import { ReportAnalisiPageModule } from './pages/report-analisi/report-analisi.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RaHttpInterceptor } from './interceptor/http.interceptor';
import { NuovoClientePageModule } from './pages/nuovo-cliente/nuovo-cliente.module';
import { SchedaImmobilePageModule } from './pages/scheda-immobile/scheda-immobile.module';
import { PipesModule } from './pipes/pipes.module';
import { AmmortamentoPageModule } from './pages/ammortamento/ammortamento.module';
import { ClientHomePageModule } from './pages/client-home/client-home.module';
import { ClientHomePage } from './pages/client-home/client-home.page';
import { ClientImmobiliPageModule } from './pages/client-immobili/client-immobili.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [
    ClientHomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrokerLibModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PipesModule,
    ClientHomePageModule
  ],
  providers: [
    // ErrorHandlerService,
    // { provide: ErrorHandler, useClass: ErrorHandlerService },
    SessionService,
    StoreService,
    LoginService,
    IconeService,
    StatusBar,
    ReportService,
    SplashScreen,
    AlertService,
    HTTP,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RaHttpInterceptor,
      multi: true
    },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  exports: [
    PipesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
