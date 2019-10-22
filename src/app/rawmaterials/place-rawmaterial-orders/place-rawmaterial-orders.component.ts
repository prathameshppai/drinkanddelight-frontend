import { Component, OnInit } from '@angular/core';
import { PlaceRawmaterialOrdersService } from './place-rawmaterial-orders.service';
import { DataExchangeService } from '../../data-exchange.service';
import { Router } from '@angular/router';

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
  isProcessing: boolean = false;
  loggedIn: boolean;

  constructor(private data: DataExchangeService, private placeRawmaterialOrdersService: PlaceRawmaterialOrdersService, private route: Router) { }

  ngOnInit() {
    this.data.currentLogInStatus.subscribe(loggedIn => this.loggedIn = (loggedIn == 'true'));
    if(!this.loggedIn)
      this.route.navigate([""]);
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

}
