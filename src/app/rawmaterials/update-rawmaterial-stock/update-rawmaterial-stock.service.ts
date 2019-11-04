import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdateRawmaterialStockService {
  updateRMStock(orderId: number, manufacturingDate: Date, expiryDate: Date, qaStatus: string) {
    return this.http.put("http://localhost:9090/drinkanddelight/RawMaterialStock/UpdateRawMaterialStockDetails/"+orderId, {"ManufacturingDate": manufacturingDate, "ExpiryDate": expiryDate, "QAStatus": qaStatus })
  }

  constructor(private http: HttpClient) { }
}
