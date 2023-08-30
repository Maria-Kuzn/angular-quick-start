import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemModifyComponent } from './course-item-modify.component';

describe('CourseItemModifyComponent', () => {
  let component: CourseItemModifyComponent;
  let fixture: ComponentFixture<CourseItemModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseItemModifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseItemModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
