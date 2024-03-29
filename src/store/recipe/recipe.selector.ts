import { createSelector } from "reselect";
import { RecipeRatingsState, RecipeState, RecipesSearchState, RecipeFeaturedState, RecipeByIdState} from "./recipe.reducer";

const selectRecipesReducer = (state: any): RecipeState => state.recipes;
const selectRecipesSearchReducer = (state: any): RecipesSearchState => state.recipesSearch;
const selectRecipesRatingsReducer = (state: any): RecipeRatingsState => state.recipesRatings;
const selectRecipesFeaturedReducer = (state: any): RecipeFeaturedState => state.recipesFeatured;
const selectRecipeByIdReducer = (state: any): RecipeByIdState => state.recipeById

//Recipes
export const selectPaginatedRecipes = createSelector(
   [selectRecipesReducer],
   (recipesSlice) => recipesSlice.paginatedResponse
);

export const selectRecipesParams = createSelector(
   [selectRecipesReducer],
   (recipesSlice) => recipesSlice.searchString
);

export const selectRecipeIsLoading = createSelector(
   [selectRecipesReducer],
   (recipesSlice) => recipesSlice.isLoading
);

//Ratings
export const selectRecipesRatings = createSelector(
   [selectRecipesRatingsReducer],
   (recipeRatingsSlice) => recipeRatingsSlice.recipeRatings
);
   
export const selectRecipesRatingsIsLoading = createSelector(
      [selectRecipesRatingsReducer],
      (recipeRatingsSlice) => recipeRatingsSlice.isLoading
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