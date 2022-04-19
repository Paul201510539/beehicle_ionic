import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlistPageRoutingModule } from './slist-routing.module';

import { SlistPage } from './slist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlistPageRoutingModule
  ],
  declarations: [SlistPage]
})
export class SlistPageModule {}
