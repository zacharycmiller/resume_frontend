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
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
