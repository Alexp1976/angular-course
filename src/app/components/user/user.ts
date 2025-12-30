import { Component, computed, EventEmitter, inject, input, Input, output, Output, signal} from '@angular/core';
import { UserType } from './user.model';
import { Card } from "../../shared/card/card";
import { UserService } from './user-service';

@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  selectedId = input<string>();
  user = input.required<UserType>();
  imagePath = computed(() => 'assets/users/' + this.user().avatar);

  private userService = inject(UserService);

  onSelectUser(user: UserType) { 
    this.userService.setSelectedUser(user);
  }
}
