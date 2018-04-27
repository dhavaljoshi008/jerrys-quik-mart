import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { CartItemListModule } from '../cart-item-list/cart-item-list.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    CartItemListModule,
    MDBBootstrapModule.forRoot()
  ],
  declarations: [CheckoutComponent]
})
export class CheckoutModule { }
