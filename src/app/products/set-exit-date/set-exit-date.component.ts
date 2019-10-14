import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-exit-date',
  templateUrl: './set-exit-date.component.html',
  styleUrls: ['./set-exit-date.component.css']
})
export class SetExitDateComponent implements OnInit {

  orderId: number = 0;
  exitDate: Date = null;
  constructor() { }

  ngOnInit() {
  }

  log(x) {
    console.log(x);
  }

}
