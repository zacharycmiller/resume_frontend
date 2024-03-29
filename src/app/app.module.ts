import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccomplishmentsComponent } from './components/accomplishments/accomplishments.component';
import { WorkExperienceTreeComponent } from './components/work-experience-tree/work-experience-tree.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ImageComponent } from './components/image/image.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { SitesComponent } from './components/sites/sites.component';
import { PreviousExperienceComponent } from './components/previous-experience/previous-experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { ResumeComponent } from './components/resume/resume.component';
import { WorkExperienceFormComponent } from './components/work-experience-form/work-experience-form.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { UserIntakeComponent } from './components/user-intake/user-intake.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResumeDisplayComponent } from './components/resume-display/resume-display.component';

@NgModule({
  declarations: [
    AppComponent,
    AccomplishmentsComponent,
    WorkExperienceTreeComponent,
    AboutMeComponent,
    ImageComponent,
    ContactComponent,
    EducationComponent,
    SitesComponent,
    PreviousExperienceComponent,
    SkillsComponent,
    ResumeComponent,
    WorkExperienceComponent,
    WorkExperienceFormComponent,
    UserIntakeComponent,
    DashboardComponent,
    ResumeDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxMaskDirective,
    NgxMaskPipe,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
