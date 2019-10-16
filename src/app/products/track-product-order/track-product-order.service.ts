import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';





@Injectable({
  providedIn: 'root'
})
export class TrackProductOrderService {

  getTrackedMessage(orderId: number)/*: Observable<string> */{
    
    //this.http.post<String>("http://localhost:9090/drinkanddelight/TrackProductOrderServlet", {"OrderId": "5"});
    return this.http.post("http://localhost:9090/drinkanddelight/TrackProductOrderServlet",{"OrderId": orderId})
    
  }
  constructor(private http: HttpClient) { }

 
  


}
