import { Component } from '@angular/core';

import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact!: Contact;
  
  ngOnInit(): void {
    this.getContactInformation();
  }

  constructor(
    private contactService: ContactService
  ) {}

  getContactInformation(): void {
    this.contact = this.contactService.getContactInformation();
  }
}
