import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
// home slider and content way point from custom.js
declare const contentWayPoint : any;

@Component({
  selector: 'app-audio-sermons',
  templateUrl: './audio-sermons.component.html',
  styleUrls: ['./audio-sermons.component.scss']
})
export class AudioSermonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(() => {
      contentWayPoint();
    });
  }

}
