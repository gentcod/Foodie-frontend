import { useEffect } from "react";
import { fetchRecipesStart } from "../../store/recipe/recipe.action";
import {
  selectPaginatedRecipes,
  selectRecipeIsLoading,
  selectRecipesParams,
} from "../../store/recipe/recipe.selector";
import { useDispatch, useSelector } from "react-redux";

import RecipeCard from "../recipe-card/recipe-card.component";
import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg';

import { CardContainer, PageIndicator, PageNavigationButton, PageNavigationContainer, PreviewContainer } from "./recipe-preview.style";
import Loading from "../loading/loading.component";
import LoadingComp from "../loading-comp/loading-comp.component";

const RecipeCardContainer = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRecipesStart());
  }, [dispatch]);

  const paginatedRecipes = useSelector(selectPaginatedRecipes);
  const isLoading = useSelector(selectRecipeIsLoading);
  const searchParams = useSelector(selectRecipesParams);


  const handlerPageChange = (pageNumber: number) => {
    dispatch(fetchRecipesStart(`?pageNumber=${pageNumber}`))
  }
  
  let { metaData  } = paginatedRecipes;

  console.log(metaData);
  console.log(searchParams);
  

  return (
    <PreviewContainer>
      <CardContainer>
        {isLoading ? (
          <LoadingComp />
        ) : (
          paginatedRecipes.items.map((el) =>
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
      <PageNavigationContainer>
        <PageNavigationButton 
          isFirstPage={metaData.currentPage === 1 ? true 
          : false} 
          onClick={() => handlerPageChange(metaData.currentPage - 1)}
        >
          <ArrowLeft/>
        </PageNavigationButton>
        <PageIndicator>{metaData.currentPage} of {metaData.totalPages}</PageIndicator>
        <PageNavigationButton 
          isFirstPage={metaData.currentPage === metaData.totalPages ? true 
            : false} 
          onClick={() => handlerPageChange(metaData.currentPage + 1)}
        >
          <ArrowRight/>
        </PageNavigationButton>
      </PageNavigationContainer>
    </PreviewContainer>
  );
};

export default RecipeCardContainer;
