import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course, NewCourse } from '../domain/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses: Course[] = [];

  private readonly coursesUrl = 'http://localhost:3000/videocourses';
  public page = 0;
  public limit = 5;
  constructor(private readonly httpClient: HttpClient) { }

  public getCoursesList(searchValue?: string): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.coursesUrl + '?_page=' + this.page + '&_limit=' + this.limit)
  }

  public loadMoreCourses() {
    this.limit += this.limit;
    return this.getCoursesList();
  }

  public createCourse(course: NewCourse) {
    this.httpClient.post<NewCourse>(this.coursesUrl, course);
  }

  public getItemById(id: number) {
    return this.httpClient.get<Course>(`${this.coursesUrl}/${id}`);
  }

  public updateItem(course: Course) {
    const existingCourseId = this.courses.findIndex((item) => item.id === course.id);
    if (existingCourseId) {
      this.courses[existingCourseId] = Object.assign(this.courses[existingCourseId], course);
    }
  }

  public removeItem(id: number | string) {
    this.httpClient.delete<{}>(`${this.coursesUrl}/${id}`);
  }

  public searchCourses() {
    const courses = this.getCoursesList();
    return
  }
}
