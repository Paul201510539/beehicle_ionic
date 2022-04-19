import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VinfoPage } from './vinfo.page';

const routes: Routes = [
  {
    path: '',
    component: VinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VinfoPageRoutingModule {}
