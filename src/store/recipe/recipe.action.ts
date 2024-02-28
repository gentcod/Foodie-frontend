import { createAction, ActionWithPayload, Action , withMatcher} from "../../utils/reducer/reducer.utilities";
import { RECIPES_ACTION_TYPES, RECIPE_RATINGS_ACTION_TYPES, RECIPES_SEARCH_ACTION_TYPES, RECIPES_FEATURED_ACTION_TYPES, RECIPE_BYID_ACTION_TYPES } from "./recipe.types";
import { Recipe, } from '../../app/models/recipes';
import { Rating } from '../../app/models/ratings';
import { PaginatedResponse } from "../../app/models/pagination";

export type FetchRecipesStart = ActionWithPayload<RECIPES_ACTION_TYPES.FETCH_RECIPE_START, string | undefined>;
export type FetchRecipesSuccess = ActionWithPayload<RECIPES_ACTION_TYPES.FETCH_RECIPE_SUCCESS, PaginatedResponse<Recipe[]>>;
export type FetchRecipesFailed = ActionWithPayload<RECIPES_ACTION_TYPES.FETCH_RECIPE_FAILED, Error>;

export type FetchRecipesSearchStart = ActionWithPayload<RECIPES_SEARCH_ACTION_TYPES.FETCH_RECIPE_SEARCH_START, string>;
export type FetchRecipesSearchSuccess = ActionWithPayload<RECIPES_SEARCH_ACTION_TYPES.FETCH_RECIPE_SEARCH_SUCCESS, Recipe[]>;
export type FetchRecipesSearchFailed = ActionWithPayload<RECIPES_SEARCH_ACTION_TYPES.FETCH_RECIPE_SEARCH_FAILED, Error>;

export type FetchRecipeRatingsStart = Action<RECIPE_RATINGS_ACTION_TYPES.FETCH_RECIPE_RATINGS_START>;
export type FetchRecipeRatingsSuccess = ActionWithPayload<RECIPE_RATINGS_ACTION_TYPES.FETCH_RECIPE_RATINGS_SUCCESS, Rating[]>;
export type FetchRecipeRatingsFailed = ActionWithPayload<RECIPE_RATINGS_ACTION_TYPES.FETCH_RECIPE_RATINGS_FAILED, Error>;

export type FetchRecipeFeaturedStart = Action<RECIPES_FEATURED_ACTION_TYPES.FETCH_RECIPES_FEATURED_START>;
export type FetchRecipeFeaturedSuccess = ActionWithPayload<RECIPES_FEATURED_ACTION_TYPES.FETCH_RECIPES_FEATURED_SUCCESS, Recipe[]>;
export type FetchRecipeFeaturedFailed = ActionWithPayload<RECIPES_FEATURED_ACTION_TYPES.FETCH_RECIPES_FEATURED_FAILED, Error>;

export type FetchRecipeByIdStart = ActionWithPayload<RECIPE_BYID_ACTION_TYPES.FETCH_RECIPE_BYID_START, number>;
export type FetchRecipeByIdSuccess = ActionWithPayload<RECIPE_BYID_ACTION_TYPES.FETCH_RECIPE_BYID_SUCCESS, Recipe[]>;
export type FetchRecipeByIdFailed = ActionWithPayload<RECIPE_BYID_ACTION_TYPES.FETCH_RECIPE_BYID_FAILED, Error>;

export const fetchRecipesStart = withMatcher((searchString?: string) : FetchRecipesStart => createAction(RECIPES_ACTION_TYPES.FETCH_RECIPE_START, searchString));
export const fetchRecipesSuccess = withMatcher((paginatedResponse: PaginatedResponse<Recipe[]>) : FetchRecipesSuccess => createAction(RECIPES_ACTION_TYPES.FETCH_RECIPE_SUCCESS, paginatedResponse));
export const fetchRecipesFailed = withMatcher((error: Error) : FetchRecipesFailed => createAction(RECIPES_ACTION_TYPES.FETCH_RECIPE_FAILED, error));

export const fetchRecipesSearchStart = withMatcher((searchString: string) : FetchRecipesSearchStart => createAction(RECIPES_SEARCH_ACTION_TYPES.FETCH_RECIPE_SEARCH_START, searchString));
export const fetchRecipesSearchSuccess = withMatcher((recipes: Recipe[]) : FetchRecipesSearchSuccess => createAction(RECIPES_SEARCH_ACTION_TYPES.FETCH_RECIPE_SEARCH_SUCCESS, recipes));
export const fetchRecipesSearchFailed = withMatcher((error: Error) : FetchRecipesSearchFailed => createAction(RECIPES_SEARCH_ACTION_TYPES.FETCH_RECIPE_SEARCH_FAILED, error));

export const fetchRecipeRatingsStart = withMatcher(() : FetchRecipeRatingsStart => createAction(RECIPE_RATINGS_ACTION_TYPES.FETCH_RECIPE_RATINGS_START));
export const fetchRecipeRatingsSuccess = withMatcher((recipeRatings: Rating[]) : FetchRecipeRatingsSuccess => createAction(RECIPE_RATINGS_ACTION_TYPES.FETCH_RECIPE_RATINGS_SUCCESS, recipeRatings));
export const fetchRecipeRatingsFailed = withMatcher((error: Error) : FetchRecipeRatingsFailed => createAction(RECIPE_RATINGS_ACTION_TYPES.FETCH_RECIPE_RATINGS_FAILED, error));

export const fetchRecipesFeaturedStart = withMatcher(() : FetchRecipeFeaturedStart => createAction(RECIPES_FEATURED_ACTION_TYPES.FETCH_RECIPES_FEATURED_START));
export const fetchRecipesFeaturedSuccess = withMatcher((recipeFeatured: Recipe[]) : FetchRecipeFeaturedSuccess => createAction(RECIPES_FEATURED_ACTION_TYPES.FETCH_RECIPES_FEATURED_SUCCESS, recipeFeatured));
export const fetchRecipesFeaturedFailed = withMatcher((error: Error) : FetchRecipeFeaturedFailed => createAction(RECIPES_FEATURED_ACTION_TYPES.FETCH_RECIPES_FEATURED_FAILED, error));

export const fetchRecipeByIdStart = withMatcher((recipeId: number) : FetchRecipeByIdStart => createAction(RECIPE_BYID_ACTION_TYPES.FETCH_RECIPE_BYID_START, recipeId));
export const fetchRecipeByIdSuccess = withMatcher((recipe: Recipe[]) : FetchRecipeByIdSuccess => createAction(RECIPE_BYID_ACTION_TYPES.FETCH_RECIPE_BYID_SUCCESS, recipe));
export const fetchRecipeByIdFailed = withMatcher((error: Error) : FetchRecipeByIdFailed => createAction(RECIPE_BYID_ACTION_TYPES.FETCH_RECIPE_BYID_FAILED, error));