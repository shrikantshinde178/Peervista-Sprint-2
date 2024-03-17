import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../policy-service.service';
import Swal from 'sweetalert2';
import { PolicyApplications } from '../PolicyApplications';
import { InsurancePolicy } from '../InsurancePolicy';
import { User } from '../User';
import { ApplicationCart } from '../ApplicationCart';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  policies: any[] = [];
  cartItems: any[] = [];
  cartItemCount: number = 0;
  loggedInUserName: string | undefined;

  constructor(
    private policyService: PolicyService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.fetchPolicies();
    this.fetchCartItems();
    // Access stored username from PolicyService
    this.loggedInUserName = this.policyService.storeUsername;
  }

  Payment() {
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      html: '<div class="swal-subtitle">Your work has been saved. Policy bought successfully!</div>',
      timer: 1600,
      timerProgressBar: true,
      showConfirmButton: false,
      didOpen: (toast) => {
        toast.classList.add('swal-toast');
      },
      willClose: () => {
        const toast = document.querySelector('.swal-toast');
        if (toast) {
          toast.classList.remove('swal-toast');
        }
      },
    });
  }

  fetchPolicies(): void {
    this.policyService.getPolicies().subscribe(
      (response) => {
        this.policies = response;
      },
      (error) => {
        console.error('Error fetching policies:', error);
      }
    );
  }

  fetchAllPolicesHistory() {
    // console.log('in a new component i get following username');
    // console.log(this.policyService.storeUsername);
    // console.log('redirecting  to cart');
    this.router.navigate(['/userBuyedPolicyCart']);
  }

  fetchCartItems(): void {
    // this.policyService.getCartItems().subscribe(
    //   (response) => {
    //     this.cartItems = response;
    //   },
    //   (error) => {
    //     console.error('Error fetching cart items:', error);
    //   }
    // );
  }

  cartAppli: ApplicationCart[] = new Array();

  addToCart(policy: InsurancePolicy, id: number, coverageAmount: number) {
    const applicationModel = new PolicyApplications(
      id,
      new Date(),
      new User(2),
      true,
      policy
    );
    this.cartAppli.push(
      new ApplicationCart(
        applicationModel.id,
        applicationModel.applicationDate,
        applicationModel.user.userId,
        policy.id,
        policy.policyName,
        policy.premiumAmount,
        policy.policyCoverageDescription,
        coverageAmount,
        policy.policyTermMonths,
        policy.premiumPaymentFrequency
      )
    );
    this.policyService.addToCart(applicationModel).subscribe(
      () => {
        // console.log('Policy purchase successfully!');
        Swal.fire({
          icon: 'success',
          title: 'Buyed Successfully!',
          html: '<div class="swal-subtitle">Policy purchase successfully you can claim it any time!</div>',
          timer: 1600,
          timerProgressBar: true,
          showConfirmButton: false,
          didOpen: (toast) => {
            toast.classList.add('swal-toast');
          },
          willClose: () => {
            const toast = document.querySelector('.swal-toast');
            if (toast) {
              toast.classList.remove('swal-toast');
            }
          },
        });
        this.cartItemCount++;
        this.fetchCartItems();
      },
      (error) => {
        console.error('Error adding policy to cart:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      }
    );
  }

  removeFromCart(cart: any) {
    const index_id = cart.id;

    this.http.delete(`/api/cart/remove/${index_id}`).subscribe(
      () => {
        // Success handling
        this.cartAppli = this.cartAppli.filter((item) => item.id !== cart.id);
        // console.log('Item removed from cart successfully');
      },
      (error: any) => {
        // Error handling
        console.error('Error removing item from cart:', error);
      }
    );
  }

  // Function to download CSV
  downloadCSV() {
    const rows = [
      [
        'Policy Id',
        'Name',
        'Coverage Amount',
        'Policy Term Months',
        'Premium Amount',
        'Payment Frequency',
      ],
    ];
    this.cartAppli.forEach((cart) => {
      const row = [
        cart.id.toString(), // Convert to string
        cart.policy_Name,
        cart.coverageAmount.toString(), // Convert to string
        cart.ptm.toString(), // Convert to string
        cart.premium_Amount.toString(), // Convert to string
        cart.paymentFrequency,
      ];
      rows.push(row);
    });

    // method to download policies
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      rows.map((row) => row.join(',')).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'policies.csv');
    document.body.appendChild(link); // Required for Firefox
    link.click();
  }

  // fetchUsersBuyedPolicies(){
  //   console.log("Redirecting to user history");
  //   console.log(this.policyService.storeUserId);
  //   this.router.navigate(['./userBuyedPolicyCart']);
  // }
}
