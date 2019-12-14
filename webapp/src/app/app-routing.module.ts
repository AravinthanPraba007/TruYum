import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodSearchComponent } from './food/food-search/food-search.component';
import { CartComponent } from './shopping/cart/cart.component';
import {FoodItemInfoComponent} from './food/food-item-info/food-item-info.component';
import {FoodItemEditComponent} from './food/food-item-edit/food-item-edit.component';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './site/login/login.component';
import {AuthGuardGuard} from './site/auth-guard.guard';


const routes: Routes = [
  {
    path: 'food-menu', component: FoodSearchComponent
  },
  {
    path: 'cart', component: CartComponent,canActivate:[AuthGuardGuard]
  },
  {
    path: 'food-menu-admin', component: FoodItemInfoComponent
  },
  {
    path: 'foodEdit/:id',component: FoodItemEditComponent,canActivate:[AuthGuardGuard]
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'login',component:LoginComponent
  }, 
  {
  path: '', redirectTo: 'food-menu', pathMatch: 'full' 
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
