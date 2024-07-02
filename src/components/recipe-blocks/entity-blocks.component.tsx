import LoadingComp from "../loading-comp/loading-comp.component";
import { 
   Recipe, 
   RecipeDetail, 
   RecipeDetailsContainer, 
   RecipeImage, 
   RecipeLogo, 
   RecipesContainer 
} from "./entity-blocks.style";

type EntityListProps = {
   id: number;
   imageSrc: string;
   name: string;
}

type EntityBlocksProps = {
   searchLoading?: boolean;
   entity: string;
   searchString?: string;
   entityList: EntityListProps[]
};

const EntityBlocks = ({searchLoading, entity, searchString, entityList}: EntityBlocksProps) => {
  const link = searchString ? `/${entity}${searchString}` : '#'
  return (
    <RecipesContainer>
      {searchLoading ? (
        <LoadingComp />
      ) : (
         entityList.map((rec) => (
          <Recipe to={link} key={rec.id}>
            {rec.imageSrc ? <RecipeImage src={rec.imageSrc} /> : <RecipeLogo />}
            <RecipeDetailsContainer>
              <RecipeDetail>{rec.name}</RecipeDetail>
            </RecipeDetailsContainer>
          </Recipe>
        ))
      )}
    </RecipesContainer>
  );
};

export default EntityBlocks;
