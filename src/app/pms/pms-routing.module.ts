import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PmsPage } from './pms.page';

const routes: Routes = [
  {
    path: '',
    component: PmsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PmsPageRoutingModule {}
