import {all, call} from 'redux-saga/effects';
import { recipesSaga } from './recipe/recipe.saga';
import { restaurantsSaga } from './restaurant/restaurant.saga';
import { ratingsSaga } from './rating/rating.saga';
import { userSaga } from './user/user.saga';
import { bookmarksSaga } from './bookmarks/bookmarks.saga';
import { cookieBookmarksSaga } from './cookie-bookmarks/cookie-bookmarks.saga';


export function* rootSaga() {
   yield all([
      call(restaurantsSaga),
      call(recipesSaga), 
      call(ratingsSaga), 
      call(userSaga), 
      call(bookmarksSaga),
      call(cookieBookmarksSaga)
   ]);
}