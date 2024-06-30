import { ReactComponent as CategoryLogo} from '../../assets/category.svg';
import { ReactComponent as RatingLogo} from '../../assets/star-fell.svg';
import { ReactComponent as CookTimeLogo} from '../../assets/alarm-clock.svg';
import { ReactComponent as CloseButtonLogo} from '../../assets/close-bold.svg';
import { useSelector } from 'react-redux';
import { ButtonClose, ButtonContainer, ModalContainer, RecipeCategory, RecipeContentBlockSpan, RecipeContentHeading, RecipeContentsBlockContainer, RecipeContentsContainer, RecipeCookTime, RecipeDescription, RecipeImage, RecipeImageContainer, RecipeIngredients, RecipeName, RecipeOrigin, RecipeRating } from './recipe-modal.style';
import { selectRecipeById, selectRecipeByIdIsActive } from '../../store/recipe/recipe.selector';
import { useEffect, useState } from 'react';
import { Recipe } from '../../app/models/recipes';

type RecipeModalProps = {
   active: boolean;
}

const RecipeModal = ({active}: RecipeModalProps) => {
   
   const isActive: boolean = useSelector(selectRecipeByIdIsActive);
   const recipe: Recipe = useSelector(selectRecipeById);

   const [modalState, setModalState] = useState(isActive);

   useEffect(() => {
      setModalState(isActive)
   }, [isActive])

   const handlerCloseModal = () => {
      setModalState(false)
   }

   const rating = `${recipe.ratingNum}/5`
   
   return (
      <ModalContainer isActive={modalState}>
         <ButtonContainer>
            <ButtonClose onClick={() => handlerCloseModal()}>
               {<CloseButtonLogo/>}
            </ButtonClose>
         </ButtonContainer>
         <RecipeName>{recipe.name}</RecipeName>
         <RecipeImageContainer>
            <RecipeImage src={recipe.imageSrc}/>
         </RecipeImageContainer>
         <RecipeContentsContainer>
            <RecipeContentsBlockContainer>
               <RecipeCategory>
                  <CategoryLogo/>
                  <RecipeContentBlockSpan>{recipe.category}</RecipeContentBlockSpan>
               </RecipeCategory>
               <RecipeRating>
                  <RatingLogo/>
                  <RecipeContentBlockSpan>{recipe.ratingNum === 0 ? "Unrated": rating}</RecipeContentBlockSpan>
               </RecipeRating>
               <RecipeCookTime>
                  <CookTimeLogo/>
                  <RecipeContentBlockSpan>{recipe.cookTime}</RecipeContentBlockSpan>
               </RecipeCookTime>
            </RecipeContentsBlockContainer>
            <RecipeContentHeading>Description:</RecipeContentHeading>
            <RecipeDescription>{recipe.description}</RecipeDescription>
            <RecipeContentHeading>Ingredients:</RecipeContentHeading>
            <RecipeIngredients>{recipe.ingredients}</RecipeIngredients>
         </RecipeContentsContainer>
         <RecipeOrigin>Origin:   {recipe.origin}</RecipeOrigin>
      </ModalContainer>
   );
};

export default RecipeModal;