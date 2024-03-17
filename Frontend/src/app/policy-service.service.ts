// policy-service.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InsurancePolicy } from './InsurancePolicy';
import { ApplicationCart } from './ApplicationCart';
import { PolicyApplications } from './PolicyApplications';
import { User } from './User';
import { Login } from './Login';

@Injectable({
  providedIn: 'root',
})
export class PolicyService {
  private baseUrl = 'http://localhost:8080/api/policies';
  private cartUrl = 'http://localhost:4200/api/policy-applications';
  private baseUrl1 = 'http://localhost:4200/api/applications';
  private userPolicyFetchUrl =
    'http://localhost:8080/api/applications/fetch-policy/userId/';
  private userDetailByUsernameUrl =
    'http://localhost:8080/api/auth/find-By-Username/';

  cartAppli: any;
  public storeUserId: number = 1;
  public storeUsername: string = '';

  constructor(private http: HttpClient) {}

  getPolicies(): Observable<InsurancePolicy[]> {
    return this.http.get<InsurancePolicy[]>(
      `${this.baseUrl}/fetch-all-policies`
    );
  }

  getPoliciesById(id: number): Observable<InsurancePolicy[]> {
    return this.http.get<InsurancePolicy[]>(`${this.baseUrl}/fetch-by/${id}`);
  }

  // add buyed policies to cart
  addToCart(application: PolicyApplications) {
    // console.log('at service', application);
    const url = 'http://localhost:8080/api/applications/addPolicyApplication';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(url, application, { headers });
  }

  // removeFromCart(applicationId: number): Observable<any> {
  //   return this.http.delete<any>(`${this.baseUrl1}/remove/${applicationId}`);
  // }

  // get all policies
  getCartItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl1}/items`);
  }

  // delete it from cart
  delete(cart: any) {
    this.cartAppli = this.cartAppli.filter((item: any) => item.id !== cart.id);
  }

  // user method to fetch its all own buyed policies
  fetchUsersBuyedPolicies(userId: number) {
    // console.log("Welcome"+ userId)
    this.userPolicyFetchUrl += userId;
    return this.http.get<PolicyApplications[]>(this.userPolicyFetchUrl);
  }

  // method to fetch userdata via usename to pass and get userId to fetch all policies
  fetchByUsername(username: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.userDetailByUsernameUrl += username;
    return this.http.get(this.userDetailByUsernameUrl);
  }
}
