import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class DisplayDistributorDetailsService {
  constructor(private http: HttpClient) { }
  getDisplayDistributorDetailsMessage(DistributorID: string):Observable<string> {
    return this.http.post<string>("http://localhost:9090/drinkanddelight/DisplayDistributor",{"distributorId": DistributorID});
 
    
}
}



