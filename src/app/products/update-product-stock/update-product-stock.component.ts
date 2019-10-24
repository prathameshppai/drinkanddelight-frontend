import { Component, OnInit } from '@angular/core';
import { UpdateProductStockService } from './update-product-stock.service';
import { DataExchangeService } from '../../data-exchange.service';
import { Router } from '@angular/router';

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
   loggedIn: boolean;

   today = new Date();
    minManufacturingDate = this.today.setFullYear(this.today.getFullYear() - 1);
    maxManufacturingDate = new Date();

    minExpiryDate = new Date();
    maxExpiryDate = this.today.setFullYear(this.today.getFullYear() + 6);

    isProcessing: boolean = false;
  hasErrorOccured: boolean = false;
  errorMessage: string = '';

  constructor(private data: DataExchangeService, private route: Router, private updateProductStockService: UpdateProductStockService) { }

  ngOnInit() {
    this.data.currentLogInStatus.subscribe(loggedIn => this.loggedIn = (loggedIn == 'true'));
    if(!this.loggedIn)
      this.route.navigate([""]);
  }

  setProductStock() {
    this.isProcessing = true;
    this.updateProductStockService.updateProductStock(this.orderId, this.manufacturingDate, this.expiryDate, this.qaStatus)
    .subscribe(
      data => {
        this.isProcessing = false;
        console.log("Response : "+JSON.stringify(data));
        this.message = data["message"];
        this.isDataSet = true;
        this.hasErrorOccured = false;
        
        
      },
      error => {
        this.isProcessing = false;
        this.errorMessage = "Server failed to respond";
        this.hasErrorOccured = true;
        console.log("Error :"+JSON.stringify(error));
        this.isDataSet = false;
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


