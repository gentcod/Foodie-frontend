import styled, { css } from "styled-components";
import { ReactComponent as DishLogo } from '../../assets/dish-dinner.svg';

type RecipeCardProp = {
   featured: Boolean;
};

export const RecipeImageContainer = styled.div`
   height: 7rem;
   width: 7rem;
   border-radius: 30%;
   object-fit: cover;
   border: 1px solid #e6be8a;
   overflow: hidden;
   backface-visibility: hidden;
   position: absolute;
   top: -2rem;
   left: 50%;
   transform: translate(-50%, 0);
   box-shadow: .5rem .5rem 1rem rgba(0,0,0,.5);
`;

export const RecipeImage = styled.img`
   height: 100%;
   width: 100%;
   object-fit: cover;
   transition: .8s all ease;
`;

export const RecipeLogo = styled(DishLogo)`
   height: 100%;
   width: 100%;
   object-fit: cover;
   transition: .8s all ease;
`;

const featuredBg = css`
   background-color: #565656;
`

export const RecipeContainer = styled.div<RecipeCardProp>`
   height: 20rem;
   width: 20rem;
   padding: 1rem;
   text-align: left;
   background-color: #a1a1a1;
   border-radius: 1rem;
   color: #555;
   cursor: pointer;
   transition: .8s all ease;
   backface-visibility: hidden;
   position: relative;

   ${({featured}) => featured && featuredBg};

   display: flex;
   column-gap: 1rem;
   align-items: end;

   &:hover ${RecipeImage} {
      transform: scale(1.2);
   }

   &:hover ${RecipeLogo} {
      transform: scale(1.2);
   }
`;

export const RecipeInnerLeft = styled.div`
   padding: .5rem;
`;

export const RecipeContentContainer = styled.div`
   height: 12rem;
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: start;
   align-items: end;
   row-gap: 2px;
   padding: .5rem;
`;

export const RecipeContent = styled.p`
   width: 100%;
   padding: 2px;
   text-align: center;
   font-weight: 500;
   background-color: rgba(230, 190, 138, .5);
   border-radius: 3px;
   border: 1px solid white;
   box-shadow: .5rem .5rem 1rem rgba(0,0,0,.5);
`;

export const RecipeName = styled(RecipeContent)`
   font-size: 1.4rem;
   color: #000;
   font-weight: 1000;
   margin-bottom: .5rem;
`;

export const RecipeCookTime  = styled(RecipeContent)`
   width: 50%;
   margin-right: 1rem;
`;

export const RecipeDescription = styled(RecipeContent)`

`;

export const RecipeOrigin = styled(RecipeContent)`

`;

export const RecipeIconContents = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-contents: center;
   align-items: center;
`;