import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleinfoPageRoutingModule } from './vehicleinfo-routing.module';

import { VehicleinfoPage } from './vehicleinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleinfoPageRoutingModule
  ],
  declarations: [VehicleinfoPage]
})
export class VehicleinfoPageModule {}
