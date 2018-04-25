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

  constructor(private inventoryService: InventoryService) {

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
