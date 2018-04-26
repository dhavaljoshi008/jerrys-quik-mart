import { Component, OnInit } from '@angular/core';
import { Item } from '../inventory/item';
import { CartService } from '../cart/cart.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'cart-item-list',
  templateUrl: './cart-item-list.component.html',
  styleUrls: ['./cart-item-list.component.scss']
})
export class CartItemListComponent implements OnInit {

  cartMap: Map<string, Item> = new Map();

  colHeadings: string[];

  emptyCartText: string;

  private subscription: Subscription;

  constructor(private cartService: CartService) {
    this.colHeadings = ['Item', 'Regular Price', 'Member Price', 'Quantity', 'Tax Status'];
    this.emptyCartText = 'Empty'
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

  addToCart(item: Item) {
    this.cartService.addToCart({id: item.id, name: item.name, quantity: 1, memberPrice: item.memberPrice, regularPrice: item.regularPrice, taxStatus: item.taxStatus}); // Create a new item object and add it to cart.
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
