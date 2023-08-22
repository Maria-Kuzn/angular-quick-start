import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent  implements OnInit{
  public items: MenuItem[] = [];
  public home: MenuItem = {};

  ngOnInit(): void {
    this.items = [
      {label:'Курсы'}
    ];
    this.home = {icon: 'pi pi-home', routerLink: '/'};
  }

}
