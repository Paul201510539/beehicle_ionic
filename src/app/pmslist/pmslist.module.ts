import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PmslistPageRoutingModule } from './pmslist-routing.module';

import { PmslistPage } from './pmslist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PmslistPageRoutingModule
  ],
  declarations: [PmslistPage]
})
export class PmslistPageModule {}
