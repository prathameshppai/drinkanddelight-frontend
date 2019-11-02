import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';








@Injectable({
  providedIn: 'root'
})
export class TrackProductOrderService {

  getTrackedMessage(orderId: number)/*: Observable<string> */{
    
    //this.http.post<String>("http://localhost:9090/drinkanddelight/TrackProductOrderServlet", {"OrderId": orderId});
    return this.http.get("http://localhost:9090/drinkanddelight/ProductStock/TrackProduct/"+orderId);
    
  }
  constructor(private http: HttpClient) { }

 
  


}
