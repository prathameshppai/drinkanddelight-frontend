import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DisplaySupplierDetailsService {

  getDisplaySupplierDetailsMessage(SupplierID: string):Observable<string> {
    return this.http.post<string>("http://localhost:9090/drinkanddelight/DisplaySupplier",{"supplierId": SupplierID});
  }

  constructor(private http: HttpClient) { }
}
