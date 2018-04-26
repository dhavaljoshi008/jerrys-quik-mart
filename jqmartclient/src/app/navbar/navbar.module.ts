import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartModule } from '../cart/cart.module';

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    RouterModule,
    CartModule
  ],
  declarations: [ NavbarComponent ],
  exports: [ NavbarComponent ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class NavbarModule { }
