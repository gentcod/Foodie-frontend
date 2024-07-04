import { ReactComponent as CategoryLogo} from '../../assets/category.svg';
import { ReactComponent as RatingLogo} from '../../assets/star-fell.svg';
import { ReactComponent as CookTimeLogo} from '../../assets/alarm-clock.svg';
import { ReactComponent as CloseButtonLogo} from '../../assets/close-bold.svg';
import { useDispatch, useSelector } from 'react-redux';
import { 
   BookmarkIcon, 
   ButtonClose, 
   ButtonContainer, 
   ModalContainer, 
   RecipeCategory, 
   RecipeContentBlockSpan, 
   RecipeContentHeading, 
   RecipeContentsBlockContainer, 
   RecipeContentsContainer, 
   RecipeCookTime, 
   RecipeDescription, 
   RecipeImage, 
   RecipeImageContainer, 
   RecipeIngredients, 
   RecipeName, 
   RecipeOrigin, 
   RecipeRating 
} from './recipe-modal.style';
import { selectRecipeById, selectRecipeByIdIsActive } from '../../store/recipe/recipe.selector';
import { useEffect, useState } from 'react';
import { addBookmarkFailed, addBookmarkStart, refreshBookmarksStart } from '../../store/bookmarks/bookmarks.action';
import { selectAddBookmarksErrorResp, selectAddBookmarksResp } from '../../store/bookmarks/bookmarks.selector';
import { notify } from '../../utils/helper/toastify.helper.utils';
import { selectAddCookieBookmarkResp, selectAddCookieBookmarksErrResp } from '../../store/cookie-bookmarks/cookie-bookmarks.selector';
import { selectUserIsLoggedIn } from '../../store/user/user.selector';
import { addCookieBookmarkFailed, addCookieBookmarkStart, refreshCookieBookmarksStart } from '../../store/cookie-bookmarks/cookie-bookmarks.action';

const RecipeModal = () => {
   const dispatch = useDispatch();
   const isLoggedIn = useSelector(selectUserIsLoggedIn);
   const isActive = useSelector(selectRecipeByIdIsActive);
   const recipe = useSelector(selectRecipeById);

   const [modalState, setModalState] = useState(isActive);

   const handleAddBookmark = () => {
      if (isLoggedIn) {
         dispatch(addBookmarkStart(recipe.id));
         return;
      }
      dispatch(addCookieBookmarkStart(recipe.id));
      return;
   };

   const bookmarkResp = useSelector(selectAddBookmarksResp);
   const cookiebookmarkResp = useSelector(selectAddCookieBookmarkResp);
   const resp = isLoggedIn ? bookmarkResp : cookiebookmarkResp;

   useEffect(() => {
      if (resp) {
         notify(resp!, "success");
         if (isLoggedIn) {
            dispatch(refreshBookmarksStart());
            return;
         }
         dispatch(refreshCookieBookmarksStart());
         return;
      }
   }, [resp, isLoggedIn, dispatch]);

   const bookmarkerrResp = useSelector(selectAddBookmarksErrorResp);
   const cookiebookmarkerrResp = useSelector(selectAddCookieBookmarksErrResp);
   const errResp = isLoggedIn ? bookmarkerrResp : cookiebookmarkerrResp;

   useEffect(() => {
      if (errResp) {
         notify(errResp.message!, "error");
         isLoggedIn ? 
            dispatch(addBookmarkFailed(null))
            : dispatch(addCookieBookmarkFailed(null));
      }
   }, [errResp, isLoggedIn, dispatch]);

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
         <BookmarkIcon bookmarked={true} onClick={handleAddBookmark}/>
      </ModalContainer>
   );
};

export default RecipeModal;

// TODO: Implemented bookmarked Icon functionality
// const bookmarks = useSelector(selectBookmarks);
// const cookieBookmarks = useSelector(selectCookieBookmarks);
// const bookmrks = isLoggedIn ? bookmarks : cookieBookmarks;
// const bookmarked = bookmrks.recipes?.filter(el => el.id === recipe.id).length > 0;   
// const [isBookmarked, setisBookmarked] = useState(bookmarked);