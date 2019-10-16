import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceRawmaterialOrdersService {

  getPlaceRawmaterialOrderMessage(RMNameVar: string, SUPIDVar: string ,quantityVar: number, QuantityUnitVar: string, expectedDateofDeliveryVar: Date , pricePerUnitVar: number, warehouseIdVar: string): Observable<String> {
    return this.http.post<string>("http://localhost:9090/drinkanddelight/PlaceRMOrderServlet",{"rmname": RMNameVar, "supplierId": SUPIDVar,"quantityValue" : quantityVar,"quantityUnit": QuantityUnitVar, "dateOfDelivery" : expectedDateofDeliveryVar, "pricePerUnit" : pricePerUnitVar, "warehouseId": warehouseIdVar});
  }

  constructor(private http: HttpClient) { }

}