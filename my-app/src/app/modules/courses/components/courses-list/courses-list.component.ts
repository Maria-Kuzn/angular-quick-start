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

  ngOnChanges(): void {
    console.log('ngOnChanges');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.updateCoursesList();
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
    console.log("Load more");
    this.coursesList$ = this.coursesService.loadMoreCourses();
  }

  public updateCoursesList() {
    this.coursesList$ = this.coursesService.getCoursesList(this.searchValue);
  }

  public editCourse(courseInfo: string) {
    console.log('edit', courseInfo);
    const courseInfoObject = JSON.parse(courseInfo);
    this.router.navigate(['courses/' + courseInfoObject.id])
  }

  public onClickDeleteCourse(courseId: string) {
    this.confirmationService.confirm({
      accept: () => {
        this.deleteCourse(courseId);
      },
      reject: () => {
        this.hideDeleteCourseDialog();
      }
    });
  }

  public deleteCourse(courseId: string) {
    this.coursesService.removeItem(courseId).subscribe(data => this.updateCoursesList());
  }

  public hideDeleteCourseDialog(){
    this.visible = false;
  }
}
