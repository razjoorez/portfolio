import { TestBed } from '@angular/core/testing';

import { AddressLookUpService } from '../../app/services/address-look-up.service';

describe('AddressLookUpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddressLookUpService = TestBed.get(AddressLookUpService);
    expect(service).toBeTruthy();
  });
});
