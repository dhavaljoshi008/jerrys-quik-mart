import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Item } from '../inventory/item';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy {

  pricingDropdown: string;

  optionText: string;

  titleText: string;

  memberPriceEnabled: boolean;

  cartMap: Map<string, Item> = new Map();

  colHeadings: string[];

  checkoutBtnText: string;



  itemColTitle: string;
  priceColTitle: string;
  quantityColTitle: string;
  taxColTitle: string;

  subTotal: [number, number];
  subTotalText: string;  

  tax: [number, number];
  taxText: string;

  total: [number, number];
  totalText: string;

  savingsAmount: number;
  savingsText: string;

  private subscription: Subscription;

  private childSubscription1: Subscription;

  private childSubscription2: Subscription;

  private childSubscription3: Subscription;

  private taxPercent: number;


  constructor(private cartService: CartService) {
    this.titleText = 'Order Summary'
    this.pricingDropdown = 'Regular Order';
    this.optionText = 'Member Order';
    this.memberPriceEnabled = false;
    this.itemColTitle = 'Item'
    this.priceColTitle = this.memberPriceEnabled ? 'Member Price' : 'Regular Price';
    this.quantityColTitle = 'Quantity';
    this.taxColTitle = 'Tax Status';
    this.colHeadings = ['Item', this.priceColTitle, 'Quantity', 'Tax Status'];
    this.subTotalText = 'Sub Total';
    this.subTotal = [0, 0];
    this.taxPercent = 6.5;
    this.tax = [0, 0];
    this.taxText = `Tax (${this.taxPercent}%)`;
    this.total = [0, 0];
    this.totalText = 'Order Total';
    this.savingsAmount = 0;
    this.savingsText = 'You Saved';
  }

  ngOnInit() {
    this.getCartItems();
    this.getSubTotal();
    this.getTax();
    this.getTotal();
  }

  applyOptionPrice() {
    let tempText = this.pricingDropdown;
    this.pricingDropdown = this.optionText;
    this.optionText = tempText;
    this.memberPriceEnabled = !this.memberPriceEnabled;
    this.priceColTitle = this.memberPriceEnabled ? 'Member Price' : 'Regular Price';
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

  getTax() {
    this.childSubscription2 = this.cartService.cartTax
    .subscribe(tax => this.tax = tax);
    this.subscription.add(this.childSubscription2);
  }

  getTotal() {
    this.childSubscription3 = this.cartService.cartTotal
    .subscribe(total => {
      this.total = total;
      this.savingsAmount = this.total[1] - this.total[0];
    });
  }

  getCartMapKeys() {
      return Array.from(this.cartMap.keys());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
