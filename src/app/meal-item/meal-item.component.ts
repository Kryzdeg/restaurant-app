import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core';
import { Meal } from '../meals';
import { CartService } from "../cart-service.service";

@Component({
  selector: 'app-meal-item',
  templateUrl: './meal-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class MealItemComponent implements OnInit {

  @Input() meal: Meal;

  addToCart(): void {
    this.cartService.addToCart(this.meal);
    console.log(this.cartService.countMeals());
    
  }

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

}
