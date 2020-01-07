import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClientReportAnalisiPage } from './client-report-analisi.page';

const routes: Routes = [
  {
    path: '',
    component: ClientReportAnalisiPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ClientReportAnalisiPage]
})
export class ClientReportAnalisiPageModule {}
