import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories: Category[] = [
    {
      id: 1,
      name: 'General',
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
      name: 'Work',
    },
    {
      id: 5,
      name: 'Hobby',
    },
  ];

  constructor() {}

  getCategories(): Category[] {
    return this.categories;
  }

  getCategoryName(categoryId: number): string {
    const category = this.categories.find(
      (category) => category.id === Number(categoryId)
    );

    return category ? category.name.toLowerCase() : '';
  }
}
