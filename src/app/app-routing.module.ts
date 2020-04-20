import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contactus', component: ContactusComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent}
];





@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)],
    exports: [RouterModule]
  
})
export class AppRoutingModule { }
