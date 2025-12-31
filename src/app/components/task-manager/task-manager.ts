import { Component } from '@angular/core';
import { TaskManagerHeader } from "./task-manager-header/task-manager-header";
import { TaskManagerUsers } from "./task-manager-users/task-manager-users";
import { TaskManagerTasks } from "./task-manager-tasks/task-manager-tasks";

@Component({
  selector: 'app-task-manager',
  imports: [TaskManagerHeader, TaskManagerUsers, TaskManagerTasks],
  templateUrl: './task-manager.html',
  styleUrl: './task-manager.css',
})
export class TaskManager {

}
