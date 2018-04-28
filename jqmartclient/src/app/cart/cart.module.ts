import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartItemListModule } from '../cart-item-list/cart-item-list.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    CartItemListModule,
    MDBBootstrapModule.forRoot(),
    RouterModule
  ],
  exports: [CartComponent],
  declarations: [CartComponent]
})
export class CartModule { }
