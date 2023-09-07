import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CourseItemComponent } from './components/course-item/course-item.component';

import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { BreadcrumbsComponent } from '../core/components/breadcrumbs/breadcrumbs.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';


@NgModule({
  declarations: [
    CoursesListComponent, 
    CourseItemComponent, 
    HighlightDirective, 
    CourseDurationPipe, 
    OrderByPipe, 
    FilterPipePipe, 
    CourseItemModifyComponent, 
    CourseAuthorsComponent, 
    CoursesComponent,
    BreadcrumbsComponent
  ],
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
    TagModule,
    CoursesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BreadcrumbModule
  ],
  exports: [CoursesListComponent],
  providers: [ConfirmationService]
})
export class CoursesModule { }
