import { all, call, put, select, takeLatest } from "typed-redux-saga/macro";
import messenger from "../../app/api/messenger";
import { 
   selectAddCookieBookmarks,
   selectAddRecipeId,
   selectRemoveCookieBookmarks, 
   selectRemoveRecipeId, 
} from "./cookie-bookmarks.selector";
import { 
   addCookieBookmarkFailed, 
   addCookieBookmarkSuccess, 
   fetchCookieBookmarksFailed, 
   fetchCookieBookmarksSuccess, 
   refreshCookieBookmarksFailed, 
   refreshCookieBookmarksSucess, 
   removeCookieBookmarksFailed, 
   removeCookieBookmarksSuccess 
} from "./cookie-bookmarks.action";
import { 
   ADD_COOKIE_BOOKMARK_ACTION_TYPES, 
   REMOVE_COOKIE_BOOKMARKS_ACTION_TYPES, 
   COOKIE_BOOKMARKS_ACTION_TYPES 
} from "./cookie-bookmarks.types";

const { CookieBookmarks } = messenger;

function* fetchCookieBookmarksAsync() {
   try {
      const bookmarks = yield* call(CookieBookmarks.list);
      yield* put(fetchCookieBookmarksSuccess(bookmarks));
   } catch (error) {
      yield* put(fetchCookieBookmarksFailed((error as any).data));
   }
};

function* onfetchCookieBookmarks() {
   yield* takeLatest(COOKIE_BOOKMARKS_ACTION_TYPES.FETCH_BOOKMARKS_START, fetchCookieBookmarksAsync);
}

// Add to Bookmarks
function* addBookmarksAsync() {
   try {
      const recipeId = yield* select(selectAddRecipeId);
      const bookmarks = yield* call(CookieBookmarks.addBookMark, recipeId);
      yield* put(addCookieBookmarkSuccess(bookmarks));
   } catch (error) {
      yield* put(addCookieBookmarkFailed((error as any).data));
   }
};

function* onAddBookmark() {
   yield* takeLatest(ADD_COOKIE_BOOKMARK_ACTION_TYPES.ADD_BOOKMARK_START, addBookmarksAsync);
};

// Remove fromBookmarks
function* removeCookieBookmarksAsync() {
   try {
      const recipeId = yield* select(selectRemoveRecipeId);
      const bookmarks = yield* call(CookieBookmarks.deleteBookMark, recipeId);
      yield* put(removeCookieBookmarksSuccess(bookmarks));
   } catch (error) {
      yield* put(removeCookieBookmarksFailed((error as any).data));
   }
};

function* onremoveCookieBookmark() {
   yield* takeLatest(REMOVE_COOKIE_BOOKMARKS_ACTION_TYPES.REMOVE_BOOKMARK_START, removeCookieBookmarksAsync);
};

// Refresh Bookmarks After Add
function* refreshCookieBookmarksAfterAdd() {
   try {
      const bookmarks = yield* select(selectAddCookieBookmarks);
      yield* put(refreshCookieBookmarksSucess(bookmarks));
   } catch (error) {
      yield* put(refreshCookieBookmarksFailed(error as Error));
   }
};

function* onrefreshAddBookmark() {
   yield* takeLatest(COOKIE_BOOKMARKS_ACTION_TYPES.REFRESH_BOOKMARKS_START, refreshCookieBookmarksAfterAdd);
};

// Refresh Bookmarks After Add
function* refreshCookieBookmarksAfterRemove() {
   try {
      const bookmarks = yield* select(selectRemoveCookieBookmarks);
      yield* put(refreshCookieBookmarksSucess(bookmarks));
   } catch (error) {
      yield* put(refreshCookieBookmarksFailed(error as Error));
   }
};

function* onrefreshRemoveCookieBookmark() {
   yield* takeLatest(COOKIE_BOOKMARKS_ACTION_TYPES.REFRESH_BOOKMARKS_START, refreshCookieBookmarksAfterRemove);
};

export function* cookieBookmarksSaga() {
   yield* all([
      call(onfetchCookieBookmarks), 
      call(onAddBookmark), 
      call(onremoveCookieBookmark), 
      call(onrefreshAddBookmark),
      call(onrefreshRemoveCookieBookmark),
   ])
};