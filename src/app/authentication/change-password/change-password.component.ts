import { Component, OnInit, Input } from '@angular/core';
import { ChangePasswordService } from './change-password.service';
import { Router } from '@angular/router';
import { DataExchangeService } from 'src/app/data-exchange.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})

export class ChangePasswordComponent implements OnInit {
  usernameVar:string;
  answerVar: string;
  questionVar: string;
  newPasswordVar: string;
  confirmPasswordVar: string;
  message: string = '';
  constructor(private data: DataExchangeService, private changePasswordService: ChangePasswordService, private route: Router) { }

  ngOnInit() {
      this.data.currentData.subscribe(usernameVar => this.usernameVar = usernameVar)
      //this.usernameVar=UsernameExistenceComponent.usernameVar;
      this.changePasswordService.getQuestion(this.usernameVar).subscribe(
        data => {
          this.questionVar = (data["message"]);
          console.log("Response : " + this.questionVar);
        },
        
        error => {
          console.log("Error :" + JSON.stringify(error));
        }
      );
  }
  

  goToLoginPage() {
    this.changePasswordService.getChangePasswordMessage(this.usernameVar, this.answerVar, this.newPasswordVar, this.confirmPasswordVar).subscribe(
      data => {
        console.log("Response : " + JSON.stringify(data));
        this.message = data["message"];
        if(this.message === "Password changed successfully."){
          this.route.navigate([""]);
        }
      },
      
      error => {
        console.log("Error :" + JSON.stringify(error));
      }
    );
  }
}
