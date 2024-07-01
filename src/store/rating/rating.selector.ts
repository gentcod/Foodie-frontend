import { createSelector } from "reselect";
import { RecipesRatingsState, RestaurantsRatingsState, SingleRatingState } from "./rating.reducer";
import { RootState } from "../store";


const selectRecipesRatingsReducer = (state: RootState): RecipesRatingsState => state.recipesRatings;
const selectRestaurantsRatingReducer = (state: RootState): RestaurantsRatingsState => state.restaurantsRatings;
const selectSingleRatingReducer = (state: RootState): SingleRatingState => state.singleRating;

// Recipes Ratings
export const selectRecipesRatings = createSelector(
   [selectRecipesRatingsReducer],
   (recipeRatingsSlice) => recipeRatingsSlice.recipeRating
);
   
export const selectRecipesRatingsIsLoading = createSelector(
      [selectRecipesRatingsReducer],
      (recipeRatingsSlice) => recipeRatingsSlice.isLoading
);

// Restaurants Ratings
export const selectRestaurantsRating = createSelector(
   [selectRestaurantsRatingReducer],
   (restaurantsRatingSlice) => restaurantsRatingSlice.restaurantRating
);
   
export const selectRestaurantsRatingsIsLoading = createSelector(
      [selectRestaurantsRatingReducer],
      (restaurantsRatingSlice) => restaurantsRatingSlice.isLoading
);

// Single rating
export const selectRatingEntityId = createSelector(
   [selectSingleRatingReducer],
   (ratingSlice) => ratingSlice.entityId
)

export const selectRatingIsLoading = createSelector(
   [selectSingleRatingReducer],
   (ratingSlice) => ratingSlice.isLoading
)

export const selectRating = createSelector(
   [selectSingleRatingReducer],
   (ratingSlice) => ratingSlice.rating
)

