import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { NavbarService } from '../navbar.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  constructor(private http:HttpClient,private nav:NavbarService,private toastr:ToastrService) { }

  readonly APP_URL="http://localhost:5000/"

  ngOnInit() {
    this.nav.showNav();
    this.getLog();
   this.realtimeupdate();
  }

  p: number = 1;

  time:any=null;


  realtimeupdate()
  {
    this.time=setInterval(()=>{
      this.getLog();
    },60000);
  }


  logdata :any=null
  getLog()
  {
    this.http.get(this.APP_URL+"log").subscribe(
      data=>{
             this.logdata=data;  
      },
      err=>{
        console.log(err)
      }
    );

 this.toastr.success("Database updated");
  }

}
