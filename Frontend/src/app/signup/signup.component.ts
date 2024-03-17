import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Login } from '../Login';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  adminLoginForm!: FormGroup;
  showAdminLoginForm: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: [
        '',
        [Validators.required, Validators.minLength(3), this.noNumbersValidator],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    this.adminLoginForm = this.fb.group({
      adminUsername: ['', Validators.required],
      adminPassword: ['', Validators.required],
    });
  }

  get formControls() {
    return this.signupForm.controls;
  }

  get adminFormControls() {
    return this.adminLoginForm.controls;
  }

  SignUpCredentials = new Login(0, '', '', '');

  signup() {
    this.authService.signup(this.SignUpCredentials).subscribe(
      (response) => {
        Swal.fire({
          icon: 'success',
          title: 'Sign Up Successful!',
          text: 'You will be redirected to the login page.',
          timer: 3000, // Set the duration for the alert
          timerProgressBar: true, // Display a progress bar
          allowOutsideClick: false, // Prevent clicking outside the modal
          didOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            // Redirect to the login page after the alert is closed
            this.router.navigate(['/login']);
          }
        });
      },
      (error) => {
        console.error('Signup failed:', error);
        Swal.fire({
          icon: 'error',
          title: 'Something Went Wrong!',
          text: 'Failed to sign up. Please try again later.',
          timer: 3000, // Set the duration for the alert
          timerProgressBar: true, // Display a progress bar
          allowOutsideClick: false // Prevent clicking outside the modal
        });
        // console.error('Signup failed:', error);
        // Handle signup error (display message, etc.)
      }
    );
  }
  
  adminLogin() {
    const adminUsername = this.adminLoginForm.get('adminUsername')?.value;
    const adminPassword = this.adminLoginForm.get('adminPassword')?.value;

    // Call admin login service method
    // this.authService.adminLogin(adminUsername, adminPassword).subscribe(
    //   (response) => {
    //     console.log('Admin login successful:', response);
    //     // Redirect to admin dashboard upon successful login
    //     this.router.navigate(['/admin']);
    //   },
    //   (error) => {
    //     console.error('Admin login failed:', error);
    //     // Handle admin login error (display message, etc.)
    //   }
    // );
  }

  toggleAdminLoginForm() {
    this.showAdminLoginForm = !this.showAdminLoginForm;
  }

  noNumbersValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const containsNumber = /\d/.test(control.value);
    return containsNumber ? { containsNumbers: true } : null;
  }
}
