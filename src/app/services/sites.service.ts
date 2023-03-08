import { Injectable } from '@angular/core';

import { Sites } from '../models/sites-model';
import { SITES } from '../data/sites';

@Injectable({
  providedIn: 'root'
})
export class SitesService {

  constructor() { }

  getSites(): Sites {
    return SITES;
  }
}
