import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodItemInfoComponent } from './food/food-item-info/food-item-info.component';
import { HttpClientModule } from '@angular/common/http';
import { FoodSearchComponent } from './food/food-search/food-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './shopping/cart/cart.component';


import { FoodItemEditComponent } from './food/food-item-edit/food-item-edit.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './site/header/header.component';
import { LoginComponent } from './site/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    FoodItemInfoComponent,
     FoodSearchComponent, CartComponent, FoodItemEditComponent, SignupComponent, HeaderComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
