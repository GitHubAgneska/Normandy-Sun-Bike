import { TestBed } from '@angular/core/testing';

import { AddSponsorService } from './add-sponsor.service';

describe('AddSponsorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddSponsorService = TestBed.get(AddSponsorService);
    expect(service).toBeTruthy();
  });
});
