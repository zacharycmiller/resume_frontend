import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resume } from '../models/resume-model';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  private readonly baseUrl = 'http://127.0.0.1:8090/api/resume'

  constructor(private http: HttpClient) { }

  createResume(userId: number): Observable<any> {
    const url = `${this.baseUrl}/${userId}`;
    return this.http.post(url, userId);
  }

  getResumes(userId: number): Observable<Resume[]> {
    const url = `${this.baseUrl}/${userId}`;
    return this.http.get<Resume[]>(url);
  }

  viewResume(resumeId: number): Observable<any> {
    const url = `${this.baseUrl}/id/${resumeId}`;
    return this.http.get(url, { responseType: 'blob' });
  }
}
