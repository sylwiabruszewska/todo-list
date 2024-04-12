import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { CategoryService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input() task!: Task;
  @Output() toggleDone = new EventEmitter<Task>();
  @Output() remove = new EventEmitter<string>();

  constructor(private categoryService: CategoryService) {}

  toggleDoneTask() {
    this.toggleDone.emit(this.task);
  }

  removeTask() {
    this.remove.emit(this.task.id);
  }

  getCategoryName(categoryId: number): string {
    return this.categoryService.getCategoryName(categoryId);
  }
}
