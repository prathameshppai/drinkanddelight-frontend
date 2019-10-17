import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TrackRawMaterialServiceService {

  getTrackedMessage(orderId: number)/*: Observable<string> */{
    
    return this.http.post("http://localhost:9090/drinkanddelight/TrackRawMaterialOrderServlet",{"OrderId": orderId})
    
  }
  constructor(private http: HttpClient) { }

}
