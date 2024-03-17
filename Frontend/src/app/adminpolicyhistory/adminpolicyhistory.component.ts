import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PolicyDecisionsService } from '../policy-decisions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminpolicyhistory',
  templateUrl: './adminpolicyhistory.component.html',
  styleUrl: './adminpolicyhistory.component.css',
})
export class AdminpolicyhistoryComponent implements OnInit {
  adminPolicies: any[] = [];
  providerId: number = 1;
  posts: any;
  
  filteredPosts: any[] = [];
  searchTerm: string = '';


  constructor(
    private router: Router,
    private policyfetch: PolicyDecisionsService
  ) {}
  ngOnInit(): void {
    this.providerId = this.policyfetch.storeProviderId;
    // console.log(this.providerId);
    this.policyfetch
      .fetchProviderPolicyHistoryById(this.providerId)
      .subscribe((response) => {
        // console.log(response);
        this.posts = response;
      });
  }

  redirectToNewPolicy() {
    this.router.navigateByUrl('/adminpolicy');
  }


  deletePolicy(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        this.policyfetch.deleteListedPolicy(id).subscribe(
          () => {
            // If delete operation is successful, update UI
            this.policyfetch
              .fetchProviderPolicyHistoryById(this.providerId)
              .subscribe(
                (response) => {
                  this.posts = response;
                },
                (error) => {
                  console.error(
                    'Error fetching policies after deletion:',
                    error
                  );
                }
              );
            Swal.fire({
              title: 'Deleted!',
              text: 'This policy is not accissible to users now.',
              icon: 'success',
            });
          },
          (error) => {
            // Handle error
            console.error(
              'You cannot delete the policy. Its in a foreign key relationship in the child database:',
              error
            );
            Swal.fire({
              title: "Oops can't delete",
              icon: 'info',
              html: `
                Users have already purchased it.<br>
                <p style="font-size: 14px;">
                  Having any concern? Write us at<br> 
                  <span style="color: blue;">adminsupport@peervista.com</span>
                </p>
                `,
              showCloseButton: true,
              showCancelButton: false,
              focusConfirm: true,
              confirmButtonText: 'Ok',
            });
          }
        );
      }
    });
  }

  // fetchCustomers(policyId: number) {
  //   // Call the service method to fetch customers who purchased this policy
  //   this.policyfetch.fetchCustomersByPolicyId(policyId).subscribe(
  //     (response) => {
  //       // Handle the response here, e.g., display in a modal or navigate to a new page
  //       console.log(response);
  //     }
  //   );
  // }

  fetchCustomers(policyId: number) {
    this.router.navigate(['/user-details', policyId]);
  }

  searchPolicies() {
    // console.log("Search term:", this.searchTerm); // Log the search term
    if (this.searchTerm.trim() === '') {
      this.filteredPosts = [...this.posts];
      return;
    }
  
    this.filteredPosts = this.posts.filter((policy: { policyName: string; }) =>
      policy.policyName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  
    // console.log("Filtered posts:", this.filteredPosts); // Log the filtered posts
  }

   // Reset search term and filtered posts when clicking outside the search box
   @HostListener('document:click', ['$event'])
   onClick(event: MouseEvent) {
     const clickedElement = event.target as HTMLElement;
     if (!clickedElement.closest('.search-box')) {
      //  this.searchTerm = ''; // Reset the search term
      //  this.searchPolicies(); // Reset filtered posts to all posts
     }
   }
    


}
