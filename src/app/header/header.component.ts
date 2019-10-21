import { Component, OnInit } from '@angular/core';
import { DataExchangeService } from '../data-exchange.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedIn: boolean;
  constructor(private data: DataExchangeService, private route: Router) { }

  ngOnInit() {
    this.data.currentLogInStatus.subscribe(loggedIn => this.loggedIn = (loggedIn == 'true'));
  }

  logOut() {
    this.loggedIn = false;
    localStorage.clear();
    this.route.navigate([""]);
  }
}
