import { Embedded } from "./embedded";

export interface Favorites {
   id: number;
   userId: string;
   totalFavRecipes: number;
   totalFavRestaurants: number;
   recipes: Embedded[];
   restaurants: Embedded[];
}