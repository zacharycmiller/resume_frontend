import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccomplishmentsComponent } from './components/accomplishments/accomplishments.component';
import { WorkExperienceItemComponent } from './components/work-experience-item/work-experience-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AccomplishmentsComponent,
    WorkExperienceItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
