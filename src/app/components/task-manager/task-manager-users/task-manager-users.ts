import { Component, computed, inject, input, signal } from '@angular/core';
import { TaskUsers } from './task-users-service';
import { TaskManagerUser } from "./task-manager-user/task-manager-user";
import { UserTaskType } from './task-manager-user/task-user.model';

@Component({
  selector: 'app-task-manager-users',
  imports: [TaskManagerUser],
  templateUrl: './task-manager-users.html',
  styleUrl: './task-manager-users.css',
})
export class TaskManagerUsers {

    private taskUserService = inject(TaskUsers);

    users = computed(() => this.taskUserService.getUsers());
    selectedUser = signal<UserTaskType | undefined>(undefined);

    onUserSelected(user: UserTaskType) {
        this.selectedUser.set(user);
    }
}
