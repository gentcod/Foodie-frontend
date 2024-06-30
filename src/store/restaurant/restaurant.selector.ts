import { createSelector } from "reselect";
import { RestaurantByIdState, RestaurantsState } from "./restaurant.reducer";
import { RootState } from "../store";

const selectRestaurantsReducer = (state: RootState): RestaurantsState => state.restaurants;
const selectRestaurantByIdReducer = (state: RootState): RestaurantByIdState => state.restaurantById;

// Restaurant Data
export const selectRestaurants = createSelector(
   [selectRestaurantsReducer],
   (restaurantsSlice) => restaurantsSlice.restaurants
)

export const selectMetadata = createSelector(
   [selectRestaurantsReducer],
   (restaurantsSlice) => restaurantsSlice.metaData
);

export const selectRestaurantParams = createSelector(
   [selectRestaurantsReducer],
   (restaurantsSlice) => restaurantsSlice.queryString
);

export const selectRestaurantsIsLoading = createSelector(
   [selectRestaurantsReducer],
   (restaurantsSlice) => restaurantsSlice.isLoading
)

// RestaurantById Data
export const selectRestaurantIdParam = createSelector(
   [selectRestaurantByIdReducer],
   (restaurantSlice) => restaurantSlice.restaurantId
)

export const selectRestaurant = createSelector(
   [selectRestaurantByIdReducer],
   (restaurantSlice) => restaurantSlice.restaurantById
)

export const selectRestaurantByIdIsLoading = createSelector(
   [selectRestaurantByIdReducer],
   (restaurantSlice) => restaurantSlice.isLoading
)

export const selectRestaurantByIdIsActive = createSelector(
   [selectRestaurantByIdReducer],
   (restaurantSlice) => restaurantSlice.isActive
)

// TODO: Include functionalities for Error Response