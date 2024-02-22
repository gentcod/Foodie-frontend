import { useEffect } from "react";
import { fetchRecipeByIdStart, fetchRecipesStart } from "../../store/recipe/recipe.action";
import {
  selectRecipeById,
  selectRecipeIsLoading,
  selectRecipes,
  // selectRecipesSearch,
} from "../../store/recipe/recipe.selector";
import { useDispatch, useSelector } from "react-redux";

import RecipeCard from "../recipe-card/recipe-card.component";

import { CardContainer } from "./recipe-preview.style";
import Loading from "../loading/loading.component";
import LoadingComp from "../loading-comp/loading-comp.component";

const RecipeCardContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRecipesStart());
    dispatch(fetchRecipeByIdStart(1))
  }, [dispatch]);

  const allRecipes = useSelector(selectRecipes);
  const isLoading = useSelector(selectRecipeIsLoading);

  const recipe = useSelector(selectRecipeById)
  console.log(recipe);
  

  let data;
  data = allRecipes;

  return (
    <CardContainer>
      {isLoading ? (
        <LoadingComp />
      ) : (
        data.map((el) =>
          isLoading ? (
            <Loading />
          ) : (
            <RecipeCard
              key={el.id}
              name={el.name}
              origin={el.origin}
              cookTime={el.cookTime}
              description={el.description}
              imgSrc={el.imageSrc}
              isFeatured={false}
            />
          )
        )
      )}
    </CardContainer>
  );
};

export default RecipeCardContainer;
