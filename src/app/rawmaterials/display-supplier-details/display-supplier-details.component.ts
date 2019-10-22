import { Component, OnInit } from '@angular/core';
import { DisplaySupplierDetailsService } from './display-supplier-details.service';

@Component({
  selector: 'app-display-supplier-details',
  templateUrl: './display-supplier-details.component.html',
  styleUrls: ['./display-supplier-details.component.css']
})
export class DisplaySupplierDetailsComponent implements OnInit {

  SupplierID: string = '';
  

  constructor(private displaysupplierdetails: DisplaySupplierDetailsService) { }

  ngOnInit() {
    
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
