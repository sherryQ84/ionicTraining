import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeathersPage } from './weathers.page';

const routes: Routes = [
  {
    path: '',
    component: WeathersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeathersPageRoutingModule {}
