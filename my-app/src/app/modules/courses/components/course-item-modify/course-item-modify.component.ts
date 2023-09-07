import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
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

  public id: string | undefined = undefined;
  public courseData$: Observable<Course> | undefined = undefined;
  public mode: string = 'add';
  public formTitle: string = "Добавление курса";
  public duration: number = 0;
  public formData: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    creationDate: new FormControl(new Date(), Validators.required),
    duration: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    id: new FormControl('', Validators.required),
  });

  constructor (
    private readonly dataService: CoursesService, 
    private router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || ""; 
      if (!/^\d+$/.test(this.id)) {
        this.mode = 'add';
        this.formTitle = "Добавление курса";
      } else {
        this.mode = 'edit';
        this.formTitle = "Изменение курса";
      }
      this.getData();
  }

  private getData() {
    if (this.id !== undefined) {
      this.dataService.getItemById(parseInt(this.id)).subscribe(data => {
        if (data.creationDate) {
          data.creationDate = new Date(data.creationDate);
        }
        this.formData.patchValue(data);
      });
    }
    return Promise.resolve();
  }

  public save() {
    if (this.mode === 'edit') {
      this.dataService.updateItem(this.formData.value).subscribe(() => this.router.navigate(['/']));  
    } else {
      this.dataService.createCourse(this.formData.value).subscribe(() => this.router.navigate(['/']));
    }    
  }
}
