import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Education } from '../models/education-model';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private baseUrl = 'http://localhost:8090/api/education';

  constructor(private http: HttpClient) { }

  getEducationByResumeId(resumeId: number): Observable<Education[]> {
    return this.http.get<Education[]>(`${this.baseUrl}/${resumeId}/`);
  }

  getEducationById(id: number): Observable<Education> {
    return this.http.get<Education>(`${this.baseUrl}/${id}`);
  }

  addEducation(education: Education): Observable<Education> {
    return this.http.post<Education>(`${this.baseUrl}/`, education);
  }

  updateEducation(id: number, education: Education): Observable<Education> {
    return this.http.put<Education>(`${this.baseUrl}/${id}`, education);
  }

  deleteEducation(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAllEducations(): Observable<Education[]> {
    return this.http.get<Education[]>(`${this.baseUrl}/`);
  }
}
