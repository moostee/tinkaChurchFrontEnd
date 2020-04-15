import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
// home slider and content way point from custom.js
declare const contentWayPoint : any;

@Component({
  selector: 'app-latest-event',
  templateUrl: './latest-event.component.html',
  styleUrls: ['./latest-event.component.scss']
})
export class LatestEventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      contentWayPoint();
    })
  }

}
