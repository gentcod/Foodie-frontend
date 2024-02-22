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

  let data;
  data = featuredRecipes;

  return (
    <CardContainer>
      {isLoading ? (
        <LoadingComp />
      ) : (
        data.map((el) =>
          isLoading ? (
            <LoadingComp />
          ) : (
            <RecipeCard
              key={el.id}
              name={el.name}
              origin={el.origin}
              cookTime={el.cookTime}
              description={el.description}
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
