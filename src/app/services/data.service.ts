import { Injectable } from '@angular/core';
export interface Task {
  id: number;
  text: string;
  done: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private tasks: Task[] = [
    { id: 1, text: 'Task 1', done: false },
    { id: 2, text: 'Task 2', done: true },
    { id: 3, text: 'Task 3', done: false },
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
    this.tasks.push(newTask);
    this.saveTasksToLocalStorage();
  }

  toggleDoneTask(task: Task) {
    task.done = !task.done;
    this.saveTasksToLocalStorage();
  }

  removeTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasksToLocalStorage();
  }
}
