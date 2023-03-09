import { TestBed } from '@angular/core/testing';

import { PreviousExperienceService } from './previous-experience.service';

describe('PreviousExperienceService', () => {
  let service: PreviousExperienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreviousExperienceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
