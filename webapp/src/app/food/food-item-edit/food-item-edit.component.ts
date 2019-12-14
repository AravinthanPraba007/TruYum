import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Food } from '../food';
import { MenuItemService } from 'src/app/service/menu-item.service';


@Component({
  selector: 'app-food-item-edit',
  templateUrl: './food-item-edit.component.html',
  styleUrls: ['./food-item-edit.component.css']
})
export class FoodItemEditComponent implements OnInit {

  editForm: FormGroup;
  food: Food = null;
  id: number;
  foodEdited = false;

  constructor(private route: ActivatedRoute, private menuItemService: MenuItemService) {
  }
  ngOnInit() {
    const foodId = +(this.route.snapshot.paramMap.get('id'));
    this.menuItemService.getMenuItem(foodId).subscribe(food => {
      this.food = food;
      this.id = foodId;
      this.editForm = new FormGroup({
        'title': new FormControl(this.food.name, [Validators.required, Validators.maxLength(200)]),
        'price': new FormControl(this.food.price, [Validators.required, Validators.pattern('^[0-9]+$')]),
        'category': new FormControl(this.food.category, Validators.required),
        'dateOfLaunch': new FormControl(this.food.dateOfLaunch),
        'active': new FormControl(this.food.active, Validators.required),
        'freeDelivery': new FormControl(this.food.freeDelivery)
      });
    });
  }

  updateFoodItem(): void {
    this.food.name = this.editForm.value.title;
    this.food.price = this.editForm.value.price;
    this.food.category = this.editForm.value.category;
    this.food.dateOfLaunch = this.editForm.value.dateOfLaunch;
    this.food.active = this.editForm.value.active;
    this.food.freeDelivery = this.editForm.value.freeDelivery;
    this.menuItemService.ModifyMenu(this.food).subscribe();
    this.foodEdited = true;
  }
  get title() { return this.editForm.get('title'); }
  get price() { return this.editForm.get('price'); }
  get category() { return this.editForm.get('category'); }


}

