import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VimagesPage } from './vimages.page';

const routes: Routes = [
  {
    path: '',
    component: VimagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VimagesPageRoutingModule {}
