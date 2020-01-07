import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClientReportGeneraleAttiviPage } from './client-report-generale-attivi.page';

const routes: Routes = [
  {
    path: '',
    component: ClientReportGeneraleAttiviPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ClientReportGeneraleAttiviPage]
})
export class ClientReportGeneraleAttiviPageModule {}
