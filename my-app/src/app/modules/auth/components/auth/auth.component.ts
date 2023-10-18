import { Component, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/domain/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  public email: string = "";
  public password: string = "";

  @Output() loginEvent = new EventEmitter<User>();

  public get validateFields() {
    return this.email && this.password;
  }

  login() {
    const user: User = {
      email: this.email,
      password: this.password
    }
    this.loginEvent.emit(user);
  }
}
