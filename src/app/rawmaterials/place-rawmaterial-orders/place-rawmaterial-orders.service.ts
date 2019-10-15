import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders} from '@angular/common/http';
import { HttpClient } from '../../../../node_modules/@types/selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class PlaceRawmaterialOrdersService {
  httpClient: HttpClient;
  // url = 'http://localhost:8080';

  constructor(private http: HttpClient){
    this.httpClient = http;
  }

  doLogin() {
    const httpOptions : any    = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Origin': '*'
      })
    };
    
    this.httpClient
      .post("http://localhost:9090/drinkanddelight/PlaceRMOrder.html",{"":"anish@gmail.com","pswd":"12345"})
      .subscribe(
        data => {
          console.log("Response : "+JSON.stringify(data));
        },
        error => {
          console.log("Error :"+JSON.stringify(error));
        }
      );
    
  }
  
    


  
}