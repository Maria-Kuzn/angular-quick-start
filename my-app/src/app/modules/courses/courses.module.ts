import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseItemComponent } from './components/course-item/course-item.component';

import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from 'primeng/button';
import { FormsModule } from "@angular/forms";
import { CardModule } from 'primeng/card';
import { HighlightDirective } from './directives/highlight.directive';
import { CourseDurationPipe } from './pipes/course-duration.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourseItemModifyComponent } from './components/course-item-modify/course-item-modify.component';

import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { CourseAuthorsComponent } from './components/course-authors/course-authors.component';
import { TagModule } from 'primeng/tag';



@NgModule({
  declarations: [CoursesComponent, CourseItemComponent, HighlightDirective, CourseDurationPipe, OrderByPipe, FilterPipePipe, CourseItemModifyComponent, CourseAuthorsComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    CardModule,
    ConfirmDialogModule,
    BrowserModule,
    BrowserAnimationsModule,
    InputTextareaModule,
    InputNumberModule,
    CalendarModule,
    TagModule
  ],
  exports: [CoursesComponent],
  providers: [ConfirmationService]
})
export class CoursesModule { }
