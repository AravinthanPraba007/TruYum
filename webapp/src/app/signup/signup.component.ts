import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../site/user';
import { UserService } from '../service/user.service';
import { AuthService } from '../service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  error:String='';
  user: User = {
    userId:0,
    username: "",
    password: "",
    firstName: "",
    lastName: "",

  };
  passwordMismatch= false;
  constructor(private userService: UserService, private authService: AuthService, private router: Router) { }

  signupForm: FormGroup;
  ngOnInit() {
    this.signupForm = new FormGroup({
      'username': new FormControl(this.user.username, [Validators.required, Validators.maxLength(20)]),
      'firstname': new FormControl(this.user.firstName, [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.maxLength(50)]),
      'lastname': new FormControl(this.user.lastName, [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.maxLength(50)]),
      'password': new FormControl(this.user.password, [Validators.required,Validators.maxLength(20)]),
      'confirmPassword': new FormControl(null, [Validators.required,Validators.maxLength(20)]),
    });
  }

  onSubmitSignUp() {

    if (this.signupForm.value.password == this.signupForm.value.confirmPassword) {
      this.user.firstName = this.signupForm.value.firstname;
      this.user.lastName = this.signupForm.value.lastname;
      this.user.password = this.signupForm.value.password;
      this.user.username = this.signupForm.value.username;
      this.userService.addUserCustomer(this.user).subscribe(()=>{  this.passwordMismatch= false;
        this.error='',
        this.router.navigate([this.authService.redirectUrlLogin]);},error=>{
          this.error=error.error.message;
          /*for global exception handler*/
          if (error.error.errors != null) {
            this.error = error.error.errors;
          }
  
        });  
    }
    else {
      this.passwordMismatch= true;
      setTimeout(() => {
        this.passwordMismatch = false;
      }, 1000);
    }

  }


}
