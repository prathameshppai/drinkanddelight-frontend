import { Component, OnInit } from '@angular/core';
import { PlaceProductOrderService } from './place-product-order.service';

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
  ProductNameVar: string;
  DISTIDVar: string;
  warehouseIdVar: string;
  QuantityUnitVar: string;
  expectedDateofDeliveryVar: Date;
  isPlaceProductOrderFetched: boolean = false;
  minDate = new Date();
  today = new Date();
  maxDate = this.today.setMonth(this.today.getMonth()+2);

  constructor(private placeProductOrderService: PlaceProductOrderService) {
  }

  ngOnInit() {
    this.getProductDetails();
    
  }
  // '[0-9]+[.]{1}'
  // '/^(?=.+)(?:[1-9]\d*|0)?(?:\.\d+)?$/'

  getMessage() {

    this.placeProductOrderService.getPlaceProductOrderMessage(this.ProductNameVar, this.DISTIDVar, this.quantityVar, this.QuantityUnitVar, this.expectedDateofDeliveryVar, this.pricePerUnitVar, this.warehouseIdVar)
      .subscribe(
        data => {
          console.log("Response : " + JSON.stringify(data));
          this.message = data["message"];
          this.isPlaceProductOrderFetched = true;
        },
        error => {
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