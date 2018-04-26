import { Component, OnInit, OnDestroy } from '@angular/core';
import { Item } from '../inventory/item';
import { Subscription } from 'rxjs/Subscription';
import { CartService } from './cart.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  cartMap: Map<string, Item> = new Map();

  private subscription: Subscription;

  constructor(private cartService: CartService) {
   }

  ngOnInit() {
    this.getCartItems();
  }

  getCartItems() {
    this.subscription = this.cartService.cartSubject
    .subscribe(cartMap => this.cartMap = cartMap);
  }

  getCartMapKeys() {
      return Array.from(this.cartMap.keys());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
