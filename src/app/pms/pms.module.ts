import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PmsPageRoutingModule } from './pms-routing.module';

import { PmsPage } from './pms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PmsPageRoutingModule
  ],
  declarations: [PmsPage]
})
export class PmsPageModule {}
