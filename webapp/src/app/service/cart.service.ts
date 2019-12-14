import { Injectable } from '@angular/core';
import { Cart } from '../shopping/cart';
import { Food } from '../food/food';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthenticationServiceService } from './authentication-service.service';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseUrl = environment.baseUrl + '/menu-item-service';

  foodCart: Food;
  totalPrice: number = 0;
  cart: Cart;

  constructor(private authenticationService: AuthenticationServiceService, private httpClient: HttpClient) { }

  getCart(userId: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authenticationService.getToken()
      })
    };
    return this.httpClient.get(this.baseUrl + "/carts/" + userId, httpOptions);

  }

  addCartItem(userId: number, id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authenticationService.getToken()
      })
    };

    return this.httpClient.post<void>(this.baseUrl + "/carts/" + userId + "/" + id, id, httpOptions);

  }
  removeFromCart(userId: number, menuItemId: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authenticationService.getToken()
      })
    };
    return this.httpClient.delete<void>(this.baseUrl + "/carts/" + userId + "/" + menuItemId, httpOptions);

  }

}
