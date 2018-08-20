import { TestBed, inject } from '@angular/core/testing';

import { CanActivateMapService } from './can-activate-map.service';

describe('CanActivateMapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateMapService]
    });
  });

  it('should be created', inject([CanActivateMapService], (service: CanActivateMapService) => {
    expect(service).toBeTruthy();
  }));
});
