import { Component, OnInit } from '@angular/core';
import {DisplayProductOrdersService} from '../display-product-orders/display-product-orders.service';
import { DataExchangeService } from '../../data-exchange.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-product-orders',
  templateUrl: './display-product-orders.component.html',
  styleUrls: ['./display-product-orders.component.css']
})
export class DisplayProductOrdersComponent implements OnInit {
  
  ngOnInit() {
    this.data.currentLogInStatus.subscribe(loggedIn => this.loggedIn = (loggedIn == 'true'));
    if(!this.loggedIn)
      this.route.navigate([""]);
  
  }
 
  public showdate = true;
  todayFormat = '';
  date1Var : Date = null;
  date2Var : Date = null;
  DistributorIDVar :string = null;
  DeliveryStatusVar :string  =null;
  message=null;
  public pos  =[];
  isDataFetched : boolean = false;
  loggedIn: boolean;

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

constructor(private data: DataExchangeService, private route: Router, private productService : DisplayProductOrdersService) { }

    getProduct() {

      this.productService.getProductList(this.DeliveryStatusVar, this.DistributorIDVar,this.date1Var, this.date2Var)
      .subscribe(
        data => {
          if(data == null){
           this.isDataFetched =false;
           this.message='No Records Found';
          }
          else{
        this.pos = data;
        
        console.log("Response : "+JSON.stringify(this.pos));
        
        this.isDataFetched = true;
        
          }
       
        },
        error => {
          console.log("Error :"+JSON.stringify(error));
        }
        )
      }
      
}
    