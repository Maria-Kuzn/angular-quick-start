import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Observable, map } from 'rxjs';
import { Course } from 'src/app/domain/course';
import { CoursesService } from 'src/app/services/courses.service';
import { CoursesRoutingModule } from '../../courses-routing.module';
import { FilterPipePipe } from '../../pipes/filter-pipe.pipe';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit{

  public coursesList$: Observable<Course[]> = this.coursesService.getCoursesList();
  public searchValue: string = "";
  // public coursesListFiltered: any[] = [];
  public visible: boolean = false;

  constructor(
    private readonly coursesService: CoursesService, 
    private readonly confirmationService: ConfirmationService,
    private readonly router: Router
    ) {

  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.updateCoursesList();
  }

  public loadMore() {
    console.log("Load more");
    this.coursesList$ = this.coursesService.loadMoreCourses();
  }

  public updateCoursesList() {
    this.coursesList$ = this.coursesService.getCoursesList(this.searchValue);
  }

  public addCourse() {
    this.router.navigate(['/courses/new'])
  }

  public editCourse(courseInfo: Course) {
    console.log('edit', courseInfo);
    const courseInfoObject = courseInfo;
    this.router.navigate(['courses/' + courseInfoObject.id])
  }

  public onClickDeleteCourse(courseId: number) {
    this.confirmationService.confirm({
      accept: () => {
        this.deleteCourse(courseId);
      },
      reject: () => {
        this.hideDeleteCourseDialog();
      }
    });
  }

  public deleteCourse(courseId: number) {
    this.coursesService.removeItem(courseId).subscribe(data => this.updateCoursesList());
  }

  public hideDeleteCourseDialog(){
    this.visible = false;
  }

  public resetFilters() {
    this.searchValue = "";
    this.updateCoursesList();
  }
}
