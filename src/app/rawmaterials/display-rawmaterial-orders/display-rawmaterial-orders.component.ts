import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-rawmaterial-orders',
  templateUrl: './display-rawmaterial-orders.component.html',
  styleUrls: ['./display-rawmaterial-orders.component.css']
})
export class DisplayRawmaterialOrdersComponent implements OnInit {

  public showdate = true;
  todayFormat = '';
  date1Var = null;
  date2Var = null;
  SupplierIDVar = null;
  DeliveryStatusVar=null;

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
  public DateValidation(){

    console.log (document.getElementById('date1'));
    

    (<HTMLInputElement>document.getElementById('date1')).value; 
  }


  constructor() { }

  ngOnInit() {

    }
  }


