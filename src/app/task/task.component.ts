import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskInfo } from '../task-info';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() myTodoList!: TaskInfo[];

  addedTask: TaskInfo[] = [];

  @Output() doneEventEmitter = new EventEmitter<number>();

  constructor() {}
  ngOnInit(): void {
    
  }

  doneTaskCaller(i: number) {
    this.doneEventEmitter.emit(i);
  }
}
