import { Injectable } from '@angular/core';

import { ACCOMPLISHMENTS } from 'src/app/data/accomplishments';
import { Accomplishment } from 'src/app/models/accomplishment-model';

@Injectable({
  providedIn: 'root'
})
export class AccomplishmentService {

  constructor() { }

  getAccomplishments(company: string, assignment: string): Accomplishment[] {
    let accomplishments: Accomplishment[] = [];
    ACCOMPLISHMENTS.forEach( accomplishment => {
      if(accomplishment.companyName === company && accomplishment.assignment === assignment) {
        //console.log("adding ", accomplishment.accomplishment, " to Accomplishment[]");
        accomplishments.push(accomplishment);
      }
    });
    return accomplishments;
  }
}
