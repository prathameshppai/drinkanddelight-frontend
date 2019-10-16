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
  isTrackFetched: boolean = false;
  constructor(private trackProductOrderService: TrackProductOrderService) { }

  ngOnInit() {
    }

  getMessage() {

    this.trackProductOrderService.getTrackedMessage(this.orderId)
    .subscribe(
      data => {
        console.log("Response : "+JSON.stringify(data));
        this.message = data["message"];
        this.isTrackFetched = true;
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
