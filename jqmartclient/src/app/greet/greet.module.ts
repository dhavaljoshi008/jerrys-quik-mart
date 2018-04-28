import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetComponent } from './greet.component';
import { GreetRoutingModule } from './/greet-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GreetRoutingModule
  ],
  declarations: [GreetComponent]
})
export class GreetModule { }
