import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  constructor(private router: Router) { }

  route: String = "/management"
  routeName: String = this.parseRoute(this.router.url)

  parseRoute(route: String): String {
    switch (route) { 
      case '/management':
        this.route = '/management'
        return '> Painel de Gestão'
        break;

      case '/account':
        this.route = '/account'
        return '> Conta Digital'
        break;
      
      case '/anticipation':
        this.route = '/anticipation'
        return '> Ant. de Recebíveis'
        break;
    }
  }
  ngOnInit() {
  }

}
