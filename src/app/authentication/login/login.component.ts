import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DataExchangeService } from '../../data-exchange.service';
import { ToastrService } from 'ngx-toastr';

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
  pwc: string;
  constructor(private data: DataExchangeService, 
    private loginService: LoginService, 
    private route: Router,
    private ac_route: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.data.currentLogInStatus.subscribe(loggedIn => this.loggedIn = (loggedIn == 'true'));
  }

  getMessage() {
    // this.data.changeData(this.usernameVar);
    this.loginService.getLoginMessage(this.usernameVar, this.passwordVar)
      .subscribe(
        data => {
          console.log("Response : " + JSON.stringify(data));
          this.message = data["message"];

          if(this.message === "Login Successful"){
            this.loggedIn = true;
            this.data.changeLogInStatus(this.loggedIn);
            this.route.navigate(["home-page"]);
          }
          else {
            this.toastr.error(this.message);
          }
          
        },
        error => {
          console.log("Error :" + JSON.stringify(error));
          this.data.changeLogInStatus(this.loggedIn);
        }
      );
  }
}
