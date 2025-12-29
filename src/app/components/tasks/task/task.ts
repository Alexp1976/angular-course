import { Component, inject, input } from '@angular/core';
import { UserTask } from './task.model';
import { Card } from "../../../shared/card/card";
import { DatePipe } from '@angular/common';
import { TasksService } from '../task-service';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {

  task = input.required<UserTask>();  

  private taskService = inject(TasksService);
  
  onCompleteTask() {
    this.taskService.removeTask(this.task().id);
  }
}
