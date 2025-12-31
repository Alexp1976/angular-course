import { Injectable, signal } from '@angular/core';
import { UserTaskType } from './task-manager-user/task-user.model';
import { DUMMY_USERS } from '../../../shared/mocks/dummy-users';

@Injectable({
  providedIn: 'root',
})
export class TaskUsers {
  
  private users = signal<UserTaskType[]>(DUMMY_USERS);
  private selectedUser = signal<UserTaskType | undefined>(undefined);

  getUsers() {
    return this.users();
  }

  getSelectedUser() {
    return this.selectedUser();
  }
  
  setSelectedUser(selectedUser: UserTaskType) {
    this.selectedUser.set(selectedUser);
  }

}
