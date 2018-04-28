import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory.component';
import { InventoryRoutingModule } from './inventory-routing.module';

@NgModule({
  imports: [
    CommonModule,
    InventoryRoutingModule,
  ],
  declarations: [InventoryComponent]
})
export class InventoryModule { }
