import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddservicesPageRoutingModule } from './addservices-routing.module';

import { AddservicesPage } from './addservices.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddservicesPageRoutingModule
  ],
  declarations: [AddservicesPage]
})
export class AddservicesPageModule {}
