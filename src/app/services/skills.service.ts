import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../models/skills-model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private readonly baseUrl = 'http://localhost:8090/api/skills';

  constructor(private http: HttpClient) { }

  createSkill(skill: Skill): Observable<Skill> {
    return this.http.post<Skill>(this.baseUrl, skill);
  }
  
  getAllSkillsByResumeId(resumeId: number): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.baseUrl}/${resumeId}/`);
  }

  getSkillById(id: number): Observable<Skill> {
    return this.http.get<Skill>(`${this.baseUrl}/${id}`);
  }

  updateSkill(id: number, skill: Skill): Observable<Skill> {
    return this.http.put<Skill>(`${this.baseUrl}/${id}`, skill);
  }

  deleteSkill(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
