import { Component, OnInit } from '@angular/core';
import {DisplayRawmaterialOrdersService} from '../display-rawmaterial-orders/display-rawmaterial-orders.service';
import { DataExchangeService } from '../../data-exchange.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-rawmaterial-orders',
  templateUrl: './display-rawmaterial-orders.component.html',
  styleUrls: ['./display-rawmaterial-orders.component.css']
})
  export class DisplayRawmaterialOrdersComponent implements OnInit {
  
    ngOnInit() {
      this.data.currentLogInStatus.subscribe(loggedIn => this.loggedIn = (loggedIn == 'true'));
    if(!this.loggedIn)
      this.route.navigate([""]);


    }

    public showdate = true;
    todayFormat = '';
    date1Var : Date = null;
    date2Var : Date = null;
    SupplierIDVar :string = null;
    DeliveryStatusVar :string  =null;
    loggedIn: boolean;
    search :string;    
   public rmos  =[];
    isDataFetched :boolean = false;
    message : string 
    p:number =1;


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
  constructor(private data: DataExchangeService, private rawMaterialService: DisplayRawmaterialOrdersService, private route: Router) { }

    getRawMaterial() {

      this.rawMaterialService.getRawMaterialList(this.DeliveryStatusVar, this.SupplierIDVar,this.date1Var, this.date2Var)
      .subscribe(
        data => {
          if(data == null){
           this.isDataFetched =false;
           this.message='No Records Found';
          }
          else{
        this.rmos = data;
        
        console.log("Response : "+JSON.stringify(this.rmos));
        
        this.isDataFetched = true;
        
          }
       
        },
        error => {
          console.log("Error :"+JSON.stringify(error));
        }
      )
    }
    
    }
  