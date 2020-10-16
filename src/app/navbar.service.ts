import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  visible :boolean;
  constructor() {
    this.visible=false;
   }

   showNav()
   {
     this.visible=true;
   }

   hideNav()
   {
     this.visible=false;
   }

}
