import { TestBed, inject } from '@angular/core/testing';

import { CanActivateBlockService } from './can-activate-block.service';

describe('CanActivateBlockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateBlockService]
    });
  });

  it('should be created', inject([CanActivateBlockService], (service: CanActivateBlockService) => {
    expect(service).toBeTruthy();
  }));
});
