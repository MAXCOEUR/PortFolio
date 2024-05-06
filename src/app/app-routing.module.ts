import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'project'
    ,component:ProjectComponent
  },
  {
    path: 'experience'
    , component: ExperienceComponent
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
