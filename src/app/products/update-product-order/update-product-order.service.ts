import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UpdateProductOrderService {
  getUpdateMessage(orderId: string,DeliveryStatuses:string){
    return this.http.post("http://localhost:14842/drinkanddelight/UpdateProductDeliveryStatusServlet",{orderId,DeliveryStatuses})
    
  }
  constructor(private http: HttpClient) { }
}
