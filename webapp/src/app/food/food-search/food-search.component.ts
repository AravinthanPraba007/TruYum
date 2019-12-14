import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { MenuItemService } from 'src/app/service/menu-item.service';
@Component({
  selector: 'app-food-search',
  templateUrl: './food-search.component.html',
  styleUrls: ['./food-search.component.css']
})
export class FoodSearchComponent implements OnInit {
  searchKey: string;

  foodSearch: Food[];
  constructor(private menuItemService: MenuItemService) { }

  ngOnInit() {
  }
  search() {
    this.menuItemService.getAllMenuItems().subscribe(food => {
      this.foodSearch = food;
      this.foodSearch = this.foodSearch.filter(x => x.name.toLowerCase().indexOf(this.searchKey.toLowerCase()) !== -1);
    });
  }
}
