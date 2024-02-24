import { ReactComponent as CategoryLogo} from '../../assets/category.svg';
import { ReactComponent as RatingLogo} from '../../assets/star-fell.svg';
import { ReactComponent as CookTimeLogo} from '../../assets/alarm-clock.svg';
import { ReactComponent as CloseButtonLogo} from '../../assets/close-bold.svg';
import { useSelector } from 'react-redux';
import { ButtonClose, ModalContainer, RecipeCategory, RecipeContentBlockSpan, RecipeContentHeading, RecipeContentsBlockContainer, RecipeContentsContainer, RecipeCookTime, RecipeDescription, RecipeImage, RecipeImageContainer, RecipeIngredients, RecipeName, RecipeOrigin, RecipeRating } from './recipe-modal.style';
import { selectRecipeById, selectRecipeByIdIsActive } from '../../store/recipe/recipe.selector';
import { useEffect, useState } from 'react';

type RecipeModalProps = {
   active: boolean;
}

const RecipeModal = ({active}: RecipeModalProps) => {
   
   const isActive = useSelector(selectRecipeByIdIsActive);
   const recipe = useSelector(selectRecipeById);

   const [modalState, setModalState] = useState(isActive);

   useEffect(() => {
      setModalState(isActive)
   }, [isActive])

   const handlerCloseModal = () => {
      setModalState(false)
   }

   const rating = `${recipe.rating}/5`
   
   return (
      <ModalContainer isActive={modalState}>
         <ButtonClose onClick={() => handlerCloseModal()}>
            {<CloseButtonLogo/>}
         </ButtonClose>
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
                  <RecipeContentBlockSpan>{recipe.rating === 0 ? "Unrated": rating}</RecipeContentBlockSpan>
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