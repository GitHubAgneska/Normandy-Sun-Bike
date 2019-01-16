import { TestBed } from '@angular/core/testing';

import { RacePresentationService } from './race-presentation.service';

describe('RacePresentationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RacePresentationService = TestBed.get(RacePresentationService);
    expect(service).toBeTruthy();
  });
});
