import { Bookmarks } from "../../app/models/bookmark";
import { } from "../../app/models/pagination";
import { ErrorResponseBody, ResponseBody } from "../../app/models/response";
import { Action, ActionWithPayload, createAction, withMatcher } from "../../utils/reducer/reducer.utils";
import {
   ADD_BOOKMARK_ACTION_TYPES,
   FETCH_BOOKMARKS_ACTION_TYPES,
   REMOVE_BOOKMARKS_ACTION_TYPES
} from "./bookmarks.types";

type FetchBookmarksStart = Action<FETCH_BOOKMARKS_ACTION_TYPES.FETCH_BOOKMARKS_START>;
type FetchBookmarksSuccess = ActionWithPayload<FETCH_BOOKMARKS_ACTION_TYPES.FETCH_BOOKMARKS_SUCCESS, ResponseBody<Bookmarks>>;
type FetchBookmarksFailed = ActionWithPayload<FETCH_BOOKMARKS_ACTION_TYPES.FETCH_BOOKMARKS_FAILED, ErrorResponseBody>;

type RefreshBookmarksStart = Action<FETCH_BOOKMARKS_ACTION_TYPES.REFRESH_BOOKMARKS_START>;
type RefreshBookmarksSuccess = ActionWithPayload<FETCH_BOOKMARKS_ACTION_TYPES.REFRESH_BOOKMARKS_SUCCESS, Bookmarks>;
type RefreshBookmarksFailed = ActionWithPayload<FETCH_BOOKMARKS_ACTION_TYPES.REFRESH_BOOKMARKS_FAILED, Error>;

type AddBookmarkStart = ActionWithPayload<ADD_BOOKMARK_ACTION_TYPES.ADD_BOOKMARK_START, number>;
type AddBookmarkSuccess = ActionWithPayload<ADD_BOOKMARK_ACTION_TYPES.ADD_BOOKMARK_SUCCESS, ResponseBody<Bookmarks>>;
type AddBookmarkFailed = ActionWithPayload<ADD_BOOKMARK_ACTION_TYPES.ADD_BOOKMARK_FAILED, ErrorResponseBody>;

type RemoveBookmarkStart = ActionWithPayload<REMOVE_BOOKMARKS_ACTION_TYPES.REMOVE_BOOKMARK_START, number>;
type RemoveBookmarkSuccess = ActionWithPayload<REMOVE_BOOKMARKS_ACTION_TYPES.REMOVE_BOOKMARK_SUCCESS, ResponseBody<Bookmarks>>;
type RemoveBookmarkFailed = ActionWithPayload<REMOVE_BOOKMARKS_ACTION_TYPES.REMOVE_BOOKMARK_FAILED, ErrorResponseBody>;

export const fetchBookmarksStart = withMatcher((): FetchBookmarksStart =>
   createAction(FETCH_BOOKMARKS_ACTION_TYPES.FETCH_BOOKMARKS_START));
export const fetchBookmarksSuccess = withMatcher((bookmarks: ResponseBody<Bookmarks>): FetchBookmarksSuccess =>
   createAction(FETCH_BOOKMARKS_ACTION_TYPES.FETCH_BOOKMARKS_SUCCESS, bookmarks));
export const fetchBookmarksFailed = withMatcher((errorResponse: ErrorResponseBody): FetchBookmarksFailed =>
   createAction(FETCH_BOOKMARKS_ACTION_TYPES.FETCH_BOOKMARKS_FAILED, errorResponse));

export const addBookmarkStart = withMatcher((recipeId: number): AddBookmarkStart =>
   createAction(ADD_BOOKMARK_ACTION_TYPES.ADD_BOOKMARK_START, recipeId));
export const addBookmarkSuccess = withMatcher((bookmarks: ResponseBody<Bookmarks>): AddBookmarkSuccess =>
   createAction(ADD_BOOKMARK_ACTION_TYPES.ADD_BOOKMARK_SUCCESS, bookmarks));
export const addBookmarkFailed = withMatcher((errorResponse: ErrorResponseBody): AddBookmarkFailed =>
   createAction(ADD_BOOKMARK_ACTION_TYPES.ADD_BOOKMARK_FAILED, errorResponse));

export const removeBookmarkStart = withMatcher((recipeId: number): RemoveBookmarkStart =>
   createAction(REMOVE_BOOKMARKS_ACTION_TYPES.REMOVE_BOOKMARK_START, recipeId));
export const removeBookmarkSuccess = withMatcher((bookmarks: ResponseBody<Bookmarks>): RemoveBookmarkSuccess =>
   createAction(REMOVE_BOOKMARKS_ACTION_TYPES.REMOVE_BOOKMARK_SUCCESS, bookmarks));
export const removeBookmarkFailed = withMatcher((errorResponse: ErrorResponseBody): RemoveBookmarkFailed =>
   createAction(REMOVE_BOOKMARKS_ACTION_TYPES.REMOVE_BOOKMARK_FAILED, errorResponse));

export const refreshBookmarksStart = withMatcher((): RefreshBookmarksStart =>
   createAction(FETCH_BOOKMARKS_ACTION_TYPES.REFRESH_BOOKMARKS_START));
export const refreshBookmarksSucess = withMatcher((bookmarks: Bookmarks): RefreshBookmarksSuccess =>
   createAction(FETCH_BOOKMARKS_ACTION_TYPES.REFRESH_BOOKMARKS_SUCCESS, bookmarks));
export const refreshBookmarksFailed = withMatcher((error: Error): RefreshBookmarksFailed =>
   createAction(FETCH_BOOKMARKS_ACTION_TYPES.REFRESH_BOOKMARKS_FAILED, error));
