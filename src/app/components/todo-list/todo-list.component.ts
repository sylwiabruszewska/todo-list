import { Component } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  tasks: Task[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.refreshTasks();
  }

  private refreshTasks() {
    this.tasks = this.dataService.getTasks();
  }

  toggleDoneTask(task: Task) {
    this.dataService.toggleDoneTask(task);
    this.refreshTasks();
  }

  removeTask(id: string) {
    this.dataService.removeTask(id);
    this.refreshTasks();
  }
}
