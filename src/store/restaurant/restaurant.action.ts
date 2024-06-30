import { createAction, ActionWithPayload, withMatcher } from "../../utils/reducer/reducer.utilities";
import { RESTAURANT_ACTION_TYPES, RESTAURANT_BYID_ACTION_TYPES } from "./restaurant.types";
import { Restaurant } from "../../app/models/restaurant";
import { PaginatedResponse } from "../../app/models/pagination";
import { ResponseBody } from "../../app/models/response";

type FetchRestaurantsStart = ActionWithPayload<RESTAURANT_ACTION_TYPES.FETCH_RESTAURANT_START, string | undefined>;
type FetchRestaurantsSuccess = ActionWithPayload<RESTAURANT_ACTION_TYPES.FETCH_RESTAURANT_SUCCESS, PaginatedResponse<ResponseBody<Restaurant[]>>>;
type FetchRestaurantsFailed = ActionWithPayload<RESTAURANT_ACTION_TYPES.FETCH_RESTAURANT_FAILED, Error>;

type FetchRestaurantByIdStart = ActionWithPayload<RESTAURANT_BYID_ACTION_TYPES.FETCH_RESTAURANT_BYID_START, number>;
type FetchRestaurantByIdSuccess = ActionWithPayload<RESTAURANT_BYID_ACTION_TYPES.FETCH_RESTAURANT_BYID_SUCCESS, ResponseBody<Restaurant>>;
type FetchRestaurantByIdFailed = ActionWithPayload<RESTAURANT_BYID_ACTION_TYPES.FETCH_RESTAURANT_BYID_FAILED, Error>;


export const fetchRestaurantsStart = withMatcher((queryString?: string): FetchRestaurantsStart => 
   createAction(RESTAURANT_ACTION_TYPES.FETCH_RESTAURANT_START, queryString));
export const fetchRestaurantsSuccess = withMatcher((restaurants: PaginatedResponse<ResponseBody<Restaurant[]>>): FetchRestaurantsSuccess => 
   createAction(RESTAURANT_ACTION_TYPES.FETCH_RESTAURANT_SUCCESS, restaurants));
export const fetchRestaurantsFailed = withMatcher((error: Error): FetchRestaurantsFailed => 
   createAction(RESTAURANT_ACTION_TYPES.FETCH_RESTAURANT_FAILED, error));

export const fetchRestaurantByIdStart = withMatcher((restaurantId: number) : FetchRestaurantByIdStart => 
   createAction(RESTAURANT_BYID_ACTION_TYPES.FETCH_RESTAURANT_BYID_START, restaurantId));
export const fetchRestaurantByIdSuccess = withMatcher((restaurant: ResponseBody<Restaurant>) : FetchRestaurantByIdSuccess => 
   createAction(RESTAURANT_BYID_ACTION_TYPES.FETCH_RESTAURANT_BYID_SUCCESS, restaurant));
export const fetchRestaurantByIdFailed = withMatcher((error: Error) : FetchRestaurantByIdFailed => 
   createAction(RESTAURANT_BYID_ACTION_TYPES.FETCH_RESTAURANT_BYID_FAILED, error));

// TODO: Include functionalities for Error Response