import { createSelector } from "reselect";
import { RecipeState, RecipesSearchState, RecipeFeaturedState, RecipeByIdState} from "./recipe.reducer";
import { RootState } from "../store";

const selectRecipesReducer = (state: RootState): RecipeState => state.recipes;
const selectRecipesSearchReducer = (state: RootState): RecipesSearchState => state.recipesSearch;
const selectRecipesFeaturedReducer = (state: RootState): RecipeFeaturedState => state.recipesFeatured;
const selectRecipeByIdReducer = (state: RootState): RecipeByIdState => state.recipeById;

//Recipes
export const selectRecipes = createSelector(
   [selectRecipesReducer],
   (recipesSlice) => recipesSlice.recipes
);

export const selectMetadata = createSelector(
   [selectRecipesReducer],
   (recipesSlice) => recipesSlice.metaData
);

export const selectRecipesParams = createSelector(
   [selectRecipesReducer],
   (recipesSlice) => recipesSlice.queryString
);

export const selectRecipeIsLoading = createSelector(
   [selectRecipesReducer],
   (recipesSlice) => recipesSlice.isLoading
);

//Search
export const selectRecipesSearch = createSelector(
   [selectRecipesSearchReducer],
   (recipesSearchSlice) => recipesSearchSlice.recipes
);

export const selectRecipeSearchIsLoading = createSelector(
   [selectRecipesSearchReducer],
   (recipesSearchSlice) => recipesSearchSlice.isLoading
);

export const selectSearchParams = createSelector(
   [selectRecipesSearchReducer],
   (recipesSearchSlice) => recipesSearchSlice.searchString
);

//Featured
export const selectRecipesFeatured = createSelector(
   [selectRecipesFeaturedReducer],
   (recipesFeaturedSlice) => recipesFeaturedSlice.recipesFeatured
);

export const selectRecipesFeaturedIsLoading = createSelector(
   [selectRecipesFeaturedReducer],
   (recipesFeaturedSlice) => recipesFeaturedSlice.isLoading
);

//RecipeById
export const selectRecipeIdParam = createSelector(
   [selectRecipeByIdReducer],
   (recipeSlice) => recipeSlice.recipeId
);

export const selectRecipeById = createSelector(
   [selectRecipeByIdReducer],
   (recipeSlice) => recipeSlice.recipeById
);

export const selectRecipeByIdIsLoading = createSelector(
   [selectRecipeByIdReducer],
   (recipeSlice) => recipeSlice.isLoading
);

export const selectRecipeByIdIsActive = createSelector(
   [selectRecipeByIdReducer],
   (recipeSlice) => recipeSlice.isActive
);

// TODO: Include functionalities for Error Response