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
    console.log('categoryId:', categoryId);

    const category = this.categories.find(
      (category) => category.id === Number(categoryId)
    );

    // console.log('categories:', this.categories);
    // console.log('category:', category);

    return category ? category.name.toLowerCase() : '';
  }
}
