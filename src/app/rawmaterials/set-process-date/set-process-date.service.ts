import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {ProcessDate} from "./set-process-date.";


@Injectable({
  providedIn: 'root'
})
export class SetProcessDateService {
  
  setProcessDateinStock(orderId: number, processDate: Date) {
    // let body = JSON.parse(JSON.stringify(processDateObject));
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     let options = new RequestOptions({ headers: headers });
    // this.ProcessDate.
    return this.http.put("http://localhost:9090/drinkanddelight/RawMaterialStock/UpdateProcessDate/"+orderId,{"ProcessDate": processDate})
  }

  constructor(private http: HttpClient) { }
}
