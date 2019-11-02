import { Component, OnInit } from '@angular/core';
import { SetExitDateService } from './set-exit-date.service';
import { DataExchangeService } from '../../data-exchange.service';
import { Router } from '@angular/router';

// import $ from "jquery";
//import * as $ from 'jquery';
declare var $: any

@Component({
  selector: 'app-set-exit-date',
  templateUrl: './set-exit-date.component.html',
  styleUrls: ['./set-exit-date.component.css']
})
export class SetExitDateComponent implements OnInit {
  
  orderId: number = 0;
  exitDate: Date = null;
  isDataSet: boolean = false;
  message: string = null;
  //formBuilder: FormBuilder;
  //dateType = typeof(this.exitDate);
  enableButton: boolean = false;
  loggedIn: boolean;
  today = new Date();
   minDate = this.today.setFullYear(this.today.getFullYear() - 5);
 
 maxDate = this.today.setFullYear(this.today.getFullYear() + 20);
 isProcessing: boolean = false;
 hasErrorOccured: boolean = false;
 errorMessage: string = '';

  constructor(private data: DataExchangeService, private route: Router, private exitDateService: SetExitDateService) {
  }

 


  
  ngOnInit() {
    this.data.currentLogInStatus.subscribe(loggedIn => this.loggedIn = (loggedIn == 'true'));
    if(!this.loggedIn)
      this.route.navigate([""]);
    
  }

  

  setExitDate() {
    this.isProcessing = true;
    this.exitDateService.setExitDateinStock(this.orderId, this.exitDate)
    .subscribe(
      data => {
        this.isProcessing = false;
        console.log("Response : "+JSON.stringify(data));
        this.message = data["message"];
        this.isDataSet = true;
        this.hasErrorOccured = false;
        
        
      },
      error => {
        this.isProcessing = false;
        this.errorMessage = "Server failed to respond";
        this.hasErrorOccured = true;
        console.log("Error :"+JSON.stringify(error));
        this.isDataSet = true;
      }
    );

  }

  
  

  log(x) {
    // var matchNum = '[0-9]+';
    console.log(x);
    this.enableButton = false;
    if(this.exitDate != null && this.orderId != null) {
      if(!isNaN(this.orderId)) {
        this.enableButton = true;
      }
    }
  }

}
