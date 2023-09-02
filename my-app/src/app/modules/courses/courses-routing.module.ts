import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CourseItemModifyComponent } from './components/course-item-modify/course-item-modify.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthGuardService } from 'src/app/services/auth-guard.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/courses' },
  {
    path: 'courses',
    component: CoursesComponent,
    canActivate: [AuthGuardService],
    children: [
      {path: '', component: CoursesListComponent},
      {path: ':id', component: CourseItemModifyComponent},
      {path: 'new', component: CourseItemModifyComponent},
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
