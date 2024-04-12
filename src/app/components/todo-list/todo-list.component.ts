import { Component } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { DataService } from 'src/app/services/data.service';
import { CategoryService } from 'src/app/services/categories.service';
import { Category } from 'src/app/models/category.model';

import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  tasks: Task[] = [];
  newTaskText = '';
  categories: Category[] = [];
  newTaskCategory?: number;

  constructor(
    private dataService: DataService,
    private categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.refreshTasks();
    this.categories = this.categoryService.getCategories();
  }

  onCategoryChange() {
    console.log('Wybrano kategorię:', this.newTaskCategory);
  }

  private refreshTasks() {
    this.tasks = this.dataService.getTasks();
  }

  addTask() {
    if (this.newTaskText.trim() === '') {
      return;
    }

    if (!this.newTaskCategory) {
      console.error('Nie wybrano kategorii');
      return;
    }

    const selectedCategory = this.categories.filter(
      (cat) => cat.id === this.newTaskCategory
    );

    if (!selectedCategory) {
      console.error('Wybrana kategoria nie istnieje');
      return;
    }

    const newTask: Task = {
      id: uuidv4(),
      text: this.newTaskText,
      done: false,
      category: this.newTaskCategory || 1,
    };

    this.dataService.addTask(newTask);

    this.newTaskText = '';
    this.newTaskCategory = 1;
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
