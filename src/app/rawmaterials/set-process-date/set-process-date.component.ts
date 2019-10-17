import { Component, OnInit } from '@angular/core';
import { SetProcessDateService } from './set-process-date.service';

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
  
  
  constructor(private processDateService: SetProcessDateService) { }

  ngOnInit() {
  }

  setProcessDate() {


    this.processDateService.setProcessDateinStock(this.orderId, this.processDate)
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
    console.log(x);
    this.enableButton = false;
    if(this.processDate != null && this.orderId != null) {
      if(!isNaN(this.orderId)) {
        this.enableButton = true;
      }
    }
  }

}
