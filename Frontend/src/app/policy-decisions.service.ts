import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { InsurancePolicy } from '../app/InsurancePolicy';
import { InsuranceProvider } from './InsuranceProvider';
import { User } from './User';

@Injectable({
  providedIn: 'root',
})
export class PolicyDecisionsService {
  filterPoliciesByName(arg0: string): any {
    throw new Error('Method not implemented.');
  }
  authenticate(providerId: any, password: any) {
    throw new Error('Method not implemented.');
  }
  private adminPolicyAddUrl =
    'http://localhost:8080/api/policies/admin/add-policy';
  private adminDataFetchUrl =
    'http://localhost:8080/api/insurance-providers/by-id';
  private adminListedPolicyFetchUrl =
    'http://localhost:8080/api/policies/fetch-by-provider';
  private adminListedPolicyDeleteUrl =
    'http://localhost:8080/api/policies/admin/remove-policy/';
  private adminListedPolicyCustomersUrl =
    'http://localhost:8080/api/applications/users-by-policy';

  constructor(private http: HttpClient, private router: Router) {}

  // caputring provider id to send it with policy data to store in database
  public storeProviderId: number = 1;

  decision(choice: string) {
    switch (choice) {
      case 'seepolicies':
        // console.log('You chose to see policies.');
        this.router.navigate(['/login']);
        // Add code to retrieve and display policies
        break;
      case 'publish':
        // console.log('You chose to publish.');
        this.router.navigate(['/adminpolicy']);
        // Add code to publish policies
        break;
      default:
        // console.log('Invalid choice. Should select an option');
        break;
    }
  }

  // Admin Method to add a new policy
  addPolicy(policy: InsurancePolicy) {
    // console.log("Hii" + policy.policyName);
    policy.insuranceProvider.providerId = 1001;

    JSON.stringify(policy);
    // console.log(policy);

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.adminPolicyAddUrl, policy, { headers });
  }

  // Fetch insurance provider by ID
  fetchProviderPolicyHistoryById(providerId: number) {
    this.storeProviderId = providerId;
    return this.http.get<InsuranceProvider>(
      `${this.adminListedPolicyFetchUrl}/${providerId}`
    );
  }

  deleteListedPolicy(id: number) {
    const url = `${this.adminListedPolicyDeleteUrl}${id}`;
    return this.http.delete(url);
  }

  // Fetch customers who purchased a specific policy
  fetchCustomersByPolicyId(policyId: number) {
    const url = `${this.adminListedPolicyCustomersUrl}/${policyId}`;
    return this.http.get<User[]>(url);
  }
}
