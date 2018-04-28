import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menuItems: MenuItem[];

  constructor() {
    this.menuItems = [
      { caption: 'Home', link: '/home' },
      { caption: 'Shop', link: '/shop' }
    ]
   }

  ngOnInit() {
  }

}
