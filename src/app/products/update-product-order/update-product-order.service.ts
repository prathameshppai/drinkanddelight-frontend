import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdateProductOrderService {
  getUpdateMessage(orderId: string,DeliveryStatuses:string){
    return this.http.post("http://localhost:9090/drinkanddelight/UpdateProductDeliveryStatus",{orderId,DeliveryStatuses})
    
  }
  constructor(private http: HttpClient) { }
}

