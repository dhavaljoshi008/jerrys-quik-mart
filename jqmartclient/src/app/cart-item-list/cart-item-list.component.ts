import { Component, OnInit, OnDestroy } from '@angular/core';
import { Item } from '../inventory/item';
import { CartService } from '../cart/cart.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'cart-item-list',
  templateUrl: './cart-item-list.component.html',
  styleUrls: ['./cart-item-list.component.scss']
})
export class CartItemListComponent implements OnInit, OnDestroy {

  cartMap: Map<string, Item> = new Map();

  colHeadings: string[];

  emptyCartBtnText: string;

  checkoutBtnText: string;

  subTotal: [number, number];
  subTotalText: string;

  totalItemsInCart: number;

  private subscription: Subscription;

  private childSubscription1: Subscription;

  constructor(private cartService: CartService) {
    this.colHeadings = ['Item', 'Member Price', 'Regular Price', 'Quantity', 'Tax Status'];
    this.emptyCartBtnText = 'Empty Cart';
    this.checkoutBtnText = 'Proceed To Checkout';
    this.subTotalText = 'Sub Total';
    this.totalItemsInCart = 0;
    this.subTotal = [0, 0];
  }

  ngOnInit() {
    this.getCartItems();
    this.getSubTotal();
  }

  getCartItems() {
    this.subscription = this.cartService.cartItems
    .subscribe(cartMap => this.cartMap = cartMap);
  }

  getSubTotal() {
    this.childSubscription1 = this.cartService.cartSubTotal
    .subscribe(subTotal => this.subTotal = subTotal);
    this.subscription.add(this.childSubscription1);
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
