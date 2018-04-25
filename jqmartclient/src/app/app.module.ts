import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { AppRoutingModule } from './/app-routing.module';
import { InventoryService } from './inventory/inventory.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
