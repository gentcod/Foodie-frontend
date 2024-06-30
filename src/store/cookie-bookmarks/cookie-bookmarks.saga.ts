import { all, call, put, select, takeLatest } from "typed-redux-saga/macro";
import messenger from "../../app/api/messenger";
import { 
   selectAddCookieBookmarks,
   selectAddCookieBookmarksErrResp,
   selectAddRecipeId,
   selectCookieBookmarksErrResp, 
   selectRemoveCookieBookmarks, 
   selectRemoveCookieBookmarksErrResp, 
   selectRemoveRecipeId, 
} from "./cookie-bookmarks.selector";
import { 
   addBookmarkFailed, 
   addBookmarkSuccess, 
   fetchBookmarksFailed, 
   fetchBookmarksSuccess, 
   refreshBookmarksFailed, 
   refreshBookmarksSucess, 
   removeBookmarkFailed, 
   removeBookmarkSuccess 
} from "./cookie-bookmarks.action";
import { 
   ADD_COOKIE_BOOKMARK_ACTION_TYPES, 
   REMOVE_COOKIE_BOOKMARKS_ACTION_TYPES, 
   COOKIE_BOOKMARKS_ACTION_TYPES 
} from "./cookie-bookmarks.types";

const { CookieBookmarks } = messenger;

function* fetchBookmarksAsync() {
   try {
      const bookmarks = yield* call(CookieBookmarks.list);
      yield* put(fetchBookmarksSuccess(bookmarks));
   } catch (error) {
      const errorResponse = yield* select(selectCookieBookmarksErrResp);
      yield* put(fetchBookmarksFailed(errorResponse!));
   }
};

function* onfetchBookmarks() {
   yield* takeLatest(COOKIE_BOOKMARKS_ACTION_TYPES.FETCH_BOOKMARKS_START, fetchBookmarksAsync);
}

// Add to Bookmarks
function* addBookmarksAsync() {
   try {
      const recipeId = yield* select(selectAddRecipeId);
      const bookmarks = yield* call(CookieBookmarks.addBookMark, recipeId);
      yield* put(addBookmarkSuccess(bookmarks));
   } catch (error) {
      const errorResponse = yield* select(selectAddCookieBookmarksErrResp);
      yield* put(addBookmarkFailed(errorResponse!));
   }
};

function* onAddBookmark() {
   yield* takeLatest(ADD_COOKIE_BOOKMARK_ACTION_TYPES.ADD_BOOKMARK_START, addBookmarksAsync);
};

// Remove fromBookmarks
function* removeBookmarksAsync() {
   try {
      const recipeId = yield* select(selectRemoveRecipeId);
      const bookmarks = yield* call(CookieBookmarks.deleteBookMark, recipeId);
      yield* put(removeBookmarkSuccess(bookmarks));
   } catch (error) {
      const errorResponse = yield* select(selectRemoveCookieBookmarksErrResp);
      yield* put(removeBookmarkFailed(errorResponse!));
   }
};

function* onremoveBookmark() {
   yield* takeLatest(REMOVE_COOKIE_BOOKMARKS_ACTION_TYPES.REMOVE_BOOKMARK_START, removeBookmarksAsync);
};

// Refresh Bookmarks After Add
function* refreshBookmarksAfterAdd() {
   try {
      const bookmarks = yield* select(selectAddCookieBookmarks);
      yield* put(refreshBookmarksSucess(bookmarks));
   } catch (error) {
      yield* put(refreshBookmarksFailed(error as Error));
   }
};

function* onrefreshAddBookmark() {
   yield* takeLatest(COOKIE_BOOKMARKS_ACTION_TYPES.REFRESH_BOOKMARKS_START, refreshBookmarksAfterAdd);
};

// Refresh Bookmarks After Add
function* refreshBookmarksAfterRemove() {
   try {
      const bookmarks = yield* select(selectRemoveCookieBookmarks);
      yield* put(refreshBookmarksSucess(bookmarks));
   } catch (error) {
      yield* put(refreshBookmarksFailed(error as Error));
   }
};

function* onrefreshRemoveBookmark() {
   yield* takeLatest(COOKIE_BOOKMARKS_ACTION_TYPES.REFRESH_BOOKMARKS_START, refreshBookmarksAfterRemove);
};

export function* cookieBookmarksSaga() {
   yield* all([
      call(onfetchBookmarks), 
      call(onAddBookmark), 
      call(onremoveBookmark), 
      call(onrefreshAddBookmark),
      call(onrefreshRemoveBookmark),
   ])
};