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

  toggleDoneTask() {
    this.toggleDone.emit(this.task);
  }
}
