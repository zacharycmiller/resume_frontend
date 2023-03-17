import { Component, Input } from '@angular/core';
import { Education } from 'src/app/models/education-model';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  @Input() resumeId!: number;
  educationItems: Education[] = [];

  ngOnInit(): void {
    this.getEducationByResumeId(this.resumeId);
  }

  constructor(
    private educationService: EducationService
  ) {}

  getEducationByResumeId(resumeId: number): void {
    this.educationService.getEducationByResumeId(resumeId)
      .subscribe(educations => this.educationItems = educations);
  }
}
