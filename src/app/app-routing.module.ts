import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { importType } from '@angular/compiler/src/output/output_ast';

const routes: Routes = [
    { path: '', loadChildren: () => import('./pages/client-home/client-home.module').then(m => m.ClientHomePageModule) },
    { path: 'client-home', loadChildren: () => import('./pages/client-home/client-home.module').then(m => m.ClientHomePageModule) },
    { path: 'home', loadChildren: () => import('./pages/client-home/client-home.module').then(m => m.ClientHomePageModule) },
    { path: 'client-immobili', loadChildren: () => import('./pages/client-immobili/client-immobili.module').then(m => m.ClientImmobiliPageModule) },
    { path: 'client-documentale', loadChildren: () => import('./pages/client-documentale/client-documentale.module').then(m => m.ClientDocumentalePageModule) },
    { path: 'client-documentale-file', loadChildren: () => import('./pages/client-documentale-file/client-documentale-file.module').then(m => m.ClientDocumentaleFilePageModule) },
    // { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
    // { path: 'profilo-utente', loadChildren: () => import('./pages/profilo-utente/profilo-utente.module').then(m => m.ProfiloUtentePageModule) },
    { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
    { path: 'wizard', loadChildren: () => import('./pages/wizard/wizard.module').then(m => m.WizardPageModule) },
    { path: 'scheda-immobile', loadChildren: () => import('./pages/scheda-immobile/scheda-immobile.module').then(m => m.SchedaImmobilePageModule) },
    // { path: 'nuovo-cliente', loadChildren: () => import('./pages/nuovo-cliente/nuovo-cliente.module').then(m => m.NuovoClientePageModule) },
    // { path: 'scheda-cliente', loadChildren: './pages/scheda-cliente/scheda-cliente.module#SchedaClientePageModule' },
    { path: 'patrimonio', loadChildren: () => import('./pages/patrimonio/patrimonio.module').then(m => m.PatrimonioPageModule) },
    // { path: 'catastali', loadChildren: './pages/catastali/catastali.module#CatastaliPageModule' },
    // { path: 'report-generale', loadChildren: () => import('./pages/report-generale/report-generale.module').then(m => m.ReportGeneralePageModule) },
    // { path: 'report-analisi', loadChildren: () => import('./pages/report-analisi/report-analisi.module').then(m => m.ReportAnalisiPageModule) },
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
