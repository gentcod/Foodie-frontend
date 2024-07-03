import { AnyAction } from "redux-saga";
import { Favorites } from "../../app/models/favorite";
import { ErrorResponseBody } from "../../app/models/response";
import { 
   addRecipeToFavoritesFailed,
   addRecipeToFavoritesStart,
   addRecipeToFavoritesSuccess,
   addRestaurantToFavoritesFailed,
   addRestaurantToFavoritesStart,
   addRestaurantToFavoritesSuccess,
   fetchFavoritesFailed, 
   fetchFavoritesStart, 
   fetchFavoritesSuccess, 
   refreshFavStatesStart, 
   refreshFavStatesSucess, 
   removeRecipeFromFavoritesFailed,
   removeRecipeFromFavoritesStart,
   removeRecipeFromFavoritesSuccess,
   removeRestaurantFromFavoritesFailed,
   removeRestaurantFromFavoritesStart,
   removeRestaurantFromFavoritesSuccess
} from "./favorites.action";

export type FavoritesState = {
   readonly favorites: Favorites;
   readonly isLoading: boolean;
   readonly errorResponse: ErrorResponseBody | null;
   readonly error: Error | null
};

const FAVORITES_INTITIAL_STATE: FavoritesState = {
   favorites: {} as Favorites,
   isLoading: false,
   errorResponse: null,
   error: null
}

export const favoritesReducer = (state = FAVORITES_INTITIAL_STATE, action = {} as AnyAction): FavoritesState => {
   if (fetchFavoritesStart.match(action))
      return {
         ...state,
         isLoading: true,
      }
   ;
   if (fetchFavoritesSuccess.match(action))
      return {
         ...state,
         favorites: action.payload.data,
         isLoading: false,
      }
   ;
   if (fetchFavoritesFailed.match(action))
      return {
         ...state,
         errorResponse: action.payload,
         isLoading: false,
      }
   ;
   return state
};

export type UpdateFavoritesState = {
   readonly recipeId?: number;
   readonly restaurantId?: number;
   readonly isLoading: boolean;
   readonly responseMessage: string | null;
   readonly errorResponse: ErrorResponseBody | null;
   readonly error: Error | null
}

const UPDATED_BOOKMARKS_INTITIAL_STATE: UpdateFavoritesState = {
   responseMessage: null,
   isLoading: false,
   errorResponse: null,
   error: null
}

//Add Recipe to Favorite
export const addRecipeToFavoritesReducer = (state = UPDATED_BOOKMARKS_INTITIAL_STATE, action = {} as AnyAction): UpdateFavoritesState => {
   if (addRecipeToFavoritesStart.match(action))
      return {
         ...state,
         recipeId: action.payload,
         isLoading: true,
      }
   ;
   if (addRecipeToFavoritesSuccess.match(action))
      return {
         ...state,
         responseMessage: action.payload.message,
         isLoading: false,
      }
   ;
   if (addRecipeToFavoritesFailed.match(action))
      return {
         ...state,
         errorResponse: action.payload,
         isLoading: false,
      }
   ;
   if (refreshFavStatesStart.match(action))
      return {
         ...state,
         isLoading: true,
      }
   ;
   if (refreshFavStatesSucess.match(action))
      return {
         ...state,
         errorResponse: null,
         error: null,
         isLoading: false,
      }
   ;
   return state;
};

//Remove Recipe from Favorite
export const removeRecipeFromFavoritesReducer = (state = UPDATED_BOOKMARKS_INTITIAL_STATE, action = {} as AnyAction): UpdateFavoritesState => {
   if (removeRecipeFromFavoritesStart.match(action))
      return {
         ...state,
         recipeId: action.payload,
         isLoading: true,
      }
   ;
   if (removeRecipeFromFavoritesSuccess.match(action))
      return {
         ...state,
         responseMessage: action.payload.message,
         isLoading: false,
      }
   ;
   if (removeRecipeFromFavoritesFailed.match(action))
      return {
         ...state,
         errorResponse: action.payload,
         isLoading: false,
      }
   ;
   if (refreshFavStatesStart.match(action))
      return {
         ...state,
         isLoading: true,
      }
   ;
   if (refreshFavStatesSucess.match(action))
      return {
         ...state,
         errorResponse: null,
         error: null,
         isLoading: false,
      }
   ;
   return state;
};

//Add Restaurant to Favorite
export const addRestaurantToFavoritesReducer = (state = UPDATED_BOOKMARKS_INTITIAL_STATE, action = {} as AnyAction): UpdateFavoritesState => {
   if (addRestaurantToFavoritesStart.match(action))
      return {
         ...state,
         restaurantId: action.payload,
         isLoading: true,
      }
   ;
   if (addRestaurantToFavoritesSuccess.match(action))
      return {
         ...state,
         responseMessage: action.payload.message,
         isLoading: false,
      }
   ;
   if (addRestaurantToFavoritesFailed.match(action))
      return {
         ...state,
         errorResponse: action.payload,
         isLoading: false,
      }
   ;
   if (refreshFavStatesStart.match(action))
      return {
         ...state,
         isLoading: true,
      }
   ;
   if (refreshFavStatesSucess.match(action))
      return {
         ...state,
         errorResponse: null,
         error: null,
         isLoading: false,
      }
   ;
   return state;
};

//Remove Restaurant from Favorite
export const removeRestaurantFromFavoritesReducer = (state = UPDATED_BOOKMARKS_INTITIAL_STATE, action = {} as AnyAction): UpdateFavoritesState => {
   if (removeRestaurantFromFavoritesStart.match(action))
      return {
         ...state,
         restaurantId: action.payload,
         isLoading: true,
      }
   ;
   if (removeRestaurantFromFavoritesSuccess.match(action))
      return {
         ...state,
         responseMessage: action.payload.message,
         isLoading: false,
      }
   ;
   if (removeRestaurantFromFavoritesFailed.match(action))
      return {
         ...state,
         errorResponse: action.payload,
         isLoading: false,
      }
   ;
   if (refreshFavStatesStart.match(action))
      return {
         ...state,
         isLoading: true,
      }
   ;
   if (refreshFavStatesSucess.match(action))
      return {
         ...state,
         errorResponse: null,
         error: null,
         isLoading: false,
      }
   ;
   return state;
};