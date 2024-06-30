import { createAction, ActionWithPayload, Action , withMatcher} from "../../utils/reducer/reducer.utilities";
import { Recipe, } from '../../app/models/recipes';
import { PaginatedResponse } from "../../app/models/pagination";
import { ResponseBody } from "../../app/models/response";
import { 
   RECIPES_ACTION_TYPES, 
   RECIPES_SEARCH_ACTION_TYPES, 
   RECIPES_FEATURED_ACTION_TYPES, 
   RECIPE_BYID_ACTION_TYPES 
} from "./recipe.types";

type FetchRecipesStart = ActionWithPayload<RECIPES_ACTION_TYPES.FETCH_RECIPE_START, string | undefined>;
type FetchRecipesSuccess = ActionWithPayload<RECIPES_ACTION_TYPES.FETCH_RECIPE_SUCCESS, PaginatedResponse<ResponseBody<Recipe[]>>>;
type FetchRecipesFailed = ActionWithPayload<RECIPES_ACTION_TYPES.FETCH_RECIPE_FAILED, Error>;

type FetchRecipesSearchStart = ActionWithPayload<RECIPES_SEARCH_ACTION_TYPES.FETCH_RECIPE_SEARCH_START, string>;
type FetchRecipesSearchSuccess = ActionWithPayload<RECIPES_SEARCH_ACTION_TYPES.FETCH_RECIPE_SEARCH_SUCCESS, PaginatedResponse<ResponseBody<Recipe[]>>>;
type FetchRecipesSearchFailed = ActionWithPayload<RECIPES_SEARCH_ACTION_TYPES.FETCH_RECIPE_SEARCH_FAILED, Error>;

type FetchRecipeFeaturedStart = Action<RECIPES_FEATURED_ACTION_TYPES.FETCH_RECIPES_FEATURED_START>;
type FetchRecipeFeaturedSuccess = ActionWithPayload<RECIPES_FEATURED_ACTION_TYPES.FETCH_RECIPES_FEATURED_SUCCESS, ResponseBody<Recipe[]>>;
type FetchRecipeFeaturedFailed = ActionWithPayload<RECIPES_FEATURED_ACTION_TYPES.FETCH_RECIPES_FEATURED_FAILED, Error>;

type FetchRecipeByIdStart = ActionWithPayload<RECIPE_BYID_ACTION_TYPES.FETCH_RECIPE_BYID_START, number>;
type FetchRecipeByIdSuccess = ActionWithPayload<RECIPE_BYID_ACTION_TYPES.FETCH_RECIPE_BYID_SUCCESS, ResponseBody<Recipe>>;
type FetchRecipeByIdFailed = ActionWithPayload<RECIPE_BYID_ACTION_TYPES.FETCH_RECIPE_BYID_FAILED, Error>;

export const fetchRecipesStart = withMatcher((paramString?: string) : FetchRecipesStart => 
   createAction(RECIPES_ACTION_TYPES.FETCH_RECIPE_START, paramString));
export const fetchRecipesSuccess = withMatcher((paginatedResponse: PaginatedResponse<ResponseBody<Recipe[]>>) : FetchRecipesSuccess => 
   createAction(RECIPES_ACTION_TYPES.FETCH_RECIPE_SUCCESS, paginatedResponse));
export const fetchRecipesFailed = withMatcher((error: Error) : FetchRecipesFailed => 
   createAction(RECIPES_ACTION_TYPES.FETCH_RECIPE_FAILED, error));

export const fetchRecipesSearchStart = withMatcher((searchString: string) : FetchRecipesSearchStart => 
   createAction(RECIPES_SEARCH_ACTION_TYPES.FETCH_RECIPE_SEARCH_START, searchString));
export const fetchRecipesSearchSuccess = withMatcher((recipes: PaginatedResponse<ResponseBody<Recipe[]>>) : FetchRecipesSearchSuccess => 
   createAction(RECIPES_SEARCH_ACTION_TYPES.FETCH_RECIPE_SEARCH_SUCCESS, recipes));
export const fetchRecipesSearchFailed = withMatcher((error: Error) : FetchRecipesSearchFailed => 
   createAction(RECIPES_SEARCH_ACTION_TYPES.FETCH_RECIPE_SEARCH_FAILED, error));

export const fetchRecipesFeaturedStart = withMatcher(() : FetchRecipeFeaturedStart => 
   createAction(RECIPES_FEATURED_ACTION_TYPES.FETCH_RECIPES_FEATURED_START));
export const fetchRecipesFeaturedSuccess = withMatcher((recipeFeatured: ResponseBody<Recipe[]>) : FetchRecipeFeaturedSuccess => 
   createAction(RECIPES_FEATURED_ACTION_TYPES.FETCH_RECIPES_FEATURED_SUCCESS, recipeFeatured));
export const fetchRecipesFeaturedFailed = withMatcher((error: Error) : FetchRecipeFeaturedFailed => 
   createAction(RECIPES_FEATURED_ACTION_TYPES.FETCH_RECIPES_FEATURED_FAILED, error));

export const fetchRecipeByIdStart = withMatcher((recipeId: number) : FetchRecipeByIdStart => 
   createAction(RECIPE_BYID_ACTION_TYPES.FETCH_RECIPE_BYID_START, recipeId));
export const fetchRecipeByIdSuccess = withMatcher((recipe: ResponseBody<Recipe>) : FetchRecipeByIdSuccess => 
   createAction(RECIPE_BYID_ACTION_TYPES.FETCH_RECIPE_BYID_SUCCESS, recipe));
export const fetchRecipeByIdFailed = withMatcher((error: Error) : FetchRecipeByIdFailed => 
   createAction(RECIPE_BYID_ACTION_TYPES.FETCH_RECIPE_BYID_FAILED, error));

// TODO: Include functionalities for Error Response