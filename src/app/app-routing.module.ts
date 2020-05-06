import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingContainerComponent } from './components/landing-container/landing-container.component'
import { AboutComponent } from './components/about/about.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ManagementComponent } from './components/management/management.component';

import { from } from 'rxjs';

const routes: Routes = [
  { path: '', component: LandingContainerComponent },
  { path: 'about-app', component: AboutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'management', component: ManagementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ LandingContainerComponent, AboutComponent, RegisterComponent, LoginComponent ];
