import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseComponent } from './components/course/course.component';

import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from 'primeng/button';
import { FormsModule } from "@angular/forms";



@NgModule({
  declarations: [CoursesComponent, CourseComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    FormsModule
  ],
  exports: [CoursesComponent]
})
export class CoursesModule { }
