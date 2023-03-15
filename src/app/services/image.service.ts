import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../models/image-model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private baseUrl = 'http://127.0.0.1:8090/api/images';

  constructor(private http: HttpClient) { }

  getImageById(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get(url, { responseType: 'blob' });
  }
}
