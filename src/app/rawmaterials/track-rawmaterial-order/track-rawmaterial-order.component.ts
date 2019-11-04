import { Component, OnInit } from '@angular/core';
import { TrackRawMaterialServiceService } from './track-raw-material-service.service';
import { DataExchangeService } from '../../data-exchange.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-track-rawmaterial-order',
  templateUrl: './track-rawmaterial-order.component.html',
  styleUrls: ['./track-rawmaterial-order.component.css']
})
export class TrackRawmaterialOrderComponent implements OnInit {

  orderId: number = 0;
  message: string = '';
  isTrackFetched: boolean = false;
  enableButton: boolean = false;
  isProcessing: boolean = false;
  hasErrorOccured: boolean = false;
  errorMessage: string = '';
  loggedIn: boolean;

  constructor(private data: DataExchangeService, private route: Router, private trackRMOrder: TrackRawMaterialServiceService) { }

  ngOnInit() {
    this.data.currentLogInStatus.subscribe(loggedIn => this.loggedIn = (loggedIn == 'true'));
    if(!this.loggedIn)
      this.route.navigate([""]);
  }

   getMessage() {
    this.isProcessing = true;
    this.log("clicked");
    this.trackRMOrder.getTrackedMessage(this.orderId)
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


