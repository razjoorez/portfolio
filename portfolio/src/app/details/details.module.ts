import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { DetailsRoutingModule } from './details-routing.module';


@NgModule({
  declarations: [PersonalDetailsComponent],
  imports: [
    CommonModule,
    DetailsRoutingModule
  ],
  exports: [
    PersonalDetailsComponent
  ]
})
export class DetailsModule { }
