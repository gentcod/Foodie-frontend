import { AnyAction } from "redux-saga";
import { fetchRecipesFailed } from "../recipe/recipe.action";
import {
   fetchRecipeRatingsStart,
   fetchRecipeRatingsSuccess,
   fetchRestaurantRatingsFailed,
   fetchRestaurantRatingsStart, 
   fetchRestaurantRatingsSuccess, 
   fetchSingleRatingFailed, 
   fetchSingleRatingStart, 
   fetchSingleRatingSuccess
} from "./rating.action";
import { RecipeRatingList, RecipeRating, RestaurantRatingList, RestaurantRating } from "../../app/models/ratings";
import { MetaData } from "../../app/models/pagination";

//Recipes Ratings
export type RecipesRatingsState = {
   readonly recipeRating: RecipeRating[];
   readonly metaData: MetaData;
   readonly isLoading: boolean;
   readonly error?: Error | null;
};

const RECIPES_RATINGS_INITIAL_STATE: RecipesRatingsState = {
   recipeRating: [],
   metaData: {
      currentPage: 0,
      pageSize: 0,
      totalCount: 0,
      totalPages: 0,
   },
   isLoading: false,
   error: null,
};

export const recipesRatingsReducer = (state = RECIPES_RATINGS_INITIAL_STATE, action = {} as AnyAction): RecipesRatingsState => {
   if (fetchRecipeRatingsStart.match(action))
      return {
         ...state,
         isLoading: true,
      }
   if (fetchRecipeRatingsSuccess.match(action))
      return {
         ...state,
         recipeRating: action.payload.items.data,
         metaData: action.payload.metaData,
         isLoading: false,
      }
   if (fetchRecipesFailed.match(action))
      return {
         ...state,
         error: action.payload,
         isLoading: false,
      }
   return state;
};

//Restaurants Ratings
export type RestaurantsRatingsState = {
   readonly restaurantRating: RestaurantRating[];
   readonly metaData: MetaData;
   readonly isLoading: boolean;
   readonly error?: Error | null;
};

const RESTAURANTS_RATINGS_INITIAL_STATE: RestaurantsRatingsState = {
   restaurantRating: [],
   metaData: {
      currentPage: 0,
      pageSize: 0,
      totalCount: 0,
      totalPages: 0,
   },
   isLoading: false,
   error: null,
};

export const restaurantsRatingsReducer = (state = RESTAURANTS_RATINGS_INITIAL_STATE, action = {} as AnyAction): RestaurantsRatingsState => {
   if (fetchRestaurantRatingsStart.match(action))
      return {
         ...state,
         isLoading: true,
      }
   if (fetchRestaurantRatingsSuccess.match(action))
      return {
         ...state,
         restaurantRating: action.payload.items.data,
         metaData: action.payload.metaData,
         isLoading: false,
      }
   if (fetchRestaurantRatingsFailed.match(action))
      return {
         ...state,
         error: action.payload,
         isLoading: false,
      }
   return state;
};

export type SingleRatingState = {
   readonly entityId: number;
   readonly rating: RecipeRatingList | RestaurantRatingList;
   readonly isLoading: boolean;
   readonly error?: Error | null;
};

const SINGLE_RATING_INITIAL_STATE: SingleRatingState = {
   entityId: 0,
   rating: {} as RecipeRatingList | RestaurantRatingList,
   isLoading: false,
   error: null
};

export const singleRatingReducer = (state = SINGLE_RATING_INITIAL_STATE, action = {} as AnyAction): SingleRatingState => {
   if (fetchSingleRatingStart.match(action))
      return {
         ...state,
         entityId: action.payload,
         isLoading: true,
      }
   if (fetchSingleRatingSuccess.match(action))
      return {
         ...state,
         rating: action.payload.data,
         isLoading: false,
      }
   if (fetchSingleRatingFailed.match(action))
      return {
         ...state,
         error: action.payload,
         isLoading: false,
      }
   return state;
}