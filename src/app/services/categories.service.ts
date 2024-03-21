import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private categories: Category[] = [
    {
      id: 1,
      name: 'Work',
    },
    {
      id: 2,
      name: 'Shopping',
    },
    {
      id: 3,
      name: 'Home',
    },
    {
      id: 4,
      name: 'General',
    },
    {
      id: 5,
      name: 'Hobby',
    },
  ];

  constructor() {}
}

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories: Category[] = [];

  constructor() {}

  getCategories(): Category[] {
    return this.categories;
  }
}
