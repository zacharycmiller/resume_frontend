import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousExperienceComponent } from './previous-experience.component';
import { PreviousExperienceService } from 'src/app/services/previous-experience.service';
import { PREVIOUS_EXPERIENCE } from 'src/app/data/previous-experience';

describe('PreviousExperienceComponent', () => {
  let component: PreviousExperienceComponent;
  let fixture: ComponentFixture<PreviousExperienceComponent>;
  let previousExperienceService: PreviousExperienceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousExperienceComponent ],
      providers: [ PreviousExperienceService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousExperienceComponent);
    component = fixture.componentInstance;
    previousExperienceService = TestBed.inject(PreviousExperienceService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve previous work information from the service', () => {
    spyOn(previousExperienceService, 'getPreviousExperience').and.returnValue(PREVIOUS_EXPERIENCE);
    component.getPreviousWorkExperience();
    expect(component.previousExperience).toEqual(PREVIOUS_EXPERIENCE);
  });

});