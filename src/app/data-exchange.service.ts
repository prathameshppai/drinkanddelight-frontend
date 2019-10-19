import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataExchangeService {
  private dataSource=new BehaviorSubject<string>("");
  currentData = this.dataSource.asObservable();

  constructor() { }

  changeData(username:string){
    this.dataSource.next(username);
  }
}
