import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskaddComponent } from './taskadd.component';

describe('TaskaddComponent', () => {
  let component: TaskaddComponent;
  let fixture: ComponentFixture<TaskaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
