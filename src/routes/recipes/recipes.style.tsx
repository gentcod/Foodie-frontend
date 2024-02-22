import styled, { keyframes } from "styled-components";
import Heading from "../../components/heading/heading.component";

export const ScrollUp = keyframes`
   0% {
      transform: translateY(50%);
      opacity: 0;
   }
   100% {
      transform: translateY(0);
      opacity: 1;
   }
`

export const Container = styled.div`
   padding: 0 3rem;
`;

export const RecipeCategoryItemImage = styled.img`
   height: 100%;
   width: 100%;
   object-fit: cover;
   border-radius: 1rem;
   transition: .8s all ease;
`;

export const RecipeCategory = styled.div`
   width: 100%;
   height: auto;
   display: flex;
   flex-direction: column;
   row-gap: 2rem;
   margin-bottom: 1rem;
`;

export const RecipeCategoryContent = styled.div`
   display: flex;
   column-gap: 3rem;
   justify-content: center;
`;

export const RecipeCategoryItem = styled.div`
   width: 30rem;
   height: 15rem;
   overflow: hidden;
   border-radius: 1rem;
   border: 1px solid #e6be8a;
   box-shadow: 1rem 1rem .7rem rgba(0, 0, 0, .3);
   cursor: pointer;
   position: relative;
   // transition: .8s all ease;

   &:hover ${RecipeCategoryItemImage} {
      transform: scale(1.2);
   }
   
   // &:hover {
   //    height: 35rem;
   // }
`;

export const RecipeCategoryItemName = styled.p`
   height: auto;
   width: 100%;
   padding: .2rem;
   background-color: rgba(0, 0, 0, .8);
   backdrop-fliter: blur(3px);
   font-weight: 1000;
   text-align: center;
   color: #e6be8a;
   position: absolute;
   bottom: 1rem;
   left: 0;
   margin: 0 auto;
`;

export const FeaturedHeading = styled(Heading)`
   margin-left: 10rem;
`;
