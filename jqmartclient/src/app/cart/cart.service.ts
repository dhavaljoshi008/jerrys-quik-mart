import { Injectable } from '@angular/core';
import { Item } from '../inventory/item';
import {Subject} from 'rxjs/Subject';


@Injectable()
export class CartService {

  cartSubject = new Subject<Item[]>();
  cartItems: Item[] = [];
 
  constructor() {

  }

  addToCart(item: Item) {
    this.cartItems.push(item);
    this.cartSubject.next(this.cartItems);
  }
}
