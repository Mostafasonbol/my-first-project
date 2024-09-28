import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  public messageSubject = new Subject<string>();

  constructor() {
    this.loadCart();
  }

  addToCart(item: any) {
    const exists = this.cartItems.find(cartItem => cartItem.id === item.id);
    
    if (!exists) {
      this.cartItems.push(item);
      this.saveCart();
      this.messageSubject.next(`${item.title} has been added to the cart!`);
    } else {
      this.messageSubject.next(`${item.title} is already in the cart!`);
    }
  }

  getItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    this.saveCart();
    this.messageSubject.next('Cart has been cleared!');
  }

  deleteItem(itemToDelete: any) {
    this.cartItems = this.cartItems.filter(item => item !== itemToDelete);
    this.saveCart();
    this.messageSubject.next(`${itemToDelete.title} has been removed from the cart!`);
  }

  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  private loadCart() {
    const items = localStorage.getItem('cart');
    if (items) {
      this.cartItems = JSON.parse(items);
    }
  }
}



