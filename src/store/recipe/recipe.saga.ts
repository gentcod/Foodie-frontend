import { all, call, put, select, takeLatest } from "typed-redux-saga/macro";
import messenger, { getAxiosParams } from '../../app/api/messenger';
import { fetchRecipesFailed, fetchRecipesFeaturedSuccess, fetchRecipesSearchFailed, fetchRecipesSearchSuccess, fetchRecipesSuccess, fetchRecipesFeaturedFailed, fetchRecipeByIdSuccess, fetchRecipeByIdFailed } from "./recipe.action";
import { RECIPES_ACTION_TYPES, RECIPES_SEARCH_ACTION_TYPES, RECIPES_FEATURED_ACTION_TYPES, RECIPE_BYID_ACTION_TYPES } from "./recipe.types";
import { selectRecipeIdParam, selectRecipesParams, selectSearchParams } from "./recipe.selector";

const { Recipes } = messenger;

//Recipes Saga
function* fetchRecipesAsync() {
   try {
      const searchString = yield* select(selectRecipesParams)
      const axiosParams = getAxiosParams(searchString)
      const recipes = yield* call(Recipes.list, axiosParams);
      yield* put(fetchRecipesSuccess(recipes));
   } catch (error) {
      yield* put(fetchRecipesFailed(error as Error));
   }
};

function* onFetchRecipes() {
   yield* takeLatest(RECIPES_ACTION_TYPES.FETCH_RECIPE_START, fetchRecipesAsync)
};

//Recipe Search
function* fetchRecipesSearchAsync() {
   try {
      const searchString = yield* select(selectSearchParams)
      const axiosParams = getAxiosParams(searchString)
      const recipes = yield* call(Recipes.list, axiosParams);
      yield* put(fetchRecipesSearchSuccess(recipes));
   } catch (error) {
      yield* put(fetchRecipesSearchFailed(error as Error));
   }
};

function* onFetchRecipesSearch() {
   yield* takeLatest(RECIPES_SEARCH_ACTION_TYPES.FETCH_RECIPE_SEARCH_START, fetchRecipesSearchAsync)
};

//Featured
function* fetchRecipesFeaturedAsync() {
   try {
      const recipesFeatured = yield* call(Recipes.listFeatured);
      yield* put(fetchRecipesFeaturedSuccess(recipesFeatured));
   } catch (error) {
      yield* put(fetchRecipesFeaturedFailed(error as Error));
   }
}

function* onFetchRecipesFeatured() {
   yield* takeLatest(RECIPES_FEATURED_ACTION_TYPES.FETCH_RECIPES_FEATURED_START, fetchRecipesFeaturedAsync)
}

//Recipe By Id
function* fetchRecipeByIdAsync() {
   try {
      const recipeId = yield* select(selectRecipeIdParam);
      const recipe = yield* call(Recipes.getRecipeById, recipeId!);
      yield* put(fetchRecipeByIdSuccess(recipe));
   } catch (error) {
      yield* put(fetchRecipeByIdFailed(error as Error));
   }
}

function* onFetchRecipeById() {
   yield* takeLatest(RECIPE_BYID_ACTION_TYPES.FETCH_RECIPE_BYID_START, fetchRecipeByIdAsync)
}

//Saga
export function* recipesSaga() {
   yield* all([call(onFetchRecipes), call(onFetchRecipesSearch), call(onFetchRecipesFeatured), call(onFetchRecipeById)]);
}

// TODO: Include functionalities for Error Response