import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddservicesPage } from './addservices.page';

const routes: Routes = [
  {
    path: '',
    component: AddservicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddservicesPageRoutingModule {}
