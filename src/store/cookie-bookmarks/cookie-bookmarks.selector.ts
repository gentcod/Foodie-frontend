import { createSelector } from "reselect";
import { CookieBookmarksState, UpdatedCookieBookmarkSate } from "./cookie-bookmarks.reducer";
import { RootState } from "../store";

const selectBookmakrsReducer = (state: RootState): CookieBookmarksState => state.cookieBookmark;
const selectAddBookmarkReducer = (state: RootState): UpdatedCookieBookmarkSate => state.addcookiebookmark;
const selectRemoveBookmarkReducer = (state: RootState): UpdatedCookieBookmarkSate => state.removeCookiebookmark;

// Bookmarks Data
export const selectCookieBookmarks = createSelector(
   [selectBookmakrsReducer],
   (bookmarksSlice) => bookmarksSlice.bookmarks
);

export const selectCookieBookmarksIsLoading = createSelector(
   [selectBookmakrsReducer],
   (bookmarksSlice) => bookmarksSlice.isLoading
);

export const selectCookieBookmarksErrResp = createSelector(
   [selectBookmakrsReducer],
   (bookmarksSlice) => bookmarksSlice.errorResponse
);

// Add Bookmarks Data
export const selectAddRecipeId = createSelector(
   [selectAddBookmarkReducer],
   (bookmarksSlice) => bookmarksSlice.recipeId
);

export const selectAddCookieBookmarkResp = createSelector(
   [selectAddBookmarkReducer],
   (bookmarksSlice) => bookmarksSlice.responseMessage
);

export const selectAddCookieBookmarks = createSelector(
   [selectAddBookmarkReducer],
   (bookmarksSlice) => bookmarksSlice.bookmarks
);

export const selectAddCookieBookmarksIsLoading = createSelector(
   [selectAddBookmarkReducer],
   (bookmarksSlice) => bookmarksSlice.isLoading
);

export const selectAddCookieBookmarksErrResp = createSelector(
   [selectAddBookmarkReducer],
   (bookmarksSlice) => bookmarksSlice.errorResponse
);

// Remove Bookmarks Data
export const selectRemoveRecipeId = createSelector(
   [selectRemoveBookmarkReducer],
   (bookmarksSlice) => bookmarksSlice.recipeId
);

export const selectRemoveCookieBookmarkResp = createSelector(
   [selectRemoveBookmarkReducer],
   (bookmarksSlice) => bookmarksSlice.responseMessage
);

export const selectRemoveCookieBookmarks = createSelector(
   [selectRemoveBookmarkReducer],
   (bookmarksSlice) => bookmarksSlice.bookmarks
);

export const selectRemoveCookieBookmarksIsLoading = createSelector(
   [selectRemoveBookmarkReducer],
   (bookmarksSlice) => bookmarksSlice.isLoading
);

export const selectRemoveCookieBookmarksErrResp = createSelector(
   [selectRemoveBookmarkReducer],
   (bookmarksSlice) => bookmarksSlice.errorResponse
);