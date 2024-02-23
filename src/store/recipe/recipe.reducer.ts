import { AnyAction } from 'redux'
import { Recipe, } from '../../app/models/recipes'
import { fetchRecipesStart, fetchRecipesSuccess, fetchRecipesFailed, fetchRecipeRatingsStart, fetchRecipeRatingsSuccess, fetchRecipesSearchStart, fetchRecipesSearchSuccess, fetchRecipesSearchFailed, fetchRecipesFeaturedStart, fetchRecipesFeaturedSuccess, fetchRecipesFeaturedFailed, fetchRecipeByIdStart, fetchRecipeByIdSuccess, fetchRecipeByIdFailed, } from './recipe.action';
import { Rating } from '../../app/models/ratings';

//Recipes
export type RecipeState = {
   readonly searchString: string;
   readonly recipes: Recipe[];
   readonly isLoading: boolean;
   readonly error?: Error | null;
};

const RECIPES_INITIAL_STATE: RecipeState = {
   searchString: "",
   recipes: [],
   isLoading: false,
   error: null,
};

export const recipesReducer = (state = RECIPES_INITIAL_STATE, action = {} as AnyAction) => {
   if (fetchRecipesStart.match(action)) {
      return {
         ...state,
         searchString: action.payload,
         isLoading: true,
      }
   }
   if (fetchRecipesSuccess.match(action))
      return {
         ...state,
         recipes: action.payload,
         isLoading: false,
      }
   if (fetchRecipesFailed.match(action))
      return {
         ...state,
         error: action.payload,
         isLoading: false,
      }

   return state;
};


//Recipe Ratings
export type RecipeRatingsState = {
   readonly recipeRatings: Rating[];
   readonly isLoading: boolean;
   readonly error?: Error | null;
};

const RECIPES_RATINGS_INITIAL_STATE: RecipeRatingsState = {
   recipeRatings: [],
   isLoading: false,
   error: null,
};

export const recipesRatingsReducer = (state = RECIPES_RATINGS_INITIAL_STATE, action = {} as AnyAction) => {
   if (fetchRecipeRatingsStart.match(action))
      return {
         ...state,
         isLoading: true,
      }
   if (fetchRecipeRatingsSuccess.match(action))
      return {
         ...state,
         recipeRatings: action.payload,
         isLoading: false,
      }
   if (fetchRecipesFailed.match(action))
      return {
         ...state,
         error: action.payload,
         isLoading: false,
      }
   return state;

};


//Recipe Search
export type RecipesSearchState = {
   readonly searchString: string;
   readonly recipes: Recipe[];
   readonly isLoading: boolean;
   readonly error?: Error | null;
};

const RECIPES_SEARCH_INITIAL_STATE: RecipesSearchState = {
   searchString: "",
   recipes: [],
   isLoading: false,
   error: null,
};

export const recipesSearchReducer = (state = RECIPES_SEARCH_INITIAL_STATE, action = {} as AnyAction) => {
   if (fetchRecipesSearchStart.match(action)) {
      return {
         ...state,
         searchString: action.payload,
         isLoading: true,
      }
   }
   if (fetchRecipesSearchSuccess.match(action))
      return {
         ...state,
         recipes: action.payload,
         isLoading: false,
      }
   if (fetchRecipesSearchFailed.match(action))
      return {
         ...state,
         error: action.payload,
         isLoading: false,
      }

   return state;
};

//Featured Recipes
export type RecipeFeaturedState = {
   readonly recipesFeatured: Recipe[];
   readonly isLoading: boolean;
   readonly error?: Error | null;
};

const RECIPE_FEATURED_INITIAL_STATE: RecipeFeaturedState = {
   recipesFeatured: [],
   isLoading: false,
   error: null,
};

export const recipesFeaturedReducer = (state = RECIPE_FEATURED_INITIAL_STATE, action = {} as AnyAction) => {
   if (fetchRecipesFeaturedStart.match(action)) {
      return {
         ...state,
         isLoading: true,
      }
   }
   if (fetchRecipesFeaturedSuccess.match(action))
      return {
         ...state,
         recipesFeatured: action.payload,
         isLoading: false,
      }
   if (fetchRecipesFeaturedFailed.match(action))
      return {
         ...state,
         error: action.payload,
         isLoading: false,
      }

   return state;
};

//Recipe By Id
export type RecipeByIdState = {
   readonly recipeId: number;
   readonly recipeById: Recipe;
   readonly isLoading: boolean;
   readonly error?: Error | null;
   readonly isActive: boolean;
};

const RECIPE_BYID_INITIAL_STATE: RecipeByIdState = {
   recipeId: 0,
   recipeById: {} as Recipe,
   isLoading: false,
   error: null,
   isActive: false,
};

export const recipeByIdReducer = (state = RECIPE_BYID_INITIAL_STATE, action = {} as AnyAction) => {
   if (fetchRecipeByIdStart.match(action)) {
      return {
         ...state,
         recipeId: action.payload,
         isLoading: true,
         isActive: false,
      }
   }

   if (fetchRecipeByIdSuccess.match(action)) {
      return {
         ...state,
         recipeById: action.payload,
         isActive: true,
         isLoading: false,
      }
   }

   if (fetchRecipeByIdFailed.match(action)) {
      return {
         ...state,
         error: action.payload,
         isLoading: false,
      }
   }
   return state;
};