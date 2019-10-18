import { Component, OnInit } from '@angular/core';
import { DisplaySupplierDetailsService } from './display-supplier-details.service';

@Component({
  selector: 'app-display-supplier-details',
  templateUrl: './display-supplier-details.component.html',
  styleUrls: ['./display-supplier-details.component.css']
})
export class DisplaySupplierDetailsComponent implements OnInit {

  SupplierID: string = '';
  
  message: string = '';

  isDisplaySupplierDetailsFetched: boolean = false;
  constructor(private displaysupplierdetails: DisplaySupplierDetailsService) { }

  ngOnInit() {
    
  }

  getMessage(){

    this.displaysupplierdetails.getDisplaySupplierDetailsMessage(this.SupplierID)
    .subscribe(
      data => {
        console.log("Response : "+JSON.stringify(data));
        this.message = data["message"];
        this.isDisplaySupplierDetailsFetched = true;
      },
      error => {
        console.log("Error :"+JSON.stringify(error));
  }
    )
}

  

}
