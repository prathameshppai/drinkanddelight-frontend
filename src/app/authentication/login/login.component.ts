import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usernameVar: string;
  passwordVar: string;
  message: string = '';
  loggedIn: boolean = false;
  constructor(private loginService: LoginService, private route: Router) { }

  ngOnInit() {
  }

  getMessage() {
    this.loginService.getLoginMessage(this.usernameVar, this.passwordVar)
      .subscribe(
        data => {
          console.log("Response : " + JSON.stringify(data));
          this.loggedIn = true;
          this.route.navigate(["home-page"]);
        },
        error => {
          console.log("Error :" + JSON.stringify(error));
        }
      );
  }
}
