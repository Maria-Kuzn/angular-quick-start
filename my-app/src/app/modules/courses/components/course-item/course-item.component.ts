import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'src/app/domain/course';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit{
  @Input() course!: Course;
  @Output() editEvent = new EventEmitter<Course>();
  @Output() deleteEvent = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {}

  public editCourse(event: any) {
    this.editEvent.emit(this.course);
  }

  public deleteCourse(event: any) {
    this.deleteEvent.emit(this.course.id);
  }
}
