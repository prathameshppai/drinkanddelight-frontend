import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  getLoginMessage(usernameVar: string, passwordVar: string ): Observable<string> {
    return this.http.post<string>("http://localhost:9090/drinkanddelight/",{
      "username": usernameVar, 
      "password": passwordVar});
  }

  
}
