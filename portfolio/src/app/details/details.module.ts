import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PersonalDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'personal-detail', component: PersonalDetailsComponent}
    ])
  ],
  exports: [
    PersonalDetailsComponent
  ]
})
export class DetailsModule { }
