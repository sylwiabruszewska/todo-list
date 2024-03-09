import { Component } from '@angular/core';

import { Task } from '../todo-item/todo-item.component';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  tasks: Task[] = [];
  newTaskText = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.tasks = this.dataService.getTasks();
  }

  addTask() {
    if (this.newTaskText.trim() === '') {
      return;
    }

    const newTask: Task = {
      id: this.tasks.length + 1,
      text: this.newTaskText,
      done: false,
    };

    this.tasks.push(newTask);
    this.newTaskText = '';
  }

  toggleDoneTask(task: Task) {
    task.done = !task.done;
  }

  removeTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
