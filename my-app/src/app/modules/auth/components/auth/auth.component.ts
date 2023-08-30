import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  public email: string = "";
  public password: string = "";

  @Output() loginEvent = new EventEmitter<string>();

  public validateFields() {
    return this.email && this.password;
  }

  login() {
    this.loginEvent.emit(this.email);
  }
}
