import { Component, input } from '@angular/core';
import { UserTask } from '../task-model';

@Component({
  selector: 'app-task-manager-user-task',
  imports: [],
  templateUrl: './task-manager-user-task.html',
  styleUrl: './task-manager-user-task.css',
})
export class TaskManagerUserTask {

  task = input.required<UserTask>();
}
