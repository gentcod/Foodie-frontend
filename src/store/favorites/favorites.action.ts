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
type FetchFavoritesSuccess = ActionWithPayload<FAVORITES_ACTION_TYPES.FETCH_FAVORITES_SUCCESS, ResponseBody<Favorites>>;
type FetchFavoritessFailed = ActionWithPayload<FAVORITES_ACTION_TYPES.FETCH_FAVORITES_FAILED, ErrorResponseBody | null>;

type RefreshFavStatesStart = Action<FAVORITES_ACTION_TYPES.REFRESH_FAVORITES_START>;
type RefreshFavStatesSuccess = Action<FAVORITES_ACTION_TYPES.REFRESH_FAVORITES_SUCCESS>;
type RefreshFavStatesFailed = ActionWithPayload<FAVORITES_ACTION_TYPES.REFRESH_FAVORITES_FAILED, Error>;

type AddRecipeToFavoritesStart = ActionWithPayload<ADD_RECIPE_TO_FAVORITES_ACTION_TYPES.ADD_RECIPE_TO_FAVORITES_START, number>;
type AddRecipeToFavoritesSuccess = ActionWithPayload<ADD_RECIPE_TO_FAVORITES_ACTION_TYPES.ADD_RECIPE_TO_FAVORITES_SUCCESS, ResponseBody<Favorites>>;
type AddRecipeToFavoritesFailed = ActionWithPayload<ADD_RECIPE_TO_FAVORITES_ACTION_TYPES.ADD_RECIPE_TO_FAVORITES_FAILED, ErrorResponseBody | null>;

type RemoveRecipeFromFavoritesStart = ActionWithPayload<REMOVE_RECIPE_FROM_FAVORITES_ACTION_TYPES.REMOVE_RECIPE_FROM_FAVORITES_START, number>;
type RemoveRecipeFromFavoritesSuccess = ActionWithPayload<REMOVE_RECIPE_FROM_FAVORITES_ACTION_TYPES.REMOVE_RECIPE_FROM_FAVORITES_SUCCESS, ResponseBody<Favorites>>;
type RemoveRecipeFromFavoritesFailed = ActionWithPayload<REMOVE_RECIPE_FROM_FAVORITES_ACTION_TYPES.REMOVE_RECIPE_FROM_FAVORITES_FAILED, ErrorResponseBody | null>;

type AddRestaurantToFavoritesStart = ActionWithPayload<ADD_RESTAURANT_TO_FAVORITES_ACTION_TYPES.ADD_RESTAURANT_TO_FAVORITES_START, number>;
type AddRestaurantToFavoritesSuccess = ActionWithPayload<ADD_RESTAURANT_TO_FAVORITES_ACTION_TYPES.ADD_RESTAURANT_TO_FAVORITES_SUCCESS, ResponseBody<Favorites>>;
type AddRestaurantToFavoritesFailed = ActionWithPayload<ADD_RESTAURANT_TO_FAVORITES_ACTION_TYPES.ADD_RESTAURANT_TO_FAVORITES_FAILED, ErrorResponseBody | null>;

type RemoveRestaurantFromFavoritesStart = ActionWithPayload<REMOVE_RESTAURANT_FROM_FAVORITES_ACTION_TYPES.REMOVE_RESTAURANT_FROM_FAVORITES_START, number>;
type RemoveRestaurantFromFavoritesSuccess = ActionWithPayload<REMOVE_RESTAURANT_FROM_FAVORITES_ACTION_TYPES.REMOVE_RESTAURANT_FROM_FAVORITES_SUCCESS, ResponseBody<Favorites>>;
type RemoveRestaurantFromFavoritesFailed = ActionWithPayload<REMOVE_RESTAURANT_FROM_FAVORITES_ACTION_TYPES.REMOVE_RESTAURANT_FROM_FAVORITES_FAILED, ErrorResponseBody | null>;

export const fetchFavoritesStart = withMatcher((): FetchFavoritessStart =>
   createAction(FAVORITES_ACTION_TYPES.FETCH_FAVORITES_START));
export const fetchFavoritesSuccess = withMatcher((favorites: ResponseBody<Favorites>): FetchFavoritesSuccess =>
   createAction(FAVORITES_ACTION_TYPES.FETCH_FAVORITES_SUCCESS, favorites));
export const fetchFavoritesFailed = withMatcher((errorResponse: ErrorResponseBody | null): FetchFavoritessFailed =>
   createAction(FAVORITES_ACTION_TYPES.FETCH_FAVORITES_FAILED, errorResponse));

