// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,

    RouterModule.forRoot([
      {path:'login', component:LoginComponent},
      {path:'signup', component:SignupComponent},
      {path:'', redirectTo:'/home', pathMatch:'full'},
      { path: 'dashboard', component: DashboardComponent}, // Add route for DashboardComponent
      { path: 'navbar', component:NavbarComponent } ,
      { path:'footer', component:FooterComponent }, 
      { path:'home', component:HomeComponent},
      { path:'**', component:HomeComponent}
    ])
  ],
  providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
