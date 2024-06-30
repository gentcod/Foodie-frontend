import { createSelector } from "reselect";
import { BookmarksState, UpdatedBookmarkState } from "./bookmarks.reducer";
import { RootState } from "../store";

const selectBookmakrsReducer = (state: RootState): BookmarksState => state.bookmarks;
const selectAddBookmarkReducer = (state: RootState): UpdatedBookmarkState => state.adddBookmark;
const selectRemoveBookmarkReducer = (state: RootState): UpdatedBookmarkState => state.removeBookmark;

// Bookmarks Data
export const selectBookmarks = createSelector(
   [selectBookmakrsReducer],
   (bookmarksSlice) => bookmarksSlice.bookmarks
);

export const selectBookmarksIsLoading = createSelector(
   [selectBookmakrsReducer],
   (bookmarksSlice) => bookmarksSlice.isLoading
);

export const selectBookmarksErrorResponse = createSelector(
   [selectBookmakrsReducer],
   (bookmarksSlice) => bookmarksSlice.errorResponse
);

// Add Bookmarks Data
export const selectAddBookmarkRecipeId = createSelector(
   [selectAddBookmarkReducer],
   (bookmarksSlice) => bookmarksSlice.recipeId
);

export const selectAddBookmarksResp = createSelector(
   [selectAddBookmarkReducer],
   (bookmarksSlice) => bookmarksSlice.responseMessage
);

export const selectBookmarksAfterAdd = createSelector(
   [selectAddBookmarkReducer],
   (bookmarksSlice) => bookmarksSlice.bookmarks
);

export const selectAddBookmarksIsLoading = createSelector(
   [selectAddBookmarkReducer],
   (bookmarksSlice) => bookmarksSlice.isLoading
);

export const selectAddBookmarksErrorResp = createSelector(
   [selectAddBookmarkReducer],
   (bookmarksSlice) => bookmarksSlice.errorResponse
);

// Remove Bookmarks Data
export const selectRemoveBookmarkRecipeId = createSelector(
   [selectRemoveBookmarkReducer],
   (bookmarksSlice) => bookmarksSlice.recipeId
);

export const selectRemoveBookmarksResp = createSelector(
   [selectRemoveBookmarkReducer],
   (bookmarksSlice) => bookmarksSlice.responseMessage
);

export const selectBookmarksAfterRemove = createSelector(
   [selectRemoveBookmarkReducer],
   (bookmarksSlice) => bookmarksSlice.bookmarks
);

export const selectRemoveBookmarksIsLoading = createSelector(
   [selectRemoveBookmarkReducer],
   (bookmarksSlice) => bookmarksSlice.isLoading
);

export const selectRemoveBookmarksErrResp = createSelector(
   [selectRemoveBookmarkReducer],
   (bookmarksSlice) => bookmarksSlice.errorResponse
);