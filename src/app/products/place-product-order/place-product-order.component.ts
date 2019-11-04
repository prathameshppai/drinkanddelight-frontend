import { Component, OnInit } from '@angular/core';
import { PlaceProductOrderService } from './place-product-order.service';
import { DataExchangeService } from '../../data-exchange.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-product-order',
  templateUrl: './place-product-order.component.html',
  styleUrls: ['./place-product-order.component.css'],
  providers: []
})
export class PlaceProductOrderComponent implements OnInit {

  productDetails: any = [];
  quantityVar: number = 0.0;
  pricePerUnitVar: number = 0.0;
  message: string = '';
  ProductNameVar: string = "JUICE";
  DISTIDVar: string = "d001";
  warehouseIdVar: string = "w01";
  QuantityUnitVar: string;
  expectedDateofDeliveryVar: Date;
  isPlaceProductOrderFetched: boolean = false;
  minDate = new Date();
  today = new Date();
  maxDate = this.today.setMonth(this.today.getMonth()+2);
  isProcessing: boolean = false;
  loggedIn: boolean;

  constructor(private data: DataExchangeService, private placeProductOrderService: PlaceProductOrderService, private route: Router) {
  }

  ngOnInit() {
    this.data.currentLogInStatus.subscribe(loggedIn => this.loggedIn = (loggedIn == 'true'));
    if(!this.loggedIn)
      this.route.navigate([""]);
    this.getProductDetails();
  }

  getMessage() {
    this.isProcessing = true;
    this.placeProductOrderService.getPlaceProductOrderMessage(this.ProductNameVar, this.DISTIDVar, this.quantityVar, this.QuantityUnitVar, this.expectedDateofDeliveryVar, this.pricePerUnitVar, this.warehouseIdVar)
      .subscribe(
        data => {
          this.isProcessing = false;
          console.log("Response : " + JSON.stringify(data));
          this.message = data["message"];
          this.isPlaceProductOrderFetched = true;
        },
        error => {
          this.isProcessing = false;
          console.log("Error :" + JSON.stringify(error));
        }
      );
  }

  getProductDetails() {

    this.placeProductOrderService.getProductDetailsList()
      .subscribe(
        data => {
          console.log("Response : " + JSON.stringify(data));
          this.productDetails = data;
        },
        error => {
          console.log("Error :" + JSON.stringify(error));
        }
      );
  }
}