import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openSelect() {
    const select = document.getElementById('select')
    select.click();
  }

  logo = require('src/assets/images/logo.png')
  user = require('src/assets/images/user.png')
  bell = require('src/assets/images/bell.png')
  arrows = require('src/assets/images/down-icon.png')
}
