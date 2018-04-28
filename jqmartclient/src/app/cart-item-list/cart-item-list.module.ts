import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemListComponent } from './cart-item-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CartItemListComponent],
  declarations: [CartItemListComponent]
})
export class CartItemListModule { }
