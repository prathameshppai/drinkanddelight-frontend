import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsernameExistenceService {
  constructor(private http: HttpClient) { }

  getUsernameExistenceMessage(usernameVar: string): Observable<string> {
    return this.http.post<string>("http://localhost:9090/drinkanddelight/username-existence",{
      "username": usernameVar
    });
  }
}
