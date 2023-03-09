import { Injectable } from '@angular/core';

import { PreviousExperience } from '../models/previous-experience-model';
import { PREVIOUS_EXPERIENCE } from '../data/previous-experience';

@Injectable({
  providedIn: 'root'
})
export class PreviousExperienceService {

  constructor() { }

  getPreviousExperience(): PreviousExperience[] {
    return PREVIOUS_EXPERIENCE;
  }
}
