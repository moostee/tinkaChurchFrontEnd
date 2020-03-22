import { Component, OnInit } from '@angular/core';
declare const loader : any; // loader is in the custom.js file
import * as $ from 'jquery';


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      loader();
    });
  }

}
