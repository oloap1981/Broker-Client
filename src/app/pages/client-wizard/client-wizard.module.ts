import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClientWizardPage } from './client-wizard.page';
import { AlertService } from 'broker-lib';
import { IgxDatePickerModule } from 'igniteui-angular';
import { MyDatePickerModule } from 'src/app/component/datepicker/mydatepicker.module';
import { OnlyDigitsDirective } from 'src/app/directive/onlydigits.directive';
import { PipesModule } from 'src/app/pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    component: ClientWizardPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        IgxDatePickerModule,
        MyDatePickerModule,
        PipesModule
    ],
    declarations: [ClientWizardPage,
        OnlyDigitsDirective],
    providers: [AlertService]
})
export class ClientWizardPageModule {}
