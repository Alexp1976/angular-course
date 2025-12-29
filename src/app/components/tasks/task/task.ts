import { Component, input, output } from '@angular/core';
import { UserTask } from './task.model';
import { Card } from "../../../shared/card/card";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {

  task = input.required<UserTask>();
  taskCompleted = output<string>();
  
  onCompleteTask() {
    this.taskCompleted.emit(this.task().id);
  }
}
