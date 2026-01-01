import { Component, computed, EventEmitter, inject, input, Input, output, Output, signal} from '@angular/core';
import { UserType } from './user.model';
import { Card } from '../../../shared/card/card'; 
import { UserService } from './user-service';

@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  // input
  selected = input.required<boolean>();
  user = input.required<UserType>();

  // output
  select = output<string>();

  onSelectUser(user: UserType) { 
    this.select.emit(this.user().id);
  }
}
