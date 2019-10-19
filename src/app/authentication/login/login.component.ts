import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

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
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  getMessage() {
    this.loginService.getLoginMessage(this.usernameVar, this.passwordVar)
      .subscribe(
        data => {
          console.log("Response : " + JSON.stringify(data));
          this.message = data["message"];
          this.loggedIn = true;
        },
        error => {
          console.log("Error :" + JSON.stringify(error));
        }
      );
  }
}
