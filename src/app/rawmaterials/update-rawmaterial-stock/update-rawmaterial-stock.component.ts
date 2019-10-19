import { Component, OnInit } from '@angular/core';
import { UpdateRawmaterialStockService } from './update-rawmaterial-stock.service';

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

   today = new Date();
    minManufacturingDate = this.today.setFullYear(this.today.getFullYear() - 1);
    maxManufacturingDate = new Date();

    minExpiryDate = new Date();
    maxExpiryDate = this.today.setFullYear(this.today.getFullYear() + 6);



  constructor(private updateRMStockService: UpdateRawmaterialStockService) { }

  ngOnInit() {
  }

  setRawMaterialStock() {
    this.updateRMStockService.updateRMStock(this.orderId, this.manufacturingDate, this.expiryDate, this.qaStatus)
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
