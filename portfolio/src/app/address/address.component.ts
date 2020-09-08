import { Component, OnInit } from '@angular/core';
import { AddressLookUpService } from '../services/address-look-up.service';
import { IAddress } from '../models/iaddress';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  address: IAddress[];
  addSelected: IAddress;
  $address: Observable<IAddress[]>;

  constructor(private addressLookup: AddressLookUpService) { }
  addressForm: FormGroup;
  ngOnInit() {
    //this.findAdd();
    //console.log('hello', this.$address[0]);
    this.findfake();
  this.addressForm =  new FormGroup(
     {
       firstLine: new FormControl('ge'),
       secondLine: new FormControl(''),
       country: new FormControl(''),
       town: new FormControl(''),
       postCode: new FormControl('')
     }
   );

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
   // alert(e);
  }

}
