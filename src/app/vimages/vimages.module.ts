import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VimagesPageRoutingModule } from './vimages-routing.module';

import { VimagesPage } from './vimages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VimagesPageRoutingModule
  ],
  declarations: [VimagesPage]
})
export class VimagesPageModule {}
