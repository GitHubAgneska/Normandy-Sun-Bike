import { TestBed } from '@angular/core/testing';

import { ActualityService } from './actuality.service';

describe('ActualityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActualityService = TestBed.get(ActualityService);
    expect(service).toBeTruthy();
  });
});
