import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/domain/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{

  public coursesList: Course[] = [];
  public searchValue: string = "";

  ngOnChanges(): void {
    console.log('ngOnChanges');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.coursesList = [
      {
        id: 1, 
        title: "Название курса 1",
        creationDate: new Date(),
        duration: 123,
        description: "Описание курса короткое"
      },
      {
        id: 2, 
        title: "Название курса 2",
        creationDate: new Date(),
        duration: 3,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer justo nisi, imperdiet ac ligula ac, placerat interdum nulla. Pellentesque et metus sit amet risus luctus molestie a vel orci. Integer mollis accumsan purus in venenatis."
      },
      {
        id: 3, 
        title: "Название курса 3",
        creationDate: new Date(),
        duration: 12300
      },
      {
        id: 4, 
        title: "Название курса 4",
        creationDate: new Date(),
        duration: 60,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      }
    ]
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  public loadMore() {
    console.log("Load more")
  }

  public search() {
    console.log("Search", this.searchValue);
  }

  public editCourse(courseInfo: string) {
    console.log('edit', courseInfo);
  }

  public deleteCourse(courseId: string) {
    console.log('delete', courseId);
  }
}
