import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskInfo } from '../task-info';

@Component({
  selector: 'app-taskadd',
  templateUrl: './taskadd.component.html',
  styleUrls: ['./taskadd.component.css'],
})
export class TaskaddComponent implements OnInit {
  todoInfo: TaskInfo = { title: '', description: '', status: 1 };

  @Output() newTodoInfoEvent = new EventEmitter<TaskInfo>();

  constructor() {}

  ngOnInit(): void {}

  addNewTask() {
    this.newTodoInfoEvent.emit({ ...this.todoInfo });
    // this.todoInfo = { title: '', description: '', status: 1 };
  }
}
