import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddvehiclePage } from './addvehicle.page';

const routes: Routes = [
  {
    path: '',
    component: AddvehiclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddvehiclePageRoutingModule {}
