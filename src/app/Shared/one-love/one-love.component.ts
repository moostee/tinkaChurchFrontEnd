import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
// home slider and content way point from custom.js
declare const homeSlider : any;
declare const contentWayPoint : any;

@Component({
  selector: 'app-one-love',
  templateUrl: './one-love.component.html',
  styleUrls: ['./one-love.component.scss']
})
export class OneLoveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(()=>{
      contentWayPoint();
    });
  }

}
