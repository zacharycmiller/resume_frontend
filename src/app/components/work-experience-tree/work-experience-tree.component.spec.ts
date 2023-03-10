import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceTreeComponent } from './work-experience-tree.component';

describe('WorkExperienceTreeComponent', () => {
  let component: WorkExperienceTreeComponent;
  let fixture: ComponentFixture<WorkExperienceTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkExperienceTreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkExperienceTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
