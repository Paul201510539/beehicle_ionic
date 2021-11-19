import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShinkHeaderComponent } from './shink-header/shink-header.component';



@NgModule({
  declarations: [ShinkHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [ShinkHeaderComponent]
})
export class ComponentsModule { }
