import { Injectable } from '@angular/core';

import { AboutMe } from '../models/about-me-model';
import { ABOUT_ME } from '../data/about-me';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {

  constructor() { }


  getAboutMeSection(id: number): AboutMe {
    return ABOUT_ME;
  }
}
