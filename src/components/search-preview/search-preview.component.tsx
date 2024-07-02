import {
  Button,
  Container,
} from "./search-preview.style";
import { useDispatch, useSelector } from "react-redux";
import {
  selectRecipeSearchIsLoading,
  selectRecipesSearch,
  selectSearchParams,
} from "../../store/recipe/recipe.selector";
import { useEffect, useMemo } from "react";
import {
  fetchRecipesSearchStart,
  fetchRecipesStart,
} from "../../store/recipe/recipe.action";
import EntityBlocks from "../recipe-blocks/entity-blocks.component";

type SearchProps = {
  searchString: string;
};

let timeoutId: number | NodeJS.Timeout;

const SearchPreview = ({ searchString }: SearchProps) => {
  const dispatch = useDispatch();

  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  const searchRecipes = useSelector(selectRecipesSearch);
  const searchLoading = useSelector(selectRecipeSearchIsLoading);
  const searchParams = useSelector(selectSearchParams);

  const entityList = useMemo(() =>
    searchRecipes.map((data) => {
      return {
        id: data.id,
        imageSrc: data.imageSrc,
        name: data.name,
      };
    }
  ), [searchRecipes]);

  useEffect(() => {
    timeoutId = setTimeout(() => {
      if (searchString.length > 0) {
        dispatch(fetchRecipesSearchStart(searchString));
      }
    }, 1000);
  }, [dispatch, searchString]);

  const handleSearch = () => {
    dispatch(fetchRecipesStart(searchString));
  };

  return (
    <Container>
      <EntityBlocks searchLoading={searchLoading} entity="recipe" searchString={searchParams} entityList={entityList}/>
      <Button to={`/recipe${searchParams}`} onClick={() => handleSearch()}>
        View All
      </Button>
    </Container>
  );
};

export default SearchPreview;
