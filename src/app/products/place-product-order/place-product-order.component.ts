import { Component, OnInit } from '@angular/core';
import { PlaceProductOrderService } from './place-product-order.service';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-place-product-order',
  templateUrl: './place-product-order.component.html',
  styleUrls: ['./place-product-order.component.css'],
  providers: []
})
export class PlaceProductOrderComponent implements OnInit {

  productOrders = [];//'juice', 'mocktail', 'energy_drink'];
  distributorIds = ['DIST1', 'DIST2', 'DIST3', 'DIST4'];
  warehouseIds = ['w01', 'w02', 'w03', 'w04', 'w05', 'w06'];
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

  log(x) {
    console.log(x);
  }

}