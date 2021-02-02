import { EventEmitter, Injectable } from '@angular/core';
import { Meal } from "./meals";
import { Cart } from "./cart";
import { NbToastrService } from '@nebular/theme';


@Injectable({
  providedIn: 'root'
})

export class CartService {

  cart: Cart = {
    meals: [],
    discount: 0,
    price_sum: 0,
  };

  emitter = new EventEmitter();

  private noToastr: number = 0;

  getCartItems(): Cart {
    return this.cart;
  }

  addToCart(meal: Meal): void {
    this.cart.meals.push(meal);
    this.cart.price_sum += meal.price/1;
    this.showToast('bottom-left', 'success', "Dodano posiłek :)");
    this.emitter.emit();
  }

  removeFromCart(meal: Meal): void {
    let m = this.cart.meals.filter(x => x.id === meal.id);
    const index = this.cart.meals.indexOf(m[0]); 
    this.cart.meals.splice(index, 1);
    this.cart.price_sum -= m[0].price;
    this.showToast('bottom-left', 'danger', "Usunięto posiłek :(");
    this.emitter.emit();
  }

  countMeals(): number {
    return this.cart.meals.length;
  }

  showToast(position, status, msg) {
    this.toastrService.show(
      '',
      msg,
      { position, status, limit: 4 });
  }

  constructor(private toastrService: NbToastrService) { }
}
