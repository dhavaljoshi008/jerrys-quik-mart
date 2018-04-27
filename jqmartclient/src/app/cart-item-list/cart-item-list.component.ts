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

  emptyCartBtnText: string;

  checkoutBtnText: string;

  private subscription: Subscription;

  constructor(private cartService: CartService) {
    this.colHeadings = ['Item', 'Regular Price', 'Member Price', 'Quantity', 'Tax Status'];
    this.emptyCartBtnText = 'Empty Cart';
    this.checkoutBtnText = 'Proceed To Checkout';
  }

  ngOnInit() {
    this.getCartItems();
  }

  getCartItems() {
    this.subscription = this.cartService.cartItems
    .subscribe(cartMap => this.cartMap = cartMap);
  }

  getCartMapKeys() {
      return Array.from(this.cartMap.keys());
  }

  addToCart(item: Item) {
    this.cartService.addToCart({id: item.id, name: item.name, quantity: 1, memberPrice: item.memberPrice, regularPrice: item.regularPrice, taxStatus: item.taxStatus}); // Create a new item object and add it to cart.
  }

  removeFromCart(itemId: string) {
    this.cartService.removeFromCart(itemId);
  }

  emptyCart() {
    this.cartService.emptyCart();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
