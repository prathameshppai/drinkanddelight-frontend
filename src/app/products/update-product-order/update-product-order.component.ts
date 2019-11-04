import { Component, OnInit } from '@angular/core';
import { UpdateProductOrderService } from './update-product-order.service';
import { DataExchangeService } from '../../data-exchange.service';
import { Router } from '@angular/router';
 
@Component({
 selector: 'app-update-product-order',
 templateUrl: './update-product-order.component.html',
 styleUrls: ['./update-product-order.component.css']
})
export class UpdateProductOrderComponent implements OnInit {
 DeliveryStatuses = ['Cancelled','Dispatched','Pending','Received'];
 orderId: string = '1';
 message: string = '';
 isUpdateProductOrderFetched: boolean = false;
    DeliveryStatusVar = 'Dispatched';
    enableButton: boolean = false;
    isProcessing: boolean = false;
    hasErrorOccured: boolean = false;
    errorMessage: string = '';
    loggedIn: boolean;

 constructor(private data: DataExchangeService, private route: Router, private updateProductOrderService: UpdateProductOrderService) {
}
ngOnInit() {
  this.data.currentLogInStatus.subscribe(loggedIn => this.loggedIn = (loggedIn == 'true'));
    if(!this.loggedIn)
      this.route.navigate([""]);
}
getMessage() {

  this.updateProductOrderService.getUpdateMessage(this.orderId,this.DeliveryStatusVar)
  .subscribe(
    data => {
      console.log("Response : "+JSON.stringify(data));
      this.message = data["message"];
      this.isUpdateProductOrderFetched = true;
    },
      error => {
          
              this.isProcessing = false;
              this.errorMessage = "Server failed to respond";
              this.hasErrorOccured = true;
              console.log("Error :" + JSON.stringify(error));
 
    }
  );

    }
   
}
