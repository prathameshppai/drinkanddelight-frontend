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
  enableButton: boolean = false;
  isProcessing: boolean = false;
  hasErrorOccured: boolean = false;
  errorMessage: string = '';
  
  constructor(private trackProductOrderService: TrackProductOrderService) { }

  ngOnInit() {
    }

  getMessage() {
    this.isProcessing = true;
    this.trackProductOrderService.getTrackedMessage(this.orderId)
    .subscribe(
      data => {
        this.isProcessing = false;
        console.log("Response : "+JSON.stringify(data));
        this.message = data["message"];
        this.isTrackFetched = true;
      },
      error => {
        this.isProcessing = false;
        this.errorMessage = "Server failed to respond";
        this.hasErrorOccured = true;
        console.log("Error :"+JSON.stringify(error));
      }
    );

  }

  log(x) {
    console.log(x);
    this.enableButton = false;
    if(this.orderId != null) {
      if(!isNaN(this.orderId)) {
        this.enableButton = true;
      }
    }
  }

  
}
