import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-product-stock',
  templateUrl: './update-product-stock.component.html',
  styleUrls: ['./update-product-stock.component.css']
})
export class UpdateProductStockComponent implements OnInit {

  orderId: number = 0;
  manufacturingDate: Date = null;
  expiryDate: Date = null;
  qaStatus: string; 

  constructor() { }

  ngOnInit() {
  }

  log(x) {
    console.log(x);
  }

}
