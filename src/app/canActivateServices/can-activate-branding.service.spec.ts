import { TestBed, inject } from '@angular/core/testing';

import { CanActivateBrandingService } from './can-activate-branding.service';

describe('CanActivateBrandingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateBrandingService]
    });
  });

  it('should be created', inject([CanActivateBrandingService], (service: CanActivateBrandingService) => {
    expect(service).toBeTruthy();
  }));
});
