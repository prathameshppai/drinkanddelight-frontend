import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DisplayRawmaterialOrdersService {

  constructor( private http:HttpClient) { }

  getRawMaterialList(): Observable<String>{
    return this.http.get<String>("http://localhost:9090/drinkanddelight/DisplayRawMaterialServlet");



  }
}
