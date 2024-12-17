import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');

  constructor(private tasksService: TaskService) {}

  onSubmit(article: string, word: string, description: string) {
    if (word.length === 0 || description.length === 0) {
      throw new Error('Empty field!');
    }
    this.tasksService.addTask({ article, word, description });
    this.formEl()?.nativeElement.reset();
  }
}
