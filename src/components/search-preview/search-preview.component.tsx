import {
  Button,
  Container,
  Recipe,
  RecipeDetail,
  RecipeDetailsContainer,
  RecipeImage,
  RecipesContainer,
  RecipeLogo,
} from "./search-preview.style";
import { useDispatch, useSelector } from "react-redux";
import {
  selectRecipeSearchIsLoading,
  selectRecipesSearch,
  selectSearchParams,
} from "../../store/recipe/recipe.selector";
import { useEffect } from "react";
import {
  fetchRecipesSearchStart,
  fetchRecipesStart,
} from "../../store/recipe/recipe.action";
import LoadingComp from "../loading-comp/loading-comp.component";

type SearchProps = {
  searchString: string;
};

let timeoutId: number | NodeJS.Timeout;

const SearchPreview = ({ searchString }: SearchProps) => {
  const dispatch = useDispatch();

  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  useEffect(() => {
    timeoutId = setTimeout(() => {
      dispatch(fetchRecipesSearchStart(searchString));
    }, 1000);
  }, [dispatch, searchString]);

  const searchRecipes = useSelector(selectRecipesSearch);
  const searchLoading = useSelector(selectRecipeSearchIsLoading);
  const searchParams = useSelector(selectSearchParams);

  const handleSearch = () => {
    dispatch(fetchRecipesStart(searchString));
  };

  return (
    <Container>
      <RecipesContainer>
        (
        {searchLoading ? (
          <LoadingComp />
        ) : (
          searchRecipes.map((rec) => (
            <Recipe to={`/recipe${searchParams}`} key={rec.id}>
              {rec.imageSrc ? (
                <RecipeImage src={rec.imageSrc} />
              ) : (
                <RecipeLogo />
              )}
              <RecipeDetailsContainer>
                <RecipeDetail>{rec.name}</RecipeDetail>
              </RecipeDetailsContainer>
            </Recipe>
          ))
        )}
      </RecipesContainer>
      )
      <Button to={`/recipe${searchParams}`} onClick={() => handleSearch()}>
        View All
      </Button>
    </Container>
  );
};

export default SearchPreview;
