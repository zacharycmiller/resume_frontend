import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Site } from '../models/site-model';

@Injectable({
  providedIn: 'root'
})
export class SitesService {
  private readonly apiBaseUrl = 'http://127.0.0.1:8090/api/sites';

  constructor(private http: HttpClient) {}

  getSitesByResumeId(resumeId: number): Observable<Site[]> {
    const url = `${this.apiBaseUrl}/${resumeId}/`;
    return this.http.get<Site[]>(url);
  }

  getSiteById(id: number): Observable<Site> {
    const url = `${this.apiBaseUrl}/${id}`;
    return this.http.get<Site>(url);
  }

  createSite(site: Site): Observable<Site> {
    return this.http.post<Site>(this.apiBaseUrl, site);
  }

  updateSite(id: number, site: Site): Observable<Site> {
    const url = `${this.apiBaseUrl}/${id}`;
    return this.http.put<Site>(url, site);
  }

  deleteSite(id: number): Observable<void> {
    const url = `${this.apiBaseUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
