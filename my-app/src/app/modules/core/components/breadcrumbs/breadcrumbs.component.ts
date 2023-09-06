import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';
import { filter } from 'rxjs/operators';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  public home: MenuItem = {};
  public items: MenuItem[] = [];

  constructor(private readonly router: Router, private readonly dataService: CoursesService) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationStart)
      )
      .subscribe(
        (event: NavigationEvent) => {
          const url = event instanceof NavigationStart && event.url;
          //если путь courses/{{some_number}} - добавляем крошку с названием курса
          if (url && /\/courses\/\d/i.test(url)) {
            const courseId = url.split('/').pop();
            courseId !== undefined && this.getItemTitle(parseInt(courseId));
          } else if (url === '/courses/new') {
            this.addBreadCrumb("Добавление нового курса");
          } else {
            this.clearItems();
          }
        }
      )
  }

  ngOnInit(): void {
    this.items = [
      { label: 'Курсы', routerLink: '/courses' }
    ];
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }

  public getItemTitle(itemId: number | undefined) {
    let title = '';
    if (itemId !== undefined) {
      // title = this.dataService.getItemById(itemId)?.title || '';
    }
    this.addBreadCrumb(title);
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