// Import necessary dependencies
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutMeComponent } from './about-me.component';
import { AboutMeService } from '../../services/about-me.service';
import { ABOUT_ME } from 'src/app/data/about-me';

/* The following tests the AboutMeComponent by creating an instance of it and testing its methods 
 * using Jasmine testing framework.
 * The beforeEach function initializes the necessary dependencies and the component instance before each test is executed.
 * The it() function is used to test individual functionalities, and describe() function is used to group them together for better organization.
 * In the first test, it checks if the component is created successfully.
 * In the second test, it checks if the getAboutMeSectionData method is called with the correct id.
 * In the third test, it checks if the aboutMe property is set correctly after calling the getAboutMeSectionData method.
*/

describe('AboutMeComponent', () => {
  let component: AboutMeComponent;
  let fixture: ComponentFixture<AboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [ AboutMeComponent ],
    providers: [ AboutMeService ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call getAboutMeSectionData with the given id', () => {
    spyOn(component, 'getAboutMeSectionData');
    component.id = 1;
    component.ngOnInit();
    expect(component.getAboutMeSectionData).toHaveBeenCalledWith(1);
    });
  });

  describe('getAboutMeSectionData', () => {
    it('should set the aboutMe property to the value returned by the service', () => {
    const aboutMeService = TestBed.inject(AboutMeService);
    spyOn(aboutMeService, 'getAboutMeSection').and.returnValue(ABOUT_ME);
    component.getAboutMeSectionData(1);
    expect(component.aboutMe).toEqual(ABOUT_ME);
    });
  });

  

});

