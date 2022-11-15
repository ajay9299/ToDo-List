import { Component, EventEmitter, Output } from '@angular/core';
import { TaskInfo } from './task-info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-list';

  // In order to store newTodoInfo
  todoInfo: TaskInfo = { title: '', description: '', status: -1 };

  // In order to store all todo's
  todoList: TaskInfo[] = [];

  addNewTask(TaskInfo: TaskInfo) {
    this.todoList.push(TaskInfo);
  }

  completeTask(i: number) {
    this.todoList[i].status = 2;
  }
  inCompleteTask(i: number) {
    this.todoList[i].status = 1;
  }
}
