import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { DetailsRoutingModule } from './details-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PersonalDetailsComponent],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    PersonalDetailsComponent
  ]
})
export class DetailsModule { }
