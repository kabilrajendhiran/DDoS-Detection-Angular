import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DosComponent } from './dos/dos.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogComponent } from './log/log.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthguardService } from './authguard.service';




const routes: Routes = [
  {
    path:"dos",
    component:DosComponent,
    canActivate:[AuthguardService]
  },

  {
    path:"upload",
    component:FileuploadComponent,
    canActivate:[AuthguardService]
  },
  {
    path:"navbar",
    component:NavbarComponent
  },
  {
    path:"log",
    component:LogComponent,
    canActivate:[AuthguardService]
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"",
    component :LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  }
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
