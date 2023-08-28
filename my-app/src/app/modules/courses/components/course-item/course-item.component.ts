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

  public duration: string = "";
  public createDate: string = "";

  constructor() {
  }

  ngOnInit(): void {
    this.formatDuration();
    this.formatDate();
  }

  public formatDate() {
    let formatter = new Intl.DateTimeFormat("ru", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    
    this.createDate = formatter.format( this.course.creationDate);
  }

  public formatDuration() {
    let resultString = "";
    let duration = this.course.duration;
    let days = Math.floor(duration / (24 * 60));
    resultString += days ? days + 'дн. ' : '';
    duration -= days * 24 * 60;
    let hours = Math.floor(duration / (60));
    resultString += hours ? hours + 'ч. ' : '';
    duration -= hours * 60;
    let minutes = duration;
    resultString += minutes ? minutes + 'мин. ' : '';
    this.duration = resultString;
  }

  public editCourse(event: any) {
    this.editEvent.emit(JSON.stringify(this.course));
  }

  public deleteCourse(event: any) {
    this.deleteEvent.emit(this.course.id.toString());
  }
}
