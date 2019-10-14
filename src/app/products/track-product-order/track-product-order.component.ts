import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-product-order',
  templateUrl: './track-product-order.component.html',
  styleUrls: ['./track-product-order.component.css']
})
export class TrackProductOrderComponent implements OnInit {

  orderId: number = 0;

  constructor() { }

  ngOnInit() {
  }

  log(x) {
    console.log(x);
  }

}
