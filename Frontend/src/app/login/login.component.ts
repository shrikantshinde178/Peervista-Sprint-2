import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Login } from '../Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router:Router) {}
  loginCredentials = new Login(0, '', '', '');
  
  login(loginCredentials: Login): void {
    this.authService.login(this.loginCredentials).subscribe(
      (response) => {
        console.log(response);
        // Redirect to home page upon successful login
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        // Handle login error (display message)
        console.error('Login failed:', error);
      }
    );
  }
}
