import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
// home slider and content way point from custom.js
declare const testimonySlider : any;

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.scss']
})
export class TestimonyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(()=>{
      testimonySlider();
    });
  }

}
