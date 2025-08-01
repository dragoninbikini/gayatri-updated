// src/app/services/cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private items: CartItem[] = [];
  private items$ = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.items$.asObservable();

  private cartCount = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCount.asObservable();

  addToCart(item: CartItem) {
    const existing = this.items.find(i => i.id === item.id);
    if (existing) {
      existing.quantity += item.quantity;
    } else {
      this.items.push({ ...item });
    }
    this.updateState();
  }

  removeFromCart(itemId: number) { 
    this.items = this.items.filter(i => i.id !== itemId);
    this.updateState();
  }

  getItems(): CartItem[] {
    return [...this.items];
  }

  getTotalQuantity(): number {
    return this.items.reduce((sum, i) => sum + i.quantity, 0);
  }

  private updateState() {
    this.items$.next([...this.items]);
    this.cartCount.next(this.getTotalQuantity());
  }

  clearCart() {
    this.items = [];
    this.updateState(); // ✅ Ensures UI gets updated
  }
}
