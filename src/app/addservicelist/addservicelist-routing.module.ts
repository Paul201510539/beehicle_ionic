import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddservicelistPage } from './addservicelist.page';

const routes: Routes = [
  {
    path: '',
    component: AddservicelistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddservicelistPageRoutingModule {}
