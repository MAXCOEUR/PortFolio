import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ngOnInit() {
  }

  titre = "COEUR Maxence";
  showMenu = false;
  constructor(private router: Router){}

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
  moveHome() {
    this.router.navigate(['/home']);
  }
  moveAboutMe() {
    this.router.navigate(['/about-me']);
  }
  moveProject() {
    this.router.navigate(['/project']);
  }
  moveWorkExperience() {
    this.router.navigate(['/work-experience']);
  }

}
