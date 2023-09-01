import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course, NewCourse } from 'src/app/domain/course';
import { AuthService } from 'src/app/services/auth.service';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-course-item-modify',
  templateUrl: './course-item-modify.component.html',
  styleUrls: ['./course-item-modify.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemModifyComponent implements OnInit {

  public title: string = "";
  public creationDate: Date = new Date();
  public duration: number = 0;
  public description?: string = "";
  public id: string | undefined = undefined;
  public courseData: Course | undefined = undefined;
  public mode: string = 'add';
  public formTitle: string = "Добавление курса";

  constructor (
    private readonly dataService: CoursesService, 
    private router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || ""; 
    console.log(this.id)
      if (!/^\d+$/.test(this.id)) {
        this.mode = 'add';
        this.formTitle = "Добавление курса";
      } else {
        this.mode = 'edit';
        this.formTitle = "Изменение курса";
      }
    this.mode === 'edit' && this.getData().then(() => this.parseData());
  }

  private getData() {
    if (this.id !== undefined) {
      this.courseData = this.dataService.getItemById(parseInt(this.id))
    }
    return Promise.resolve();
  }

  private parseData() {
    if (this.courseData) {
      this.title = this.courseData.title;
      this.creationDate = this.courseData.creationDate;
      this.duration = this.courseData.duration;
      this.description = this.courseData.description;
    }
  }

  public save() {
    const data: NewCourse = {
      title: this.title,
      creationDate: this.creationDate,
      duration: this.duration,
      description: this.description
    }
    if (this.id && this.mode === 'edit') {
      const dataWithId = Object.assign(data, {id: parseInt(this.id)});
      this.dataService.updateItem(dataWithId as Course);
    } else {
      this.dataService.createCourse(data);
    }
    this.router.navigate(['/']);
  }
}
