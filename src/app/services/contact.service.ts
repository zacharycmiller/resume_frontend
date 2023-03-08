import { Injectable } from '@angular/core';

import { Contact } from '../models/contact';
import { CONTACT } from '../data/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getContactInformation(): Contact {
    return CONTACT;
  }
}
