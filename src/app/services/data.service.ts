import { Injectable } from '@angular/core';

import { Task } from '../components/todo-item/todo-item.component';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private tasks: Task[] = [
    { id: 1, text: 'Task 1', done: false },
    { id: 2, text: 'Task 2', done: true },
    { id: 3, text: 'Task 3', done: false },
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(newTask: Task) {
    this.tasks.push(newTask);
  }
}
