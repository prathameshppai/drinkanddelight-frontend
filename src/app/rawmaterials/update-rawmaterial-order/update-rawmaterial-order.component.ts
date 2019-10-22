import { Component, OnInit } from '@angular/core';
import { UpdateRawmaterialOrderService } from './update-rawmaterial-order.service';
import { DataExchangeService } from '../../data-exchange.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-rawmaterial-order',
  templateUrl: './update-rawmaterial-order.component.html',
  styleUrls: ['./update-rawmaterial-order.component.css']
})
export class UpdateRawmaterialOrderComponent implements OnInit {
  orderId: string = '1';
  message: string = '';
  isUpdateRawmaterialOrderFetched: boolean = false;
  DeliveryStatuses = ['Recieved','Pending','Cancelled'];
  DeliveryStatusVar = 'Recieved';
  loggedIn: boolean;

  constructor(private data: DataExchangeService, private route: Router, private updateRawMaterialOrderService: UpdateRawmaterialOrderService) {
  }
  ngOnInit() {
    this.data.currentLogInStatus.subscribe(loggedIn => this.loggedIn = (loggedIn == 'true'));
    if(!this.loggedIn)
      this.route.navigate([""]);
  }
  getMessage() {

    this.updateRawMaterialOrderService.getUpdateMessage(this.orderId,this.DeliveryStatusVar)
    .subscribe(
      data => {
        console.log("Response : "+JSON.stringify(data));
        this.message = data["message"];
        this.isUpdateRawmaterialOrderFetched = true;
      },
      error => {
        console.log("Error :"+JSON.stringify(error));
      }
    );

  }
}