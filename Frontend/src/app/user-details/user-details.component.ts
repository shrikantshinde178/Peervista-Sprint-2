import { ActivatedRoute } from '@angular/router';
import { PolicyDecisionsService } from '../policy-decisions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  policyId?: number;
  users: any[] = [];

  constructor(private route: ActivatedRoute, private policyfetch: PolicyDecisionsService) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      this.policyId = +params['policyId']; // Convert parameter to number
      if (this.policyId) {
        this.policyfetch.fetchCustomersByPolicyId(this.policyId).subscribe(
          (response) => {
            this.users = response;
          }
        );
      }
    });
  }
}
