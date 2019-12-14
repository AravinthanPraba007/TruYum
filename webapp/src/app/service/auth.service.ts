import { Injectable } from '@angular/core';
import { User } from '../site/user';
import { AuthenticationServiceService } from '../service/authentication-service.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;
  isAdmin = false;
  isCustomer = false;
  user: User;
  redirectUrl = '/food-menu';
  redirectUrlLogin = '/login';
  authSource: string = null;

  userAuthenticated: User;

  constructor(private authenticationService: AuthenticationServiceService) { }

  logIn(): Boolean {

    if (this.authenticationService.getRole() == "ADMIN") {
      this.loggedIn = true;
      this.userAuthenticated = this.user;
      this.isAdmin = true;
      this.isCustomer = false;
      return true;
    }
    else if (this.authenticationService.getRole() == "USER") {
      this.loggedIn = true;
      this.userAuthenticated = this.user;
      this.isCustomer = true;
      this.isAdmin = false;
      return true;
    }
    else {
      this.loggedIn = false;
      this.isCustomer = false;
      this.isAdmin = false;
    }

  }

  logOut() {
    this.loggedIn = false;
    this.isCustomer = false;
    this.isAdmin = false;
    this.authenticationService.setRole(null);
    this.authenticationService.setToken(null);
  }

  isAdminUser() {
    return this.isAdmin;
  }
  isCustomerUser() {
    return this.isCustomer;
  }

}
