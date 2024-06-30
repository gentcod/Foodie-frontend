import { AnyAction } from "redux-saga";
import { fetchRestaurantsStart, fetchRestaurantsSuccess, fetchRestaurantsFailed, fetchRestaurantByIdStart, fetchRestaurantByIdSuccess, fetchRestaurantByIdFailed } from "./restaurant.action";
import { Restaurant } from "../../app/models/restaurant";
import { MetaData } from "../../app/models/pagination";

// Restaurants
export type RestaurantsState = {
   readonly queryString?: string;
   readonly restaurants: Restaurant[];
   readonly metaData: MetaData;
   readonly isLoading: boolean;
   readonly error?: Error | null;
}

const RESTAURANT_INITIAL_STATE: RestaurantsState = {
   queryString: "",
   restaurants: [],
   metaData: {
      currentPage: 0,
      pageSize: 0,
      totalCount: 0,
      totalPages: 0,
   },
   isLoading: false,
   error: null,
}

export const restaurantReducer = (state = RESTAURANT_INITIAL_STATE, action = {} as AnyAction): RestaurantsState => {
   if (fetchRestaurantsStart.match(action)) {
      return {
         ...state,
         queryString: action.payload,
         isLoading: true,
      }
   }
   if (fetchRestaurantsSuccess.match(action)) {
      return {
         ...state,
         restaurants: action.payload.items.data,
         metaData: action.payload.metaData,
         isLoading: false,
      }
   }
   if (fetchRestaurantsFailed.match(action)) {
      return {
         ...state,
         error: action.payload,
         isLoading: false,
      }
   }
   return state;
}

//Restaurant By Id
export type RestaurantByIdState = {
   readonly restaurantId?: number;
   readonly restaurantById: Restaurant;
   readonly isLoading: boolean;
   readonly error?: Error | null;
   readonly isActive: boolean;
};

const RESTAURANT_BYID_INITIAL_STATE: RestaurantByIdState = {
   restaurantById: {} as Restaurant,
   isLoading: false,
   error: null,
   isActive: false,
};

export const restaurantByIdReducer = (state = RESTAURANT_BYID_INITIAL_STATE, action = {} as AnyAction): RestaurantByIdState => {
   if (fetchRestaurantByIdStart.match(action)) {
      return {
         ...state,
         restaurantId: action.payload,
         isLoading: true,
         isActive: false,
      }
   }

   if (fetchRestaurantByIdSuccess.match(action)) {
      return {
         ...state,
         restaurantById: action.payload.data,
         isActive: true,
         isLoading: false,
      }
   }

   if (fetchRestaurantByIdFailed.match(action)) {
      return {
         ...state,
         error: action.payload,
         isLoading: false,
      }
   }
   return state;
};

// TODO: Include functionalities for Error Response