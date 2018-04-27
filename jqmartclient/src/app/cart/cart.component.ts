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

  cartMap: Map<string, Item>;

  subTotal: [number, number];

  totalItemsInCart: number;

  modalTitle: string;

  modalBtnText: string;

  labelText1: string;
  labelText2: string;
  labelText3: string;
  labelText4: string;

  private subscription: Subscription;
  private childSubscription1: Subscription;
  private childSubscription2: Subscription;

  constructor(private cartService: CartService) {
    this.cartMap = new Map<string, Item>();
    this.totalItemsInCart = 0;
    this.subTotal = [0, 0];
    this.modalTitle = 'Cart';
    this.modalBtnText = 'View Cart and Checkout'
    this.labelText1 = 'Total Items';
    this.labelText2 = 'SubTotal';
    this.labelText3 = 'Member';
    this.labelText4 = 'Regular';
   }

  ngOnInit() {
    this.getCartItems();
    this.getSubTotal();
    this.getTotalItemsInCart();
  }

  getCartItems() {
    this.subscription = this.cartService.cartItems
    .subscribe(cartMap => this.cartMap = cartMap);
  }

  getCartMapKeys() {
      return Array.from(this.cartMap.keys());
  }

  getSubTotal() {
    this.childSubscription1 = this.cartService.cartSubTotal
    .subscribe(subTotal => this.subTotal = subTotal);
    this.subscription.add(this.childSubscription1);
  }

  getTotalItemsInCart() {
    this.childSubscription2 = this.cartService.totalItemsInCart
    .subscribe(totalItemsInCart => this.totalItemsInCart = totalItemsInCart);
    this.subscription.add(this.childSubscription2);
  }

  emptyCart() {
    this.cartService.emptyCart();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
