import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClientReportGeneralePage } from './client-report-generale.page';

const routes: Routes = [
  {
    path: '',
    component: ClientReportGeneralePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ClientReportGeneralePage]
})
export class ClientReportGeneralePageModule {}
