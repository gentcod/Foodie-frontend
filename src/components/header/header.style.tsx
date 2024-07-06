import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as FavoriteIcon } from '../../assets/foodie-logo.svg';

export const Container = styled(Link)`
   height: 8rem;
   width: auto;
   padding: 1rem;

   display: flex;
   justify-content: center;
   align-items: center;
   column-gap: 3rem;
`;

export const HeaderImage = styled(FavoriteIcon)`
   height: 90%;
   object-fit: cover;
   border-radius: 30%;
`;

export const HeaderTitle = styled.h1`
   font-size: 4rem;
   font-family: 'Rubik Iso', cursive;
   color: white;
`;