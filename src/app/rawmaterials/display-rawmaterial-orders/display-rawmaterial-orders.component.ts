import { Component, OnInit } from '@angular/core';
import {DisplayRawmaterialOrdersService} from '../display-rawmaterial-orders/display-rawmaterial-orders.service';
import { RawMaterialOrder } from './RawMaterialOrderdto';



@Component({
  selector: 'app-display-rawmaterial-orders',
  templateUrl: './display-rawmaterial-orders.component.html',
  styleUrls: ['./display-rawmaterial-orders.component.css']
})
  export class DisplayRawmaterialOrdersComponent implements OnInit {
  
    ngOnInit() {
    }

    public showdate = true;
    todayFormat = '';
    date1Var : Date = null;
    date2Var : Date = null;
    SupplierIDVar :string = null;
    DeliveryStatusVar :string  =null;
    message=null;
   public rmos  =[];
    isDataFetched = false;


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
  constructor(private rawMaterialService: DisplayRawmaterialOrdersService) { }

    getRawMaterial() {

      this.rawMaterialService.getRawMaterialList(this.DeliveryStatusVar, this.SupplierIDVar,this.date1Var, this.date2Var)
      .subscribe(
        data => {
        this.rmos = data;
        console.log("Response : "+JSON.stringify(this.rmos));
        this.isDataFetched = true;
         
       
        },
        error => {
          console.log("Error :"+JSON.stringify(error));
        }
      )
    }
    
    }
  