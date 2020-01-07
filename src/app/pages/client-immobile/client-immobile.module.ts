import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClientImmobilePage } from './client-immobile.page';
import { ModalModule } from 'src/app/component/modal/modal.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    component: ClientImmobilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ModalModule,
    PipesModule
  ],
  declarations: [ClientImmobilePage]
})
export class ClientImmobilePageModule {}
