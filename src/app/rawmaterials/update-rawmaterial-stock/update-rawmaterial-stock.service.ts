import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdateRawmaterialStockService {
  updateRMStock(orderId: number, manufacturingDate: Date, expiryDate: Date, qaStatus: string) {
    return this.http.post("http://localhost:9090/drinkanddelight/UpdateRMStockServlet",{"OrderId": orderId, "ManufacturingDate": manufacturingDate, "ExpiryDate": expiryDate, "QAStatus": qaStatus })
  }

  constructor(private http: HttpClient) { }
}
