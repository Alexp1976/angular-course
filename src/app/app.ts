import { Component, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { User } from "./components/user/user";
import { DUMMY_USERS } from './components/user/dummy-users';
import { Tasks } from "./components/tasks/tasks";

@Component({
  selector: 'app-root',
  imports: [Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  users = DUMMY_USERS;
  selectedUser?: { id: string; name: string };

  onUserSelected(userId: string) {
    const user = this.users.find(u => u.id === userId);
    this.selectedUser = user ? user : undefined;
  }
}
