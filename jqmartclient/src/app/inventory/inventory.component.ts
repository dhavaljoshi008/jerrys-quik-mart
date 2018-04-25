import { Component, OnInit } from '@angular/core';
import { InventoryService } from './inventory.service';
import { InventoryItem } from './inventory-item';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  inventoryItems: InventoryItem[];
  addBtnText: string;
  memPriceText: string;
  regPriceText: string;
  qtyText: string; 
  taxText: string;

  constructor(private inventoryService: InventoryService) {
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
}
