import { Injectable, signal } from '@angular/core';
import { UserType } from './user.model';
import { DUMMY_USERS } from '../../../shared/mocks/dummy-users'; 

@Injectable({
  providedIn: 'root',
})
export class UserService {
  
  private users = signal<UserType[]>(DUMMY_USERS);
  private selectedUser = signal<UserType | undefined>(undefined);

  getUsers() {
    return this.users();
  }

  getSelectedUser() {
    return this.selectedUser;
  }
  
  setSelectedUser(selectedUser: UserType) {
    this.selectedUser.set(selectedUser);
  }
}
