import { Component, OnInit, Input } from '@angular/core';
import { ChangePasswordService } from './change-password.service';
import { Router } from '@angular/router';
import { DataExchangeService } from 'src/app/data-exchange.service';
import { ToastrService } from 'ngx-toastr';

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
  constructor(private data: DataExchangeService, private changePasswordService: ChangePasswordService, private route: Router, private toastr: ToastrService) { }

  ngOnInit() {
      this.data.currentData.subscribe(usernameVar => this.usernameVar = usernameVar)
      this.changePasswordService.getQuestion(this.usernameVar).subscribe(
        data => {
          if(data["message"] == null)
            this.route.navigate([""]);
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
        this.message = data["message"];
        if(this.message === "Password changed successfully."){
          // this.questionVar = null;
          // localStorage.clear();
          this.route.navigate([""], { queryParams: { pwc: true } });
        }
        else {
          this.toastr.error(this.message);
        }
      },
      
      error => {
        console.log("Error :" + JSON.stringify(error));
      }
    );
  }
}
