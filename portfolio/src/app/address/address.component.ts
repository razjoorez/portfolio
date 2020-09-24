import { Component, OnInit } from '@angular/core';
import { AddressLookUpService } from '../services/address-look-up.service';
import { IAddress } from '../models/iaddress';
import { map, first } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { AddressState } from './state/address.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  address: IAddress[];
  addSelected: IAddress;
  $address: Observable<IAddress[]>;

  constructor(private addressLookup: AddressLookUpService,
              private store: Store<AddressState>) { }
  addressForm: FormGroup;
  ngOnInit() {
    let firstLine = new FormControl('', [ Validators.required, Validators.minLength(1)]);
    let secondLine = new FormControl('');
    let country = new FormControl('');
    let town = new FormControl('');
    let postCode = new FormControl('', Validators.required);
    
  this.addressForm =  new FormGroup(
     {
       firstLine: firstLine,
       secondLine: secondLine,
       country: country,
       town: town,
       postCode: postCode
     }
   );
   this.findfake();
  }

  findAdd() {
      this.addressLookup.getAddress('ww').subscribe(
      res => {
        console.log('address is: ', res );
        this.address = res;
        console.log('address country', this.address);
        console.log(this.address);
      });
      this.$address = this.addressLookup.getAddress('ww');
  }

  findfake() {
    this.address = this.addressLookup.getFakeAdd();
    console.log(this.address);
  }

  Selected(e){
    console.log('first e',e)
    console.log(e.postCode);
    this.addSelected = e;
    console.log('addSelected', this.addSelected);
    this.addressForm.patchValue({
      firstLine: e.firstLine,
      secondLine: e.secondLine,
      postCode: e.postCode
    });
    this.store.dispatch({
      type: '[Address Component] Update'
    });
   // alert(e);
  }

}
