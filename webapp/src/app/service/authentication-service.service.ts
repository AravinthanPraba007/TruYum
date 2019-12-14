import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  private role: string = null;
  private name: string;
  private id: number = null;
  private authenticationApiUrl = environment.baseUrl + '/authentication-service/authenticate';
  private token: string = null;
  constructor(private httpClient: HttpClient) { }

  authenticate(user: string, password: string): Observable<any> {
    let credentials = btoa(user + ':' + password);
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic ' + credentials);
    return this.httpClient.get(this.authenticationApiUrl, { headers })
  }

  public setToken(token: string) {
    this.token = token;
  }
  public getToken() {
    return this.token;
  }

  public setId(id: number) {
    this.id = id;
  }

  public getId() {
    return this.id;
  }

  public setName(name: string) {
    this.name = name;
  }
  public getName() {
    return this.name;
  }

  public setRole(role: string) {
    this.role = role;
  }
  public getRole() {
    return this.role;
  }

}
