import { PaginatedResponse } from "../../app/models/pagination";
import { RecipeRatingList, RecipeRating, RestaurantRatingList, RestaurantRating } from "../../app/models/ratings";
import { ResponseBody } from "../../app/models/response";
import { Action, ActionWithPayload, createAction, withMatcher } from "../../utils/reducer/reducer.utils";
import {
   RECIPES_RATINGS_ACTION_TYPES,
   RESTAURANTS_RATINGS_ACTION_TYPES,
   SINGLE_RATING_ACTION_TYPES
} from "./rating.tpes";

export type FetchRecipeRatingsStart = Action<RECIPES_RATINGS_ACTION_TYPES.FETCH_RECIPES_RATINGS_START>;
export type FetchRecipeRatingsSuccess = ActionWithPayload<RECIPES_RATINGS_ACTION_TYPES.FETCH_RECIPES_RATINGS_SUCCESS, PaginatedResponse<ResponseBody<RecipeRating[]>>>;
export type FetchRecipeRatingsFailed = ActionWithPayload<RECIPES_RATINGS_ACTION_TYPES.FETCH_RECIPES_RATINGS_FAILED, Error>;

export type FetchRestaurantRatingsStart = Action<RESTAURANTS_RATINGS_ACTION_TYPES.FETCH_RESTAURANTS_RATINGS_START>;
export type FetchRestaurantRatingsSuccess = ActionWithPayload<RESTAURANTS_RATINGS_ACTION_TYPES.FETCH_RESTAURANTS_RATINGS_SUCCESS, PaginatedResponse<ResponseBody<RestaurantRating[]>>>;
export type FetchRestaurantRatingsFailed = ActionWithPayload<RESTAURANTS_RATINGS_ACTION_TYPES.FETCH_RESTAURANTS_RATINGS_FAILED, Error>;

export type FetchSingleRatingStart = ActionWithPayload<SINGLE_RATING_ACTION_TYPES.FETCH_SINGLE_RATING_START, number>;
export type FetchSingleRatingSuccess = ActionWithPayload<SINGLE_RATING_ACTION_TYPES.FETCH_SINGLE_RATING_SUCCESS, ResponseBody<RecipeRatingList | RestaurantRatingList>>;
export type FetchSingleRatingFailed = ActionWithPayload<SINGLE_RATING_ACTION_TYPES.FETCH_SINGLE_RATING_FAILED, Error>;

export const fetchRecipeRatingsStart = withMatcher((): FetchRecipeRatingsStart =>
   createAction(RECIPES_RATINGS_ACTION_TYPES.FETCH_RECIPES_RATINGS_START));
export const fetchRecipeRatingsSuccess = withMatcher((recipesRatings: PaginatedResponse<ResponseBody<RecipeRating[]>>): FetchRecipeRatingsSuccess =>
   createAction(RECIPES_RATINGS_ACTION_TYPES.FETCH_RECIPES_RATINGS_SUCCESS, recipesRatings));
export const fetchRecipeRatingsFailed = withMatcher((error: Error): FetchRecipeRatingsFailed =>
   createAction(RECIPES_RATINGS_ACTION_TYPES.FETCH_RECIPES_RATINGS_FAILED, error));

export const fetchRestaurantRatingsStart = withMatcher((): FetchRestaurantRatingsStart =>
   createAction(RESTAURANTS_RATINGS_ACTION_TYPES.FETCH_RESTAURANTS_RATINGS_START));
export const fetchRestaurantRatingsSuccess = withMatcher((restaurantsRatings: PaginatedResponse<ResponseBody<RestaurantRating[]>>): FetchRestaurantRatingsSuccess =>
   createAction(RESTAURANTS_RATINGS_ACTION_TYPES.FETCH_RESTAURANTS_RATINGS_SUCCESS, restaurantsRatings));
export const fetchRestaurantRatingsFailed = withMatcher((error: Error): FetchRestaurantRatingsFailed =>
   createAction(RESTAURANTS_RATINGS_ACTION_TYPES.FETCH_RESTAURANTS_RATINGS_FAILED, error));

export const fetchSingleRatingStart = withMatcher((entityId: number): FetchSingleRatingStart =>
   createAction(SINGLE_RATING_ACTION_TYPES.FETCH_SINGLE_RATING_START, entityId));
export const fetchSingleRatingSuccess = withMatcher((singleRatings: ResponseBody<RecipeRatingList | RestaurantRatingList>): FetchSingleRatingSuccess =>
   createAction(SINGLE_RATING_ACTION_TYPES.FETCH_SINGLE_RATING_SUCCESS, singleRatings));
export const fetchSingleRatingFailed = withMatcher((error: Error): FetchSingleRatingFailed =>
   createAction(SINGLE_RATING_ACTION_TYPES.FETCH_SINGLE_RATING_FAILED, error));

