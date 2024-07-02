import { AnyAction } from "redux";
import { Bookmarks } from "../../app/models/bookmark";
import { ErrorResponseBody } from "../../app/models/response";
import {
   addCookieBookmarkFailed,
   addCookieBookmarkStart,
   addCookieBookmarkSuccess,
   fetchCookieBookmarksFailed,
   fetchCookieBookmarksStart, 
   fetchCookieBookmarksSuccess, 
   refreshCookieBookmarksFailed, 
   refreshCookieBookmarksStart, 
   refreshCookieBookmarksSucess, 
   removeCookieBookmarksFailed, 
   removeCookieBookmarksStart, 
   removeCookieBookmarksSuccess
} from "./cookie-bookmarks.action";

export type CookieBookmarksState = {
   readonly bookmarks: Bookmarks;
   readonly isLoading: boolean;
   readonly errorResponse: ErrorResponseBody | null;
   readonly error: Error | null
};

const BOOKMARKS_INTITIAL_STATE: CookieBookmarksState = {
   bookmarks: {} as Bookmarks,
   isLoading: false,
   errorResponse: null,
   error: null
}

export const cookieBookmarksReducer = (state = BOOKMARKS_INTITIAL_STATE, action = {} as AnyAction): CookieBookmarksState => {
   if (fetchCookieBookmarksStart.match(action))
      return {
         ...state,
         isLoading: true,
      }

   if (fetchCookieBookmarksSuccess.match(action))
      return {
         ...state,
         bookmarks: action.payload.data,
         isLoading: false,
      }

   if (fetchCookieBookmarksFailed.match(action))
      return {
         ...state,
         errorResponse: action.payload,
         isLoading: false,
      }

   if (refreshCookieBookmarksStart.match(action))
      return {
         ...state,
         isLoading: true,
      }

   if (refreshCookieBookmarksSucess.match(action))
      return {
         ...state,
         bookmarks: action.payload,
         isLoading: false,
      }

   if (refreshCookieBookmarksFailed.match(action))
      return {
         ...state,
         error: action.payload,
         isLoading: false,
      }
   return state
};

export type UpdatedCookieBookmarkSate = {
   readonly recipeId: number;
   readonly bookmarks: Bookmarks;
   readonly isLoading: boolean;
   readonly responseMessage: string | null;
   readonly errorResponse: ErrorResponseBody | null;
}

const UPDATED_BOOKMARKS_INTITIAL_STATE: UpdatedCookieBookmarkSate = {
   recipeId: 0,
   responseMessage: null,
   bookmarks: {} as Bookmarks,
   isLoading: false,
   errorResponse: null
}

//Add Bookmark
export const addcookiebookmarkReducer = (state = UPDATED_BOOKMARKS_INTITIAL_STATE, action = {} as AnyAction): UpdatedCookieBookmarkSate => {
   if (addCookieBookmarkStart.match(action))
      return {
         ...state,
         recipeId: action.payload,
         isLoading: true,
      }

   if (addCookieBookmarkSuccess.match(action))
      return {
         ...state,
         responseMessage: action.payload.message,
         bookmarks: action.payload.data,
         isLoading: false,
      }

   if (addCookieBookmarkFailed.match(action))
      return {
         ...state,
         errorResponse: action.payload,
         isLoading: false,
      }
   return state
};

//Remove Bookmark
export const removeCookiebookmarkReducer = (state = UPDATED_BOOKMARKS_INTITIAL_STATE, action = {} as AnyAction): UpdatedCookieBookmarkSate => {
   if (removeCookieBookmarksStart.match(action))
      return {
         ...state,
         recipeId: action.payload,
         isLoading: true,
      }

   if (removeCookieBookmarksSuccess.match(action))
      return {
         ...state,
         responseMessage: action.payload.message,
         bookmarks: action.payload.data,
         isLoading: false,
      }

   if (removeCookieBookmarksFailed.match(action))
      return {
         ...state,
         errorResponse: action.payload,
         isLoading: false,
      }
   return state
};