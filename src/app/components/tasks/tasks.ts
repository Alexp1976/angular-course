import { Component, computed, inject, input, signal } from '@angular/core';
import { Task } from "./task/task";
import { NewUserTask, UserTask } from './task/task.model';
import { NewTask } from "./new-task/new-task";
import { TasksService } from './task-service';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {

  userId = input.required<string>();
  userName = input.required<string>();
  
  addTask: boolean = false;

  private taskService = inject(TasksService);
  
  onNewTaskClicked() {    
    this.addTask = true;
  }

  onNewTaskClosed() {
    this.addTask = false;
  }

  onNewTaskSubmited(task: NewUserTask) {
    this.taskService.addTask(task, this.userId());
    this.addTask = false;
  }

  getUserTasks() {
    return this.taskService.getUserTasks(this.userId());
  } 


}
