import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { CartService } from '../../service/cart.service';
import { AuthenticationServiceService } from 'src/app/service/authentication-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router,
    private authService: AuthService, private authenticationService: AuthenticationServiceService) { }

  isAuthenticated() {
    return this.authService.loggedIn;
  }
  getUserName() {
    return this.authenticationService.getName();
  }

  isAdmin() {
    return this.authService.isAdmin;
  }
  isCustomer() {
    return this.authService.isCustomer;
  }

  getUser() {
    return this.authService.userAuthenticated;
  }

  onSignOut() {

    this.authService.logOut();
    this.router.navigate([this.authService.redirectUrlLogin]);
  }


}
