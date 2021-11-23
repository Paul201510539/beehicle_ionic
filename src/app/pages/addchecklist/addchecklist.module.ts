import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddchecklistPageRoutingModule } from './addchecklist-routing.module';

import { AddchecklistPage } from './addchecklist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddchecklistPageRoutingModule
  ],
  declarations: [AddchecklistPage]
})
export class AddchecklistPageModule {}
