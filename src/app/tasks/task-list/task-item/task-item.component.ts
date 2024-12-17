import { Component, input } from '@angular/core';
import { Task } from '../../task.model';
import { TaskService } from '../../tasks.service';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  constructor(private taskService: TaskService) {}

  task = input.required<Task>();

  onClick(id: number) {
    this.taskService.taskClear(id.toString());
  }
}
