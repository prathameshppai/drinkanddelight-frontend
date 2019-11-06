import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductOrder } from '../display-product-orders/ProdcutOrderDTO';
@Injectable({
  providedIn: 'root'
})
export class DisplayProductOrdersService {

  constructor( private http:HttpClient) { }

  getProductList(DeliveryStatusVar : string, DistributorIDVar : string, date1Var : Date, date2Var : Date): Observable<ProductOrder[]>{
    return this.http.post<ProductOrder[]>("http://localhost:9090/drinkanddelight/ProductOrder",
    {"deliveryStatus":DeliveryStatusVar,"distributorid":DistributorIDVar ,"startdate":date1Var, "endDate":date2Var});
  }
}

 
 