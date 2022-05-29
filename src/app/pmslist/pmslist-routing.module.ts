import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PmslistPage } from './pmslist.page';

const routes: Routes = [
  {
    path: '',
    component: PmslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PmslistPageRoutingModule {}
