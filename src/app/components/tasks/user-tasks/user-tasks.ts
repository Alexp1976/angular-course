import { Component, computed, inject, signal } from '@angular/core';
import { User } from "../../user/user";
import { Tasks } from "../tasks";
import { DUMMY_USERS } from '../../../shared/mocks/dummy-users';
import { TasksService } from '../task-service';
import { UserService } from '../../user/user-service';
import { UserType } from '../../user/user.model';
import { NewTask } from "../new-task/new-task";
import { Task } from "../task/task";

@Component({
  selector: 'app-user-tasks',
  imports: [User, Tasks, NewTask],
  templateUrl: './user-tasks.html',
  styleUrl: './user-tasks.css',
})
export class UserTasks {

  private taskService = inject(TasksService);
  private userService = inject(UserService);

  users = computed(() => this.userService.getUsers());

  selectedUser = signal<UserType | undefined>(undefined);
  addTask: boolean = false;

  onUserSelected(user: UserType) {
    this.selectedUser.set(user);    
  }

  onNewTaskClicked() {    
    this.addTask = true;
  }

  onNewTaskClosed() {
    this.addTask = false;
  }
  
  getUserTasks() {
    return this.taskService.getUserTasks(this.selectedUser()?.id || '') || [];
  }

}
