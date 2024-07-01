import { Favorites } from "../../app/models/favorite";
import { ErrorResponseBody, ResponseBody } from "../../app/models/response";
import { Action, ActionWithPayload, createAction, withMatcher } from "../../utils/reducer/reducer.utils";
import {
   ADD_RECIPE_TO_FAVORITES_ACTION_TYPES,
   ADD_RESTAURANT_TO_FAVORITES_ACTION_TYPES,
   FAVORITES_ACTION_TYPES,
   REMOVE_RECIPE_FROM_FAVORITES_ACTION_TYPES,
   REMOVE_RESTAURANT_FROM_FAVORITES_ACTION_TYPES
} from "./favorites.types";

type FetchFavoritessStart = Action<FAVORITES_ACTION_TYPES.FETCH_FAVORITES_START>;
type FetchFavoritessSuccess = ActionWithPayload<FAVORITES_ACTION_TYPES.FETCH_FAVORITES_SUCCESS, ResponseBody<Favorites>>;
type FetchFavoritessFailed = ActionWithPayload<FAVORITES_ACTION_TYPES.FETCH_FAVORITES_FAILED, ErrorResponseBody>;

type RefreshFavoritesStart = Action<FAVORITES_ACTION_TYPES.REFRESH_FAVORITES_START>;
type RefreshFavoritesSuccess = ActionWithPayload<FAVORITES_ACTION_TYPES.REFRESH_FAVORITES_SUCCESS, Favorites>;
type RefreshFavoritesFailed = ActionWithPayload<FAVORITES_ACTION_TYPES.REFRESH_FAVORITES_FAILED, Error>;

type AddRecipeToFavoritesStart = ActionWithPayload<ADD_RECIPE_TO_FAVORITES_ACTION_TYPES.ADD_RECIPE_TO_FAVORITES_START, number>;
type AddRecipeToFavoritesSuccess = ActionWithPayload<ADD_RECIPE_TO_FAVORITES_ACTION_TYPES.ADD_RECIPE_TO_FAVORITES_SUCCESS, ResponseBody<Favorites>>;
type AddRecipeToFavoritesFailed = ActionWithPayload<ADD_RECIPE_TO_FAVORITES_ACTION_TYPES.ADD_RECIPE_TO_FAVORITES_FAILED, ErrorResponseBody>;

type RemoveRecipeFromFavoritesStart = ActionWithPayload<REMOVE_RECIPE_FROM_FAVORITES_ACTION_TYPES.REMOVE_RECIPE_FROM_FAVORITES_START, number>;
type RemoveRecipeFromFavoritesSuccess = ActionWithPayload<REMOVE_RECIPE_FROM_FAVORITES_ACTION_TYPES.REMOVE_RECIPE_FROM_FAVORITES_SUCCESS, ResponseBody<Favorites>>;
type RemoveRecipeFromFavoritesFailed = ActionWithPayload<REMOVE_RECIPE_FROM_FAVORITES_ACTION_TYPES.REMOVE_RECIPE_FROM_FAVORITES_FAILED, ErrorResponseBody>;

type AddRestaurantToFavoritesStart = ActionWithPayload<ADD_RESTAURANT_TO_FAVORITES_ACTION_TYPES.ADD_RESTAURANT_TO_FAVORITES_START, number>;
type AddRestaurantToFavoritesSuccess = ActionWithPayload<ADD_RESTAURANT_TO_FAVORITES_ACTION_TYPES.ADD_RESTAURANT_TO_FAVORITES_SUCCESS, ResponseBody<Favorites>>;
type AddRestaurantToFavoritesFailed = ActionWithPayload<ADD_RESTAURANT_TO_FAVORITES_ACTION_TYPES.ADD_RESTAURANT_TO_FAVORITES_FAILED, ErrorResponseBody>;

type RemoveRestaurantFromFavoritesStart = ActionWithPayload<REMOVE_RESTAURANT_FROM_FAVORITES_ACTION_TYPES.REMOVE_RESTAURANT_FROM_FAVORITES_START, number>;
type RemoveRestaurantFromFavoritesSuccess = ActionWithPayload<REMOVE_RESTAURANT_FROM_FAVORITES_ACTION_TYPES.REMOVE_RESTAURANT_FROM_FAVORITES_SUCCESS, ResponseBody<Favorites>>;
type RemoveRestaurantFromFavoritesFailed = ActionWithPayload<REMOVE_RESTAURANT_FROM_FAVORITES_ACTION_TYPES.REMOVE_RESTAURANT_FROM_FAVORITES_FAILED, ErrorResponseBody>;

export const fetchFavoritesStart = withMatcher((): FetchFavoritessStart =>
   createAction(FAVORITES_ACTION_TYPES.FETCH_FAVORITES_START));
export const fetchFavoritesSuccess = withMatcher((favorites: ResponseBody<Favorites>): FetchFavoritessSuccess =>
   createAction(FAVORITES_ACTION_TYPES.FETCH_FAVORITES_SUCCESS, favorites));
