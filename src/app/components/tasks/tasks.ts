import { Component, computed, inject, input, signal } from '@angular/core';
import { Task } from "./task/task";
import { NewUserTask, UserTask } from './task/task.model';
import { NewTask } from "./new-task/new-task";
import { TasksService } from './task-service';
import { Header } from "../header/header";
import { User } from "../user/user";
import { UserTasks } from "./user-tasks/user-tasks";

@Component({
  selector: 'app-tasks',
  imports: [Header, UserTasks],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {

  userId = input.required<string>();
  userName = input.required<string>();

  private taskService = inject(TasksService);

  getUserTasks() {
    return this.taskService.getUserTasks(this.userId());
  } 


}
