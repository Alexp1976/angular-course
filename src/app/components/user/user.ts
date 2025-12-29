import { Component, computed, EventEmitter, input, Input, output, Output, signal} from '@angular/core';
import { UserType } from './user.model';
import { Card } from "../../shared/card/card";

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

  selectedUser = output<string>();  

  onSelectUser(userId: string) { 
    
    this.selectedUser.emit(userId);
  }
}
