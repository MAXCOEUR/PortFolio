import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../data-manager.service';
import { WorkExperienceModel } from '../model/work-experience-model';
import { ScoolExperienceModel } from '../model/scool-experience-model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  private workExperiences:WorkExperienceModel[];
  private scoolExperiences:ScoolExperienceModel[];

  constructor(private dataManager: DataManagerService) { }

  ngOnInit() {
    this.workExperiences = this.dataManager.getWorkExperience();
    this.scoolExperiences = this.dataManager.getScoolExperience();
  }

}
