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
  private adminTokenKey = 'adminToken'; // Key for storing admin token in localStorage

  constructor(private http: HttpClient) {}

  login(loginCredentials: Login): Observable<any> {
    // Send HTTP POST request to the backend API for user authentication and login request
    const headers = new HttpHeaders({'Content-Type': 'application/json', responceType: 'text'});
    // const url = "http://localhost:8080/api/auth/login/"+loginCredentials.username+"/"+loginCredentials.password;
    return this.http.get(`${this.apiUrl}/login?username=${loginCredentials.username}&password=${loginCredentials.password}`,{ headers, 'responseType': 'text'});
    // return this.http.get(url,{ headers, 'responseType': 'text'});
  }

  signup(SignUpCredentials:Login): Observable<any> {
    // console.log(SignUpCredentials);
    // Send HTTP POST request to the backend API for user registration
    const headers= new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(`${this.apiUrl}/signup`,  SignUpCredentials, {headers});
  }

  // Admin Login
  adminLogin(loginCredentials: Login): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(`${this.apiUrl}/admin/login`, loginCredentials, { headers, responseType: 'text' });
  }

  // Admin Logout
  adminLogout(): void {
    localStorage.removeItem(this.adminTokenKey); // Remove admin token from localStorage
  }

  // Check if Admin is Logged In
  isAdminLoggedIn(): boolean {
    return !!localStorage.getItem(this.adminTokenKey); // Check if admin token exists in localStorage
  }
}
