import { Component, OnInit } from '@angular/core';
import { TrackRawMaterialServiceService } from './track-raw-material-service.service';

@Component({
  selector: 'app-track-rawmaterial-order',
  templateUrl: './track-rawmaterial-order.component.html',
  styleUrls: ['./track-rawmaterial-order.component.css']
})
export class TrackRawmaterialOrderComponent implements OnInit {

  orderId: number = 0;
  
  message: String = '';
  constructor(private trackRMOrder: TrackRawMaterialServiceService) { }

  ngOnInit() {
    this.trackRMOrder.getTrackedMessage().subscribe(data => this.message = data)

  }

 

  log(x) {
    console.log(x);
  }

}
