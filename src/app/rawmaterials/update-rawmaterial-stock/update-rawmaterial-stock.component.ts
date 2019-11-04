import { Component, OnInit } from '@angular/core';
import { UpdateRawmaterialStockService } from './update-rawmaterial-stock.service';
import { DataExchangeService } from '../../data-exchange.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-rawmaterial-stock',
  templateUrl: './update-rawmaterial-stock.component.html',
  styleUrls: ['./update-rawmaterial-stock.component.css']
})
export class UpdateRawmaterialStockComponent implements OnInit {

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


  constructor(private data: DataExchangeService, private route: Router, private updateRMStockService: UpdateRawmaterialStockService) { }

  ngOnInit() {
    this.data.currentLogInStatus.subscribe(loggedIn => this.loggedIn = (loggedIn == 'true'));
    if(!this.loggedIn)
      this.route.navigate([""]);
  }

  setRawMaterialStock() {
    this.isProcessing = true;
    this.updateRMStockService.updateRMStock(this.orderId, this.manufacturingDate, this.expiryDate, this.qaStatus)
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
