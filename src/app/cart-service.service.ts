import { Injectable } from '@angular/core';
import { Meal } from "./meals";
import { Cart } from "./cart";


@Injectable({
  providedIn: 'root'
})

export class CartService {

  cart = {
    meals: [],
    discount: 0,
    price_sum: 0,
  };

  addToCart(meal: Meal): void {
    this.cart.meals.push(meal);
  }

  removeFromCart(meal: Meal): void {
    let m = this.cart.meals.filter(x => x.id === meal.id);
    const index = this.cart.meals.indexOf(m[0]); 
    this.cart.meals.splice(index, 1);
  }

  countMeals(): number {
    return this.cart.meals.length;
  }

  constructor() { }
}
