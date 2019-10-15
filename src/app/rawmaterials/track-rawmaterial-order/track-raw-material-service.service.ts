import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TrackRawMaterialServiceService {

  getTrackedMessage(): Observable<String> {
    return this.http.get<String>("http://localhost:9090/drinkanddelight/TrackProductOrderServlet?OrderId=6");
  }

  constructor(private http: HttpClient) { }

}
