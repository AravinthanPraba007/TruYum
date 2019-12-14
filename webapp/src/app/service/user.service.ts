import { Injectable } from '@angular/core';
import { User } from '../site/user';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthenticationServiceService } from '../service/authentication-service.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.baseUrl + '/authentication-service';

  constructor(private authenticationService: AuthenticationServiceService, private httpClient: HttpClient) { }

  addUserCustomer(userAdd: User) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authenticationService.getToken()
      })
    };
    return this.httpClient.post<void>(this.baseUrl + "/users", userAdd, httpOptions);
  }

}
