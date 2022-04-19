import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserupdatePage } from './userupdate.page';

const routes: Routes = [
  {
    path: '',
    component: UserupdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserupdatePageRoutingModule {}
