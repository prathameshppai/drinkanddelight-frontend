import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-rawmaterial-order',
  templateUrl: './track-rawmaterial-order.component.html',
  styleUrls: ['./track-rawmaterial-order.component.css']
})
export class TrackRawmaterialOrderComponent implements OnInit {

  orderId: number = 0;
  
  constructor() { }

  ngOnInit() {
  }

 

  log(x) {
    console.log(x);
  }

}
