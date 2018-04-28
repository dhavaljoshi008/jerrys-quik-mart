import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Item } from '../inventory/item';
import { Subscription } from 'rxjs/Subscription';
import { CheckoutService } from './checkout.service';
import { Order } from '../checkout/order'; 
import { saveAs } from 'file-saver/FileSaver';

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

  totalItemsInCart: number;

  transactionNumber: number; 

  cash: number;
  cashLabel: string;

  change: number;

  private subscription: Subscription;

  private childSubscription1: Subscription;

  private childSubscription2: Subscription;

  private childSubscription3: Subscription;

  private childSubscription4: Subscription;

  private childSubscription5: Subscription;

  private taxPercent: number;


  constructor(private cartService: CartService, private checkoutService: CheckoutService) {
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
    this.checkoutBtnText = 'Checkout And Print';
    this.totalItemsInCart = 0;
    this.transactionNumber = 1;
    this.cash = 0;
    this.cashLabel = 'Enter Cash (USD)'
    this.change = 0;
  }

  ngOnInit() {
    this.getCartItems();
    this.getTotalItemsInCart();
    this.getSubTotal();
    this.getTax();
    this.getTotal();
    this.getTransactionNumber();
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
    this.subscription.add(this.childSubscription3);
  }

  getCartMapKeys() {
      return Array.from(this.cartMap.keys());
  }

  getTotalItemsInCart() {
    this.childSubscription2 = this.cartService.totalItemsInCart
    .subscribe(totalItemsInCart => this.totalItemsInCart = totalItemsInCart);
    this.subscription.add(this.childSubscription3);
  }

  getTransactionNumber() {
    this.childSubscription4 = this.cartService.transactionNumber
    .subscribe(transactionNumber => this.transactionNumber = transactionNumber);
    this.subscription.add(this.childSubscription4);
  }

  checkoutAndPrint() {
    let order: Order[] = []
    this.cartMap.forEach(item => order.push({id: item.id, quantity: item.quantity}));
    this.checkoutService.checkoutOrder(order)
    .subscribe(success => {
      this.buildAndPrintTransaction();
      this.cartService.incrementTransactionNumber();
      this.cartService.emptyCart();
    });
  }

  buildAndPrintTransaction() {
    let orderSummary = '';
    let unitPrice = 0;
    let subTotal = (this.memberPriceEnabled ? this.subTotal[0] : this.subTotal[1]).toFixed(2);
    let tax = (this.memberPriceEnabled ? this.tax[0] : this.tax[1]).toFixed(2);
    let total = (this.memberPriceEnabled ? this.total[0] : this.total[1]).toFixed(2);
    let savings =  this.memberPriceEnabled ? this.savingsText.concat(': ').concat('$').concat(this.savingsAmount.toFixed(2)).concat('!') : '';

    // Calculate change.
    this.change = this.cash - (this.memberPriceEnabled ? this.total[0] : this.total[1]);

    let delimiter = ', '
    orderSummary = orderSummary.concat('ITEM').concat(delimiter)
    .concat('QUANTITY').concat(delimiter)
    .concat('UNIT PRICE').concat(delimiter)
    .concat('TOTAL').concat('\n');

    this.cartMap.forEach(item => orderSummary = orderSummary.concat(item.name).concat(delimiter)
    .concat(item.quantity.toString()).concat(delimiter)
    .concat('$').concat((unitPrice = this.memberPriceEnabled ? item.memberPrice : item.regularPrice).toString()).concat(delimiter)
    .concat('$').concat((item.quantity * unitPrice).toString()).concat('\n'));

    orderSummary = orderSummary.concat('\n').concat('*****************************************').concat('\n')
    .concat('TOTAL NUMBER OF ITEMS SOLD: ').concat(this.totalItemsInCart.toString());


    let date = new Date();
    let dateString = date.toLocaleDateString('en-US');
    dateString = dateString.replace(/\//g, '');

    let output = ''.concat(date.toDateString()).concat('\n')
    .concat('TRANSACTION: ').concat(this.transactionNumber.toString()).concat('\n\n')
    .concat(orderSummary.toString()).concat('\n')
    .concat('SUB-TOTAL: ').concat('$').concat(subTotal).concat('\n')
    .concat(`TAX %(${this.taxPercent})`).concat(': ').concat('$').concat(tax).concat('\n')
    .concat('TOTAL: ').concat('$').concat(total).concat('\n')
    .concat('CASH: ').concat('$').concat(this.cash.toFixed(2)).concat('\n')
    .concat('CHANGE: ').concat('$').concat(this.change.toFixed(2)).concat('\n')

    .concat('*****************************************').concat('\n')
    .concat(savings);

    let filename = 'transaction'.concat('_').concat(this.transactionNumber.toString()).concat('_').concat(dateString).concat('.txt');
    const blob = new Blob([output], { type: 'text/plain' });
    saveAs(blob, filename);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
