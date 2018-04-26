import { Injectable } from '@angular/core';
import { Item } from '../inventory/item';
import {Subject} from 'rxjs/Subject';


@Injectable()
export class CartService {

  cartSubject = new Subject<Map<string, Item>>();
  cartMap: Map<string, Item> = new Map();
 
  constructor() {

  }

  private addToCartMap(item: Item) {
    if(this.cartMap.has(item.id)) {
      let cartItem = this.cartMap.get(item.id);
      cartItem.quantity += 1; // Increment quantity of existing item in cart by 1.
      this.cartMap.set(item.id, cartItem);
    }
    else {
      item.quantity = 1; // Set initial quantity to 1. 
      this.cartMap.set(item.id, item);
    }
  }
  addToCart(item: Item) {
    this.addToCartMap(item);
    this.cartSubject.next(this.cartMap);
  }
}
