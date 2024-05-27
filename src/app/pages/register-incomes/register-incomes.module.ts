import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterIncomesPageRoutingModule } from './register-incomes-routing.module';

import { RegisterIncomesPage } from './register-incomes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterIncomesPageRoutingModule
  ],
  declarations: [RegisterIncomesPage]
})
export class RegisterIncomesPageModule {}
