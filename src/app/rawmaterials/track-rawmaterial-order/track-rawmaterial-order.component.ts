import { Component, OnInit } from '@angular/core';
import { TrackRawMaterialServiceService } from './track-raw-material-service.service';

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

  constructor(private trackRMOrder: TrackRawMaterialServiceService) { }

  ngOnInit() {
   }

   getMessage() {
    this.log("clicked");
    this.trackRMOrder.getTrackedMessage(this.orderId)
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
    this.enableButton = false;
    if(this.orderId != null) {
      if(!isNaN(this.orderId)) {
        this.enableButton = true;
      }
    }
  }

  }


