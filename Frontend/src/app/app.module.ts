// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SupportComponent } from './support/support.component';
import { AdminComponent } from './admin/admin.component';
import { AdminpolicyComponent } from './adminpolicy/adminpolicy.component';
import { AdminChoiceComponent } from './admin-choice/admin-choice.component';
import { AdminpolicyhistoryComponent } from './adminpolicyhistory/adminpolicyhistory.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserBuyedPolicyCartComponent } from './user-buyed-policy-cart/user-buyed-policy-cart.component';
import { CoveragesComponent } from './coverages/coverages.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SupportComponent,
    AdminComponent,
    AdminpolicyComponent,
    AdminChoiceComponent,
    AdminpolicyhistoryComponent,
    UserDetailsComponent,
    UserBuyedPolicyCartComponent,
    CoveragesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    ReactiveFormsModule,

    RouterModule.forRoot([
      {path:'login', component:LoginComponent},
      {path:'signup', component:SignupComponent},
      {path:'', redirectTo:'/home', pathMatch:'full'},
      { path: 'dashboard', component: DashboardComponent}, // Add route for DashboardComponent
      { path: 'navbar', component:NavbarComponent } ,
      { path:'footer', component:FooterComponent }, 
      { path:'home', component:HomeComponent },
      { path:'**', component:HomeComponent },
      { path:'support', component:SupportComponent },
      { path:'admin', component:AdminComponent },
      { path:'adminpolicy', component:AdminpolicyComponent },
      { path:'adminchoice', component:AdminChoiceComponent },
      { path: 'adminpolicyhistory', component: AdminpolicyhistoryComponent },
      { path: 'userDetails', component: UserDetailsComponent } ,
      { path: 'userBuyedPolicyCart', component: UserBuyedPolicyCartComponent },
      { path: 'coverages', component: CoveragesComponent }
    ])
  ],  
  providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
