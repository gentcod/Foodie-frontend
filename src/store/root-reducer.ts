import { combineReducers } from '@reduxjs/toolkit';
import { recipeByIdReducer, recipesFeaturedReducer, recipesReducer, recipesSearchReducer, } from './recipe/recipe.reducer';
import { restaurantByIdReducer, restaurantReducer } from './restaurant/restaurant.reducer';
import { recipesRatingsReducer, restaurantsRatingsReducer, singleRatingReducer } from './rating/rating.reducer';
import { loginUserReducer, signupUserReducer } from './user/user.reducer';
import { addbookmarkReducer, bookmarksReducer, removebookmarkReducer } from './bookmarks/bookmarks.reducer';
import { addcookiebookmarkReducer, cookieBookmarksReducer, removeCookiebookmarkReducer } from './cookie-bookmarks/cookie-bookmarks.reducer';
import { 
   addRecipeToFavoritesReducer, 
   addRestaurantToFavoritesReducer, 
   favoritesReducer, 
   removeRecipeFromFavoritesReducer, 
   removeRestaurantFromFavoritesReducer 
} from './favorites/favorites.reducer';

export const rootReducer = combineReducers({
   recipes: recipesReducer,
   recipesSearch: recipesSearchReducer,
   recipesFeatured: recipesFeaturedReducer,
   recipeById: recipeByIdReducer,
   restaurants: restaurantReducer,
   restaurantById: restaurantByIdReducer,
   recipesRatings: recipesRatingsReducer,
   restaurantsRatings: restaurantsRatingsReducer,
   singleRating: singleRatingReducer,
   loginUser: loginUserReducer,
   signupUser: signupUserReducer,
   bookmarks: bookmarksReducer,
   adddBookmark: addbookmarkReducer,
   removeBookmark: removebookmarkReducer,
   cookieBookmark: cookieBookmarksReducer,
   addcookiebookmark: addcookiebookmarkReducer,
   removeCookiebookmark: removeCookiebookmarkReducer,
   favorites: favoritesReducer,
   addRecipeToFavorites: addRecipeToFavoritesReducer,
   removeRecipeFromFavorites: removeRecipeFromFavoritesReducer,
   addRestaurantToFavorites: addRestaurantToFavoritesReducer,
   removeRestaurantFromFavorites: removeRestaurantFromFavoritesReducer,
});