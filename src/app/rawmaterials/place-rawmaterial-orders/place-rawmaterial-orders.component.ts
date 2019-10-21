import { Component, OnInit } from '@angular/core';
import { PlaceRawmaterialOrdersService } from './place-rawmaterial-orders.service';

@Component({
  selector: 'app-place-rawmaterial-orders',
  templateUrl: './place-rawmaterial-orders.component.html',
  styleUrls: ['./place-rawmaterial-orders.component.css']
})
export class PlaceRawmaterialOrdersComponent implements OnInit {
  
  rawmaterialDetails: any = [];
  // rmOrders = ['additive', 'sugar', 'preservative'];
  // supplierIds = ['SUP1', 'SUP2', 'SUP3', 'SUP4', 'SUP5', 'SUP6', 'SUP7'];
  // warehouseIds = ['w01', 'w02', 'w03', 'w04', 'w05', 'w06'];
  quantityVar: number = 0.0;
  pricePerUnitVar: number = 0.0;
  message: string = '';
  RMNameVar: string;
  SUPIDVar: string;
  warehouseIdVar: string;
  QuantityUnitVar: string;
  expectedDateofDeliveryVar: Date;
  isPlaceRawmaterialOrderFetched: boolean = false;
  minDate = new Date();
  today = new Date();
  maxDate = this.today.setMonth(this.today.getMonth()+2);
  enableButton1: boolean = false;
  enableButton2: boolean = false;
  isProcessing: boolean = false;
  enableButton: boolean = true;
  // enableButton: boolean = this.enableButton1 && this.enableButton2;
  constructor(private placeRawmaterialOrdersService: PlaceRawmaterialOrdersService) { }

  ngOnInit() {
    this.getRawmaterialDetails();
  }

  getMessage() {
    this.isProcessing = true;
    this.placeRawmaterialOrdersService.getPlaceRawmaterialOrderMessage(this.RMNameVar, this.SUPIDVar,this.quantityVar, this.QuantityUnitVar, this.expectedDateofDeliveryVar, this.pricePerUnitVar, this.warehouseIdVar)
    .subscribe(
      data => {
        this.isProcessing = false;
        console.log("Response : "+JSON.stringify(data));
        this.message = data["message"];
        this.isPlaceRawmaterialOrderFetched = true;
      },
      error => {
        this.isProcessing = false;
        console.log("Error :"+JSON.stringify(error));
      }
    );

  }

  getRawmaterialDetails() {

    this.placeRawmaterialOrdersService.getRawmaterialDetailsList()
      .subscribe(
        data => {
          console.log("Response : " + JSON.stringify(data));
          this.rawmaterialDetails = data;
        },
        error => {
          console.log("Error :" + JSON.stringify(error));
        }
      );

  }

  log1(x) {
    console.log(x);
    this.enableButton1 = false;
    if(this.quantityVar != null)
      if(!isNaN(this.quantityVar))
            this.enableButton1 = true;
    }

  log2(x) {
    console.log(x);
    this.enableButton2 = false;
    if(this.pricePerUnitVar != null)
      if(!isNaN(this.pricePerUnitVar))
            this.enableButton2 = true;
  }
}
