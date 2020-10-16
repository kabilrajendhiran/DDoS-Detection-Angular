import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators, ValidationErrors } from '@angular/forms'
import { Observable, of, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { stringify } from 'querystring';
import { KeyValuePipe } from '@angular/common';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http:HttpClient,private toastr: ToastrService,private nav:NavbarService) {

   }
  res:any;

  register_response:any;

  readonly APP_URL="http://localhost:5000/"

  signUpForm :FormGroup=new FormGroup(
    {
      'username':new FormControl(''),
      'email':new FormControl(''),
      'mobile':new FormControl(''),
      'password' :new FormControl(''),
      'confirm':new FormControl('')
    }
  );

  pattern="^[0-9]{10}$";
  ngOnInit() {

    this.nav.showNav();

    this.signUpForm=new FormGroup({
      'username' :new FormControl("",Validators.required),
      'email' :new FormControl("",[Validators.required,Validators.email]),
      'mobile':new FormControl("",[Validators.pattern(this.pattern)]),
      'password' :new FormControl('',Validators.required),
      'confirm' :new FormControl('',Validators.required)
    }
    );

  }



  public  confirmpassword(): boolean
  {
    if(this.signUpForm.get('password').value ==this.signUpForm.get('confirm').value)
    {
      return true;
    }
    else{

      return false;
    }
  }



  onSubmit()
  {
      console.log(this.confirmpassword());
      this.http.post(this.APP_URL+"reg",this.signUpForm.value).subscribe(res=>
        {
          this.register_response=res;
          console.log();
          this.showToaster(this.register_response['res']);
        }
  );


  }


  showToaster(data :any){

    if(data=="0")
    {
    this.toastr.success("Succesfully registered !!!");
    }
    else if(data=="1")
    {
      this.toastr.error("User already exist !");
    }
}

}