export const fetchFavoritesFailed = withMatcher((errorResponse: ErrorResponseBody): FetchFavoritessFailed =>
   createAction(FAVORITES_ACTION_TYPES.FETCH_FAVORITES_FAILED, errorResponse));

export const addRecipeToFavoritesStart = withMatcher((recipeId: number): AddRecipeToFavoritesStart =>
   createAction(ADD_RECIPE_TO_FAVORITES_ACTION_TYPES.ADD_RECIPE_TO_FAVORITES_START, recipeId));
export const addRecipeToFavoritesSuccess = withMatcher((favorites: ResponseBody<Favorites>): AddRecipeToFavoritesSuccess =>
   createAction(ADD_RECIPE_TO_FAVORITES_ACTION_TYPES.ADD_RECIPE_TO_FAVORITES_SUCCESS, favorites));
export const addRecipeToFavoritesFailed = withMatcher((errorResponse: ErrorResponseBody): AddRecipeToFavoritesFailed =>
   createAction(ADD_RECIPE_TO_FAVORITES_ACTION_TYPES.ADD_RECIPE_TO_FAVORITES_FAILED, errorResponse));

export const removeRecipeFromFavoritesStart = withMatcher((recipeId: number): RemoveRecipeFromFavoritesStart =>
   createAction(REMOVE_RECIPE_FROM_FAVORITES_ACTION_TYPES.REMOVE_RECIPE_FROM_FAVORITES_START, recipeId));
export const removeRecipeFromFavoritesSuccess = withMatcher((favorites: ResponseBody<Favorites>): RemoveRecipeFromFavoritesSuccess =>
   createAction(REMOVE_RECIPE_FROM_FAVORITES_ACTION_TYPES.REMOVE_RECIPE_FROM_FAVORITES_SUCCESS, favorites));
export const removeRecipeFromFavoritesFailed = withMatcher((errorResponse: ErrorResponseBody): RemoveRecipeFromFavoritesFailed =>
   createAction(REMOVE_RECIPE_FROM_FAVORITES_ACTION_TYPES.REMOVE_RECIPE_FROM_FAVORITES_FAILED, errorResponse));

export const addRestaurantToFavoritesStart = withMatcher((restaurantId: number): AddRestaurantToFavoritesStart =>
   createAction(ADD_RESTAURANT_TO_FAVORITES_ACTION_TYPES.ADD_RESTAURANT_TO_FAVORITES_START, restaurantId));
export const addRestaurantToFavoritesSuccess = withMatcher((favorites: ResponseBody<Favorites>): AddRestaurantToFavoritesSuccess =>
   createAction(ADD_RESTAURANT_TO_FAVORITES_ACTION_TYPES.ADD_RESTAURANT_TO_FAVORITES_SUCCESS, favorites));
export const addRestaurantToFavoritesFailed = withMatcher((errorResponse: ErrorResponseBody): AddRestaurantToFavoritesFailed =>
   createAction(ADD_RESTAURANT_TO_FAVORITES_ACTION_TYPES.ADD_RESTAURANT_TO_FAVORITES_FAILED, errorResponse));

export const removeRestaurantFromFavoritesStart = withMatcher((restaurantId: number): RemoveRestaurantFromFavoritesStart =>
   createAction(REMOVE_RESTAURANT_FROM_FAVORITES_ACTION_TYPES.REMOVE_RESTAURANT_FROM_FAVORITES_START, restaurantId));
export const removeRestaurantFromFavoritesSuccess = withMatcher((favorites: ResponseBody<Favorites>): RemoveRestaurantFromFavoritesSuccess =>
   createAction(REMOVE_RESTAURANT_FROM_FAVORITES_ACTION_TYPES.REMOVE_RESTAURANT_FROM_FAVORITES_SUCCESS, favorites));
export const removeRestaurantFromFavoritesFailed = withMatcher((errorResponse: ErrorResponseBody): RemoveRestaurantFromFavoritesFailed =>
   createAction(REMOVE_RESTAURANT_FROM_FAVORITES_ACTION_TYPES.REMOVE_RESTAURANT_FROM_FAVORITES_FAILED, errorResponse));

// Refresh Favorites
export const refreshFavoritesStart = withMatcher((): RefreshFavoritesStart =>
   createAction(FAVORITES_ACTION_TYPES.REFRESH_FAVORITES_START));
export const refreshFavoritesSucess = withMatcher((favorites: Favorites): RefreshFavoritesSuccess =>
   createAction(FAVORITES_ACTION_TYPES.REFRESH_FAVORITES_SUCCESS, favorites));
export const refreshFavoritesFailed = withMatcher((error: Error): RefreshFavoritesFailed =>
   createAction(FAVORITES_ACTION_TYPES.REFRESH_FAVORITES_FAILED, error));