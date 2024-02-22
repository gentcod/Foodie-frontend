import { combineReducers } from 'redux';
import { recipeByIdReducer, recipesFeaturedReducer, recipesRatingsReducer, recipesReducer, recipesSearchReducer, } from './recipe/recipe.reducer';
import { restaurantReducer } from './restaurant/restaurant.reducer';

export const rootReducer = combineReducers({
   recipes: recipesReducer,
   recipesRatings: recipesRatingsReducer,
   recipesSearch: recipesSearchReducer,
   recipesFeatured: recipesFeaturedReducer,
   recipeById: recipeByIdReducer,
   restaurants: restaurantReducer,
})