import styled from "styled-components";

export const Container = styled.div`
   height: 45rem;
   width: 85%;
   background-color: #e8e8e8;
   overflow: hidden;
   border: 1px solid #333;
   border-radius: 1rem;
   margin: 0 auto;
   margin-top: 3rem;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   row-gap: 1rem;
`;

export const RestaurantName = styled.h6`
   font-weight: 700;
   font-size: 1.4rem;
`;

export const RestaurantLocation = styled.p`
   font-weight: 300;
   font-size: 1.2rem;
`;

export const MapDesc = styled.div`
   color: #333;
   padding: .5rem 3rem;
   background-color: #b1b1b1;
   border-radius: .5rem;
`;