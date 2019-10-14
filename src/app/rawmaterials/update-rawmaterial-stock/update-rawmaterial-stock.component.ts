import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-rawmaterial-stock',
  templateUrl: './update-rawmaterial-stock.component.html',
  styleUrls: ['./update-rawmaterial-stock.component.css']
})
export class UpdateRawmaterialStockComponent implements OnInit {

  orderId: number = 0;
  manufacturingDate: Date = null;
  expiryDate: Date = null;
  qaStauts: string;


  constructor() { }

  ngOnInit() {
  }

  log(x) {
    console.log(x);
  }

}
