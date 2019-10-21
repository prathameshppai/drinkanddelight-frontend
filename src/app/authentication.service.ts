import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate{

  loggedUser : string;
  constructor(private router: Router) {}

  canActivate() : boolean
  {
    if (localStorage.length > 0){
      if(localStorage.getItem('loggedIn') == String(true))
        return true;
      else
      {
          this.router.navigate(['']);
          return false;
      }
    }
    else{
        this.router.navigate(['']);
        return false;
    }
  }
}
