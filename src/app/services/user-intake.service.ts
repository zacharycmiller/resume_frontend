import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserIntake } from '../models/user-intake-model';

@Injectable({
  providedIn: 'root'
})
export class UserIntakeService {

  private readonly baseUrl = "http://127.0.0.1:8090/api/users";

  constructor(private http: HttpClient) { }

  addUser(user: UserIntake): Observable<UserIntake> {
    return this.http.post<UserIntake>(this.baseUrl, user);
  }

  
}
