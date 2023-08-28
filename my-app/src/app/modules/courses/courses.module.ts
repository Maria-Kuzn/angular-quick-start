import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseItemComponent } from './components/course-item/course-item.component';

import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from 'primeng/button';
import { FormsModule } from "@angular/forms";
import {CardModule} from 'primeng/card';
import { HighlightDirective } from './directives/highlight.directive';


@NgModule({
  declarations: [CoursesComponent, CourseItemComponent, HighlightDirective],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    CardModule
  ],
  exports: [CoursesComponent]
})
export class CoursesModule { }
