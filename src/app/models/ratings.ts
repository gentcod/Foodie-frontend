export type Rating = {
   ratingId: string;
   userId: string;
   ratingNum: number;
   comment: string;
}

export type RecipeRatingList = {
   recipeId: number;
   recipeName: string;
   imageSrc: string;
   ratingNum: number;
   totalRatings: number;
   ratings: Rating[];
}

export type RestaurantRatingList = {
   restaurantId: number;
   restaurantName: string;
   imageSrc: string;
   ratingNum: number;
   totalRatings: number;
   ratings: Rating[];
}

export type RecipeRating = {
   recipeId: number;
   recipeName: string;
   imageSrc: string;
   ratingNum: number;
   totalRatings: number;
}

export type RestaurantRating = {
   restaurantId: number;
   restaurantName: string;
   imageSrc: string;
   ratingNum: number;
   totalRatings: number;
}