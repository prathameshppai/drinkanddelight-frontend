import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-product-order',
  templateUrl: './place-product-order.component.html',
  styleUrls: ['./place-product-order.component.css']
})
export class PlaceProductOrderComponent implements OnInit {

  productOrders = ['juice', 'mocktail', 'energy_drink'];
  distributorIds = ['DIST1','DIST2','DIST3','DIST4'];
  warehouseIds = ['w01','w02','w03','w04','w05','w06'];

  constructor() { }

  ngOnInit() {
  }

}
