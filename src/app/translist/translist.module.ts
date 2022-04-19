import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslistPageRoutingModule } from './translist-routing.module';

import { TranslistPage } from './translist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslistPageRoutingModule
  ],
  declarations: [TranslistPage]
})
export class TranslistPageModule {}
