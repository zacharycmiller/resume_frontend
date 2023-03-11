import { Injectable } from '@angular/core';

import { WorkExperienceTree } from '../models/work-experience-tree';
import { WORK_EXPERIENCE_TREE } from '../data/work-experience-tree';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {

  constructor() { }

  getWorkExperienceTree(): WorkExperienceTree {
    return WORK_EXPERIENCE_TREE;
  }
}
