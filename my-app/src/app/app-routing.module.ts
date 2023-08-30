import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/components/auth/auth.component';
import { CourseItemModifyComponent } from './modules/courses/components/course-item-modify/course-item-modify.component';
import { CoursesComponent } from './modules/courses/components/courses/courses.component';

const routes: Routes = [
  { path: '', component: CoursesComponent },
  { path: 'course-edit', component: CourseItemModifyComponent },
  { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
