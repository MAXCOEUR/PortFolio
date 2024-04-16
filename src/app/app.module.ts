import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectComponent } from './project/project.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ProjectComponent,
    WorkExperienceComponent,
    HeaderComponent,
    FooterComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
