import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlistPage } from './slist.page';

const routes: Routes = [
  {
    path: '',
    component: SlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlistPageRoutingModule {}
