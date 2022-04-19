import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransPage } from './trans.page';

const routes: Routes = [
  {
    path: '',
    component: TransPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransPageRoutingModule {}
