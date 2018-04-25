import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory.component';

const ROUTES: Routes = [
  {
    path: '',
    component: InventoryComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class InventoryRoutingModule { }
