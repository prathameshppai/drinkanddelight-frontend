import { Component, OnInit } from '@angular/core';
import { UpdateRawmaterialOrderService } from './update-rawmaterial-order.service';
 
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

  constructor(private updateRawMaterialOrderService: UpdateRawmaterialOrderService) {
  }
  ngOnInit() {
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