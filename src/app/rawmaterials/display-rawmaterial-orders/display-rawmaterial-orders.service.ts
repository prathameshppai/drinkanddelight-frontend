import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RawMaterialOrder } from '../display-rawmaterial-orders/RawMaterialOrderdto';
@Injectable({
  providedIn: 'root'
})
export class DisplayRawmaterialOrdersService {

  constructor( private http:HttpClient) { }

  getRawMaterialList(DeliveryStatusVar : string, SupplierIDVar : string, date1Var : Date, date2Var : Date): Observable<RawMaterialOrder[]>{
    console.log("in service method");
    return this.http.post<RawMaterialOrder[]>("http://localhost:9090/drinkanddelight/RawmaterialOrder",
    {"deliveryStatus":DeliveryStatusVar,"supplierid":SupplierIDVar ,"startdate":date1Var, "endDate":date2Var});
    
  }
  

  }
 