import { TestBed, inject } from '@angular/core/testing';

import { CanActivatePublicationService } from './can-activate-publication.service';

describe('CanActivatePublicationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivatePublicationService]
    });
  });

  it('should be created', inject([CanActivatePublicationService], (service: CanActivatePublicationService) => {
    expect(service).toBeTruthy();
  }));
});
