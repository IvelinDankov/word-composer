import { Injectable, signal } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks = signal<Task[]>([]);
  allTasks = this.tasks.asReadonly();

  id = 0;

  getAll() {
    const data = localStorage.getItem('tasks');
    const parsedData = data ? JSON.parse(data) : null;
    return parsedData;
  }

  addTask(taskData: { article: string; word: string; description: string }) {
    const newTask: Task = {
      ...taskData,
      id: (this.id += 1),
    };
    this.tasks.update((oldTask) => [...oldTask, newTask]);

    localStorage.setItem('tasks', JSON.stringify(this.tasks()));
  }

  taskClear(id: string): void {
    // const data = localStorage.getItem('tasks');
  }
}
