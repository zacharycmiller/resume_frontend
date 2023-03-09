import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageComponent } from './image.component';
import { ImageService } from 'src/app/services/image.service';
import { IMAGE } from 'src/app/data/image';

describe('ImageComponent', () => {
  let component: ImageComponent;
  let fixture: ComponentFixture<ImageComponent>;
  let imageServiceSpy: jasmine.SpyObj<ImageService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('ImageService', ['getImage']);

    await TestBed.configureTestingModule({
      declarations: [ ImageComponent ],
      providers: [{ provide: ImageService, useValue: spy }]
    })
    .compileComponents();

    imageServiceSpy = TestBed.inject(ImageService) as jasmine.SpyObj<ImageService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the correct image source', () => {
    const testImage = { id: 0, fileName: 'test-image.jpg' };

    imageServiceSpy.getImage.and.returnValue(IMAGE);

    component.getImage();
    fixture.detectChanges();

    const imgElement = fixture.nativeElement.querySelector('.image img');
    expect(imgElement.src).toContain(`../assets/${IMAGE.fileName}`);
  });
});
