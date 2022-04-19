import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VinfoPageRoutingModule } from './vinfo-routing.module';

import { VinfoPage } from './vinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VinfoPageRoutingModule
  ],  
  declarations: [VinfoPage]
})
export class VinfoPageModule {}
