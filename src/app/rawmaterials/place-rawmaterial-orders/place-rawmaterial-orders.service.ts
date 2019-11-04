import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RawMaterialOrder } from './RawMaterialOrderdto';

@Injectable({
  providedIn: 'root'
})
export class PlaceRawmaterialOrdersService {

  getPlaceRawmaterialOrderMessage(RMNameVar: string, SUPIDVar: string ,quantityVar: number, QuantityUnitVar: string, expectedDateofDeliveryVar: Date , pricePerUnitVar: number, warehouseIdVar: string): Observable<String> {
    return this.http.post<string>("http://localhost:9090/drinkanddelight/placeRawMaterialOrder/placeOrder",{"name": RMNameVar, "supplierId": SUPIDVar,"quantityValue" : quantityVar,"quantityUnit": QuantityUnitVar, "dateOfDelivery" : expectedDateofDeliveryVar, "pricePerUnit" : pricePerUnitVar, "warehouseId": warehouseIdVar});
  }

  getRawmaterialDetailsList(): Observable<string>{
    return this.http.get<string>("http://localhost:9090/drinkanddelight/GetRawMaterialDetails");
  }

  constructor(private http: HttpClient) { }
}