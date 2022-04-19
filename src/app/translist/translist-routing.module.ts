import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TranslistPage } from './translist.page';

const routes: Routes = [
  {
    path: '',
    component: TranslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TranslistPageRoutingModule {}
