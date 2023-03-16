import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AboutMe } from '../models/about-me-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {

  private baseUrl = 'http://127.0.0.1:8090/api/about-me';

  constructor(private http: HttpClient) { }

  // Method to get an AboutMe object by ID
  getAboutMeById(id: number): Observable<AboutMe> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<AboutMe>(url);
  }

  /*
  * To be developed:
  *
  // Method to update an existing AboutMe object
  updateAboutMe(aboutMe: AboutMe): Observable<any> {
    const url = `${this.baseUrl}/${aboutMe.id}`;
    return this.http.put(url, aboutMe);
  }

  // Method to create a new AboutMe object
  createAboutMe(aboutMe: AboutMe): Observable<any> {
    return this.http.post(this.baseUrl, aboutMe);
  }

  // Method to delete an existing AboutMe object by ID
  deleteAboutMe(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }
  */
}