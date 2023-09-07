import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Course, NewCourse } from '../domain/course';
import { FilterPipePipe } from '../modules/courses/pipes/filter-pipe.pipe';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses: Course[] = [];

  private readonly coursesUrl = 'http://localhost:3000/videocourses';
  public page = 0;
  public limit = 5;
  public searchValue: string = "";
  private filterPipe = new FilterPipePipe();
  constructor(private readonly httpClient: HttpClient) { }

  public getCoursesList(searchValue?: string): Observable<Course[]> {
    let limit = this.limit;
    if (searchValue) {
     limit = 0; 
    }
    return this.httpClient.get<Course[]>(this.coursesUrl + '?_page=' + this.page + (limit ? '&_limit=' + this.limit : '')).pipe(
      map((data: any[]) => this.filterPipe.transform(data, searchValue))
    );
  }

  public loadMoreCourses() {
    //увеличиваю лимит, чтобы список курсов увеличивался, как ожидается от кнопки Загрузить еще
    this.limit += this.limit;
    return this.getCoursesList();
  }

  public createCourse(course: NewCourse) {
    return this.httpClient.post<NewCourse>(this.coursesUrl, course);
  }

  public getItemById(id: number) {
    return this.httpClient.get<Course>(`${this.coursesUrl}/${id}`);
  }

  public updateItem(course: Course) {
    return this.httpClient.put(`${this.coursesUrl}/${course.id}`, course);
  }

  public removeItem(id: number | string) {
    return this.httpClient.delete(`${this.coursesUrl}/${id}`);
  }

  public setSearchValue(value: string) {
    this.searchValue = value;
  }
}
