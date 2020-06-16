import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomGridRoutingModule } from './custom-grid-routing.module';
import { CustomGridComponent } from './custom-grid.component';


@NgModule({
  declarations: [CustomGridComponent],
  imports: [
    CommonModule,
    CustomGridRoutingModule
  ],
  exports: [
    CustomGridComponent
  ] 
  
})
export class CustomGridModule { }
