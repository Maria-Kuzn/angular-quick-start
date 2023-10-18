import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/components/auth/auth.component';
import { NotFoundComponent } from './modules/core/components/not-found/not-found.component';
import { CourseItemModifyComponent } from './modules/courses/components/course-item-modify/course-item-modify.component';
import { CoursesListComponent } from './modules/courses/components/courses-list/courses-list.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'courses', loadChildren: () => import('./modules/courses/courses.module').then(m => m.CoursesModule)},
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
