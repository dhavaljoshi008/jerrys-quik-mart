import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { CheckoutComponent } from './checkout.component';

const ROUTES: Routes = [
  {
    path: '',
    component: CheckoutComponent
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
