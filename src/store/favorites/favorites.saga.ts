import { all, call, put, select, takeLatest } from "typed-redux-saga/macro";
import messenger from "../../app/api/messenger";
import { 
   selectAddFavRecipeId,
   selectRemoveFavRecipeId,
   selectAddFavRestaurantId,
   selectRemoveFavRestaurantId,
} from "./favorites.selector";
import { selectAccessToken } from "../user/user.selector";
import { 
   addRecipeToFavoritesFailed,
   addRecipeToFavoritesSuccess,
   addRestaurantToFavoritesFailed,
   addRestaurantToFavoritesSuccess,
   fetchFavoritesFailed,
   fetchFavoritesSuccess,
   refreshFavStatesFailed,
   refreshFavStatesSucess,
   removeRecipeFromFavoritesFailed, 
   removeRecipeFromFavoritesSuccess,
   removeRestaurantFromFavoritesFailed,
   removeRestaurantFromFavoritesSuccess
} from "./favorites.action";
import { 
   ADD_RECIPE_TO_FAVORITES_ACTION_TYPES, 
   ADD_RESTAURANT_TO_FAVORITES_ACTION_TYPES, 
   FAVORITES_ACTION_TYPES, 
   REMOVE_RECIPE_FROM_FAVORITES_ACTION_TYPES, 
   REMOVE_RESTAURANT_FROM_FAVORITES_ACTION_TYPES 
} from "./favorites.types";

const { Favorites } = messenger;

function* fetchFavoritesAsync() {
   try {
      const accessToken = yield* select(selectAccessToken);
      const favorites = yield* call(Favorites.list, accessToken);
      yield* put(fetchFavoritesSuccess(favorites));
   } catch (error) {
      yield* put(fetchFavoritesFailed((error as any).data));
   }
}

function* onfetchFavorites() {
   yield* takeLatest(FAVORITES_ACTION_TYPES.FETCH_FAVORITES_START, fetchFavoritesAsync);
}

// Add ReCipe to Favorites
function* addRecipeToFavoritesAsync() {
   try {
      const accessToken = yield* select(selectAccessToken);
      const recipeId = yield* select(selectAddFavRecipeId);
      const favorites = yield* call(Favorites.addFavoriteRecipe, accessToken, recipeId!);
      yield* put(addRecipeToFavoritesSuccess(favorites));
   } catch (error) {
      yield* put(addRecipeToFavoritesFailed((error as any).data));
   }
};

function* onAddRecipeToFavorites() {
   yield* takeLatest(ADD_RECIPE_TO_FAVORITES_ACTION_TYPES.ADD_RECIPE_TO_FAVORITES_START, addRecipeToFavoritesAsync);
}

// Remove Recipe from Favorites
function* removeRecipeFromFavoritesAsync() {
   try {
      const accessToken = yield* select(selectAccessToken);
      const recipeId = yield* select(selectRemoveFavRecipeId);
      const favorites = yield* call(Favorites.removeFavoriteRecipe, accessToken, recipeId!);
      yield* put(removeRecipeFromFavoritesSuccess(favorites));
   } catch (error) {
      yield* put(removeRecipeFromFavoritesFailed((error as any).data));
   }
};

function* onRemoveRecipeFromFavorites() {
   yield* takeLatest(REMOVE_RECIPE_FROM_FAVORITES_ACTION_TYPES.REMOVE_RECIPE_FROM_FAVORITES_START, removeRecipeFromFavoritesAsync);
}

// Add Restaurant to Favorites
function* addRestaurantToFavoritesAsync() {
   try {
      const accessToken = yield* select(selectAccessToken);
      const restaurantId = yield* select(selectAddFavRestaurantId);
      const favorites = yield* call(Favorites.addFavoriteRestaurant, accessToken, restaurantId!);
      yield* put(addRestaurantToFavoritesSuccess(favorites));
   } catch (error) {
      yield* put(addRestaurantToFavoritesFailed((error as any).data));
   }
};

function* onAddRestaurantToFavorites() {
   yield* takeLatest(ADD_RESTAURANT_TO_FAVORITES_ACTION_TYPES.ADD_RESTAURANT_TO_FAVORITES_START, addRestaurantToFavoritesAsync);
}

// Remove Restaurant from Favorites
function* removeRestaurantFromFavoritesAsync() {
   try {
      const accessToken = yield* select(selectAccessToken);
      const restaurantId = yield* select(selectRemoveFavRestaurantId);
      const favorites = yield* call(Favorites.removeFavoriteRestaurant, accessToken, restaurantId!);
      yield* put(removeRestaurantFromFavoritesSuccess(favorites));
   } catch (error) {
      yield* put(removeRestaurantFromFavoritesFailed((error as any).data));
   }
};

function* onRemoveRestaurantFromFavorites() {
   yield* takeLatest(REMOVE_RESTAURANT_FROM_FAVORITES_ACTION_TYPES.REMOVE_RESTAURANT_FROM_FAVORITES_START, removeRestaurantFromFavoritesAsync);
}

// Refresh Favorites After Recipe Add
function* refreshFavStates() {
   try {
      yield* put(refreshFavStatesSucess());
   } catch (error) {
      yield* put(refreshFavStatesFailed(error as Error));
   }
}

function* onRefreshFavStates() {
   yield* takeLatest(FAVORITES_ACTION_TYPES.REFRESH_FAVORITES_START, refreshFavStates);
}

export function* favoritesSaga() {
   yield* all([ 
      call(onfetchFavorites),
      call(onAddRecipeToFavorites),
      call(onRemoveRecipeFromFavorites),
      call(onAddRestaurantToFavorites),
      call(onRemoveRestaurantFromFavorites),
      call(onRefreshFavStates),
   ])
}