import { Injectable } from '@angular/core';

import { WorkExperience } from '../models/work-experience-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {

  private readonly baseUrl = 'http://127.0.0.1:8090/api/experience';
  constructor(private http: HttpClient) { }
  
  getWorkExperienceItemsByResumeId(resumeId: number): Observable<WorkExperience[]> {
    return this.http.get<WorkExperience[]>(`${this.baseUrl}/${resumeId}/`);
  }
  
  addWorkExperience(resumeId: number, item: WorkExperience): Observable<WorkExperience> {
    return this.http.post<WorkExperience>(`${this.baseUrl}/add/${resumeId}`, item);
  }
}
