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

  ngOnInit(): void {
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
        duration: 123,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer justo nisi, imperdiet ac ligula ac, placerat interdum nulla. Pellentesque et metus sit amet risus luctus molestie a vel orci. Integer mollis accumsan purus in venenatis."
      },
      {
        id: 3, 
        title: "Название курса 3",
        creationDate: new Date(),
        duration: 123
      },
      {
        id: 4, 
        title: "Название курса 4",
        creationDate: new Date(),
        duration: 123,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      }
    ]
  }

  public loadMore() {
    console.log("Load more")
  }

  public search() {
    console.log("Search", this.searchValue);
  }
}
