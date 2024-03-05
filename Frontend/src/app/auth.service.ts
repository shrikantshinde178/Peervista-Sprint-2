// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './Login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

  login(loginCredentials:Login): Observable<any> {
    // Send HTTP POST request to the backend API for user authentication
    console.log(loginCredentials);
    const headers= new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(`${this.apiUrl}/login`, loginCredentials, {headers});
  }

  signup(SignUpCredentials:Login): Observable<any> {
    console.log(SignUpCredentials);
    // Send HTTP POST request to the backend API for user registration
    const headers= new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(`${this.apiUrl}/signup`,  SignUpCredentials, {headers});
  }
}
