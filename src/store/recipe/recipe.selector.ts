import { createSelector } from "reselect";
import { RecipeRatingsState, RecipeState, RecipesSearchState, RecipeFeaturedState, RecipeByIdState} from "./recipe.reducer";

const selectRecipesReducer = (state: any): RecipeState => state.recipes;
const selectRecipesSearchReducer = (state: any): RecipesSearchState => state.recipesSearch;
const selectRecipesRatingsReducer = (state: any): RecipeRatingsState => state.recipesRatings;
const selectRecipesFeaturedReducer = (state: any): RecipeFeaturedState => state.recipesFeatured;
const selectRecipeByIdReducer = (state: any): RecipeByIdState => state.recipe

//Recipes
export const selectRecipes = createSelector(
   [selectRecipesReducer],
   (recipesSlice) => recipesSlice.recipes
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
   (recipeSlice) => recipeSlice.recipe
);

export const selectRecipeIdIsLoading = createSelector(
   [selectRecipeByIdReducer],
   (recipeSlice) => recipeSlice.isLoading
);