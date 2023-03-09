import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccomplishmentsComponent } from './components/accomplishments/accomplishments.component';
import { WorkExperienceItemComponent } from './components/work-experience-item/work-experience-item.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ImageComponent } from './components/image/image.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { SitesComponent } from './components/sites/sites.component';
import { PreviousExperienceComponent } from './components/previous-experience/previous-experience.component';

@NgModule({
  declarations: [
    AppComponent,
    AccomplishmentsComponent,
    WorkExperienceItemComponent,
    AboutMeComponent,
    ImageComponent,
    ContactComponent,
    EducationComponent,
    SitesComponent,
    PreviousExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
