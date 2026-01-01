import { Component, computed, effect, inject, input, Signal, signal } from '@angular/core';
import { TasksService } from '../task-service';
import { UserService } from '../user/user-service'; 
import { UserType } from '../user/user.model'; 
import { NewTask } from "../new-task/new-task";
import { Task } from "../task/task";

@Component({
  selector: 'app-user-tasks',
  imports: [NewTask, Task],
  templateUrl: './user-tasks.html',
  styleUrl: './user-tasks.css',
})
export class UserTasks {

  userId = input.required<string>();
  userName = input.required<string>();

  // dependency injection
  private taskService = inject(TasksService);

  // internal variables
  addTask: boolean = false;
  
  onNewTaskClicked() {    
    this.addTask = true;
  }

  onNewTaskClosed() {
    this.addTask = false;
  }
  
  getUserTasks() {
    return this.taskService.getUserTasks(this.userId());
  }

}
