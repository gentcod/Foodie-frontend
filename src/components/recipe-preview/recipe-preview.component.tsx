import { useEffect } from "react";
import { fetchRecipesStart } from "../../store/recipe/recipe.action";
import {
  selectMetadata,
  selectRecipeIsLoading,
  selectRecipes,
} from "../../store/recipe/recipe.selector";
import { useDispatch, useSelector } from "react-redux";

import RecipeCard from "../recipe-card/recipe-card.component";

import { CardContainer, PreviewContainer } from "./recipe-preview.style";
import Loading from "../loading/loading.component";
import LoadingComp from "../loading-comp/loading-comp.component";
import PageNavigation from "../page-navigation/page-navigation.component";

const RecipeCardContainer = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRecipesStart());
  }, [dispatch]);

  const recipes = useSelector(selectRecipes);
  const isLoading = useSelector(selectRecipeIsLoading);
  const metaData = useSelector(selectMetadata);

  const handlerPageChange = (pageNumber: number) => {
    dispatch(fetchRecipesStart(`?pageNumber=${pageNumber}`))
  }

  return (
    <PreviewContainer>
      <CardContainer>
        {isLoading ? (
          <LoadingComp />
        ) : (
          recipes.map((el) =>
            isLoading ? (
              <Loading />
            ) : (
              <RecipeCard
                key={el.id}
                recipeId={el.id}
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
      <PageNavigation metaData={metaData} handlerFunc={handlerPageChange}/>
    </PreviewContainer>
  );
};

export default RecipeCardContainer;
