import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TaskaddComponent } from './taskadd/taskadd.component';
import { TaskCompletedComponent } from './task-completed/task-completed.component';

@NgModule({
  declarations: [AppComponent, TaskComponent, TaskaddComponent, TaskCompletedComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
