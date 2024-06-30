import { AnyAction } from "redux";
import { Bookmarks } from "../../app/models/bookmark";
import { ErrorResponseBody } from "../../app/models/response";
import {
   addBookmarkFailed,
   addBookmarkStart,
   addBookmarkSuccess,
   fetchBookmarksFailed,
   fetchBookmarksStart, 
   fetchBookmarksSuccess, 
   refreshBookmarksFailed, 
   refreshBookmarksStart, 
   refreshBookmarksSucess, 
   removeBookmarkFailed, 
   removeBookmarkStart, 
   removeBookmarkSuccess
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
   if (fetchBookmarksStart.match(action))
      return {
         ...state,
         isLoading: true,
      }

   if (fetchBookmarksSuccess.match(action))
      return {
         ...state,
         bookmarks: action.payload.data,
         isLoading: false,
      }

   if (fetchBookmarksFailed.match(action))
      return {
         ...state,
         errorResponse: action.payload,
         isLoading: false,
      }

   if (refreshBookmarksStart.match(action))
      return {
         ...state,
         isLoading: true,
      }

   if (refreshBookmarksSucess.match(action))
      return {
         ...state,
         bookmarks: action.payload,
         isLoading: false,
      }

   if (refreshBookmarksFailed.match(action))
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
   if (addBookmarkStart.match(action))
      return {
         ...state,
         recipeId: action.payload,
         isLoading: true,
      }

   if (addBookmarkSuccess.match(action))
      return {
         ...state,
         responseMessage: action.payload.message,
         bookmarks: action.payload.data,
         isLoading: false,
      }

   if (addBookmarkFailed.match(action))
      return {
         ...state,
         errorResponse: action.payload,
         isLoading: false,
      }
   return state
};

//Remove Bookmark
export const removeCookiebookmarkReducer = (state = UPDATED_BOOKMARKS_INTITIAL_STATE, action = {} as AnyAction): UpdatedCookieBookmarkSate => {
   if (removeBookmarkStart.match(action))
      return {
         ...state,
         recipeId: action.payload,
         isLoading: true,
      }

   if (removeBookmarkSuccess.match(action))
      return {
         ...state,
         responseMessage: action.payload.message,
         bookmarks: action.payload.data,
         isLoading: false,
      }

   if (removeBookmarkFailed.match(action))
      return {
         ...state,
         errorResponse: action.payload,
         isLoading: false,
      }
   return state
};