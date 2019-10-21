import { Component, OnInit } from '@angular/core';
import { UsernameExistenceService } from './username-existence.service';
import { Router } from '@angular/router';
import { DataExchangeService } from 'src/app/data-exchange.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-username-existence',
  templateUrl: './username-existence.component.html',
  styleUrls: ['./username-existence.component.css']
})
export class UsernameExistenceComponent implements OnInit {
  usernameVar: string;
  message: string = '';
  securityQuestion: string;
  securityAnswer: string;
  constructor(private data: DataExchangeService, 
    private usernameExistenceService: UsernameExistenceService, 
    private route: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.data.currentData.subscribe(usernameVar => this.usernameVar = usernameVar)
  }

  goToChangePasswordPage() {
    this.data.changeData(this.usernameVar);
    this.usernameExistenceService.getUsernameExistenceMessage(this.usernameVar).subscribe(
        data => {
          this.message = data["message"];
          if(this.message === "Username exists."){
            this.route.navigate(["change-password"]);
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
