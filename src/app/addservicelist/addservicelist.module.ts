import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddservicelistPageRoutingModule } from './addservicelist-routing.module';

import { AddservicelistPage } from './addservicelist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddservicelistPageRoutingModule
  ],
  declarations: [AddservicelistPage]
})
export class AddservicelistPageModule {}
