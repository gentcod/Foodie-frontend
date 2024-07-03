import { AnyAction } from "redux-saga";
import { Recipe, } from '../../app/models/recipes';
import { 
   fetchRecipesStart, 
   fetchRecipesSuccess, 
   fetchRecipesFailed, 
   fetchRecipesSearchStart, 
   fetchRecipesSearchSuccess, 
   fetchRecipesSearchFailed, 
   fetchRecipesFeaturedStart, 
   fetchRecipesFeaturedSuccess, 
   fetchRecipesFeaturedFailed, 
   fetchRecipeByIdStart, 
   fetchRecipeByIdSuccess, 
   fetchRecipeByIdFailed,
   resetRecipeByIdModal, 
} from './recipe.action';
import { MetaData } from '../../app/models/pagination';

//Recipes
export type RecipeState = {
   readonly queryString?: string;
   readonly recipes: Recipe[];
   readonly metaData: MetaData;
   readonly isLoading: boolean;
   readonly error?: Error | null;
};

const RECIPES_INITIAL_STATE: RecipeState = {
   queryString: "",
   recipes: [],
   metaData: {
      currentPage: 0,
      pageSize: 0,
      totalCount: 0,
      totalPages: 0,
   },
   isLoading: false,
   error: null,
};

export const recipesReducer = (state = RECIPES_INITIAL_STATE, action = {} as AnyAction): RecipeState => {
   if (fetchRecipesStart.match(action)) {
      return {
         ...state,
         queryString: action.payload,
         isLoading: true,
      }
   }
   if (fetchRecipesSuccess.match(action))
      return {
         ...state,
         recipes: action.payload.items.data,
         metaData: action.payload.metaData,
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
   readonly error: Error | null;
};

const RECIPES_SEARCH_INITIAL_STATE: RecipesSearchState = {
   searchString: "",
   recipes: [],
   isLoading: false,
   error: null,
};

export const recipesSearchReducer = (state = RECIPES_SEARCH_INITIAL_STATE, action = {} as AnyAction): RecipesSearchState => {
   if (fetchRecipesSearchStart.match(action)) {
      return {
         ...state,
         searchString: `${action.payload}&pageNumber=1&pageSize=5`,
         isLoading: true,
      }
   }
   if (fetchRecipesSearchSuccess.match(action))
      return {
         ...state,
         recipes: action.payload.items.data,
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
   readonly error: Error | null;
};

const RECIPE_FEATURED_INITIAL_STATE: RecipeFeaturedState = {
   recipesFeatured: [],
   isLoading: false,
   error: null,
};

export const recipesFeaturedReducer = (state = RECIPE_FEATURED_INITIAL_STATE, action = {} as AnyAction): RecipeFeaturedState => {
   if (fetchRecipesFeaturedStart.match(action)) {
      return {
         ...state,
         isLoading: true,
      }
   }
   if (fetchRecipesFeaturedSuccess.match(action))
      return {
         ...state,
         recipesFeatured: action.payload.data,
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
   readonly recipeId?: number;
   readonly recipeById: Recipe;
   readonly isLoading: boolean;
   readonly error?: Error | null;
   readonly isActive: boolean;
};

const RECIPE_BYID_INITIAL_STATE: RecipeByIdState = {
   recipeById: {} as Recipe,
   isLoading: false,
   error: null,
   isActive: false,
};

export const recipeByIdReducer = (state = RECIPE_BYID_INITIAL_STATE, action = {} as AnyAction): RecipeByIdState => {
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
         recipeById: action.payload.data,
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

   if (resetRecipeByIdModal.match(action)) {
      return {
         ...state,
         isActive: false,
      }
   }

   return state;
};

// TODO: Include functionalities for Error Response