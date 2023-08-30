import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  public isAuthentificated: boolean = false;
  constructor(private readonly authService: AuthService) {
    this.updateAuth();
  }

  public login(value: string) {
    this.authService.login(value);
    this.updateAuth();
    console.log('Выполнен вход в систему');
  }

  public logout(value: string) {
    this.authService.logout();
    this.updateAuth();
  }

  public updateAuth() {
    this.isAuthentificated = this.authService.isAuthenticated();
  }
}
