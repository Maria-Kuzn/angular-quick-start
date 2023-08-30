import { Injectable } from '@angular/core';
import { Course } from '../domain/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses: Course[] = [
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
    },
    {
      id: 5, 
      title: "Название курса 5",
      creationDate: new Date(2023, 7, 27),
      duration: 610,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      topRated: true
    }
  ];

  constructor() { }

  public getList() {
    return this.courses;
  }

  public createCourse(course: Course) {
    this.courses.push(course);
  }

  public getItemById(id: number) {
    return this.courses.find((item) => item.id === id);
  }

  public updateItem(course: Course) {
    const existingCourseId = this.courses.findIndex((item) => item.id === course.id);
    if (existingCourseId) {
      this.courses[existingCourseId] = course;
    }
  }

  public removeItem(id: number | string) {
    const existingCourseId = this.courses.findIndex((item) => item.id.toString() === id.toString());
    if (existingCourseId !== undefined) {
      this.courses.splice(existingCourseId, 1);
    }
  }
}
