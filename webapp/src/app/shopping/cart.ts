import { Food } from '../food/food';
export interface Cart {
    menuItemList: Food[];
    total: number;
}
