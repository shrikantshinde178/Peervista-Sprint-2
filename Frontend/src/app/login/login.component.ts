import { Component, HostListener } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Login } from '../Login';
import { PolicyService } from '../policy-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private varName: PolicyService
  ) {}

  // Initialize loginCredentials as an instance of Login class
  loginCredentials: Login = { id: 0, username: '', password: '', email: '' };
  
  // Flag to track if user is logged in
  isLoggedIn: boolean = false;

  // Function to handle login
  login(): void {
    // Pass loginCredentials object directly
    this.authService.login(this.loginCredentials).subscribe(
      (response) => {
        // console.log(response);
        this.varName.storeUsername = this.loginCredentials.username;
        sessionStorage.setItem('username', this.loginCredentials.username);

        // Set isLoggedIn flag to true
        this.isLoggedIn = true;

        
        // Sweet alert for successful login
        Swal.fire({
          icon: 'success',
          title: 'Login Successful!',
          text: 'You will be redirected to the dashboard.',
          timer: 2000, // Set the duration for the alert
          // timerProgressBar: true, // Display a progress bar
          showConfirmButton: false // Hide the confirm button
        }).then(() => {
          // After the alert is closed, redirect to the dashboard
          this.router.navigate(['/dashboard']);
        });
      },
      (error) => {
        console.error('Login failed:', error);
        // Handle login error here
      }
    );
  }

  // Listen for window unload event
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.isLoggedIn) {
      // Prompt user to confirm logout before leaving the page
      $event.returnValue = 'Do you want to logout?';
    }
  }
}
