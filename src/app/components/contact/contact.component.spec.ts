import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';
import { ContactService } from '../../services/contact.service';
import { CONTACT } from '../../data/contact';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let contactServiceSpy: jasmine.SpyObj<ContactService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('ContactService', ['getContactInformation']);

    await TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      providers: [
        { provide: ContactService, useValue: spy }
      ]
    })
    .compileComponents();

    contactServiceSpy = TestBed.inject(ContactService) as jasmine.SpyObj<ContactService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call the ContactService on initialization', () => {
    expect(contactServiceSpy.getContactInformation).toHaveBeenCalled();
  });

  it('should display the correct contact information', () => {
    contactServiceSpy.getContactInformation.and.returnValue(CONTACT);
    component.ngOnInit();
    fixture.detectChanges();

    const locationElement = fixture.nativeElement.querySelector('.contact-location');
    expect(locationElement.textContent).toContain(`${CONTACT.city}, ${CONTACT.state}`);
  
    const phoneNumberElement = fixture.nativeElement.querySelector('.contact-phone-number');
    expect(phoneNumberElement.textContent).toContain(CONTACT.phoneNumber);
  
    const emailElement = fixture.nativeElement.querySelector('.contact-email');
    expect(emailElement.textContent).toContain(CONTACT.email);
  });
});