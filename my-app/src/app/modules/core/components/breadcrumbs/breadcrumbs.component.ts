import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';
import { filter } from 'rxjs/operators';
import { Router, NavigationStart, Event as NavigationEvent, ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  public home: MenuItem = {};
  public items: MenuItem[] = [];

  constructor(private readonly route: ActivatedRoute, private readonly dataService: CoursesService) {
    if (this.route.firstChild) {
      this.route.firstChild.params.subscribe(params => {
        const courseId = params['id'];
        if (courseId) {
          this.getItemTitle(parseInt(courseId));
        } else {
          this.clearItems();
        }
      })
    } else {
      this.clearItems();
    }
  }

  ngOnInit(): void {
    this.items = [
      { label: 'Курсы', routerLink: '/courses' }
    ];
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }

  public getItemTitle(itemId: number | undefined) {
    let title = '';
    if (itemId) {
      this.dataService.getItemById(itemId).subscribe(course => {
        title = course.title || "";
        this.addBreadCrumb(title);
      });
    }
  }

  public addBreadCrumb(label: string) {
    if (label) {
      this.items = [...this.items, { label: label }];
    }
  }

  public clearItems() {
    this.items = [
      { label: 'Курсы', routerLink: '/courses' }
    ];
  }
}