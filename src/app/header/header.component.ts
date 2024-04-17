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

  titre = "Maxence COEUR";
  showMenu = false;
  constructor(private router: Router){}

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
  moveHome() {
    this.router.navigate(['/home']);
    this.showMenu = false;
  }
  moveAboutMe() {
    this.router.navigate(['/about-me']);
    this.showMenu = false;
  }
  moveProject() {
    this.router.navigate(['/project']);
    this.showMenu = false;
  }
  moveExperience() {
    this.router.navigate(['/experience']);
    this.showMenu = false;
  }

}
