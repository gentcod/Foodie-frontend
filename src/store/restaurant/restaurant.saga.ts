import { all, call, put, select, takeLatest } from "typed-redux-saga/macro";
import messenger, { getAxiosParams } from '../../app/api/messenger';
import { RESTAURANT_ACTION_TYPES, RESTAURANT_BYID_ACTION_TYPES } from "./restaurant.types";
import { fetchRestaurantByIdFailed, fetchRestaurantByIdSuccess, fetchRestaurantsFailed, fetchRestaurantsSuccess } from "./restaurant.action";
import { selectRestaurantIdParam, selectRestaurantParams } from "./restaurant.selector";

const { Restaurant } = messenger;

// Restaurant
function* fetchRestaurantsAsync() {
   try {
      const queryString = yield* select(selectRestaurantParams);
      const axiosParams = getAxiosParams(queryString);
      const restaurants = yield* call(Restaurant.list, axiosParams);
      yield* put(fetchRestaurantsSuccess(restaurants));
   } catch (error) {
      yield* put(fetchRestaurantsFailed(error as Error));
   }
};

function* onfetchRestaurant() {
   yield* takeLatest(RESTAURANT_ACTION_TYPES.FETCH_RESTAURANT_START, fetchRestaurantsAsync);
};

//Recipe By Id
function* fetchRestaurantByIdAsync() {
   try {
      const restaurantId = yield* select(selectRestaurantIdParam)
      const restaurant = yield* call(Restaurant.getRestaurantById, restaurantId!);
      yield* put(fetchRestaurantByIdSuccess(restaurant))
   } catch (error) {
      yield* put(fetchRestaurantByIdFailed(error as Error));
   }
};

function* onFetchRestaurantById() {
   yield* takeLatest(RESTAURANT_BYID_ACTION_TYPES.FETCH_RESTAURANT_BYID_START, fetchRestaurantByIdAsync)
};

// Restaurant Saga
export function* restaurantsSaga() {
   yield* all([call(onfetchRestaurant), call(onFetchRestaurantById)]);
};

// TODO: Include functionalities for Error Response