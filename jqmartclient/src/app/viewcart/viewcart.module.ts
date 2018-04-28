import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewcartComponent } from './viewcart.component';
import { ViewcartRoutingModule } from './/viewcart-routing.module';
import { CartItemListModule } from '../cart-item-list/cart-item-list.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ViewcartRoutingModule,
    CartItemListModule,
    RouterModule
  ],
  declarations: [ViewcartComponent]
})
export class ViewcartModule { }
