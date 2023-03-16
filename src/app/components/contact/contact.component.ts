import { Component, Input } from '@angular/core';

import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @Input() id!: number;
  contact!: Contact;
  
  ngOnInit(): void {
    this.getContactById(this.id);
  }

  constructor(
    private contactService: ContactService
  ) {}

  getContactById(id: number): void {
    this.contactService.getContactById(id)
    .subscribe(contact => this.contact = contact);
  }
}
