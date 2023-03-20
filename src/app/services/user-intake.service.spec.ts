import { TestBed } from '@angular/core/testing';

import { UserIntakeService } from './user-intake.service';

describe('UserIntakeService', () => {
  let service: UserIntakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserIntakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
