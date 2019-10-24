import { Component, OnInit } from '@angular/core';
import { TrackProductOrderService } from './track-product-order.service';
import { DataExchangeService } from '../../data-exchange.service';
import { Router } from '@angular/router';

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
  loggedIn: boolean;

  constructor(private data: DataExchangeService, private route: Router, private trackProductOrderService: TrackProductOrderService) { }

  ngOnInit() {
    this.data.currentLogInStatus.subscribe(loggedIn => this.loggedIn = (loggedIn == 'true'));
    if(!this.loggedIn)
      this.route.navigate([""]);
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
        this.hasErrorOccured = false;
      },
      error => {
        this.isProcessing = false;
        this.errorMessage = "Server failed to respond";
        this.hasErrorOccured = true;
        console.log("Error :"+JSON.stringify(error));
        this.isTrackFetched = false;
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
