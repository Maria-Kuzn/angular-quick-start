import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'src/app/domain/course';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit{
  @Input() course!: Course;
  @Output() editEvent = new EventEmitter<string>();
  @Output() deleteEvent = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {}

  public editCourse(event: any) {
    this.editEvent.emit(JSON.stringify(this.course));
  }

  public deleteCourse(event: any) {
    this.deleteEvent.emit(this.course.id.toString());
  }
}
