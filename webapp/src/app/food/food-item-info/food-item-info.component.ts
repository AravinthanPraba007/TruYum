import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Food } from '../food';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CartService } from '../../service/cart.service';
import { AuthService } from '../../service/auth.service';
import { MenuItemService } from 'src/app/service/menu-item.service';
import { AuthenticationServiceService } from 'src/app/service/authentication-service.service';


@Component({
  selector: 'app-food-item-info',
  templateUrl: './food-item-info.component.html',
  styleUrls: ['./food-item-info.component.css']
})
export class FoodItemInfoComponent implements OnInit {

  @Input() food: Food[];//inputfromsearch
  @Output() addedToCart = new EventEmitter();
  isAdmin: boolean = true;
  itemId: number;
  itemAdded = false;

  constructor(private cartService: CartService, private authenticationService: AuthenticationServiceService, private authService: AuthService, private router: Router, private menuItemService: MenuItemService) { }


  ngOnInit() {
    this.menuItemService.getAllMenuItems().subscribe(food => { this.food = food;  });
  }

  addCartItem(id: number) {
    if (this.authService.isCustomerUser()) {
      this.cartService.addCartItem(this.authenticationService.getId(), id).subscribe(() => {
        this.addedToCart.emit(id);
        this.itemAdded = true;
        this.itemId = id;
        setTimeout(() => {
          this.itemAdded = false;
        }, 1000);
        this.authService.authSource = null;

      });

    }
    else {
      this.authService.authSource = 'cart';
      this.router.navigate([this.authService.redirectUrlLogin]);
    }

  }

  isEditAllowed(): Boolean {
    return this.authService.isAdmin;
  }

}
