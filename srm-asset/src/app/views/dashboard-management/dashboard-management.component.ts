import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-management',
  templateUrl: './dashboard-management.component.html',
  styleUrls: ['./dashboard-management.component.scss']
})
export class DashboardManagementComponent implements OnInit {
  constructor() { }

  logo = require('../../../assets/images/blue-globe.png')
  arrows = require('src/assets/images/down-icon.png')
  
  ngOnInit() {
  }

}
