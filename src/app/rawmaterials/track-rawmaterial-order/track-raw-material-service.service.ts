import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TrackRawMaterialServiceService {

  getTrackedMessage(orderId: number){
    
    return this.http.get("http://localhost:9090/RawMaterialStock/TrackRawMaterial/"+orderId);
    
  }
  constructor(private http: HttpClient) { }

}
