import { Component } from '@angular/core';
import { Education } from 'src/app/models/education-model';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  education!: Education;

  ngOnInit(): void {
    this.getEducationInformation();
  }

  constructor(
    private educationService: EducationService
  ) {}

  getEducationInformation(): void {
    this.education = this.educationService.getEducationInformation();
  }
}
