import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceProductOrderService {
  
  getPlaceProductOrderMessage(ProductNameVar: string, DISTIDVar: string ,quantityVar: number, QuantityUnitVar: string, expectedDateofDeliveryVar: Date , pricePerUnitVar: number, warehouseIdVar: string): Observable<string>{
    return this.http.post<string>("http://localhost:9090/placeProductOrder",{"name": ProductNameVar, "distributorId": DISTIDVar,"quantityValue" : quantityVar,"quantityUnit": QuantityUnitVar, "dateOfDelivery" : expectedDateofDeliveryVar, "pricePerUnit" : pricePerUnitVar, "warehouseId": warehouseIdVar});
  }

  getProductDetailsList(): Observable<string>{
    return this.http.get<string>("http://localhost:9090/GetProductDetails");
  }
  
  constructor(private http: HttpClient) { }

}