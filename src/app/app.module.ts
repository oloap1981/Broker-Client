
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
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RaHttpInterceptor } from './interceptor/http.interceptor';
import { PipesModule } from './pipes/pipes.module';
import { ClientHomePageModule } from './pages/client-home/client-home.module';
import { ClientHomePage } from './pages/client-home/client-home.page';
import { AppRoutingModule } from './app-routing.module';

import { NgxSelectModule } from 'ngx-select-ex';

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
    ClientHomePageModule,
    NgxSelectModule
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
    PipesModule,
    NgxSelectModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
