import { Component } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { DataService } from 'src/app/services/data.service';
import { CategoryService } from 'src/app/services/categories.service';
import { Category } from 'src/app/models/category.model';

import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent {
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

  private refreshTasks() {
    this.tasks = this.dataService.getTasks();
  }

  addTask() {
    if (this.newTaskText.trim() === '') {
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
}
