import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataExchangeService {
  private dataSource=new BehaviorSubject<string>("");
  private logInStatusSource=new BehaviorSubject<string>("");

  currentData = this.dataSource.asObservable();
  currentLogInStatus = this.logInStatusSource.asObservable();
  
  constructor() { }

  changeData(username:string){
    this.dataSource.next(username);
  }

  changeLogInStatus(loggedIn:boolean){
    this.logInStatusSource.next(String(loggedIn));
  }

}
