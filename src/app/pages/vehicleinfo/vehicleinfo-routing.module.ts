import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleinfoPage } from './vehicleinfo.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleinfoPageRoutingModule {}
