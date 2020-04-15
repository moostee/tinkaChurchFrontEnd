import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
// home slider and content way point from custom.js
declare const homeSlider : any;
declare const contentWayPoint : any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      homeSlider();
      contentWayPoint();
  });
  }

}
