

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any[] = [];
  message: string | null = null;

  constructor(private cartService: CartService, private router: Router) {
    this.items = this.cartService.getItems();
  }

  ngOnInit() {
    this.cartService.messageSubject.subscribe(msg => {
      this.message = msg;
      setTimeout(() => this.message = null, 3000); 
    });
  }

  clearCart() {
    this.cartService.clearCart();
    this.items = [];
  }

  deleteItem(itemToDelete: any) {
    this.cartService.deleteItem(itemToDelete);
    this.items = this.cartService.getItems();
  }

  goToPurchase(item: any) {
    this.router.navigate(['/purchase'], { queryParams: { itemId: item.id } });
  }
}






