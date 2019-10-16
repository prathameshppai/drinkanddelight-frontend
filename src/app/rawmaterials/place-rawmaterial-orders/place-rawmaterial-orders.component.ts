import { Component, OnInit } from '@angular/core';
import { PlaceRawmaterialOrdersService } from './place-rawmaterial-orders.service';

@Component({
  selector: 'app-place-rawmaterial-orders',
  templateUrl: './place-rawmaterial-orders.component.html',
  styleUrls: ['./place-rawmaterial-orders.component.css']
})
export class PlaceRawmaterialOrdersComponent implements OnInit {
  rmOrders = ['additives', 'sugar', 'preservatives'];
  supplierIds = ['SUP1', 'SUP2', 'SUP3', 'SUP4', 'SUP5', 'SUP6', 'SUP7'];
  warehouseIds = ['w01', 'w02', 'w03', 'w04', 'w05', 'w06'];
  quantityVar: number = 0.0;
  pricePerUnitVar: number = 0.0;
  message: string = '';
  RMNameVar: string;
  SUPIDVar: string;
  warehouseIdVar: string;
  QuantityUnitVar: string;
  expectedDateofDeliveryVar: Date;
  isPlaceRawmaterialOrderFetched: boolean = false;
  
  constructor(private placeRawmaterialOrdersService: PlaceRawmaterialOrdersService) { }

  ngOnInit() {
  }

  getMessage() {

    this.placeRawmaterialOrdersService.getPlaceRawmaterialOrderMessage(this.RMNameVar, this.SUPIDVar,this.quantityVar, this.QuantityUnitVar, this.expectedDateofDeliveryVar, this.pricePerUnitVar, this.warehouseIdVar)
    .subscribe(
      data => {
        console.log("Response : "+JSON.stringify(data));
        this.message = data["message"];
        this.isPlaceRawmaterialOrderFetched = true;
      },
      error => {
        console.log("Error :"+JSON.stringify(error));
      }
    );

  }
  log(x) {
    console.log(x);
  }

}
