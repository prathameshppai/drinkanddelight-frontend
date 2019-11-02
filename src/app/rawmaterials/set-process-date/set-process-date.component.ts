import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SetProcessDateService } from './set-process-date.service';
import { DataExchangeService } from '../../data-exchange.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-process-date',
  templateUrl: './set-process-date.component.html',
  styleUrls: ['./set-process-date.component.css']
})
export class SetProcessDateComponent implements OnInit {
  

  orderId: number = 0;
   processDate: Date = null;
   enableButton: boolean = false;
   isDataSet: boolean = false;
   message: string = null;
   loggedIn: boolean;
   today = new Date();
   minDate = this.today.setFullYear(this.today.getFullYear() - 5);
 
 maxDate = this.today.setFullYear(this.today.getFullYear() + 20);
 isProcessing: boolean = false;
  hasErrorOccured: boolean = false;
  errorMessage: string = '';
  
  
  constructor(private data: DataExchangeService, private route: Router, private processDateService: SetProcessDateService) { }

  ngOnInit() {
    this.data.currentLogInStatus.subscribe(loggedIn => this.loggedIn = (loggedIn == 'true'));
    if(!this.loggedIn)
      this.route.navigate([""]);
    
  }

  setProcessDate() {

    this.isProcessing = true;
    this.processDateService.setProcessDateinStock(this.orderId, this.processDate)
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
        this.isDataSet = false;
      }
    );

  }

  log(x) {
    console.log(x);
    this.enableButton = false;
    if(this.processDate != null && this.orderId != null) {
      if(!isNaN(this.orderId)) {
        this.enableButton = true;
      }
    }
  }

}
