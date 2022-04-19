import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddvehiclePageRoutingModule } from './addvehicle-routing.module';

import { AddvehiclePage } from './addvehicle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddvehiclePageRoutingModule
  ],
  declarations: [AddvehiclePage]
})
export class AddvehiclePageModule {}
