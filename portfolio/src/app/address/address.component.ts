import { Component, OnInit } from '@angular/core';
import { AddressLookUpService } from '../services/address-look-up.service';
import { IAddress } from '../models/iaddress';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  address: IAddress[];
  $address: Observable<IAddress[]>;

  constructor(private addressLookup: AddressLookUpService) { }

  ngOnInit() {
    //this.findAdd();
    //console.log('hello', this.$address[0]);
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

}
