import styled from "styled-components";

type NavBarProp = {
   left: number;
};

export const FavoritesContainer = styled.div<NavBarProp>`
   width: 35rem;
   height: 45rem;
   background-color: white;
   box-shadow: 0 .5rem 1rem rgba(2, 2, 2, .2);
   border-radius: 1rem;
   display: in-line block;
   padding: 1rem;

   position: absolute;
   left: ${({left}) => (left/10) - 50}rem;
   top: 12rem;
`;

export const FavLoggedOutContainer = styled(FavoritesContainer)`
   height: 8rem;
`;

export const Content = styled.div`
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-itms: center;
   column-gap: 1rem;
`;

export const ContentContainer = styled.div`
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: start;
   align-items: center;
   column-gap: 1rem;
   color: #222;
`;

export const FavLoggedContent = styled(ContentContainer)`
   justify-content: center;
`;

export const Heading = styled.p`
   width: 100%;
   border-radius: 1rem;
   padding-bottom: .5rem;
   border-bottom: 1px solid #ed6b2e;
   box-shadow: 0 .5rem 1rem rgba(2, 2, 2, .2);
   font-weight: 700;
   text-align: center;
   margin-bottom: .8rem;
`;