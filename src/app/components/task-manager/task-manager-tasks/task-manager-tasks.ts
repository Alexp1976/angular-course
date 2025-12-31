import { Component, inject, signal } from '@angular/core';
import { UserTaskType } from '../task-manager-users/task-manager-user/task-user.model';
import { TaskManagerService } from './task-manager-service';
import { TaskManagerUserTask } from "./task-manager-user-task/task-manager-user-task";

@Component({
  selector: 'app-task-manager-tasks',
  imports: [TaskManagerUserTask],
  templateUrl: './task-manager-tasks.html',
  styleUrl: './task-manager-tasks.css',
})
export class TaskManagerTasks {

  selectedUser = signal<UserTaskType | undefined>(undefined);

  private taskManagerService = inject(TaskManagerService)

  onNewTaskClicked() {    

  }

  getUserTasks() {
    return this.taskManagerService.getUserTasks(this.selectedUser()?.id || '') || [];
  }
}
