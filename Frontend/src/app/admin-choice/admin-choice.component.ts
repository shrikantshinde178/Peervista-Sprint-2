import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-choice',
  templateUrl: './admin-choice.component.html',
  styleUrls: ['./admin-choice.component.css'],
})
export class AdminChoiceComponent {
  constructor(private router: Router) {}

  redirectToPolicies() {
    this.router.navigate(['/adminpolicyhistory']); // Navigate to the policies component
  }

  redirectToNewPolicy() {
    this.router.navigate(['/adminpolicy']); // Navigate to the new policy component
  }
}
