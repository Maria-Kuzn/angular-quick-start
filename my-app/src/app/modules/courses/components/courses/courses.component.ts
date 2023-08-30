import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Course } from 'src/app/domain/course';
import { CoursesService } from 'src/app/services/courses.service';
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
    console.log("Load more")
  }

  public search() {
    this.coursesListFiltered = new FilterPipePipe().transform(this.coursesList, this.searchValue);
    console.log("Search", this.searchValue);
  }

  public updateCoursesList() {
    this.coursesList = this.coursesService.getList();
    this.search();
  }

  public editCourse(courseInfo: string) {
    console.log('edit', courseInfo);
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
    this.coursesService.removeItem(courseId);
    this.updateCoursesList();
  }

  public hideDeleteCourseDialog(){
    this.visible = false;
  }

  public addCourse() {
    this.router.navigate(['/course-edit'])
  }
}
