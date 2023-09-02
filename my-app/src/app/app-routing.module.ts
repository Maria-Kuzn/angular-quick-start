import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/components/auth/auth.component';
import { NotFoundComponent } from './modules/core/components/not-found/not-found.component';
import { CourseItemModifyComponent } from './modules/courses/components/course-item-modify/course-item-modify.component';
import { CoursesListComponent } from './modules/courses/components/courses-list/courses-list.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/courses' },
  { path: '**', component: NotFoundComponent },
  { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
