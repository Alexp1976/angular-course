import { Component, input } from '@angular/core';
import { UserTaskType } from './task-user.model';
import { Card } from "../../../../shared/card/card";

@Component({
  selector: 'app-task-manager-user',
  imports: [Card],
  templateUrl: './task-manager-user.html',
  styleUrl: './task-manager-user.css',
})
export class TaskManagerUser {

  selectedId = input<string>();
  user = input.required<UserTaskType>();

  onSelectUser(user: UserTaskType) {}
}
