import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EducationComponent } from './education.component';
import { EducationService } from '../../services/education.service';
import { EDUCATION } from '../../data/education';
import { Education } from '../../models/education-model';

describe('EducationComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;
  let educationService: EducationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationComponent ],
      providers: [ EducationService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationComponent);
    component = fixture.componentInstance;
    educationService = TestBed.inject(EducationService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve education information from the service', () => {
    spyOn(educationService, 'getEducationInformation').and.returnValue(EDUCATION);
    component.getEducationInformation();
    expect(component.education).toEqual(EDUCATION);
  });

  it('should display education information in the template', () => {
    component.education = EDUCATION;
    fixture.detectChanges();
    const educationInstitute = fixture.nativeElement.querySelector('.education-institute');
    expect(educationInstitute.textContent).toContain(EDUCATION.institute);
    const educationDegreeType = fixture.nativeElement.querySelector('.education-degree-type');
    expect(educationDegreeType.textContent).toContain(`${EDUCATION.degreeLevel}`);
    const educationLocation = fixture.nativeElement.querySelector('.education-location');
    expect(educationLocation.textContent).toContain(`${EDUCATION.city}, ${EDUCATION.state}`);
    const educationGraduationDate = fixture.nativeElement.querySelector('.education-graduation-date');
    expect(educationGraduationDate.textContent).toContain(`${EDUCATION.graduationMonth} ${EDUCATION.graduationYear}`);
  });
});
