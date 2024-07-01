import { useEffect } from "react";
import { fetchRecipesFeaturedStart } from "../../store/recipe/recipe.action";
import {
  selectRecipesFeatured,
  selectRecipesFeaturedIsLoading,
} from "../../store/recipe/recipe.selector";
import { useDispatch, useSelector } from "react-redux";

import RecipeCard from "../recipe-card/recipe-card.component";

import LoadingComp from "../loading-comp/loading-comp.component";
import { CardContainer } from "../recipe-preview/recipe-preview.style";

const FeaturedRecipes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRecipesFeaturedStart());
  }, [dispatch]);

  const featuredRecipes = useSelector(selectRecipesFeatured);
  const isLoading = useSelector(selectRecipesFeaturedIsLoading);

  return (
    <CardContainer>
      {isLoading ? (
        <LoadingComp />
      ) : (
        featuredRecipes.map((el) =>
          isLoading ? (
            <LoadingComp />
          ) : (
            <RecipeCard
              key={el.id}
              recipeId={el.id}
              name={el.name}
              origin={el.origin}
              cookTime={el.cookTime}
              imgSrc={el.imageSrc}
              isFeatured={true}
            />
          )
        )
      )}
    </CardContainer>
  );
};

export default FeaturedRecipes;
