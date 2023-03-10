import { Injectable } from '@angular/core';
import { SKILLS } from '../data/skills';
import { Skills } from '../models/skills-model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  getSkills(): Skills[] {
    return SKILLS;
  }

}
