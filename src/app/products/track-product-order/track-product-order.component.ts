import { Component, OnInit } from '@angular/core';
import { TrackProductOrderService } from './track-product-order.service';

@Component({
  selector: 'app-track-product-order',
  templateUrl: './track-product-order.component.html',
  styleUrls: ['./track-product-order.component.css']
})
export class TrackProductOrderComponent implements OnInit {
  

  orderId: number = 0;
  message: string = '';
  constructor(private trackProductOrder: TrackProductOrderService) { }

  ngOnInit() {
    // this.trackProductOrder.getTrackedMessage().subscribe(
    //   data => {
    //     console.log("Response : "+JSON.stringify(data));
    //     this.message = data;
    //   },
    //   error => {
    //     console.log("Error :"+JSON.stringify(error));
    //   }
    // );

    this.trackProductOrder.getTrackedMessage()
    .subscribe(
      data => {
        console.log("Response : "+JSON.stringify(data));
        this.message = data["message"];
      },
      error => {
        console.log("Error :"+JSON.stringify(error));
      }
    );

  }

  log(x) {
    console.log(x);
  }

  
}
