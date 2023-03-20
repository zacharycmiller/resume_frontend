import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WorkExperience } from 'src/app/models/work-experience-model';
import { WorkExperienceService } from 'src/app/services/work-experience-item.service';

@Component({
  selector: 'app-work-experience-form',
  templateUrl: './work-experience-form.component.html',
  styleUrls: ['./work-experience-form.component.css']
})
export class WorkExperienceFormComponent {
  @Input() resumeId!: number;
  showForm: boolean = false;
  workExperienceForm!: FormGroup;
  parentId?: number;
  companyName!: string;
  jobTitle!: string;
  startMonth!: string;
  startYear!: string;
  endMonth!: string;
  endYear!: string;
  location!: string;
  locationType!: string;
  employmentType!: string;
  city!: string;
  selectedState!: string;
  
  constructor(
    private workExperienceService: WorkExperienceService,
    private formBuilder: FormBuilder
  ) {}

  

  createForm() {
    this.workExperienceForm = this.formBuilder.group({
      companyName: [''],
      jobTitle: [''],
      startMonth: [''],
      startYear: [''],
      endMonth: [''],
      endYear: [''],
      locationType: [''],
      selectedState: [''],
      city: [''],
      employmentType: [''],
      resumeId: ['']
    });
  }

  ngOnInit(): void {
    this.createForm();
    this.showForm = true;
  }

  getMonthOptions(): string[] {
    return [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
  }

  getYearOptions(): number[] {
    let yearOptions: number[] = []
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= currentYear - 50; i--) {
      yearOptions.push(i);
    }
    return yearOptions;
  }

  getStateCodeOptions(): string[] {
    return [
      'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI',
    'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN',
    'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH',
    'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA',
    'WV', 'WI', 'WY',
    ];
  }

  getEmploymentTypeOptions(): string[] {
    return ['Contract', 'W2', 'Other'];
  }
  
  onSubmit(): void {
    const formValues = this.workExperienceForm.value;

    const workExperienceItem: WorkExperience = {
      resumeId: this.resumeId,
      parentId: this.resumeId,
      companyName: formValues.companyName,
      jobTitle: formValues.jobTitle,
      startMonth: formValues.startMonth,
      startYear: formValues.startYear,
      endMonth: formValues.endMonth,
      endYear: formValues.endYear,
      location: formValues.locationType === 'Remote' ? 'Remote' : formValues.city +", "+ formValues.selectedState,
      employmentType: formValues.employmentType
    };
    // TODO: Send the new work experience object to the server to save it to the database
    this.addWorkExperienceItem(workExperienceItem);
    this.showForm = !this.showForm;
  }

  addWorkExperienceItem(workExperienceItem: WorkExperience): void {
    this.workExperienceService.addWorkExperience(this.resumeId, workExperienceItem)
      .subscribe();
  }
}
