import { useDispatch } from 'react-redux';
import  {ReactComponent as TimeIcon } from '../../assets/alarm.svg';
import { fetchRecipeByIdStart } from '../../store/recipe/recipe.action';

import { 
   RecipeContainer, 
   RecipeCookTime, 
   RecipeImage, 
   RecipeImageContainer, 
   RecipeContentContainer, 
   RecipeName, 
   RecipeOrigin, 
   RecipeIconContents, 
   RecipeLogo, 
} from './recipe-card.style';

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

   const handleDisplayModel = () => {
      dispatch(fetchRecipeByIdStart(recipeId))
   }

   return (
      <RecipeContainer featured={isFeatured} onClick={handleDisplayModel}>
            <RecipeImageContainer>
               { imgSrc === "" ? <RecipeLogo/> : <RecipeImage src={imgSrc}/>}
            </RecipeImageContainer>
         <RecipeContentContainer>
            <RecipeName>{name}</RecipeName>
            <RecipeOrigin>{origin}</RecipeOrigin>
            <RecipeIconContents>
               <RecipeCookTime>{cookTime}</RecipeCookTime>
               <TimeIcon/>
            </RecipeIconContents>
         </RecipeContentContainer>
      </RecipeContainer>
   )
}

export default RecipeCard;
