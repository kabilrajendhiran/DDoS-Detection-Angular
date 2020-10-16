import { Component, OnInit, OnDestroy } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {timer,Observable} from 'rxjs'
import { ToastrService } from 'ngx-toastr';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-dos',
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.css']
})
export class DosComponent implements OnInit {

  constructor(private http:HttpClient ,private toastr: ToastrService,private nav:NavbarService) { }
  time =null;
  

  ngOnInit() {
  this.nav.showNav();
  }

  result :any;

  readonly APP_URL="http://localhost:5000/"
  dosprediction()
  {

    this.http.get(this.APP_URL+"/prediction")
    .subscribe(
      data=>{
        this.result=data['res'];
        console.log(this.result);
        if(this.result=="We are safe")
        {
          this.toastr.success("We are safe");
        }
        else{
          this.toastr.error("DDoS detected");
        }


      },
      error=>{
        console.log(error);
      }
    );
    

    
  }

  dosAPIcall()
  {
    this.time=setInterval(()=>{
      this.dosprediction();
    },90000);
  }

  

 stopDetect()
 {
   clearInterval(this.time);
 }




}


