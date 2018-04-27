import { Injectable } from '@angular/core';
import { Item } from '../inventory/item';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';



@Injectable()
export class CartService {

  cartMap: Map<string, Item> = new Map();
  cartItems = new BehaviorSubject<Map<string, Item>>(this.cartMap);


  cartSubTotal = new BehaviorSubject<[number, number]>([0, 0]); // Member Price, Regular Price.
  
  totalItemsInCart = new BehaviorSubject<number>(0);
 
  constructor() {

  }

  private addToCartMap(item: Item): void {
    if(this.cartMap.has(item.id)) {
      let cartItem = this.cartMap.get(item.id);
      cartItem.quantity += 1; // Increment quantity of existing item in the cart by 1.
      this.cartMap.set(item.id, cartItem);
    }
    else {
      item.quantity = 1; // Set initial quantity to 1. 
      this.cartMap.set(item.id, item);
    }
  }

  private calculateAndBroadCast() {
    this.calculateSubTotal();
    this.calculateTotalItemsInCart();
  }
  
  // Add item to the cart.
  addToCart(item: Item): void {
    this.addToCartMap(item);
    this.cartItems.next(this.cartMap); // Broadcast cart items.
    this.calculateAndBroadCast();
  }

  // Remove single item from cart of type specified by itemId.
  removeFromCart(itemId: string): void {
    let item = this.cartMap.get(itemId);
    if(item.quantity <= 0) {
      this.cartMap.delete(itemId); // Remove entry from cart if quantity is <= 0.
    }
    else {
      item.quantity -= 1;
    }
    this.cartItems.next(this.cartMap); // Broadcast cart items.
    this.calculateAndBroadCast();
  }

  // Calculate member and regular sub-total.
  calculateSubTotal(): void {
    let subTotal:[number, number] = [0, 0];
    this.cartMap.forEach(item => {
      subTotal[0] += item.memberPrice * item.quantity;
      subTotal[1] += item.regularPrice * item.quantity;
    });
    this.cartSubTotal.next(subTotal); // Broadcast sub-total.
  }

  // Calculate total items in the cart.
  calculateTotalItemsInCart(): void {
    let totalItems = 0;
    this.cartMap.forEach(item => {
      totalItems += item.quantity;
    });
    this.totalItemsInCart.next(totalItems); // Broadcast total items in the cart.
  }

  // Remove all the items from the cart.
  emptyCart(): void {
    this.cartMap.clear();
    this.cartItems.next(this.cartMap); // Broadcast cart items.
    this.calculateAndBroadCast();
  }
}