export const addRecipeToFavoritesStart = withMatcher((recipeId: number): AddRecipeToFavoritesStart =>
   createAction(ADD_RECIPE_TO_FAVORITES_ACTION_TYPES.ADD_RECIPE_TO_FAVORITES_START, recipeId));
export const addRecipeToFavoritesSuccess = withMatcher((favorites: ResponseBody<Favorites>): AddRecipeToFavoritesSuccess =>
   createAction(ADD_RECIPE_TO_FAVORITES_ACTION_TYPES.ADD_RECIPE_TO_FAVORITES_SUCCESS, favorites));
export const addRecipeToFavoritesFailed = withMatcher((errorResponse: ErrorResponseBody | null): AddRecipeToFavoritesFailed =>
   createAction(ADD_RECIPE_TO_FAVORITES_ACTION_TYPES.ADD_RECIPE_TO_FAVORITES_FAILED, errorResponse));

export const removeRecipeFromFavoritesStart = withMatcher((recipeId: number): RemoveRecipeFromFavoritesStart =>
   createAction(REMOVE_RECIPE_FROM_FAVORITES_ACTION_TYPES.REMOVE_RECIPE_FROM_FAVORITES_START, recipeId));
export const removeRecipeFromFavoritesSuccess = withMatcher((favorites: ResponseBody<Favorites>): RemoveRecipeFromFavoritesSuccess =>
   createAction(REMOVE_RECIPE_FROM_FAVORITES_ACTION_TYPES.REMOVE_RECIPE_FROM_FAVORITES_SUCCESS, favorites));
export const removeRecipeFromFavoritesFailed = withMatcher((errorResponse: ErrorResponseBody | null): RemoveRecipeFromFavoritesFailed =>
   createAction(REMOVE_RECIPE_FROM_FAVORITES_ACTION_TYPES.REMOVE_RECIPE_FROM_FAVORITES_FAILED, errorResponse));

export const addRestaurantToFavoritesStart = withMatcher((restaurantId: number): AddRestaurantToFavoritesStart =>
   createAction(ADD_RESTAURANT_TO_FAVORITES_ACTION_TYPES.ADD_RESTAURANT_TO_FAVORITES_START, restaurantId));
export const addRestaurantToFavoritesSuccess = withMatcher((favorites: ResponseBody<Favorites>): AddRestaurantToFavoritesSuccess =>
   createAction(ADD_RESTAURANT_TO_FAVORITES_ACTION_TYPES.ADD_RESTAURANT_TO_FAVORITES_SUCCESS, favorites));
export const addRestaurantToFavoritesFailed = withMatcher((errorResponse: ErrorResponseBody | null): AddRestaurantToFavoritesFailed =>
   createAction(ADD_RESTAURANT_TO_FAVORITES_ACTION_TYPES.ADD_RESTAURANT_TO_FAVORITES_FAILED, errorResponse));

export const removeRestaurantFromFavoritesStart = withMatcher((restaurantId: number): RemoveRestaurantFromFavoritesStart =>
   createAction(REMOVE_RESTAURANT_FROM_FAVORITES_ACTION_TYPES.REMOVE_RESTAURANT_FROM_FAVORITES_START, restaurantId));
export const removeRestaurantFromFavoritesSuccess = withMatcher((favorites: ResponseBody<Favorites>): RemoveRestaurantFromFavoritesSuccess =>
   createAction(REMOVE_RESTAURANT_FROM_FAVORITES_ACTION_TYPES.REMOVE_RESTAURANT_FROM_FAVORITES_SUCCESS, favorites));
export const removeRestaurantFromFavoritesFailed = withMatcher((errorResponse: ErrorResponseBody | null): RemoveRestaurantFromFavoritesFailed =>
   createAction(REMOVE_RESTAURANT_FROM_FAVORITES_ACTION_TYPES.REMOVE_RESTAURANT_FROM_FAVORITES_FAILED, errorResponse));

// Refresh Favorites
export const refreshFavStatesStart = withMatcher((): RefreshFavStatesStart =>
   createAction(FAVORITES_ACTION_TYPES.REFRESH_FAVORITES_START));
export const refreshFavStatesSucess = withMatcher((): RefreshFavStatesSuccess =>
   createAction(FAVORITES_ACTION_TYPES.REFRESH_FAVORITES_SUCCESS));
export const refreshFavStatesFailed = withMatcher((error: Error): RefreshFavStatesFailed =>
   createAction(FAVORITES_ACTION_TYPES.REFRESH_FAVORITES_FAILED, error));