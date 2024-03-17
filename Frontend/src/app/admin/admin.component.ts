// import { Component, OnInit } from '@angular/core';
// import { FormBuilder } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-admin',
//   templateUrl: './admin.component.html',
//   styleUrl: './admin.component.css'
// })
// export class AdminComponent{
//   username: string = 'SBI';
//   password: string = 'sbi@insure'; 

//   constructor(private fb:FormBuilder, private router: Router){}
  
//   // ngOnInit(): void {
//   //   throw new Error('Method not implemented.');
//   // }

//   adminLogin(){
//     console.log("allowed temperary admin login");
//     this.router.navigate(['/adminchoice']);
//   }

// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PolicyDecisionsService } from '../policy-decisions.service';
import { InsuranceProvider } from '../InsuranceProvider';
import { admin } from '../admin';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  loginForm: FormGroup | undefined;
  // providerId: string | undefined; // Add this line

  constructor(private fb: FormBuilder, private router: Router, private adminlogin: PolicyDecisionsService) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      providerId: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  tempVariable = new InsuranceProvider(1, '', '', '', '', '');
  providerId: any;
  variableAdminCredentials = new admin('', 1);
  tempVariable2:any;
  username: number = 1001;
  password1: string = "sbi@insure";
  password: any;

  adminLogin() {
    // this.id = this.tempVariable.providerId;
    // console.log(this.providerId);
    //getting provider at login form
    sessionStorage.setItem('pid', this.providerId);
    this.adminlogin.fetchProviderPolicyHistoryById(this.providerId).subscribe(
      (response)=>{
        this.tempVariable2 = response;
        // console.log(this.tempVariable2);
        // sessionStorage.setItem('username', this.loginCredentials.username);
        if(this.username == this.providerId && this.password1 == this.password)
        this.router.navigate(['/adminchoice']);
      else{
        alert("Wrong Credentials!");
      }
      }
    )
    // Assuming successful login and providerId retrieval (replace with your logic)
    // this.providerId = '1002'; // Replace with actual provider ID
     //   console.log("allowed temporary admin login");
     //   this.router.navigate(['/adminchoice']);
}
}

