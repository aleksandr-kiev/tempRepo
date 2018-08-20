import { TestBed, inject } from '@angular/core/testing';

import { CanActivateAuthService } from './can-activate-auth.service';

describe('CanActivateAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateAuthService]
    });
  });

  it('should be created', inject([CanActivateAuthService], (service: CanActivateAuthService) => {
    expect(service).toBeTruthy();
  }));
});
