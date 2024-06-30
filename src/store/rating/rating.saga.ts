import { all, call, put, select, takeLatest } from "typed-redux-saga/macro";
import messenger from '../../app/api/messenger';
import { fetchRecipeRatingsFailed, fetchRecipeRatingsSuccess, fetchRestaurantRatingsFailed, fetchRestaurantRatingsSuccess, fetchSingleRatingFailed, fetchSingleRatingSuccess } from './rating.action';
import { RECIPES_RATINGS_ACTION_TYPES, RESTAURANTS_RATINGS_ACTION_TYPES, SINGLE_RATING_ACTION_TYPES } from "./rating.tpes";
import { selectRatingEntityId } from "./rating.selector";

const { Rating } = messenger;

// Recipes Ratings Saga
function* fetchRecipesRatingsAsync() {
   try {
      const recipesRatings = yield* call(Rating.getRecipesRatings);
      yield* put(fetchRecipeRatingsSuccess(recipesRatings));
   } catch (error) {
      yield put(fetchRecipeRatingsFailed(error as Error));
   }
};

function* onFetchRecipesRatings() {
   yield* takeLatest(RECIPES_RATINGS_ACTION_TYPES.FETCH_RECIPES_RATINGS_START, fetchRecipesRatingsAsync)
};

// Restaurants Ratings Saga
function* fetchRestaurantsRatingsAsync() {
   try {
      const restaurantsRatings = yield* call(Rating.getRestaurantsRatings);
      yield* put(fetchRestaurantRatingsSuccess(restaurantsRatings));
   } catch (error) {
      yield put(fetchRestaurantRatingsFailed(error as Error));
   }
};

function* onFetchRestaurantsRatings() {
   yield* takeLatest(RESTAURANTS_RATINGS_ACTION_TYPES.FETCH_RESTAURANTS_RATINGS_START, fetchRestaurantsRatingsAsync)
};

// RECIPE Rating
function* fetchSingleRecipeRatingAsync() {
   try {
      const recipeId = yield* select(selectRatingEntityId);
      const recipeRating = yield* call(Rating.getRecipeRating, recipeId);
      yield* put(fetchSingleRatingSuccess(recipeRating));
   } catch (error) {
      yield* put(fetchSingleRatingFailed(error as Error));
   }
}

function* onfetchSingleRecipeRating() {
   yield* takeLatest(SINGLE_RATING_ACTION_TYPES.FETCH_SINGLE_RATING_START, fetchSingleRecipeRatingAsync);
}

// RESTAURANT Rating
function* fetchSingleRestaurantRatingAsync() {
   try {
      const restaurantId = yield* select(selectRatingEntityId);
      const restaurantRating = yield* call(Rating.getRestarantRating, restaurantId);
      yield* put(fetchSingleRatingSuccess(restaurantRating));
   } catch (error) {
      yield* put(fetchSingleRatingFailed(error as Error));
   }
}

function* onfetchSingleRestaurantRating() {
   yield* takeLatest(SINGLE_RATING_ACTION_TYPES.FETCH_SINGLE_RATING_START, fetchSingleRestaurantRatingAsync);
}

//Saga
export function* ratingsSaga() {
   yield* all([call(onFetchRecipesRatings), call(onFetchRestaurantsRatings), call(onfetchSingleRecipeRating), call(onfetchSingleRestaurantRating)]);
}