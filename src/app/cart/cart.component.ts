import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart-service.service';
import { Cart } from '../cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  cart: Cart;

  getCartItems(): void {
    this.cart = this.cartService.getCartItems();
  }

  removeFromCart(meal): void {
    this.cartService.removeFromCart(meal);
  }

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getCartItems();
  }

}
