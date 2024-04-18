import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../data-manager.service';
import { ProjectModel } from '../model/project-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects:ProjectModel[];

  constructor(private router: Router,private dataManager: DataManagerService) { }

  ngOnInit() {
    this.projects=this.dataManager.getProjects();
  }
  private movePage(param: string[]) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Défilement fluide
    });
    this.router.navigate(param);
  }

  onClickProject(project: ProjectModel) {
    this.movePage(['/project', project.id.toString()]);
  }


}
