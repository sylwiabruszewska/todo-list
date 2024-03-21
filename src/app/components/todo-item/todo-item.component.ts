import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input() task!: Task;
  @Output() toggleDone = new EventEmitter<Task>();
  @Output() remove = new EventEmitter<number>();

  toggleDoneTask() {
    this.toggleDone.emit(this.task);
  }

  removeTask() {
    this.remove.emit(this.task.id);
  }
}
