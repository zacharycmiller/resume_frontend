import { Injectable } from '@angular/core';
import { EDUCATION } from '../data/education';
import { Education } from '../models/education-model';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor() { }

  getEducationInformation(): Education {
    return EDUCATION;
  }
}
