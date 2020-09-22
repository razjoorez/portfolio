import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddressRoutingModule } from './address-routing.module';
import { AddressComponent } from './address.component';
import { AddressLookUpService } from '../services/address-look-up.service';
import { StoreModule } from '@ngrx/store';
import * as AddressReducer from './state/address.reducer';


@NgModule({
  declarations: [AddressComponent],
  imports: [
    CommonModule,
    AddressRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(AddressReducer.addressFeatureKey, AddressReducer.reducer)
  ],
  providers: [AddressLookUpService]
})
export class AddressModule { }
