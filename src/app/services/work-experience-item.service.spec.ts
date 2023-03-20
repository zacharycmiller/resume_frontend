import { TestBed } from '@angular/core/testing';

import { WorkExperienceItemService } from './work-experience-item.service';

describe('WorkExperienceItemService', () => {
  let service: WorkExperienceItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkExperienceItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
