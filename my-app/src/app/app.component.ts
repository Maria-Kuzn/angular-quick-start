import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  public isAuthentificated: boolean = false;
  constructor(private readonly authService: AuthService, private readonly router: Router) {
    this.updateAuth();
  }

  public login(value: string) {
    this.authService.login(value);
    this.updateAuth();
    console.log('Выполнен вход в систему');
    this.router.navigate(['/courses']);
  }

  public logout(value: string) {
    this.authService.logout();
    this.updateAuth();
    this.router.navigate(['/auth']);
  }

  public updateAuth() {
    this.isAuthentificated = this.authService.isAuthenticated();
  }
}
