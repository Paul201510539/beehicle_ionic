import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddchecklistPage } from './addchecklist.page';

const routes: Routes = [
  {
    path: '',
    component: AddchecklistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddchecklistPageRoutingModule {}
