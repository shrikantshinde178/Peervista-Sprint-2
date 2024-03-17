import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../policy-service.service';
import { PolicyApplications } from '../PolicyApplications';
import { Login } from '../Login';

@Component({
  selector: 'app-user-buyed-policy-cart',
  templateUrl: './user-buyed-policy-cart.component.html',
  styleUrls: ['./user-buyed-policy-cart.component.css'],
})
export class UserBuyedPolicyCartComponent implements OnInit {
  purchasedPolicies: PolicyApplications[] = [];
  storeUserId: number = 0; // Initialize it with 0
  storeUsername: string = ''; // Initialize it with an empty string

  constructor(private policyService: PolicyService) {}
  tempVariable: any;
  tempStoreId: any;

  ngOnInit() {
    // console.log(
    //   'Fetching user details for username:',
    //   this.policyService.storeUsername
    // // );

    this.policyService
      .fetchByUsername(this.policyService.storeUsername).subscribe(
        (response) => {
        // console.log(response);
        // console.log("after getiing responce of : "+response);
        this.tempStoreId = response;
        // this.tempStoreId =response.toString;
          // console.log(this.tempStoreId);
        //   this.policyService
          // this.fetchPurchasedPolicies();
          this.policyService.fetchUsersBuyedPolicies(this.tempStoreId).subscribe(
            (policies) => {
              this.tempVariable = policies;
              // console.log(policies);
              // console.log('Purchased policies:', this.purchasedPolicies);
            },
            (error) => {
              console.error('Failed to fetch purchased policies:', error);
            }
          );

        //   .subscribe((response) => {
        //     this.tempVariable = response;
        //   });
      });
  }

  // method to fetch all policies by userId
  fetchPurchasedPolicies() {
    // console.log('Fetching purchased policies for user ID:', this.tempStoreId);
   
  }
  
}
function fetchUsersBuyedPolicies(tempStoreId: any) {
  throw new Error('Function not implemented.');
}

