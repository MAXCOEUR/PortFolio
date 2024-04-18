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
    this.movePage('/home');
  }
  moveAboutMe() {
    this.movePage('/about-me');
  }
  moveProject() {
    this.movePage('/project');
  }
  moveExperience() {
    this.movePage('/experience');
  }

  private movePage(url:String){
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Défilement fluide
    });
    this.router.navigate([url]);
    this.showMenu = false;
  }

}
