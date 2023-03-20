import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResumeComponent } from './components/resume/resume.component';
import { UserIntakeComponent } from './components/user-intake/user-intake.component';

const routes: Routes = [
  { path: 'register', component: UserIntakeComponent },
  { path: 'dashboard/:id', component: DashboardComponent },
  { path: 'resume/:id', component: ResumeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
