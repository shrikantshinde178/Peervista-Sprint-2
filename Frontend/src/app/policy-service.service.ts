
// policy-service.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InsurancePolicy } from './Entity';
import { ApplicationCart } from './ApplicationCart';
import { PolicyApplications } from './PolicyApplications';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  private baseUrl = 'http://localhost:8080/api/policies';
  private cartUrl = 'http://localhost:4200/api/policy-applications';
  private baseUrl1 = 'http://localhost:4200/api/applications';
  cartAppli: any;

  constructor(private http: HttpClient) { }
  
  getPolicies(): Observable<InsurancePolicy[]> {
    return this.http.get<InsurancePolicy[]>(`${this.baseUrl}/fetch-all-policies`);
  }

  getPoliciesById(id:number): Observable<InsurancePolicy[]> {
    return this.http.get<InsurancePolicy[]>(`${this.baseUrl}/fetch-by/${id}`);
  }

    // addToCart(applicationId: number): Observable<any> {
    //   return this.http.post<any>(`${this.cartUrl}/${applicationId}/add-to-cart`, {});
    // }

    addToCart(application:PolicyApplications) {
      console.log('at service', application)
      const url = "http://localhost:8080/api/applications/addPolicyApplication";
      const headers = new HttpHeaders({'Content-Type':'application/json'})
      return this.http.post(url, application, {headers})
    }
  
    // removeFromCart(applicationId: number): Observable<any> {
    //   return this.http.delete<any>(`${this.baseUrl1}/remove/${applicationId}`);
    // }

    getCartItems(): Observable<any[]> {
      return this.http.get<any[]>(`${this.baseUrl1}/items`);
    }

    delete(cart: any){
      this.cartAppli = this.cartAppli.filter((item: any) => item.id !== cart.id);
    }
    
  }
  