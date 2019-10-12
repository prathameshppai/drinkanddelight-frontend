import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-rawmaterial-orders',
  templateUrl: './place-rawmaterial-orders.component.html',
  styleUrls: ['./place-rawmaterial-orders.component.css']
})
export class PlaceRawmaterialOrdersComponent implements OnInit {
  rmOrders = ['additives', 'sugar', 'preservatives'];
  supplierIds = ['SUP1','SUP2','SUP3','SUP4','SUP5','SUP6','SUP7'];
  warehouseIds = ['w01','w02','w03','w04','w05','w06'];
  constructor() { }

  ngOnInit() {
  }

}
