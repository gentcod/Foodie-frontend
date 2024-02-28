import styled, { css } from "styled-components";

type NavigationProps = {
   isFirstPage: boolean;
}

const hide = css`
   // display: none;
   // opacity: 0;
   visibility: hidden;
`;

export const PreviewContainer = styled.div`
  
`;

export const CardContainer = styled.div`
   margin-top: 3rem;
   padding: 3rem;
   display: flex;
   flex: 1 1 1;
   flex-wrap: wrap;
   column-gap: 5rem;
   row-gap: 5rem;
   justify-content: center;
   align-items: center;
   backface-visibility: hidden;
`;

export const PageNavigationContainer = styled.div`
   width: 20rem;
   display: flex;
   justify-content: center;
   align-items: center;
   column-gap: 1rem;
   border: 1px solid #e6be8a;
   padding: 1rem;
   border-radius: .5rem;
   margin: 0 auto;
`;

export const PageNavigationButton = styled.button<NavigationProps>`
   width: 3rem;
   height: 3rem;
   outline: none;
   border: none;
   border-radius: 3px;
   cursor: pointer;

   ${({isFirstPage}) => isFirstPage && hide}
`;

export const PageIndicator = styled.div`
   padding: .5rem;
   font-size: 1.4rem;
`;