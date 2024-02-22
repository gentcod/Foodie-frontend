import  {ReactComponent as TimeIcon } from '../../assets/alarm.svg';

import { RecipeContainer, RecipeCookTime, RecipeImage, RecipeImageContainer, RecipeContentContainer, RecipeName, RecipeOrigin, RecipeIconContents, RecipeLogo } from './recipe-card.style';

type RecipeProps = {
   name: string;
   imgSrc: string;
   description: string;
   cookTime: string;
   origin: string;
   isFeatured: boolean;
};

const RecipeCard = ({name, imgSrc, description, cookTime, origin, isFeatured}: RecipeProps) => {
   return (
      <RecipeContainer featured={isFeatured}>
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