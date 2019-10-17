import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-display-product-orders',
  templateUrl: './display-product-orders.component.html',
  styleUrls: ['./display-product-orders.component.css']
})
export class DisplayProductOrdersComponent implements OnInit {
  ngOnInit() {
  }
 
  public showdate = true;
  todayFormat = '';
  public changestatus() {
 
    this.showdate = !(this.showdate);
 
  }
  public SetMaxDate() {
    
    let today = new Date();
    let dd = (today.getDate());
    let mm = today.getMonth() + 1; 
    let yyyy = today.getFullYear();
    let ddFormat: string;
    let mmFormat: string;
 
    if (dd < 10) {
      ddFormat = ('0' + dd).toString();
    }
    else
      ddFormat = (dd).toString();
    if (mm < 10) {
      mmFormat = '0' + mm
    }
    else
      mmFormat = (mm).toString();
 
    this.todayFormat = yyyy + '-' + mmFormat + '-' + ddFormat;
    }

}