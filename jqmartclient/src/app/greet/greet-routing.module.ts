import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreetComponent } from './greet.component';

const ROUTES: Routes = [
  {
    path: '',
    component: GreetComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule],
})
export class GreetRoutingModule { }
