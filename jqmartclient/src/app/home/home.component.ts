import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  appTitle: string;
  shopBtnText: string;

  constructor() { 
    this.appTitle = 'Jerry\'s Quik Mart';
    this.shopBtnText = 'Start Shopping!'
  }

  ngOnInit() {
  }

}
