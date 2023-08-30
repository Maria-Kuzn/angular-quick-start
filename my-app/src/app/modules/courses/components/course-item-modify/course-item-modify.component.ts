import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-course-item-modify',
  templateUrl: './course-item-modify.component.html',
  styleUrls: ['./course-item-modify.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemModifyComponent {
  public title: string = "";
  public creationDate: Date = new Date();
  public duration: number = 0;
  public description?: string = "";

  public cancel() {}

  public save(){}
}
