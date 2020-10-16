import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavbarService } from '../navbar.service';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  selectedFile :File=null;
  selectedNormalFile :File=null;
  selectedDosFile :File=null;

  readonly APP_URL="http://localhost:5000/"

  constructor(private toastr: ToastrService,private http:HttpClient,private nav:NavbarService,private router:Router) { }

  model_or_training :boolean;
  modelindication:boolean=false;

  normalIndication:boolean=false;
  dosIndication:boolean=false;


  ngOnInit() {
     this.nav.showNav();
  }

  onFileSelected(event)
  {
    console.log(event);
    this.selectedFile=<File>event.target.files[0];
    this.modelindication=true;
  }

  onUpload()
  {
    const fd=new FormData()
    fd.append('file',this.selectedFile,"file");
    this.http.post(this.APP_URL+"/uploadmodel",fd).subscribe(
      res=>{
        console.log(res)
        this.toastr.success("Successfully uploaded");
      },error => {
        this.toastr.error("Failed uploading");
      }

    );

  }


  onFileSelectedNormal(event)
  {
    console.log(event);
    this.selectedNormalFile=<File>event.target.files[0];
    this.normalIndication=true;
  }

  onUploadNormal()
  {
    const fd=new FormData()
    fd.append('file',this.selectedNormalFile,"file");
    this.http.post(this.APP_URL+"/uploadnormal",fd).subscribe(
      res=>{
        console.log(res)
        this.toastr.success("Successfully uploaded");
      },error => {
        this.toastr.error("Failed uploading");
      }
    );
  }

  onFileSelectedDos(event)
  {
    console.log(event);
    this.selectedDosFile=<File>event.target.files[0];
    this.dosIndication=true;
  }

  onUploadDos()
  {
    const fd=new FormData()
    fd.append('file',this.selectedDosFile,"file");
    this.http.post(this.APP_URL+"/uploaddos",fd).subscribe(

      res=>{
        console.log(res)
        this.toastr.success("Successfully uploaded");
      },error => {
        this.toastr.error("Failed uploading");
      }


    );

  }

  training()
  {
    this.http.get(this.APP_URL+"/training").subscribe(
      res=>{
        console.log(res)
        this.toastr.success("Model trained successfully");
      },error => {
        this.toastr.error("Failed Training");
      }

    );
  }

  toggler()
  {
       this.model_or_training= !this.model_or_training;
  }

  goToPredict()
  {
    this.router.navigate(['/dos']);
  }





}
