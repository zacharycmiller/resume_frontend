import { Injectable } from '@angular/core';

import { Site } from '../models/site-model';
import { SITES } from '../data/sites';

@Injectable({
  providedIn: 'root'
})
export class SitesService {

  constructor() { }

  getSites(): Site[] {
    return SITES;
  }
}
