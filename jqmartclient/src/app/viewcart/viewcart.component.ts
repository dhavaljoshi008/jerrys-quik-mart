import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.scss']
})
export class ViewcartComponent implements OnInit {

  checkoutBtnText:string;

  constructor() { 
    this.checkoutBtnText = 'Proceed To Checkout';
  }

  ngOnInit() {
  }

}
