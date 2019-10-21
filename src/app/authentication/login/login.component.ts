import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { DataExchangeService } from '../../data-exchange.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usernameVar: string;
  passwordVar: string;
  message: string = '';
  // loggedIn: boolean = false;
  loggedIn: boolean;
  constructor(private data: DataExchangeService, private loginService: LoginService, private route: Router) { }

  ngOnInit() {
    this.data.currentLogInStatus.subscribe(loggedIn => this.loggedIn = (loggedIn == 'true'));
  }

  getMessage() {
    // this.data.changeData(this.usernameVar);
    this.loginService.getLoginMessage(this.usernameVar, this.passwordVar)
      .subscribe(
        data => {

          // console.log("Response : " + JSON.stringify(data));
          this.loggedIn = true;
          localStorage.setItem('loggedIn', String(this.loggedIn));
          localStorage.setItem('username',JSON.stringify(data["message"]));
          this.data.changeLogInStatus(this.loggedIn);
          console.log(localStorage.getItem('loggedIn'));
          console.log(localStorage.getItem('username'));
          this.route.navigate(["home-page"]);
        },
        error => {
          console.log("Error :" + JSON.stringify(error));
          this.data.changeLogInStatus(this.loggedIn);
        }
      );
  }
}
