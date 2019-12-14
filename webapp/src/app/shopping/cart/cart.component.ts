import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { Cart } from '../cart';
import { AuthenticationServiceService } from 'src/app/service/authentication-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  cart: any;

  cartItemDeleted = false;
  totalPrice: number;
  cartEmpty: Boolean = false;
  error: String = '';
  constructor(private cartService: CartService, private authenticationService: AuthenticationServiceService) { }

  ngOnInit() {
    this.cartService.getCart(this.authenticationService.getId()).subscribe(carts => {
      this.cart = carts;
      this.error = '';
      this.cartEmpty = false;
    }, error => {
      this.cartEmpty = true;
      this.error = error.error.message;
      if (error.error.errors != null) {
        this.error = error.error.errors[0];
      }
    });
  }
  removeFromCart(itemId: number) {
    this.cartService.removeFromCart(this.authenticationService.getId(), itemId).subscribe(() => {
      this.reDirecting();
      this.cartItemDeleted = true;
    },
      error => {
        this.cartEmpty = true;
        this.error = error.error.message;
        if (error.error.errors != null) {
          this.error = error.error.errors[0];
        }
      });


  }

  reDirecting() {
    this.cartService.getCart(this.authenticationService.getId()).subscribe(carts => {
      this.cart = carts;
      this.error = '';
      this.cartEmpty = false;
    }, error => {
      this.cartEmpty = true;
      this.error = error.error.message;
      if (error.error.errors != null) {
        this.error = error.error.errors[0];
      }
    });
  }

}
