import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  @Output() logoutEvent = new EventEmitter<string>();
  @Input() isAuthentificated!: boolean;

  public logout() {
    this.logoutEvent.emit();
  }
}
