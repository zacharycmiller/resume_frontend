import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseUrl = 'http://127.0.0.1:8090/api/contacts';

  constructor(private http: HttpClient) { }

  getContactById(id: number): Observable<Contact> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Contact>(url);
  }

  createContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.baseUrl, contact);
  }

  updateContact(id: number, contact: Contact): Observable<Contact> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Contact>(url, contact);
  }

  deleteContact(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }
}
