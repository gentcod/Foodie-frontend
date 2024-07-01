import { useDispatch } from 'react-redux';
import  {ReactComponent as TimeIcon } from '../../assets/alarm.svg';
import { fetchRecipeByIdStart } from '../../store/recipe/recipe.action';

import { RecipeContainer, RecipeCookTime, RecipeImage, RecipeImageContainer, RecipeContentContainer, RecipeName, RecipeOrigin, RecipeIconContents, RecipeLogo } from './recipe-card.style';

type RecipeProps = {
   recipeId: number;
   name: string;
   imgSrc: string;
   cookTime: string;
   origin: string;
   isFeatured: boolean;
};

const RecipeCard = ({recipeId, name, imgSrc, cookTime, origin, isFeatured}: RecipeProps) => {
   const dispatch = useDispatch();
   const handleDisplayModel = (recipeId: number) => {
      dispatch(fetchRecipeByIdStart(recipeId))
   }

   return (
      <RecipeContainer featured={isFeatured} onClick={() => handleDisplayModel(recipeId)}>
            <RecipeImageContainer>
               { imgSrc === "" ? <RecipeLogo/> : <RecipeImage src={imgSrc}/>}
            </RecipeImageContainer>
         <RecipeContentContainer>
            <RecipeName>{name}</RecipeName>
            <RecipeOrigin>{origin}</RecipeOrigin>
            <RecipeIconContents>
               <RecipeCookTime>{cookTime}</RecipeCookTime>
            </RecipeIconContents>
               <TimeIcon/>
         </RecipeContentContainer>
      </RecipeContainer>
   )
}

export default RecipeCard;
