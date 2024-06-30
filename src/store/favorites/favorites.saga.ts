import { all, call, put, select, takeLatest } from "typed-redux-saga/macro";
import messenger from "../../app/api/messenger";
import { 
   selectAddFavRecipeId,
   selectRemoveFavRecipeId,
   selectAddFavRestaurantId,
   selectAddFavRecipeErrResp,
   selectRemoveFavRecipeErrResp,
   selectAddFavRestaurantErrResp,
   selectRemoveFavRestaurantId,
   selectRemoveFavRestaurantErrResp,
   selectAddFavRecipe,
   selectRemoveFavRecipe,
   selectAddFavRestaurant,
   selectRemoveFavRestaurant,
   selectFavErrorResponse
} from "./favorites.selector";
import { selectAccessToken } from "../user/user.selector";
import { 
   addRecipeToFavoritesFailed,
   addRecipeToFavoritesSuccess,
   addRestaurantToFavoritesFailed,
   addRestaurantToFavoritesSuccess,
   fetchFavoritesFailed,
   fetchFavoritesSuccess,
   refreshFavoritesFailed, 
   refreshFavoritesSucess, 
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

export function* fetchFavoritesAsync() {
   try {
      const accessToken = yield* select(selectAccessToken);
      const favorites = yield* call(Favorites.list, accessToken);
      yield* put(fetchFavoritesSuccess(favorites));
   } catch (error) {
      const errorResponse = yield* select(selectFavErrorResponse);
      yield* put(fetchFavoritesFailed(errorResponse!));
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
      const errorResponse = yield* select(selectAddFavRecipeErrResp);
      yield* put(addRecipeToFavoritesFailed(errorResponse!));
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
      const errorResponse = yield* select(selectRemoveFavRecipeErrResp);
      yield* put(removeRecipeFromFavoritesFailed(errorResponse!));
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
      const errorResponse = yield* select(selectAddFavRestaurantErrResp);
      yield* put(addRestaurantToFavoritesFailed(errorResponse!));
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
      const errorResponse = yield* select(selectRemoveFavRestaurantErrResp);
      yield* put(removeRestaurantFromFavoritesFailed(errorResponse!));
   }
};

function* onRemoveRestaurantFromFavorites() {
   yield* takeLatest(REMOVE_RESTAURANT_FROM_FAVORITES_ACTION_TYPES.REMOVE_RESTAURANT_FROM_FAVORITES_START, removeRestaurantFromFavoritesAsync);
}

// Refresh Favorites After Recipe Add
function* refreshFavAfterRecipeAdd() {
   try {
      const favorites = yield* select(selectAddFavRecipe);
      yield* put(refreshFavoritesSucess(favorites));
   } catch (error) {
      yield* put(refreshFavoritesFailed(error as Error));
   }
}

function* onRefreshFavAfterRecipeAdd() {
   yield* takeLatest(FAVORITES_ACTION_TYPES.REFRESH_FAVORITES_START, refreshFavAfterRecipeAdd);
}

// Refresh Favorites After Recipe Remove
function* refreshFavAfterRecipeRemove() {
   try {
      const favorites = yield* select(selectRemoveFavRecipe);
      yield* put(refreshFavoritesSucess(favorites));
   } catch (error) {
      yield* put(refreshFavoritesFailed(error as Error));
   }
}

function* onRefreshFavAfterRecipeRemove() {
   yield* takeLatest(FAVORITES_ACTION_TYPES.REFRESH_FAVORITES_START, refreshFavAfterRecipeRemove);
}

// Refresh Favorites After Restaurant Add
function* refreshFavAfterResAdd() {
   try {
      const favorites = yield* select(selectAddFavRestaurant);
      yield* put(refreshFavoritesSucess(favorites));
   } catch (error) {
      yield* put(refreshFavoritesFailed(error as Error));
   }
}

function* onRefreshFavAfterResAdd() {
   yield* takeLatest(FAVORITES_ACTION_TYPES.REFRESH_FAVORITES_START, refreshFavAfterResAdd);
}

// Refresh Favorites After Restaurant Remove
function* refreshFavAfterResRemove() {
   try {
      const favorites = yield* select(selectRemoveFavRestaurant);
      yield* put(refreshFavoritesSucess(favorites));
   } catch (error) {
      yield* put(refreshFavoritesFailed(error as Error));
   }
}

function* onRefreshFavAfterResRemove() {
   yield* takeLatest(FAVORITES_ACTION_TYPES.REFRESH_FAVORITES_START, refreshFavAfterResRemove);
}

export function* FavoritesSaga() {
   yield* all([ 
      call(onfetchFavorites),
      call(onAddRecipeToFavorites),
      call(onRemoveRecipeFromFavorites),
      call(onAddRestaurantToFavorites),
      call(onRemoveRestaurantFromFavorites),
      call(onRefreshFavAfterRecipeAdd),
      call(onRefreshFavAfterRecipeRemove),
      call(onRefreshFavAfterResAdd),
      call(onRefreshFavAfterResRemove),
   ])
}