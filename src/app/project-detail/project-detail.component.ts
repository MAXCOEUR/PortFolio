import { Component, OnInit } from '@angular/core';
import { ProjectModel } from '../model/project-model';
import { ActivatedRoute } from '@angular/router';
import { DataManagerService } from '../data-manager.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  project:ProjectModel;

  constructor(private route: ActivatedRoute,private dataManager: DataManagerService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.project = this.dataManager.getProject(Number.parseInt(id));
    console.log(this.project);
  }

}
