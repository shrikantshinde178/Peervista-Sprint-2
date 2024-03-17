
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router) {}
  

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('username');
  }

  logout(): void {
    sessionStorage.removeItem('username');
    this.router.navigate(['/home']);
  }

  checkSession(){
    if(sessionStorage.getItem('username')){
      return true;
    } else{
      return false;
    }
  }

}



