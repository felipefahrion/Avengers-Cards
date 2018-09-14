import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit {
  availableMenus: {name: string, hash: string}[] = [
    {
      'name': 'About',
      'hash': '#about'
    },
    {
      'name': 'Search',
      'hash': '#search'
    },
    {
      'name': 'Search Results',
      'hash': '#results'
    },
  ];
  constructor() {
    
   }

  ngOnInit() {
      this.availableMenus;
  }

  

}
