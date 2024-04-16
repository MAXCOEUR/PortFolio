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

  onClickProject(project: ProjectModel) {
    this.router.navigate(['/project', project.id]);
  }

}
