import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddservicesPageRoutingModule } from './addservices-routing.module';

import { AddservicesPage } from './addservices.page';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddservicesPageRoutingModule
  ],
  providers: [ ImagePicker,],
  declarations: [AddservicesPage]
})
export class AddservicesPageModule {}
