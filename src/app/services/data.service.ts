import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private tasks: Task[] = [
    { id: '123', text: 'Task 1', done: false, category: 1 },
    { id: '243', text: 'Task 2', done: true, category: 2 },
    { id: '343', text: 'Task 3', done: false, category: 3 },
  ];

  constructor() {
    this.loadTasksFromLocalStorage();
  }

  private saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  private loadTasksFromLocalStorage() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(newTask: Task) {
    this.tasks.unshift(newTask);
    this.saveTasksToLocalStorage();
  }

  toggleDoneTask(task: Task) {
    task.done = !task.done;
    this.saveTasksToLocalStorage();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasksToLocalStorage();
  }
}
