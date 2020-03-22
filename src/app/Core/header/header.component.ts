import { Component, OnInit } from '@angular/core';
declare const dropdown4 : any;
declare const navbarDropdown : any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    navbarDropdown();
    dropdown4();
  }

}
