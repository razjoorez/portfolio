import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryRoutingModule } from './summary-routing.module';
import { SummaryComponent } from './summary.component';
import { CustomGridModule } from '../shared/custom-grid/custom-grid.module';
import { ProductsModule } from '../products/products.module';


@NgModule({
  declarations: [SummaryComponent],
  imports: [
    CommonModule,
    SummaryRoutingModule,
    CustomGridModule,
    ProductsModule
  ]
})
export class SummaryModule { }
