import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskInfo } from '../task-info';

@Component({
  selector: 'app-task-completed',
  templateUrl: './task-completed.component.html',
  styleUrls: ['./task-completed.component.css'],
})
export class TaskCompletedComponent implements OnInit {
  @Input() completedTask: TaskInfo[] = [];
  @Output() oldItemEvent = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
    console.log(this.completedTask);
  }

  removeTask(i: number) {
    this.completedTask.splice(i, 1);
  }

  addOldItem(i: number) {
    this.oldItemEvent.emit(i);
  }
}
