import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-no-data',
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.scss']
})
export class NoDataComponent {
  @Output()
  resetFilters = new EventEmitter();

  public clickReset() {
    this.resetFilters.emit();
  }
}
