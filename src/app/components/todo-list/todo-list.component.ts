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
    this.refreshTasks();
  }

  private refreshTasks() {
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

    this.dataService.addTask(newTask);
    this.refreshTasks();
    this.newTaskText = '';
  }

  toggleDoneTask(task: Task) {
    this.dataService.toggleDoneTask(task);
    this.refreshTasks();
  }

  removeTask(id: number) {
    this.dataService.removeTask(id);
    this.refreshTasks();
  }
}
