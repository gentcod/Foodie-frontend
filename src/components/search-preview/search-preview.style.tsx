import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
   padding: 1rem;
   display: flex;
   flex-direction: column;
   max-height: 25rem;
   width: 45rem;
   background-color: white;
   border-radius: .5rem;

   position: relative;
`;

export const Button = styled(Link)`
   text-align: center;
   width: 90%;
   margin: 0 auto;
   margin-top: .5rem;
   cursor: pointer;
   padding: .5rem;
   border-radius: .5rem;
   background-color: #ed6b2e;
   box-shadow: 0 .5rem 1rem rgba(2, 2, 2, .2);
   color: white;
   font-weight: 700;
   transition: .8s all ease;

   &:hover {
      transform: scale(1.02);
   }

   &:active {
      transform: translateY(.5rem);
   }
`;