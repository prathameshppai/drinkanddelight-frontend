import { Component, OnInit } from '@angular/core';
import { SetExitDateService } from './set-exit-date.service';

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
  constructor(private exitDateService: SetExitDateService) {
  }

 


  
  ngOnInit() {
    
    
  }

  

  setExitDate() {


    this.exitDateService.setExitDateinStock(this.orderId, this.exitDate)
    .subscribe(
      data => {
        console.log("Response : "+JSON.stringify(data));
        this.message = data["message"];
        this.isDataSet = true;
        
        
      },
      error => {
        console.log("Error :"+JSON.stringify(error));
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
