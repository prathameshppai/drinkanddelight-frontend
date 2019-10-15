import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-update-rawmaterial-order',
  templateUrl: './update-rawmaterial-order.component.html',
  styleUrls: ['./update-rawmaterial-order.component.css']
})
export class UpdateRawmaterialOrderComponent implements OnInit {
  DeliveryStatuses = ['Recieved','Pending','Cancelled'];
  constructor() {
  }
  ngOnInit() {
  }
 
}