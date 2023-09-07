import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  public isAuthentificated = false;
  constructor(private authService: AuthService) {
    this.isAuthentificated = Boolean(this.authService.isAuthenticated());
  }
}