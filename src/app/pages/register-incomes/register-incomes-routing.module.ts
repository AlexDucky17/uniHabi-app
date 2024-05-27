import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterIncomesPage } from './register-incomes.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterIncomesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterIncomesPageRoutingModule {}
