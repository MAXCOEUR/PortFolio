import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  private movePage(url:String){
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Défilement fluide
    });
    this.router.navigate([url]);
  }

  moveProject() {
    this.movePage('/project');
  }
  moveExperience() {
    this.movePage('/experience');
  }
}
