import styled, { css, keyframes } from "styled-components";
import { ReactComponent as DishLogo } from '../../assets/dish-dinner.svg';
import { ReactComponent as DeleteLogo } from '../../assets/delete.svg';

export const Bounce = keyframes`
   0% {
      rotate: -30deg;
      transform: translateX(-.5rem);
   }

   50% {
      rotate: 30deg;
      transform: translateX(.5rem);
   }

   100% {
      rotate: 0deg;
   }
`

type DeletableProps = {
   isdeletable: boolean;
}

const deletable = css`
   display: inline-block;
`;

export const ButtonConatiner = styled.div<DeletableProps>`
   display: none;
   cursor: pointer;

   ${({isdeletable}) => isdeletable && deletable};

   &:hover {
      animation: ${Bounce} 1s ease infinite;
   }
`;

export const DeleteButton = styled(DeleteLogo)`
   fill: #ed6b2e;
`;

export const RecipeLogo = styled(DishLogo)`
   height: 3rem;
   width: 3rem;
   object-fit: cover;
   transition: .8s all ease;
`;

export const Entity = styled.div`
   border-radius: .5rem;
   width: 85%;
   height: 4rem;
   background-color: rgba(230, 190, 138, 0.2);
   box-shadow: 0 .5rem 1rem rgba(2, 2, 2, .2);
   margin: 0 auto;
   padding: .5rem;
   color: #333;
   cursor: pointer;

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

export const EntityImage = styled.img`
   height: 3rem;
   width: 3rem;
   object-fit: cover;
   border-radius: 3px;
`;

export const EntityDetailsContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: 70%;
   font-size: 1.2rem;
   font-weight: 500;
`;

export const EntityDetail = styled.p`
   text-align: left;
   font-weight: 300;
`;