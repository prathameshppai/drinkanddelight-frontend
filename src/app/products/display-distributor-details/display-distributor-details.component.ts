import { Component, OnInit } from '@angular/core';
import { DisplayDistributorDetailsService } from './display-distributor-details.service';
import { DataExchangeService } from '../../data-exchange.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-distributor-details',
  templateUrl: './display-distributor-details.component.html',
  styleUrls: ['./display-distributor-details.component.css']
})
export class DisplayDistributorDetailsComponent implements OnInit {
 
  DistributorID: string = '';
  loggedIn: boolean;
  isDisplayDistributorDetailsFetched: boolean = false;
  constructor(private data: DataExchangeService, private route: Router, private displaydistributordetails: DisplayDistributorDetailsService) { }


  ngOnInit() {
    this.data.currentLogInStatus.subscribe(loggedIn => this.loggedIn = (loggedIn == 'true'));
    if(!this.loggedIn)
      this.route.navigate([""]);
  }
  
  public ddiss :any =[];
    isDataFetched :boolean = false;
    message : string 
    addressId : string



  getMessage(){

    this.displaydistributordetails.getDisplaySupplierDetailsMessage(this.DistributorID,this.addressId)
    .subscribe(
      data => {
        if(data == null){
         this.isDataFetched =false;
         this.message='No Records Found';
        }
        else{
      this.ddiss = data;
      console.log("Response : "+JSON.stringify(this.ddiss));
      this.isDataFetched = true;
      
        }
     
      },
      error => {
        console.log("Error :"+JSON.stringify(error));
      }
    )
}

  

}
