import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { AuthenticationServiceService } from 'src/app/service/authentication-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authentication: Boolean = false;
  isLoginValid = true;
  authSource: string = null;
  userInvalid = false;
  loginForm: FormGroup;
  username: string = "";
  password: string = "";
  constructor(private router: Router,
    private authService: AuthService, private authenticationService: AuthenticationServiceService) { }

  ngOnInit() {
    this.authSource = this.authService.authSource;
  }

  onSubmit(form: NgForm) {
    this.username = form.value.username;
    this.password = form.value.password;

    let authResult = this.authenticationService.authenticate(this.username, this.password);
    authResult.subscribe(
      data => {
        this.authenticationService.setToken(data.token);
        this.authenticationService.setRole(data.role);
        this.authenticationService.setId(data.id);
        this.authenticationService.setName(data.user);
        this.authentication = this.authService.logIn();
        this.router.navigate(['food-menu']);
      }, err => {
        if (err.status == 401) {
          this.userInvalid = true;

        }
      }
    );

  }

}
