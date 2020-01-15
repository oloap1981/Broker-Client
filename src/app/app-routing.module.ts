import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: () => import('./pages/client-home/client-home.module').then(m => m.ClientHomePageModule) },
    { path: 'client-home', loadChildren: () => import('./pages/client-home/client-home.module').then(m => m.ClientHomePageModule) },
    { path: 'home', loadChildren: () => import('./pages/client-home/client-home.module').then(m => m.ClientHomePageModule) },
    { path: 'client-immobili', loadChildren: () => import('./pages/client-immobili/client-immobili.module').then(m => m.ClientImmobiliPageModule) },
    { path: 'client-documentale', loadChildren: () => import('./pages/client-documentale/client-documentale.module').then(m => m.ClientDocumentalePageModule) },
    { path: 'client-documentale-file', loadChildren: () => import('./pages/client-documentale-file/client-documentale-file.module').then(m => m.ClientDocumentaleFilePageModule) },
    { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
    { path: 'ammortamento', loadChildren: () => import('./pages/ammortamento/ammortamento.module').then(m => m.AmmortamentoPageModule) },
    { path: 'client-immobile', loadChildren: () => import('./pages/client-immobile/client-immobile.module').then(m => m.ClientImmobilePageModule) },
    { path: 'client-report-generale', loadChildren: () => import('./pages/client-report-generale/client-report-generale.module').then(m => m.ClientReportGeneralePageModule) },
    { path: 'client-report-generale-attivi', loadChildren: () => import('./pages/client-report-generale-attivi/client-report-generale-attivi.module').then(m => m.ClientReportGeneraleAttiviPageModule) },
    { path: 'client-report-generale-passivi', loadChildren: () => import('./pages/client-report-generale-passivi/client-report-generale-passivi.module').then(m => m.ClientReportGeneralePassiviPageModule) },
    { path: 'client-report-analisi', loadChildren: () => import('./pages/client-report-analisi/client-report-analisi.module').then(m => m.ClientReportAnalisiPageModule) },
    { path: 'client-wizard', loadChildren: () => import('./pages/client-wizard/client-wizard.module').then(m => m.ClientWizardPageModule) },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
