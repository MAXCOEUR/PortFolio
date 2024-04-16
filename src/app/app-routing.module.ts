import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectComponent } from './project/project.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'about-me',
    component:AboutMeComponent
  },
  {
    path:'project'
    ,component:ProjectComponent
  },
  {
    path: 'work-experience'
    , component: WorkExperienceComponent
  },
  { 
    path: 'project/:id',
    component: ProjectDetailComponent 
  },

  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
