import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Food } from '../food/food';
import { AuthenticationServiceService } from './authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  filteredFood: Food[]
  private baseUrl = environment.baseUrl + '/menu-item-service';
  constructor(private httpClient: HttpClient, private authService: AuthenticationServiceService) {
  }

  public getAllMenuItems(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authService.getToken()
      })
    };
    return this.httpClient.get(this.baseUrl + "/menu-items", httpOptions);
  }

  public getMenuItem(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authService.getToken()
      })
    };

    return this.httpClient.get(this.baseUrl + "/menu-items/" + id, httpOptions);
  }
  public ModifyMenu(menuItem: Food): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authService.getToken()
      })
    };

    return this.httpClient.put<void>(this.baseUrl + "/menu-items", menuItem, httpOptions);
  }

}
