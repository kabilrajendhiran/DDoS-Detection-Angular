import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public Auth:AuthService,private http:HttpClient,private router:Router,private toastr: ToastrService,private nav:NavbarService) { }

  readonly APP_URL="http://localhost:5000/"
  ngOnInit() {
    this.nav.hideNav();
  }

  login(data :any)
  {
    console.log(data)
    this.http.post(this.APP_URL+"login",data).subscribe(res=>{
      console.log(res);
      this.isLogin(res)
      
    });
    
  }

  public isLogin(data)
  {
     if(data['res']=="0")
     {
        sessionStorage.setItem("token","true")
        this.router.navigate(['upload']);
        this.toastr.success("Login success");
     }
     else if(data['res']=="1")
     {
        this.toastr.error("Login failed");
     }

  
    }



}

