import { Injectable, signal } from "@angular/core";
import { NewUserTask, UserTask } from "./task/task.model";
import { NewTask } from "./new-task/new-task";

@Injectable({
    providedIn: 'root'
})
export class TasksService {

    private dummyTasks = signal<UserTask[]>([
        {
          id: 't1',
          userId: 'u1',
          title: 'Master Angular',
          summary:
            'Learn all the basic and advanced features of Angular & how to apply them.',
          dueDate: '2025-12-31',
        },
        {
          id: 't2',
          userId: 'u3',
          title: 'Build first prototype',
          summary: 'Build a first prototype of the online shop website',
          dueDate: '2024-05-31',
        },
        {
          id: 't3',
          userId: 'u3',
          title: 'Prepare issue template',
          summary:
            'Prepare and describe an issue template which will help with project management',
          dueDate: '2024-06-15',
        },
    ]);

    constructor() {
      const task = localStorage.getItem('tasks');
      if (task) {
        this.dummyTasks.set(JSON.parse(task));
      }
    }

    getUserTasks(userId: string) {
        return this.dummyTasks().filter((task) => task.userId === userId);
    }

    addTask(taskData: NewUserTask, userId: string) {
        const newId = 't' + (this.dummyTasks().length + 1);
        this.dummyTasks.update((tasks) => [
            ...tasks,
            {
                id: newId,
                userId: userId,
                title: taskData.title,
                summary: taskData.summary,
                dueDate: taskData.dueDate,
            }
        ]);
        this.saveTaksToStorage();
    }

    removeTask(taskId: string) {
        this.dummyTasks.set(this.dummyTasks().filter((task) => task.id !== taskId));
        this.saveTaksToStorage();
    }

    private saveTaksToStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.dummyTasks()));
    }
}