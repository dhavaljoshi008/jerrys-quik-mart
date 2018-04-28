import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.scss']
})
export class GreetComponent implements OnInit {

  greetText: string;

  continueBtnText: string;

  downloadText: string;

  constructor() {
    this.greetText = 'Thank You!';
    this.downloadText = 'Please check downloads for transaction file';
    this.continueBtnText = 'Continue Shopping';
   }

  ngOnInit() {
  }

}
