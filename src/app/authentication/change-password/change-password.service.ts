import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ChangePasswordService {
  constructor(private http: HttpClient) { }

  getQuestion(usernameVar: string): Observable<string> {
    return this.http.post<string>("http://localhost:9090/drinkanddelight/display-question",{
      "username": usernameVar
    });
  }

  getChangePasswordMessage(usernameVar: string, answerVar: string, newPasswordVar: string, confirmPasswordVar: string): Observable<string> {
    console.log(usernameVar);
    return this.http.post<string>("http://localhost:9090/drinkanddelight/change-password",{
      "username": usernameVar, 
      "answer": answerVar,
      "newPassword": newPasswordVar, 
      "confirmPassword": confirmPasswordVar
    });
  }

}
