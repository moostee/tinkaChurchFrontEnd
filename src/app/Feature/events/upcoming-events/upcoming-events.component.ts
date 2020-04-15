import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
// home slider and content way point from custom.js
declare const contentWayPoint : any;
declare const dateCountDown : any;

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.scss']
})
export class UpcomingEventsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      contentWayPoint();
      dateCountDown();
    });
  }

}
