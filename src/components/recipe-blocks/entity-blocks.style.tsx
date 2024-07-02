import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as DishLogo } from '../../assets/dish-dinner.svg';

export const RecipeLogo = styled(DishLogo)`
   height: 3rem;
   width: 3rem;
   object-fit: cover;
   transition: .8s all ease;
`;

export const RecipesContainer = styled.div`
   display: flex;
   flex-direction: column;
   row-gap: .5rem;
   min-height: 4rem;
   overflow: auto;
`;

export const Recipe = styled(Link)`
   border-radius: .5rem;
   width: 85%;
   height: 4rem;
   background-color: rgba(230, 190, 138, 0.2);
   box-shadow: 0 .5rem 1rem rgba(2, 2, 2, .2);
   margin: 0 auto;
   padding: .5rem;

   display: flex;
   justify-content: space-evenly;
   align-items: center;
   transition: .2s all ease;

   &:hover {
      transform: scale(1.02);
   }

   &:active {
      transform: translateY(.5rem);
   }
`;

export const RecipeImage = styled.img`
   height: 3rem;
   width: 3rem;
   object-fit: cover;
   border-radius: 3px;
`;

export const RecipeDetailsContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: 70%;
   font-size: 1.2rem;
   font-weight: 500;
`;

export const RecipeDetail = styled.p`
   text-align: left;
   font-weight: 300;
`;