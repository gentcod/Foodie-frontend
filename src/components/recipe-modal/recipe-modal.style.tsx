import styled, { css, keyframes } from "styled-components";

export type ModalProps = {
   isActive: boolean;
}

const FadeIn = keyframes`
   0%{
      opacity: 0;
   }
   100%{
      opacity: 1;
   }
`;

const FadeOut = keyframes`
   0%{
      opacity: 0;
   }
   100%{
      opacity: 1;
   }
`;

const hide = css`
   animation: ${FadeOut} 1s ease;
   display: none;
`;

export const ModalContainer = styled.div<ModalProps>`
   height: 65rem;
   width: 55rem;
   background-color: rgba(225, 225, 225, .5);
   backdrop-filter: blur(1.5px);
   border: 1px solid #e6be8a;
   border-radius: 2rem;
   text-align: center;
   padding: 1rem;

   position: fixed;
   top: 50%;
   right: 50%;
   transform: translate(50%, -50%);
   z-index: 150;
   animation: ${FadeIn} 1s ease;

   ${({isActive}) => !isActive && hide}
`;

export const RecipeImageContainer = styled.div`
   height: 20rem;
   width: 100%;
   overflow: hidden;
   border-radius: 2rem;
   border: 2px solid #e6be8a;
`;

export const RecipeImage = styled.img`
   height: 100%;
   width: 100%;
   object-fit: cover;
   object-position: 50% 100%;
   transition: all 1s ease;

   &:hover {
      transform: scale(1.1);
   }
`;

export const RecipeContentsContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin=top: 1rem;
`;

export const RecipeContent = styled.div`
   color: #333;
   padding: 1rem;
   background-color: #eaeaea;
   border-radius: 1rem;
   box-shadow: .5rem .5rem 1rem rgba(0,0,0,.3);
   margin-top: .5rem;
`;

export const RecipeName = styled(RecipeContent)`
   color: #111;
   font-size: 2rem;
   font-weight: 700;
   text-align: left;
   padding: .5rem 3rem;
   border-radius: 1rem;
   box-shadow: .5rem .5rem 1rem rgba(0,0,0,.3);
   margin-top: 1rem;
   margin-bottom: 1rem;
`;

export const RecipeDescription = styled(RecipeContent)`

`;

export const RecipeOrigin = styled(RecipeContent)`
   display: inline-block;
`;

export const RecipeIngredients = styled(RecipeContent)`

`;

export const RecipeContentsBlockContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   column-gap: 1rem;
   margin-top: .5rem;
`;

export const RecipeContentBlock = styled.div`
   color: #333;
   background-color: #eaeaea;
   height: 7rem;
   width: 10rem;
   padding: 1rem;
   border-radius: 1rem;
   box-shadow: .5rem .5rem 1rem rgba(0,0,0,.3);
   font-size: 1.2rem;
   font-weight: 500;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   row-gap: 1.5rem;
`;

export const RecipeCategory = styled(RecipeContentBlock)`

`;

export const RecipeCookTime = styled(RecipeContentBlock)`

`;

export const RecipeRating = styled(RecipeContentBlock)`
   font-size: 1.4rem;
`;

export const RecipeContentBlockSpan = styled.span`
   
`;

export const RecipeContentHeading = styled.div`
   width: 100%;
   padding: .2rem 3rem;
   color: #333;
   text-align: left;
   font-weight: 500;
`;

export const ButtonContainer = styled.div`
   width: 100%;
   display: flex;
   justify-content: end;
`;

export const ButtonClose = styled.button`
   outline: none;
   border: none;
   background-color: transparent;
   cursor: pointer;
`;