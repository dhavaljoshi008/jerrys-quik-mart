import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewcartComponent } from './viewcart.component';

const ROUTES: Routes = [
  {
    path: '',
    component: ViewcartComponent
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  declarations: []
})
export class ViewcartRoutingModule { }
