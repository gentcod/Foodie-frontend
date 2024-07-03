import { all, call, put, select, takeLatest } from "typed-redux-saga/macro";
import messenger from "../../app/api/messenger";
import { 
   selectAddBookmarkRecipeId,
   selectRemoveBookmarkRecipeId,
   selectBookmarksAfterAdd,
   selectBookmarksAfterRemove
} from "./bookmarks.selector";
import { 
   addBookmarkFailed, 
   addBookmarkSuccess, 
   fetchBookmarksFailed, 
   fetchBookmarksSuccess, 
   refreshBookmarksFailed, 
   refreshBookmarksSucess, 
   removeBookmarkFailed, 
   removeBookmarkSuccess 
} from "./bookmarks.action";
import { selectAccessToken } from "../user/user.selector";
import { ADD_BOOKMARK_ACTION_TYPES, FETCH_BOOKMARKS_ACTION_TYPES, REMOVE_BOOKMARKS_ACTION_TYPES } from "./bookmarks.types";

const { Bookmarks } = messenger;

function* fetchBookmarksAsync() {
   try {
      const accessToken = yield* select(selectAccessToken);
      const bookmarks = yield* call(Bookmarks.list, accessToken);
      yield* put(fetchBookmarksSuccess(bookmarks));
   } catch (error) {
      yield* put(fetchBookmarksFailed((error as any).data));
   }
};

function* onfetchBookmarks() {
   yield* takeLatest(FETCH_BOOKMARKS_ACTION_TYPES.FETCH_BOOKMARKS_START, fetchBookmarksAsync);
}

// Add to Bookmarks
function* addBookmarksAsync() {
   try {
      const accessToken = yield* select(selectAccessToken);
      const recipeId = yield* select(selectAddBookmarkRecipeId);
      const bookmarks = yield* call(Bookmarks.addBookMark, accessToken, recipeId);
      yield* put(addBookmarkSuccess(bookmarks));
   } catch (error) {
      yield* put(addBookmarkFailed((error as any).data));
   }
};

function* onAddBookmark() {
   yield* takeLatest(ADD_BOOKMARK_ACTION_TYPES.ADD_BOOKMARK_START, addBookmarksAsync);
}

// Remove from Bookmarks
function* removeBookmarksAsync() {
   try {
      const accessToken = yield* select(selectAccessToken);
      const recipeId = yield* select(selectRemoveBookmarkRecipeId);
      const bookmarks = yield* call(Bookmarks.deleteBookMark, accessToken, recipeId);
      yield* put(removeBookmarkSuccess(bookmarks));
   } catch (error) {
      yield* put(removeBookmarkFailed((error as any).data));
   }
};

function* onremoveBookmark() {
   yield* takeLatest(REMOVE_BOOKMARKS_ACTION_TYPES.REMOVE_BOOKMARK_START, removeBookmarksAsync);
}

// Refresh Bookmarks
function* refreshBookmarksAfterAdd() {
   try {
      const bookmarks = yield* select(selectBookmarksAfterAdd);
      yield* put(refreshBookmarksSucess(bookmarks));
   } catch (error) {
      yield* put(refreshBookmarksFailed(error as Error));
   }
}

function* onrefreshAddBookmark() {
   yield* takeLatest(FETCH_BOOKMARKS_ACTION_TYPES.REFRESH_BOOKMARKS_START, refreshBookmarksAfterAdd);
}

function* refreshBookmarksAfterRemove() {
   try {
      const bookmarks = yield* select(selectBookmarksAfterRemove);
      yield* put(refreshBookmarksSucess(bookmarks));
   } catch (error) {
      yield* put(refreshBookmarksFailed(error as Error));
   }
}

function* onrefreshRemoveBookmark() {
   yield* takeLatest(FETCH_BOOKMARKS_ACTION_TYPES.REFRESH_BOOKMARKS_START, refreshBookmarksAfterRemove);
}

export function* bookmarksSaga() {
   yield* all([
      call(onfetchBookmarks), 
      call(onAddBookmark), 
      call(onremoveBookmark), 
      call(onrefreshAddBookmark), 
      call(onrefreshRemoveBookmark)
   ]);
}