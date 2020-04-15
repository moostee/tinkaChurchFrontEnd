import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
// home slider and content way point from custom.js
declare const homeSlider : any;
declare const contentWayPoint : any;


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      homeSlider();
      contentWayPoint();
  });
  }

}
