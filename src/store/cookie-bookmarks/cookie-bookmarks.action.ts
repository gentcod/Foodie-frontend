import { Bookmarks } from "../../app/models/bookmark";
import { ErrorResponseBody, ResponseBody } from "../../app/models/response";
import { Action, ActionWithPayload, createAction, withMatcher } from "../../utils/reducer/reducer.utils";
import {
   ADD_COOKIE_BOOKMARK_ACTION_TYPES,
   COOKIE_BOOKMARKS_ACTION_TYPES,
   REMOVE_COOKIE_BOOKMARKS_ACTION_TYPES
} from "./cookie-bookmarks.types";


type FetchCookieBookmarksStart = Action<COOKIE_BOOKMARKS_ACTION_TYPES.FETCH_BOOKMARKS_START>;
type FetchCookieBookmarksSuccess = ActionWithPayload<COOKIE_BOOKMARKS_ACTION_TYPES.FETCH_BOOKMARKS_SUCCESS, ResponseBody<Bookmarks>>;
type FetchCookieBookmarksFailed = ActionWithPayload<COOKIE_BOOKMARKS_ACTION_TYPES.FETCH_BOOKMARKS_FAILED, ErrorResponseBody | null>;

type RefreshCookieBookmarksStart = Action<COOKIE_BOOKMARKS_ACTION_TYPES.REFRESH_BOOKMARKS_START>;
type RefreshCookieBookmarksSuccess = ActionWithPayload<COOKIE_BOOKMARKS_ACTION_TYPES.REFRESH_BOOKMARKS_SUCCESS, Bookmarks>;
type RefreshCookieBookmarksFailed = ActionWithPayload<COOKIE_BOOKMARKS_ACTION_TYPES.REFRESH_BOOKMARKS_FAILED, Error>;

type AddCookieBookmarkStart = ActionWithPayload<ADD_COOKIE_BOOKMARK_ACTION_TYPES.ADD_BOOKMARK_START, number>;
type AddCookieBookmarkSuccess = ActionWithPayload<ADD_COOKIE_BOOKMARK_ACTION_TYPES.ADD_BOOKMARK_SUCCESS, ResponseBody<Bookmarks>>;
type AddCookieBookmarkFailed = ActionWithPayload<ADD_COOKIE_BOOKMARK_ACTION_TYPES.ADD_BOOKMARK_FAILED, ErrorResponseBody | null>;

type RemoveCookieBookmarksStart = ActionWithPayload<REMOVE_COOKIE_BOOKMARKS_ACTION_TYPES.REMOVE_BOOKMARK_START, number>;
type RemoveCookieBookmarksSuccess = ActionWithPayload<REMOVE_COOKIE_BOOKMARKS_ACTION_TYPES.REMOVE_BOOKMARK_SUCCESS, ResponseBody<Bookmarks>>;
type RemoveCookieBookmarksFailed = ActionWithPayload<REMOVE_COOKIE_BOOKMARKS_ACTION_TYPES.REMOVE_BOOKMARK_FAILED, ErrorResponseBody | null>;

// Fetch Cookie Actions
export const fetchCookieBookmarksStart = withMatcher((): FetchCookieBookmarksStart =>
   createAction(COOKIE_BOOKMARKS_ACTION_TYPES.FETCH_BOOKMARKS_START));
export const fetchCookieBookmarksSuccess = withMatcher((bookmarks: ResponseBody<Bookmarks>): FetchCookieBookmarksSuccess =>
   createAction(COOKIE_BOOKMARKS_ACTION_TYPES.FETCH_BOOKMARKS_SUCCESS, bookmarks));
export const fetchCookieBookmarksFailed = withMatcher((errorResponse: ErrorResponseBody | null): FetchCookieBookmarksFailed =>
   createAction(COOKIE_BOOKMARKS_ACTION_TYPES.FETCH_BOOKMARKS_FAILED, errorResponse));

// Update Cookie Actions
export const addCookieBookmarkStart = withMatcher((recipeId: number): AddCookieBookmarkStart =>
   createAction(ADD_COOKIE_BOOKMARK_ACTION_TYPES.ADD_BOOKMARK_START, recipeId));
export const addCookieBookmarkSuccess = withMatcher((bookmarks: ResponseBody<Bookmarks>): AddCookieBookmarkSuccess =>
   createAction(ADD_COOKIE_BOOKMARK_ACTION_TYPES.ADD_BOOKMARK_SUCCESS, bookmarks));
export const addCookieBookmarkFailed = withMatcher((errorResponse: ErrorResponseBody | null): AddCookieBookmarkFailed =>
   createAction(ADD_COOKIE_BOOKMARK_ACTION_TYPES.ADD_BOOKMARK_FAILED, errorResponse));

export const removeCookieBookmarksStart = withMatcher((recipeId: number): RemoveCookieBookmarksStart =>
   createAction(REMOVE_COOKIE_BOOKMARKS_ACTION_TYPES.REMOVE_BOOKMARK_START, recipeId));
export const removeCookieBookmarksSuccess = withMatcher((bookmarks: ResponseBody<Bookmarks>): RemoveCookieBookmarksSuccess =>
   createAction(REMOVE_COOKIE_BOOKMARKS_ACTION_TYPES.REMOVE_BOOKMARK_SUCCESS, bookmarks));
export const removeCookieBookmarksFailed = withMatcher((errorResponse: ErrorResponseBody | null): RemoveCookieBookmarksFailed =>
   createAction(REMOVE_COOKIE_BOOKMARKS_ACTION_TYPES.REMOVE_BOOKMARK_FAILED, errorResponse));

// Refresh Cookie Actions
export const refreshCookieBookmarksStart = withMatcher((): RefreshCookieBookmarksStart =>
   createAction(COOKIE_BOOKMARKS_ACTION_TYPES.REFRESH_BOOKMARKS_START));
export const refreshCookieBookmarksSucess = withMatcher((bookmarks: Bookmarks): RefreshCookieBookmarksSuccess =>
   createAction(COOKIE_BOOKMARKS_ACTION_TYPES.REFRESH_BOOKMARKS_SUCCESS, bookmarks));
export const refreshCookieBookmarksFailed = withMatcher((error: Error): RefreshCookieBookmarksFailed =>
   createAction(COOKIE_BOOKMARKS_ACTION_TYPES.REFRESH_BOOKMARKS_FAILED, error));
