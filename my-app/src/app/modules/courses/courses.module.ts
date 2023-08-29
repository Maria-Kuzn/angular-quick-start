import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseItemComponent } from './components/course-item/course-item.component';

import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from 'primeng/button';
import { FormsModule } from "@angular/forms";
import {CardModule} from 'primeng/card';
import { HighlightDirective } from './directives/highlight.directive';
import { CourseDurationPipe } from './pipes/course-duration.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

@NgModule({
  declarations: [CoursesComponent, CourseItemComponent, HighlightDirective, CourseDurationPipe, OrderByPipe, FilterPipePipe],
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
