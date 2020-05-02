import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingContainerComponent } from './components/landing-container/landing-container.component'
import { AboutComponent } from './components/about/about.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', component: LandingContainerComponent },
  { path: 'about-app', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ LandingContainerComponent, AboutComponent ];
