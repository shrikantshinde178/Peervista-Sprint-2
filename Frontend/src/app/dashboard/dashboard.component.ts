import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../policy-service.service';
import Swal from 'sweetalert2';
import { PolicyApplications } from '../PolicyApplications';
import { InsurancePolicy } from '../../InsurancePolicies';
import { User } from '../User';
import { ApplicationCart } from '../ApplicationCart';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  policies: any[] = [];
  cartItems: any[] = [];
  cartItemCount: number = 0;
  http: any;

  constructor(private policyService: PolicyService, private router: Router) {}

  ngOnInit(): void {
    this.fetchPolicies();
    this.fetchCartItems();
  }

  //  // Method to navigate to cart page
  //  goToCart(): void {
  //   this.router.navigate(['/user-cart']); // Navigate to '/cart'
  // }

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
      }
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

  addToCart(policy: InsurancePolicy, id: number, coverageAmount:number){
    const applicationModel = new PolicyApplications(id,new Date(), new User(2), true, policy)
    this.cartAppli.push(new ApplicationCart(applicationModel.id, applicationModel.applicationDate, applicationModel.user.userId, policy.id, policy.policyName, policy.premiumAmount, policy.policyCoverageDescription,  coverageAmount, policy.policyTermMonths , policy.premiumPaymentFrequency))
    this.policyService.addToCart(applicationModel).subscribe(
      () => {
        console.log('Policy purchase successfully!');
        Swal.fire({
          icon: 'success',
          title: 'Saved!',
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
          }
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

  // removeFromCart(applicationId: number): void {
  //   this.policyService.removeFromCart(applicationId).subscribe(
  //     () => {
  //       console.log('Policy removed from cart successfully');
  //       this.fetchCartItems();
  //     },
  //     (error) => {
  //       console.error('Error removing policy from cart:', error);
  //       Swal.fire({
  //         icon: 'error',
  //         title: 'Oops...',
  //         text: 'Something went wrong!',
  //       });
  //     }
  //   );
  // }

  removeFromCart(cart: any) {
    const index_id = cart.id; // Assuming your cart item has an id property

    this.http.delete(`/api/cart/remove/${index_id}`).subscribe(
      () => {
        // Success handling
        this.cartAppli = this.cartAppli.filter(item => item.id !== cart.id);
        console.log('Item removed from cart successfully');
      },
      (error: any) => {
        // Error handling
        console.error('Error removing item from cart:', error);
      }
    );
  }

  // removeFromCart(cart: any){
  //   this.policyService.delete(cart);
  // }
}
