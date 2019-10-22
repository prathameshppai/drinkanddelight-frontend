import { Component, OnInit } from '@angular/core';
import { UpdateProductOrderService } from './update-product-order.service';
 
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

 constructor(private updateProductOrderService: UpdateProductOrderService) {
}
ngOnInit() {
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
