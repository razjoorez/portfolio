import { Component, OnInit } from '@angular/core';
import { AddressLookUpService } from '../services/address-look-up.service';
import { IAddress } from '../models/iaddress';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  address: IAddress[];

  constructor(private addressLookup: AddressLookUpService) { }

  ngOnInit() {
    this.addressLookup.getAddress('ww').subscribe(
      res => console.log('address is: ', res )
    
    );
    console.log(this.address);
  }

}
