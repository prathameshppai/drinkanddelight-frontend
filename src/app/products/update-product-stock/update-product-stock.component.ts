import { Component, OnInit } from '@angular/core';
import { UpdateProductStockService } from './update-product-stock.service';

@Component({
  selector: 'app-update-product-stock',
  templateUrl: './update-product-stock.component.html',
  styleUrls: ['./update-product-stock.component.css']
})
export class UpdateProductStockComponent implements OnInit {

  orderId: number = 0;
  manufacturingDate: Date = null;
  expiryDate: Date = null;
  qaStatus: string; 
  enableButton: boolean = false;
   isDataSet: boolean = false;
   message: string = null;

  constructor(private updateProductStockService: UpdateProductStockService) { }

  ngOnInit() {
  }

  setProductStock() {
    this.updateProductStockService.updateProductStock(this.orderId, this.manufacturingDate, this.expiryDate, this.qaStatus)
    .subscribe(
      data => {
        console.log("Response : "+JSON.stringify(data));
        this.message = data["message"];
        this.isDataSet = true;
        
        
      },
      error => {
        console.log("Error :"+JSON.stringify(error));
      }
    );

  }

  log(x) {
    console.log(x);
    this.enableButton = false;
    if(this.manufacturingDate != null && this.orderId != null && this.expiryDate != null && this.qaStatus != null) {
      if(!isNaN(this.orderId)) {
        this.enableButton = true;
      }
    }
  }
  
  }


