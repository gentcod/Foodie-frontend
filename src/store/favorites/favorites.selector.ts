import { createSelector } from "reselect";
import { FavoritesState, UpdatedFavoritesState } from "./favorites.reducer";
import { RootState } from "../store";

const selectFavoritesReducer = (state: RootState): FavoritesState => state.favorites;
const selectAddFavRecipeReducer = (state: RootState): UpdatedFavoritesState => state.addRecipeToFavorites;
const selectRemoveFavRecipeReducer = (state: RootState): UpdatedFavoritesState => state.removeRecipeFromFavorites;
const selectAddFavRestaurantReducer = (state: RootState): UpdatedFavoritesState => state.addRestaurantToFavorites;
const selectRemoveFavRestaurantReducer = (state: RootState): UpdatedFavoritesState => state.removeRestaurantFromFavorites;

// Favorites Data
export const selectFavorites = createSelector(
   [selectFavoritesReducer],
   (favoritesSlice) => favoritesSlice.favorites
);

export const selectFavoritesIsLoading = createSelector(
   [selectFavoritesReducer],
   (favoritesSlice) => favoritesSlice.isLoading
);

export const selectFavErrorResponse = createSelector(
   [selectFavoritesReducer],
   (favoritesSlice) => favoritesSlice.errorResponse
);

// Add Favorites Recipe
export const selectAddFavRecipeId = createSelector(
   [selectAddFavRecipeReducer],
   (favoritesSlice) => favoritesSlice.recipeId
);

export const selectAddFavRecipeResp = createSelector(
   [selectAddFavRecipeReducer],
   (favoritesSlice) => favoritesSlice.responseMessage
);

export const selectAddFavRecipe = createSelector(
   [selectAddFavRecipeReducer],
   (favoritesSlice) => favoritesSlice.favorites
);

export const selectAddFavRecipeIsLoading = createSelector(
   [selectAddFavRecipeReducer],
   (favoritesSlice) => favoritesSlice.isLoading
);

export const selectAddFavRecipeErrResp = createSelector(
   [selectAddFavRecipeReducer],
   (favoritesSlice) => favoritesSlice.errorResponse
);

// Remove Favorites Recipe
export const selectRemoveFavRecipeId = createSelector(
   [selectRemoveFavRecipeReducer],
   (favoritesSlice) => favoritesSlice.recipeId
);

export const selectRemoveFavRecipeResp = createSelector(
   [selectRemoveFavRecipeReducer],
   (favoritesSlice) => favoritesSlice.responseMessage
);

export const selectRemoveFavRecipe = createSelector(
   [selectRemoveFavRecipeReducer],
   (favoritesSlice) => favoritesSlice.favorites
);

export const selectRemoveFavRecipeIsLoading = createSelector(
   [selectRemoveFavRecipeReducer],
   (favoritesSlice) => favoritesSlice.isLoading
);

export const selectRemoveFavRecipeErrResp = createSelector(
   [selectRemoveFavRecipeReducer],
   (favoritesSlice) => favoritesSlice.errorResponse
);

// Add Favorite Restaurant
export const selectAddFavRestaurantId = createSelector(
   [selectAddFavRestaurantReducer],
   (favoritesSlice) => favoritesSlice.restaurantId
);

export const selectAddFavRestaurantResp = createSelector(
   [selectAddFavRestaurantReducer],
   (favoritesSlice) => favoritesSlice.responseMessage
);

export const selectAddFavRestaurant = createSelector(
   [selectAddFavRestaurantReducer],
   (favoritesSlice) => favoritesSlice.favorites
);

export const selectAddFavRestaurantIsLoading = createSelector(
   [selectAddFavRestaurantReducer],
   (favoritesSlice) => favoritesSlice.isLoading
);

export const selectAddFavRestaurantErrResp = createSelector(
   [selectAddFavRestaurantReducer],
   (favoritesSlice) => favoritesSlice.errorResponse
);

// Remove Favorites Restaurant
export const selectRemoveFavRestaurantId = createSelector(
   [selectRemoveFavRestaurantReducer],
   (favoritesSlice) => favoritesSlice.restaurantId
);

export const selectRemoveFavRestaurantResp = createSelector(
   [selectRemoveFavRestaurantReducer],
   (favoritesSlice) => favoritesSlice.responseMessage
);

export const selectRemoveFavRestaurant = createSelector(
   [selectRemoveFavRestaurantReducer],
   (favoritesSlice) => favoritesSlice.favorites
);

export const selectRemoveFavRestaurantIsLoading = createSelector(
   [selectRemoveFavRestaurantReducer],
   (favoritesSlice) => favoritesSlice.isLoading
);

export const selectRemoveFavRestaurantErrResp = createSelector(
   [selectRemoveFavRestaurantReducer],
   (favoritesSlice) => favoritesSlice.errorResponse
);