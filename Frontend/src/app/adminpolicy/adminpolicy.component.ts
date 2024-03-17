import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { InsurancePolicy } from '../InsurancePolicy';
import { InsuranceProvider } from '../InsuranceProvider';
import { PolicyDecisionsService } from '../policy-decisions.service';

@Component({
  selector: 'app-adminpolicy',
  templateUrl: './adminpolicy.component.html',
  styleUrls: ['./adminpolicy.component.css'],
})
export class AdminpolicyComponent implements OnInit {
  policyForm: FormGroup;

  provider = new InsuranceProvider(1, '', '', '', '', '');
  // tempProviderObj = new InsuranceProvider(
  //   1001,
  //   'sbi',
  //   'care@sbiInsurance.com',
  //   'sbi@Insure',
  //   '1800494948',
  //   'mumbai'
  // );
  policy = new InsurancePolicy(
    1,
    '',
    1,
    1,
    1,
    1,
    '',
    1,
    '',
    this.provider
  );

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private policyService: PolicyDecisionsService
  ) {
    this.policyForm = this.fb.group({
      policyName: ['', Validators.required],
      coverageAmount: ['', [Validators.required, Validators.min(0)]],
      creditScoreRequirement: ['', Validators.required],
      incomeRequirement: ['', [Validators.required, Validators.min(0)]],
      policyTermMonths: ['', [Validators.required, Validators.min(1)]],
      policyCoverageDescription: ['', Validators.required],
      premiumAmount: ['', [Validators.required, Validators.min(0)]],
      premiumPaymentFrequency: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Fetch insurance provider by ID
    const providerId = 1; // Replace with the actual provider ID
    this.policyService.fetchProviderPolicyHistoryById(providerId).subscribe(
      (provider: InsuranceProvider) => {
        // this.policy.insuranceProvider = provider;
      },
      (error) => {
        console.error('Error fetching insurance provider:', error);
        // Handle error
      }
    );
  }

  publish() {
    // Mark all form fields as touched to display error messages
    Object.values(this.policyForm.controls).forEach((control) => {
      control.markAsTouched();
    });

    if (this.policyForm.valid) {
      // Proceed with publishing
      // console.log('Form is valid');
      // console.log('welcome' + this.policy.policyName);
      this.policyService.addPolicy(this.policy).subscribe(
        (response) => {
          const tempUserId = this.policy;
          // console.log('Hellow' + this.policy);
          // alert("Published successfully");
          Swal.fire({
            title: 'publishing your request...',
            html: `
            <p style="font-size: 14px;">Please do not close the window.<br> It may take a few seconds!</p>`,
            timer: 4000,
            timerProgressBar: true,
            showConfirmButton: false,
            allowOutsideClick: false,
            backdrop: 'rgba(0, 0, 123, 0.4)', // Set the desired background color here
            didOpen: () => {
              const popup = Swal.getPopup();
              if (popup) {
                popup.classList.add('animate__animated', 'animate__bounce');
                popup.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'; // Change background color here
              }
            },
            willClose: () => {
              const popup = Swal.getPopup();
              if (popup) {
                popup.classList.remove('animate__animated', 'animate__bounce');
              }
            },
          }).then(() => {
            // console.log('Alert closed');
            // Redirect to previous component
            // this.router.navigate(['/adminchoice']);
          });
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="#">Why do I have this issue?</a>',
          });
          console.error('Cannot add policy', error);
        }
      );
    } else {
      // Show error message or prevent form submission
      // console.log('Form is invalid');
      // You can display an error message to the user or prevent form submission here
      return;
    }
  }
}
