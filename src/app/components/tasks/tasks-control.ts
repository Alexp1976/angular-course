import { Component, computed, inject, input, signal } from '@angular/core';
import { Header } from "../header/header";
import { DUMMY_USERS } from '../../shared/mocks/dummy-users';
import { UserType } from './user/user.model';
import { User } from "./user/user";
import { UserTasks } from "./user-tasks/user-tasks";

@Component({
  selector: 'app-tasks',
  imports: [Header, User, UserTasks],
  templateUrl: './tasks-control.html',
  styleUrl: './tasks-control.css',
})
export class TasksControl {

  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }

}
