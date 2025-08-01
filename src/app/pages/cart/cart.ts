import { Component } from '@angular/core';
import { CartService, CartItem } from '../../shared/cart-service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-cart-button',
  templateUrl: './cart.html',
  styleUrls: ['./cart.scss'],
  imports: [CommonModule, RouterLink]
})
export class Cart {
  dropdownOpen = false;
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {
    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
    });
  }

  get cartCount(): number {
    return this.cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }

  toggleCart() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  removeItem(item: CartItem) {
    this.cartService.removeFromCart(item.id);
  }
  removeAll() {
    this.cartService.clearCart();
    this.cartItems = [];
  }
  getTotal(): number {
    return this.cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }
}
