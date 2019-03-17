import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  constructor(private router: Router) { }

  searchIcon = require('src/assets/images/search.png')
  globeIcon = require('src/assets/images/globe.png')
  atIcon = require('src/assets/images/at.png')
  graphIcon = require('src/assets/images/graph.png')

  navigateTo (route) {
    this.router.navigateByUrl(route)
  }

  validateRoute(route: String) {
    if (route == this.router.url) { 
      return true
    } return false
  }

  ngOnInit() {
  }

}
