import { Component, OnInit } from '@angular/core';
import { DisplaySupplierDetailsService } from './display-supplier-details.service';
import { DataExchangeService } from '../../data-exchange.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-supplier-details',
  templateUrl: './display-supplier-details.component.html',
  styleUrls: ['./display-supplier-details.component.css']
})
export class DisplaySupplierDetailsComponent implements OnInit {

  SupplierID: string = '';
  loggedIn: boolean;

  constructor(private data: DataExchangeService, private route: Router, private displaysupplierdetails: DisplaySupplierDetailsService) { }

  ngOnInit() {
    this.data.currentLogInStatus.subscribe(loggedIn => this.loggedIn = (loggedIn == 'true'));
    if(!this.loggedIn)
      this.route.navigate([""]);
  
  }

  public dsups :any =[];
    isDataFetched :boolean = false;
    message : string 



  getMessage(){

    this.displaysupplierdetails.getDisplaySupplierDetailsMessage(this.SupplierID)
    .subscribe(
      data => {
        if(data == null){
         this.isDataFetched =false;
         this.message='No Records Found';
        }
        else{
      this.dsups = data;
      
      console.log("Response : "+JSON.stringify(this.dsups));
      
      this.isDataFetched = true;
      
        }
     
      },
      error => {
        console.log("Error :"+JSON.stringify(error));
      }
    )
}

  

}
