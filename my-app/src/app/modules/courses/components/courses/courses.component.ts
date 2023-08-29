import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/domain/course';
import { FilterPipePipe } from '../../pipes/filter-pipe.pipe';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{

  public coursesList: Course[] = [];
  public searchValue: string = "";
  public coursesListFiltered: any[] = [];

  ngOnChanges(): void {
    console.log('ngOnChanges');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.coursesList = [
      {
        id: 1, 
        title: "Название курса 1",
        creationDate: new Date(2023, 7, 20),
        duration: 123,
        description: "Свежий курс",
        topRated: true
      },
      {
        id: 2, 
        title: "Название курса 2",
        creationDate: new Date(2020, 1, 20),
        duration: 3,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer justo nisi, imperdiet ac ligula ac, placerat interdum nulla. Pellentesque et metus sit amet risus luctus molestie a vel orci. Integer mollis accumsan purus in venenatis.",
        topRated: true
      },
      {
        id: 3, 
        title: "Название курса 3",
        creationDate:  new Date(2023, 11, 20),
        duration: 12300, 
        description: "Будущий курс",
        topRated: false
      },
      {
        id: 4, 
        title: "Название курса 4",
        creationDate: new Date(2023, 7, 27),
        duration: 60,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        topRated: false
      }
    ];
    this.coursesListFiltered = this.coursesList.slice();
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
    this.coursesListFiltered = new FilterPipePipe().transform(this.coursesList, this.searchValue);
    console.log("Search", this.searchValue);
  }

  public editCourse(courseInfo: string) {
    console.log('edit', courseInfo);
  }

  public deleteCourse(courseId: string) {
    console.log('delete', courseId);
  }
}
