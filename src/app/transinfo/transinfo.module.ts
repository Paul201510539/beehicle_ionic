import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransinfoPageRoutingModule } from './transinfo-routing.module';

import { TransinfoPage } from './transinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransinfoPageRoutingModule
  ],
  declarations: [TransinfoPage]
})
export class TransinfoPageModule {}
