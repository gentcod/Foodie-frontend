import styled from "styled-components";

type NavBarProp = {
   left: number;
};

export const BookmarkContainer = styled.div<NavBarProp>`
   width: 35rem;
   height: 25rem;
   background-color: white;
   box-shadow: 0 .5rem 1rem rgba(2, 2, 2, .2);
   border-radius: 1rem;
   display: in-line block;
   padding: 1rem;

   position: absolute;
   left: ${({left}) => (left/10) - 25}rem;
   top: 12rem;
`;

export const ContentContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-itms: center;
   column-gap: 1rem;
   color: #222;
   text-align: center;
`;

export const Heading = styled.p`
   border-radius: 1rem;
   padding-bottom: .5rem;
   border-bottom: 1px solid #ed6b2e;
   box-shadow: 0 .5rem 1rem rgba(2, 2, 2, .2);
   font-weight: 700;
   margin-bottom: .8rem;
`;