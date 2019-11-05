import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class DisplayDistributorDetailsService {
  constructor(private http: HttpClient) { }
  getDisplaySupplierDetailsMessage(DistributorID: string,addressId :string):Observable<string> {
    return this.http.post<string>("http://localhost:9090/drinkanddelight/DisplayDistributorDetailsServlet",{"distributorId": DistributorID,"addressId":addressId});
 
    
}
getDistributorId(distributorID: string):Observable<string> {
  console.log(distributorID);
  return this.http.post<string>("http://localhost:9090/drinkanddelight/getDistributorId",{"distributorId": distributorID});

  
}
}
