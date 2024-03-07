import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface Task {
  id: number;
  text: string;
  done: boolean;
}

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
