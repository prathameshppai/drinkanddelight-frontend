import { Component, OnInit } from '@angular/core';
import { UsernameExistenceService } from './username-existence.service';
@Component({
  selector: 'app-username-existence',
  templateUrl: './username-existence.component.html',
  styleUrls: ['./username-existence.component.css']
})
export class UsernameExistenceComponent implements OnInit {
  usernameVar: string;
  message: string = '';
  constructor(private usernameExistenceService: UsernameExistenceService) { }

  ngOnInit() {
  }

  getMessage() {
    this.usernameExistenceService.getUsernameExistenceMessage(this.usernameVar)
      .subscribe(
        data => {
          console.log("Response : " + JSON.stringify(data));
          this.message = data["message"];
        },
        error => {
          console.log("Error :" + JSON.stringify(error));
        }
      );
  }
}
