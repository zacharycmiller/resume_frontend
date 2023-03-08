import { Component } from '@angular/core';
import { WorkExperienceItem } from 'src/app/models/work-experience-item';
import { WorkExperienceService } from 'src/app/services/work-experience.service';

@Component({
  selector: 'app-work-experience-item',
  templateUrl: './work-experience-item.component.html',
  styleUrls: ['./work-experience-item.component.css']
})
export class WorkExperienceItemComponent {
  companies: WorkExperienceItem[] = [];
  assignments: WorkExperienceItem[] = [];


  ngOnInit(): void {
    this.getWorkExperienceItems();
  }

  constructor(
    private workExperienceService: WorkExperienceService
  ) {}

  getWorkExperienceItems(): void {
    this.workExperienceService.getWorkExperienceItems().forEach(company => {
      if( company.employmentType === 'main' ) {
        this.companies.push(company);
        this.getAssignments(company.companyName);
      }
    });
  }

  getAssignments(company: string): WorkExperienceItem[] {
    console.log("checking assignments for " + company.toUpperCase())
    this.assignments = this.workExperienceService.getAssignments(company);
    this.assignments.forEach( assignment => {
      console.log("found assignment " + assignment.companyName + " for " + assignment.assignment);
    });
    return this.assignments;
  }

  getMonthName(month: number): string {
    switch(month) {

      case 1: {
        return 'January';
      }
      case 2: {
        return 'February';
      }
      case 3: {
        return 'March';
      }
      case 4: {
        return 'April';
      }
      case 5: {
        return 'May';
      }
      case 6: {
        return 'June';
      }
      case 7: {
        return 'July';
      }
      case 8: {
        return 'August';
      }
      case 9: {
        return 'September';
      }
      case 10: {
        return 'October';
      }
      case 11: {
        return 'November';
      }
      case 12: {
        return 'December';
      }

      default: {
        return '';
      }
    }
  }

}
