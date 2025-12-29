import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewUserTask, UserTask } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [ FormsModule ],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {

  newTaskCanceled = output<void>();

  title = signal('');
  summary = signal('');
  dueDate = signal('');

  newTask = output<NewUserTask>();

  onSaveNewTask() {
    const task = {
      title: this.title(),
      summary: this.summary(),
      dueDate: this.dueDate()
    };
    this.newTask.emit(task);
  }

  onCancelNewTask() {
    this.newTaskCanceled.emit();
  }
}
