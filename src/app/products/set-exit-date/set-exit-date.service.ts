import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SetExitDateService {
  
  
  setExitDateinStock(orderId: number, exitDate: Date) {
    return this.http.put("http://localhost:9090/drinkanddelight/ProductStock/UpdateExitDate/"+orderId, {"ExitDate": exitDate})
  }

  constructor(private http: HttpClient) { }

}
