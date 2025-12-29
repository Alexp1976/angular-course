import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../task-service';

@Component({
  selector: 'app-new-task',
  imports: [ FormsModule ],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {

  newTaskClose = output<void>();

  userId = input.required<string>();
  title = signal('');
  summary = signal('');
  dueDate = signal('');  

  private taskService = inject(TasksService);

  onSaveNewTask() {
    
    const task = {
      title: this.title(),
      summary: this.summary(),
      dueDate: this.dueDate()
    };
    this.taskService.addTask(task, this.userId());
    this.newTaskClose.emit();    
  }

  onCancelNewTask() {
    this.newTaskClose.emit();
  }
}
