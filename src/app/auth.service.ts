import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  public isAuthenticated():boolean
  {
    let token=sessionStorage.getItem("token");
    if(token=="true")
    {
      return true;
    }
    return false;
  }

  public logout()
  {
      sessionStorage.setItem("token","false");
      this.router.navigate(['login']);
      
  }

  
}
