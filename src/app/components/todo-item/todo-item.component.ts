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
  @Input() categoryName!: string;

  @Output() toggleDone = new EventEmitter<Task>();
  @Output() remove = new EventEmitter<string>();

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryName = this.categoryService.getCategoryName(
      this.task.category
    );
  }

  toggleDoneTask() {
    this.toggleDone.emit(this.task);
    console.log(this.categoryName);
  }

  removeTask() {
    this.remove.emit(this.task.id);
  }
}
