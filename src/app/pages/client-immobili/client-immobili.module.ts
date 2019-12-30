import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClientImmobiliPage } from './client-immobili.page';

const routes: Routes = [
  {
    path: '',
    component: ClientImmobiliPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
    declarations: [ClientImmobiliPage]
})
export class ClientImmobiliPageModule {}
