

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Login } from '../Login';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username: string = '';
  email: string = '';
  password: string = '';
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get formControls() {
    return this.signupForm.controls;
  }

  SignUpCredentials = new Login(0, '', '', '');

  signup(){
 
    this.authService.signup(this.SignUpCredentials)
      .subscribe(
        (response) => {
          console.log('Signup successful:', response);
          // Redirect to home page upon successful signup
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          // Handle signup error (display message, etc.)
          console.error('Signup failed:', error);
        }
      );
  }
}
