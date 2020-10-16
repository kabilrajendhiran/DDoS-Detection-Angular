import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth:AuthService,public nav:NavbarService) { }

  ngOnInit() {
    this.nav.showNav()
  }

  logout()
  {
    this.auth.logout();
  }
}
