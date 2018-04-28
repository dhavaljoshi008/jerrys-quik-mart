import { Component, OnInit } from '@angular/core';
import { InventoryService } from './inventory.service';
import { Item } from './item';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  inventoryItems: Item[];
  addBtnText: string;
  memPriceText: string;
  regPriceText: string;
  qtyText: string; 
  taxText: string;

  constructor(private inventoryService: InventoryService, private cartService: CartService) {
    this.addBtnText = 'Add To Cart';
    this.memPriceText = 'Member';
    this.regPriceText = 'Regular';
    this.qtyText = 'Inventory';
    this.taxText = 'Tax Status';
   }

  ngOnInit() {
    this.getAllInventoryItems();
  }

  getAllInventoryItems(): void {
    this.inventoryService.getAllInventoryItems()
    .subscribe(inventoryItems => {
      this.inventoryItems = inventoryItems;
    })
  }

  addToCart(item: Item) {
    this.cartService.addToCart({id: item.id, name: item.name, quantity: 1, memberPrice: item.memberPrice, regularPrice: item.regularPrice, taxStatus: item.taxStatus}); // Create a new item object and add it to cart.
  }
}
