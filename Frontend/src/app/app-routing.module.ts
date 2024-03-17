import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SupportComponent } from './support/support.component';
import { AdminComponent } from './admin/admin.component';
import { AdminpolicyComponent } from './adminpolicy/adminpolicy.component';
import { AdminChoiceComponent } from './admin-choice/admin-choice.component';
import { AdminpolicyhistoryComponent } from './adminpolicyhistory/adminpolicyhistory.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserBuyedPolicyCartComponent } from './user-buyed-policy-cart/user-buyed-policy-cart.component';
import { CoveragesComponent } from './coverages/coverages.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component : HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'support', component: SupportComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'adminpolicy', component: AdminpolicyComponent },
  { path: 'adminchoice', component: AdminChoiceComponent },
  { path: 'adminpolicyhistory', component: AdminpolicyhistoryComponent },
  { path: 'user-details/:policyId', component: UserDetailsComponent }, // Define the route with parameter
  { path: 'userBuyedPolicyCart', component: UserBuyedPolicyCartComponent },
  { path: 'coverages', component: CoveragesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
