import { TestBed, inject } from '@angular/core/testing';

import { CanActivateAccountService } from './can-activate-account.service';

describe('CanActivateAccountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateAccountService]
    });
  });

  it('should be created', inject([CanActivateAccountService], (service: CanActivateAccountService) => {
    expect(service).toBeTruthy();
  }));
});
