import { Injectable } from '@angular/core';

import { WorkExperienceItem } from '../models/work-experience-item';
import { WORK_EXPERIENCE_ITEMS } from '../data/work-experience-items';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {

  constructor() { }

  getWorkExperienceItems(): WorkExperienceItem[] {
    let workItems: WorkExperienceItem[] = [];
    workItems = WORK_EXPERIENCE_ITEMS;
    return workItems;
  }

  getAssignments(company: string): WorkExperienceItem[] {
    let assignments: WorkExperienceItem[] = [];
    WORK_EXPERIENCE_ITEMS.forEach( item => {
      if( item.assignment === company ) {
        assignments.push(item);
      }
    });
    return assignments;
  }
}
